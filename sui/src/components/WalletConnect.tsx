// src/components/WalletConnect.tsx
import { useEffect, useState } from 'react';
import { WalletProvider, useWallet } from '@mysten/wallet-standard';

function WalletConnect() {
  const { wallets, select } = useWallet();
  const [selectedWallet, setSelectedWallet] = useState(null);

  useEffect(() => {
    if (wallets.length > 0) {
      setSelectedWallet(wallets[0]);
      select(wallets[0].name);
    }
  }, [wallets, select]);

  if (!selectedWallet) {
    return <div>No wallet found</div>;
  }

  return <div>Connected to {selectedWallet.name}</div>;
}

export default function App() {
  return (
    <WalletProvider>
      <WalletConnect />
    </WalletProvider>
  );
}