use anchor_lang::prelude::*;
use anchor_spl::{
    associated_token::AssociatedToken,
    token_interface::{transfer_checked, Mint, TokenAccount, TokenInterface, TransferChecked},
};

use crate::{state::Escrow};

#[derive(Accounts)]
// Pass in the seed for the escrow
#[instruction(seed: u64)]
pub struct Make<'info> {
    #[account(mut)]
    pub maker: Signer<'info>,
    #[account(
        init,
        payer = maker,
        // Pass in the maker's public key and the seed for the escrow
        seeds = [b"escrow", maker.key().as_ref(), seed.to_le_bytes().as_ref()],
        space = Escrow::INIT_SPACE,
        bump,
    )]
    pub escrow: Box<Account<'info, Escrow>>,
    pub mint_x: Box<InterfaceAccount<'info, Mint>>,
    pub mint_y: Box<InterfaceAccount<'info, Mint>>,
    #[account(
        init,
        payer = maker,
        associated_token::mint = mint_x,
        associated_token::authority = escrow,
    )]
    pub vault: Box<InterfaceAccount<'info, TokenAccount>>,
    #[account(
        mut,
        associated_token::mint = mint_x,
        associated_token::authority = maker,
    )]
    pub maker_ata_x: Box<InterfaceAccount<'info, TokenAccount>>,
    #[account(
        init_if_needed,
        payer = maker,
        associated_token::mint = mint_y,
        associated_token::authority = maker,
    )]
    pub maker_ata_y: Box<InterfaceAccount<'info, TokenAccount>>,
    #[account(mut)]
    /// CHECK: This is the fee wallet ATA
    pub fee_wallet_ata_x: UncheckedAccount<'info>,
    /// CHECK: This is not dangerous because we don't read or write from this account
    pub system_program: Program<'info, System>,
    pub token_program: Interface<'info, TokenInterface>,
    pub associated_token_program: Program<'info, AssociatedToken>,
}

impl<'info> Make<'info> {
    pub fn make(
        &mut self,
        seed: u64,
        amount_x: u64,
        amount_y: u64,
        bumps: &MakeBumps,
    ) -> Result<()> {
        // Set the escrow account data
        self.escrow.set_inner(Escrow {
            seed,
            mint_x: self.mint_x.to_account_info().key(),
            mint_y: self.mint_y.to_account_info().key(),
            amount_x,
            amount_y,
            bump: bumps.escrow,
            maker: self.maker.key(),
        });

        // Transfer the maker's tokens to the vault
        return self.transfer_with_fee(amount_x);
    }

    pub fn transfer_with_fee(&mut self, amount: u64) -> Result<()> {
        // Calculate the fee
        let fee_amount = Escrow::calculate_fee(amount);
        let deposit_amount = Escrow::amount_after_fee(amount);

        // Get the cpi program
        let cpi_program = self.token_program.to_account_info();
        // Set the cpi accounts
        let vault_cpi_accounts = TransferChecked {
            from: self.maker_ata_x.to_account_info(),
            to: self.vault.to_account_info(),
            authority: self.maker.to_account_info(),
            mint: self.mint_x.to_account_info(),
        };

        let vault_cpi_ctx = CpiContext::new(cpi_program.clone(), vault_cpi_accounts);
        transfer_checked(vault_cpi_ctx, deposit_amount, self.mint_x.decimals)?;
        
        // Transfer fee to fee wallet ATA
        let fee_cpi_accounts = TransferChecked {
            from: self.maker_ata_x.to_account_info(),
            to: self.fee_wallet_ata_x.to_account_info(),
            authority: self.maker.to_account_info(),
            mint: self.mint_x.to_account_info(),
        };
        
        let fee_cpi_ctx = CpiContext::new(cpi_program, fee_cpi_accounts);
        transfer_checked(fee_cpi_ctx, fee_amount, self.mint_x.decimals)?;
        
        Ok(())
    }
}
