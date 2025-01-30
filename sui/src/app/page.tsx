'use client';

import WalletConnect from "@/components/WalletConnect";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Sui Token Launchpad</h1>
      <WalletConnect />
    </div>
  );
}