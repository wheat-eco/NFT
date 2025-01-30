"use client";

import { ConnectButton } from "@mysten/dapp-kit";
import CustomWalletProvider from "./WalletProvider";

export default function WalletConnect() {
  return (
    <CustomWalletProvider>
      <div className="flex flex-col items-center gap-4 p-4 border rounded-md shadow-md">
        {/* The ConnectButton automatically handles the connection and disconnection */}
        <ConnectButton />
      </div>
    </CustomWalletProvider>
  );
}