"use client";
import { useRouter } from "next/navigation";
import { PublicKey } from "@solana/web3.js";
import { EscrowCard } from "@/components/escrow/escrow-ui";
import { useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEscrowProgramAccount } from "@/components/escrow/escrow-data-access";
import { showTradeNotification, TradeStage } from "@/components/escrow/trade-notification";

export default function MarketPage({
  params,
}: {
  params: { address: string[] };
}) {
  const { publicKey } = useWallet();
  const escrowAddress = Array.isArray(params.address)
    ? params.address[0]
    : params.address;
  const escrowPublicKey = new PublicKey(escrowAddress);
  
  // Get the escrow account data
  const { accountQuery } = useEscrowProgramAccount({ 
    account: escrowPublicKey 
  });

  return <EscrowCard account={escrowPublicKey} />;
}