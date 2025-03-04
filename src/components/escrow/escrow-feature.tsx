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
    <div className="max-w-4xl mx-auto">
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
      
      {/* Create fixed-width container for OTCEscrowCreate */}
      <div style={{ maxWidth: '680px', width: '100%' }} className="mx-auto">
        <OTCEscrowCreate />
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