// src/components/WalletConnect.tsx
"use client";

import { ConnectButton } from '@mysten/dapp-kit';

export default function WalletConnect() {
  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-md shadow-md">
      <ConnectButton />
    </div>
  );
}