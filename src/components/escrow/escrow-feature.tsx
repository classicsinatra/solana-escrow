"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletButton } from "../solana/solana-provider";
import { ellipsify } from "../ui/ui-layout";
import { ExplorerLink } from "../cluster/cluster-ui";
import { EscrowList, OTCEscrowCreate } from "./escrow-ui";
import { useEscrowProgram } from "./escrow-data-access";
import { useState } from "react";

export default function EscrowFeature() {
  const { publicKey } = useWallet();
  const { programId } = useEscrowProgram();
  const [selectedEscrowId, setSelectedEscrowId] = useState<string | undefined>(undefined);
  
  // If the user is connected, show the escrow feature
  // Else, show the connect wallet button
  return publicKey ? (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-2"></h1>
        <p className="text-gray-200 mb-2"></p>
        <p className="mb-6">
          <ExplorerLink
            path={`account/${programId}`}
            label={ellipsify(programId.toString())}
          />
        </p>
      </div>
      
      <div className="grid md:grid-cols-7 gap-6">
        <div className="md:col-span-4">
          {/* Create an escrow */}
          <OTCEscrowCreate />
        </div>
        <div className="md:col-span-3">
          {/* Trade Progress */}
          <div className="citadel-card p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Trade Progress</h2>
            <div className="space-y-4">
              <div className="flex items-center text-white">
                <div className="w-6 h-6 rounded-full border-2 border-citadel-beige flex items-center justify-center mr-3">
                  <div className="w-3 h-3 rounded-full bg-citadel-beige"></div>
                </div>
                <span>Trade request submitted</span>
              </div>
              
              <div className="flex items-center text-white opacity-50">
                <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center mr-3">
                </div>
                <span>Funds transferred from your wallet to escrow</span>
              </div>
              
              <div className="flex items-center text-white opacity-50">
                <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center mr-3">
                </div>
                <span>Second party confirmed the trade</span>
              </div>
              
              <div className="flex items-center text-white opacity-50">
                <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center mr-3">
                </div>
                <span>Funds transferred from second party wallet to escrow</span>
              </div>
              
              <div className="flex items-center text-white opacity-50">
                <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center mr-3">
                </div>
                <span>Funds transferred from escrow to your wallet</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* List all escrows - Only show if there are escrows */}
      <div className="mt-8">
        <EscrowList />
      </div>
    </div>
  ) : (
    <div className="max-w-4xl mx-auto">
      <div className="hero min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold mb-6 text-white">Solana OTC Escrow Swap</h1>
            <p className="mb-6 text-gray-200">Connect your wallet to start creating trades</p>
            <WalletButton className="citadel-btn py-3 px-8 text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}