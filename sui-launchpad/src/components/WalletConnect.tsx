"use client";
import { useState, useEffect } from "react";
import { useWallet } from "@mysten/wallet-standard";

export default function WalletConnect() {
  const { connect, disconnect, wallets, isConnected, account } = useWallet();
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    if (isConnected) {
      setWallet(account);
    }
  }, [isConnected]);

  return (
    <div>
      {isConnected ? (
        <div>
          <p>Connected: {wallet?.address}</p>
          <button onClick={disconnect} className="px-4 py-2 bg-red-500 text-white">
            Disconnect
          </button>
        </div>
      ) : (
        <button onClick={connect} className="px-4 py-2 bg-blue-500 text-white">
          Connect Wallet
        </button>
      )}
    </div>
  );
}