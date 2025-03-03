use anchor_lang::prelude::*;
use anchor_spl::{
    associated_token::AssociatedToken,
    token_interface::{transfer_checked, Mint, TokenAccount, TokenInterface, TransferChecked},
};

use std::str::FromStr;
use crate::FEE_RECEIVER_WALLET;
use crate::state::Escrow;
use crate::ErrorCode;

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
    /// CHECK: This is not dangerous because we don't read or write from this account
    #[account(
        mut,
        address = Pubkey::from_str(FEE_RECEIVER_WALLET).unwrap()
    )]
    pub fee_receiver: SystemAccount<'info>,
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
        let fee_in_sol = (amount_x as u64 * 2) / 100; // 2% fee in SOL

        // Ensure the maker has sent enough SOL
        require!(
            self.maker.lamports() >= fee_in_sol,
            ErrorCode::InsufficientSolForFee
        );

        let fee_receiver_account = self.fee_receiver.to_account_info(); 
        // Transfer SOL fee to the fixed fee receiver
        **self.maker.to_account_info().try_borrow_mut_lamports()? -= fee_in_sol;
        **fee_receiver_account.try_borrow_mut_lamports()? += fee_in_sol;

        // Set the escrow account data
        self.escrow.set_inner(Escrow {
            seed,
            mint_x: self.mint_x.to_account_info().key(),
            mint_y: self.mint_y.to_account_info().key(),
            amount_x,
            amount_y,
            bump: bumps.escrow,
            maker: self.maker.key(),
            fee_receiver: self.fee_receiver.key(), //Store fee receiver in escrow
        });

        self.transfer(amount_x)?; 

        Ok(())
        
    }

    pub fn transfer(&mut self, deposit: u64) -> Result<()> {
        // Get the cpi program
        let cpi_program = self.token_program.to_account_info();
        // Set the cpi accounts
        let cpi_accounts = TransferChecked {
            from: self.maker_ata_x.to_account_info(),
            to: self.vault.to_account_info(),
            authority: self.maker.to_account_info(),
            mint: self.mint_x.to_account_info(),
        };
        // Set the cpi context
        let cpi_ctx = CpiContext::new(cpi_program, cpi_accounts);
        // Transfer the tokens
        transfer_checked(cpi_ctx, deposit, self.mint_x.decimals)
    }
}
