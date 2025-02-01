"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function DashboardHeader() {
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")

  const handleConnect = async () => {
    setIsConnecting(true)
    // Simulate connection delay
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsConnecting(false)
    setIsConnected(true)
    setWalletAddress("0xb0592e97...6df4d6d1")
  }

  return (
    <header className="flex items-center justify-between p-4 border-b bg-[#0A0B0D] border-zinc-800">
      <div className="flex items-center gap-6">
        <SidebarTrigger>
          <Menu className="h-6 w-6" />
        </SidebarTrigger>
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="WheatChain Logo" width={32} height={32} />
          <h2 className="text-2xl font-bold text-white">WheatChain</h2>
          <Image src="/sui-logo.png" alt="SUI Logo" width={24} height={24} />
          <span className="text-2xl font-bold text-white">Sui</span>
        </div>
      </div>
      {!isConnected ? (
        <Button
          variant="outline"
          size="lg"
          onClick={handleConnect}
          disabled={isConnecting}
          className="min-w-[150px] border-zinc-700 text-white hover:bg-zinc-800"
        >
          {isConnecting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Connecting
            </>
          ) : (
            "Connect Wallet"
          )}
        </Button>
      ) : (
        <div className="px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700">
          <span className="font-mono text-sm text-zinc-300">{walletAddress}</span>
        </div>
      )}
    </header>
  )
}

