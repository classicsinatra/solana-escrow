import "./globals.css";
import { ClusterProvider } from "@/components/cluster/cluster-data-access";
import { SolanaProvider } from "@/components/solana/solana-provider";
import { UiLayout } from "@/components/ui/ui-layout";
import { ReactQueryProvider } from "./react-query-provider";
import { TRPCReactProvider } from "@/trpc/react";

export const metadata = {
  title: "Citadail Escrow",
  description: "OTC Escrow Swap built on Solana",
};

const links: { label: string; path: string }[] = [
  { label: "Account", path: "/account" },
  { label: "Clusters", path: "/clusters" },
  { label: "Counter Program", path: "/counter" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <TRPCReactProvider>
            <ClusterProvider>
              <SolanaProvider>
                <UiLayout navLinks={links}>{children}</UiLayout>
              </SolanaProvider>
            </ClusterProvider>
          </TRPCReactProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
