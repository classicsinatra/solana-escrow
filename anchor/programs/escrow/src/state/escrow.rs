use anchor_lang::prelude::*;

// Define the escrow account
// We want to store the seed, the bump, the two mints, and the amounts for each side of the escrow
#[account]
pub struct Escrow {
    pub seed: u64,
    pub maker: Pubkey,
    pub mint_x: Pubkey,
    pub mint_y: Pubkey,
    pub amount_x: u64,
    pub amount_y: u64,
    pub bump: u8,
}

impl Escrow {
    // Fee percentage as basis points (2% = 200 basis points)
    pub const FEE_BASIS_POINTS: u64 = 200;
    
    // Calculate fee amount based on the total amount (using basis points for precision)
    pub fn calculate_fee(amount: u64) -> u64 {
        amount.checked_mul(Self::FEE_BASIS_POINTS).unwrap_or(0) / 10000
    }
    
    // Calculate the amount after fee is taken
    pub fn amount_after_fee(amount: u64) -> u64 {
        amount.checked_sub(Self::calculate_fee(amount)).unwrap_or(0)
    }
}

impl Space for Escrow {
    const INIT_SPACE: usize = 8 + 8 + 32 + 32 + 32 + 8 + 8 + 1;
}
