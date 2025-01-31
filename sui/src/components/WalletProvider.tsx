'use client'

import { WalletProvider } from '@suiet/wallet-kit'
import '@suiet/wallet-kit/style.css'

export function WalletWrapper({ children }: { children: React.ReactNode }) {
  return (
    <WalletProvider>
      {children}
    </WalletProvider>
  )
}

