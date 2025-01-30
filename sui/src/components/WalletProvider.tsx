// src/components/WalletProvider.tsx
"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WalletProvider } from '@mysten/dapp-kit';

// Create a single instance of QueryClient
const queryClient = new QueryClient();

export default function CustomWalletProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <WalletProvider>{children}</WalletProvider>
    </QueryClientProvider>
  );
}