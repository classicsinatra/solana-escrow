use anchor_lang::prelude::*;

declare_id!("C2ovmgfnHk8XFPbbyEDkwnxZVkZ7Sf8YG5k2cJwS3qDu");

pub mod contexts;
pub mod state;

pub use contexts::*;

pub const FEE_RECEIVER_WALLET: &str = "6uGf3oRwwt5wHC9q8NEs4ZGrh7nESRhKN4cKQioJGHfT"; 
#[program]
pub mod anchor_escrow {
    use super::*;

    pub fn make(ctx: Context<Make>, seed: u64, amount_x: u64, amount_y: u64) -> Result<()> {
        Make::make(ctx.accounts, seed, amount_x, amount_y, &ctx.bumps)?;
        Ok(())
    }

    pub fn refund(ctx: Context<Refund>) -> Result<()> {
        Refund::empty_vault(ctx.accounts)?;
        Refund::close_vault(ctx.accounts)?;
        Ok(())
    }

    pub fn take(ctx: Context<Take>) -> Result<()> {
        Take::vault_to_taker(ctx.accounts)?;
        Take::taker_to_maker(ctx.accounts)?;
        Take::close_vault(ctx.accounts)?;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}

#[error_code]
pub enum ErrorCode {
    #[msg("Not enough SOL to pay the 2% fee.")]
    InsufficientSolForFee,
}
