"use client";

import { ConnectButton } from "@mysten/dapp-kit";
import CustomWalletProvider from "./WalletProvider";

export default function WalletConnect() {
  return (
    <CustomWalletProvider>
      <ConnectButton />
     </CustomWalletProvider>
  );
}


