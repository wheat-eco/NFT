// src/app/page.tsx
"use client";

import CustomWalletProvider from "@/components/WalletProvider";
import WalletConnect from "@/components/WalletConnect";

export default function Home() {
  return (
    <CustomWalletProvider>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Sui Token Launchpad</h1>
        <WalletConnect />
      </div>
    </CustomWalletProvider>
  );
}