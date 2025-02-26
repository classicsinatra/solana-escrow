"use client";
import { useRouter } from "next/navigation";
import { PublicKey } from "@solana/web3.js";
import { EscrowCard } from "@/components/escrow/escrow-ui";

export default function MarketPage({
  params,
}: {
  params: { address: string[] };
}) {
  const escrowAddress = Array.isArray(params.address)
    ? params.address[0]
    : params.address;
    const escrowPublicKey = new PublicKey(escrowAddress)


  return <EscrowCard account={escrowPublicKey} />;
}