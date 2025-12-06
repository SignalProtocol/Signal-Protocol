"use client";

import { SolanaWalletProvider } from "../config/solana";
import WalletContextProvider from "./WalletContextProvider";
import "@solana/wallet-adapter-react-ui/styles.css";
import GlobalProvider from "../context/GlobalContext";
import { MixpanelProvider } from "../context/MixpanelContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MixpanelProvider>
      <GlobalProvider>
        <WalletContextProvider>
          <SolanaWalletProvider>{children}</SolanaWalletProvider>
        </WalletContextProvider>
      </GlobalProvider>
    </MixpanelProvider>
  );
}
