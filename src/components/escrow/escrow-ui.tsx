"use client";

import { Keypair, PublicKey } from "@solana/web3.js";
import { useMemo, useRef } from "react";
import { ellipsify, useTransactionToast } from "@/components/ui/ui-layout";
import { ExplorerLink } from "@/components/cluster/cluster-ui";
import {
  useEscrowProgram,
  useEscrowProgramAccount,
  TOKENS
} from "./escrow-data-access";
import { useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";

export function OTCEscrowCreate() {
  const { initializeOrder } = useEscrowProgram()
  const { publicKey } = useWallet()
  const [selectedTokens, setSelectedTokens] = useState<{
    selling: keyof typeof TOKENS;
    buying: keyof typeof TOKENS;
  }>({
    selling: 'USDC',
    buying: 'CITADAIL'
  });

  const [amounts, setAmounts] = useState({
    selling: '',
    buying: ''
  })

  const [showPopup, setShowPopup] = useState(false);
  const [createdEscrow, setCreatedEscrow] = useState<string | null>(null);
  const urlInputRef = useRef<HTMLInputElement>(null);

  const handleCreateOrder = async () => {
    if (!publicKey) return

    try {
      const mintX = TOKENS[selectedTokens.selling].mint;

      const mintY = TOKENS[selectedTokens.buying].mint;

      console.log('Creating order with:', {
        maker: publicKey.toString(),
        mintX: mintX.toString(),
        mintY: mintY.toString(),
        mintXAmount: Number(amounts.selling),
        mintYAmount: Number(amounts.buying),
      });

      const result = await initializeOrder.mutateAsync({
        maker: publicKey,
        mintX,
        mintXAmount: Number(amounts.selling) * Math.pow(10, TOKENS[selectedTokens.selling].decimals),
        mintYAmount: Number(amounts.buying) * Math.pow(10, TOKENS[selectedTokens.buying].decimals),
        mintY,
      });

      // Store the escrow public key and show the popup
      if (result && result.escrow) {
        const escrowPublicKey = result.escrow.toString();
        setCreatedEscrow(escrowPublicKey);
        setShowPopup(true);
      }

    } catch (error) {
      console.error('Failed to create order:', error);
    }
  };

  const handleHalfAmount = (type: 'selling' | 'buying') => {
    // This is a placeholder - in a real app you'd calculate based on wallet balance
    const currentAmount = parseFloat(amounts[type]) || 0;
    setAmounts(prev => ({
      ...prev,
      [type]: (currentAmount / 2).toString()
    }));
  };

  const handleMaxAmount = (type: 'selling' | 'buying') => {
    // This is a placeholder - in a real app you'd get this from wallet balance
    const maxAmount = type === 'selling' ? '100' : '1000'; 
    setAmounts(prev => ({
      ...prev,
      [type]: maxAmount
    }));
  };

  const swapTokens = () => {
    setSelectedTokens({
      selling: selectedTokens.buying,
      buying: selectedTokens.selling
    });
    setAmounts({
      selling: amounts.buying,
      buying: amounts.selling
    });
  };

  const copyToClipboard = () => {
    if (urlInputRef.current) {
      urlInputRef.current.select();
      navigator.clipboard.writeText(urlInputRef.current.value);
      // You could add a toast notification here if you have one
    }
  };

  // Generate the share URL
  const shareUrl = typeof window !== 'undefined' && createdEscrow 
    ? `${window.location.origin}/escrow/${createdEscrow}`
    : '';

  return (
    <div className="citadel-card p-6 mx-auto max-w-2xl">
      <h2 className="text-2xl font-bold text-center text-white mb-6">Create Trade</h2>
      
      {/* Selling Section */}
      <div className="mb-6">
        <label className="block text-white text-lg mb-2">
          Selling
        </label>
        <div className="flex gap-2 mb-2">
          <div className="relative flex-1">
            <select 
              className="citadel-input w-full appearance-none pl-10"
              value={selectedTokens.selling}
              onChange={(e) => {
                const newValue = e.target.value
                // Prevent selecting same token for both sides
                if (newValue === selectedTokens.buying) {
                  setSelectedTokens({
                    selling: newValue,
                    buying: selectedTokens.selling
                  })
                } else {
                  setSelectedTokens(prev => ({...prev, selling: newValue as keyof typeof TOKENS}))
                }
              }}
            >
              {Object.entries(TOKENS).map(([symbol, token]) => (
                <option key={symbol} value={symbol}>
                  {token.icon} {symbol}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              {TOKENS[selectedTokens.selling].icon}
            </div>
          </div>
          <div className="relative flex-1">
            <input
              type="number"
              placeholder="Amount"
              className="citadel-input w-full"
              value={amounts.selling}
              onChange={(e) => setAmounts(prev => ({...prev, selling: e.target.value}))}
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
              <button 
                className="citadel-btn-small"
                onClick={() => handleHalfAmount('selling')}
              >
                HALF
              </button>
              <button 
                className="citadel-btn-small"
                onClick={() => handleMaxAmount('selling')}
              >
                MAX
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Swap Button */}
      <div className="flex justify-center my-4">
        <button 
          className="p-2 bg-citadel-green-light rounded-full hover:bg-citadel-green-dark transition-colors"
          onClick={swapTokens}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
        </button>
      </div>

      {/* Buying Section */}
      <div className="mb-6">
        <label className="block text-white text-lg mb-2">
          Buying
        </label>
        <div className="flex gap-2 mb-2">
          <div className="relative flex-1">
            <select 
              className="citadel-input w-full appearance-none pl-10"
              value={selectedTokens.buying}
              onChange={(e) => {
                const newValue = e.target.value
                // Prevent selecting same token for both sides
                if (newValue === selectedTokens.selling) {
                  setSelectedTokens({
                    buying: newValue,
                    selling: selectedTokens.buying
                  })
                } else {
                  setSelectedTokens(prev => ({...prev, buying: newValue as keyof typeof TOKENS}))
                }
              }}
            >
              {Object.entries(TOKENS).map(([symbol, token]) => (
                <option key={symbol} value={symbol}>
                  {token.icon} {symbol}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              {TOKENS[selectedTokens.buying].icon}
            </div>
          </div>
          <div className="relative flex-1">
            <input
              type="number"
              placeholder="Amount"
              className="citadel-input w-full"
              value={amounts.buying}
              onChange={(e) => setAmounts(prev => ({...prev, buying: e.target.value}))}
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
              <button 
                className="citadel-btn-small"
                onClick={() => handleHalfAmount('buying')}
              >
                HALF
              </button>
              <button 
                className="citadel-btn-small"
                onClick={() => handleMaxAmount('buying')}
              >
                MAX
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button 
          className="citadel-btn w-full py-3 text-lg font-bold"
          onClick={handleCreateOrder}
          disabled={!amounts.selling || !amounts.buying || initializeOrder.isPending}
        >
          {initializeOrder.isPending ? (
            <>
              <span className="loading loading-spinner mr-2"></span>
              Creating...
            </>
          ) : (
            'Create Trade'
          )}
        </button>
      </div>

      {/* Share Trade Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="citadel-card p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4 text-white">Trade Created Successfully!</h3>
            <p className="mb-4 text-white">Copy this URL and share it with your desired OTC counterparty:</p>
            
            <div className="flex mb-4">
              <input
                ref={urlInputRef}
                type="text"
                className="citadel-input flex-1"
                value={shareUrl}
                readOnly
              />
              <button 
                className="citadel-btn ml-2" 
                onClick={copyToClipboard}
              >
                Copy
              </button>
            </div>
            
            <div className="flex justify-end">
              <button 
                className="citadel-btn"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Very simple escrow creation component
export function EscrowCreate() {
  const { make } = useEscrowProgram();

  return (
    <button
      className="btn btn-xs lg:btn-md btn-primary"
      onClick={() => make.mutateAsync()}
      disabled={make.isPending}
    >
      Create {make.isPending && "..."}
    </button>
  );
}

// Very simple asset creation component
export function CreateAsset() {
  const { createAsset } = useEscrowProgram();

  return (
    <button
      className="btn btn-xs lg:btn-md btn-primary"
      onClick={() => createAsset.mutateAsync()}
      disabled={createAsset.isPending}
    >
      Create NFT {createAsset.isPending && "..."}
    </button>
  );
}

export function EscrowList() {
  const { accounts, getProgramAccount } = useEscrowProgram();

  // If the program account is loading, show a loading spinner
  if (getProgramAccount.isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  // If the program account is not found, show an alert
  if (!getProgramAccount.data?.value) {
    return (
      <div className="alert alert-info flex justify-center">
        <span>
          ........
        </span>
      </div>
    );
  }
  // If the program account is found, show the escrow list
  return (
    <div className={"space-y-6"}>
      {accounts.isLoading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : accounts.data?.length ? (
        <div className="grid md:grid-cols-2 gap-4">
          {accounts.data?.map((account) => (
            <EscrowCard
              key={account.publicKey.toString()}
              account={account.publicKey}
            />
          ))}
        </div>
      ) : (
        <div className="text-center">
          <h2 className={"text-2xl"}></h2>
          
        </div>
      )}
    </div>
  );
}

export function EscrowCard({ account }: { account: PublicKey }) {
  const { accountQuery, takeMutation, vaultQuery, refundMutation } =
    useEscrowProgramAccount({
      account,
    });
  const { publicKey } = useWallet();

  // Memoize the maker's public key, or "..." if the maker query is still loading
  const maker = useMemo(
    () => accountQuery.data?.maker.toString() ?? "...",
    [accountQuery.data?.maker]
  );

  // Find token by mint address
  const getTokenByMint = (mintAddress: string) => {
    for (const [tokenSymbol, tokenData] of Object.entries(TOKENS)) {
      if (tokenData.mint.toString() === mintAddress) {
        return {
          tokenSymbol,
          decimals: tokenData.decimals,
          icon: tokenData.icon
        };
      }
    }
    return null;
  };

  // Get token X info
  const tokenX = useMemo(() => {
    if (!accountQuery.data?.mintX) return null;
    return getTokenByMint(accountQuery.data.mintX.toString());
  }, [accountQuery.data?.mintX]);

  // Get token Y info
  const tokenY = useMemo(() => {
    if (!accountQuery.data?.mintY) return null;
    return getTokenByMint(accountQuery.data.mintY.toString());
  }, [accountQuery.data?.mintY]);

  // Format amounts with proper decimals
  const formattedVaultAmount = useMemo(() => {
    if (!vaultQuery.data?.value?.data?.parsed?.info?.tokenAmount?.uiAmount) return "...";
    const amount = vaultQuery.data.value.data.parsed.info.tokenAmount.uiAmount;
    return amount.toString();
  }, [vaultQuery.data?.value?.data?.parsed?.info?.tokenAmount?.uiAmount]);

  const formattedReceiveAmount = useMemo(() => {
    if (!accountQuery.data?.amountY || !tokenY) return "...";
    // Convert from raw amount to decimal amount
    const amount = Number(accountQuery.data.amountY.toString()) / Math.pow(10, tokenY.decimals);
    return amount.toString();
  }, [accountQuery.data?.amountY, tokenY]);

  // If the escrow account is loading, show a loading spinner
  if (accountQuery.isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  
  // If the escrow account is not loading, show the escrow card
  return (
    <div className="citadel-card text-white overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left side: Token info */}
          <div className="flex-1 space-y-4">
            <h3 className="text-xl font-medium mb-3">
              <span className="text-gray-300">Maker:</span> {ellipsify(maker)}
            </h3>
            
            <div className="citadel-card bg-opacity-30 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300">You Receive:</span>
                <span className="text-lg font-semibold">{formattedVaultAmount} {tokenX ? tokenX.tokenSymbol : "..."}</span>
              </div>
            </div>
            
            <div className="citadel-card bg-opacity-30 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300">They Receive:</span>
                <span className="text-lg font-semibold">{formattedReceiveAmount} {tokenY ? tokenY.tokenSymbol : "..."}</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-300">
              <ExplorerLink
                path={`account/${account}`}
                label={ellipsify(account.toString())}
                className="text-citadel-beige-light hover:underline"
              />
            </p>
          </div>
          
          {/* Right side: Buttons */}
          <div className="flex flex-col justify-center gap-3 min-w-[120px]">
            <button
              className="citadel-btn"
              onClick={() => takeMutation.mutateAsync()}
              disabled={takeMutation.isPending}
            >
              {takeMutation.isPending ? (
                <>
                  <span className="loading loading-spinner loading-sm mr-2"></span>
                  Processing...
                </>
              ) : (
                'Take Trade'
              )}
            </button>
            
            {accountQuery.data?.maker.toString() === publicKey?.toString() && (
              <button
                className="border border-citadel-beige text-citadel-beige hover:bg-citadel-beige hover:bg-opacity-10 rounded-lg py-2 px-4 transition-colors"
                onClick={() => refundMutation.mutateAsync()}
                disabled={refundMutation.isPending}
              >
                {refundMutation.isPending ? (
                  <>
                    <span className="loading loading-spinner loading-sm mr-2"></span>
                    Processing...
                  </>
                ) : (
                  'Cancel Trade'
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
