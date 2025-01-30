"use client";

import { useCurrentAccount, useConnectWallet, useDisconnectWallet } from "@mysten/dapp-kit";

export default function WalletConnect() {
  const account = useCurrentAccount();
  const connectWallet = useConnectWallet();
  const disconnectWallet = useDisconnectWallet();

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-md shadow-md">
      {account ? (
        <div>
          <p>Connected: {account.address}</p>
          <button
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
            onClick={disconnectWallet}
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}