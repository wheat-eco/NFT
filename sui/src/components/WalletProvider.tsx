// src/components/WalletProvider.tsx
"use client";

import { WalletProvider } from '@mysten/dapp-kit';

export default function CustomWalletProvider({ children }: { children: React.ReactNode }) {
  return <WalletProvider>{children}</WalletProvider>;
}