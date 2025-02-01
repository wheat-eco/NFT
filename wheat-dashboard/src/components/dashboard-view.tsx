"use client"

import { useState } from "react"
import Image from "next/image"
import { Loader2, ChevronRight, Twitter, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function DashboardView() {
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  const handleConnect = async () => {
    setIsConnecting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsConnected(true)
    setIsConnecting(false)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 py-6 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="WheatChain" width={32} height={32} className="rounded-full" />
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">WheatChain</span>
              <Image src="/sui-logo.png" alt="Sui" width={20} height={20} />
            </div>
          </div>
        </div>

        {/* Wallet Connection Card */}
        {!isConnected ? (
          <div className="p-4 rounded-2xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-zinc-800">
            <h2 className="text-lg font-semibold text-white mb-2">Connect Wallet</h2>
            <p className="text-sm text-zinc-400 mb-4">Connect your wallet to access all features</p>
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              size="lg"
              onClick={handleConnect}
              disabled={isConnecting}
            >
              {isConnecting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Connecting...
                </>
              ) : (
                "Connect Wallet"
              )}
            </Button>
          </div>
        ) : (
          <div className="p-4 rounded-2xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-zinc-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-zinc-400">Connected</span>
              <div className="h-2 w-2 rounded-full bg-green-500" />
            </div>
            <div className="font-mono text-sm text-white">0xb0592e97...6df4d6d1</div>
          </div>
        )}
      </header>

      {/* Main Actions */}
      <div className="px-4 space-y-6">
        <div className="grid grid-cols-1 gap-4">
          <ActionCard
            title="Claim SWHIT"
            description="Claim your SWHIT tokens"
            iconSrc="/claim.png"
            gradient="from-blue-600/20 to-blue-800/20"
          />
          <ActionCard
            title="Staking"
            description="Stake your tokens to earn rewards"
            iconSrc="/staking-1.png"
            gradient="from-purple-600/20 to-purple-800/20"
          />
          <ActionCard
            title="Token Locks"
            description="View and manage your locked tokens"
            iconSrc="/lock-1.png"
            gradient="from-indigo-600/20 to-indigo-800/20"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto pt-8 pb-24">
        <div className="flex items-center justify-between px-4 py-3 border-t border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="text-sm text-zinc-400">Powered by</span>
            <div className="flex items-center gap-1">
              <Image src="/cetus-logo.png" alt="Cetus" width={16} height={16} />
              <span className="text-sm font-medium text-white">Cetus</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com/WheatChain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="https://t.me/WheatChain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white"
            >
              <Send className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ActionCard({
  title,
  description,
  iconSrc,
  gradient,
}: {
  title: string
  description: string
  iconSrc: string
  gradient: string
}) {
  return (
    <div className={cn("rounded-2xl border border-zinc-800 overflow-hidden", "bg-gradient-to-br", gradient)}>
      <button className="w-full p-4 flex items-center gap-4 hover:bg-white/5 transition-colors">
        <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center">
          <Image src={iconSrc || "/placeholder.svg"} alt={title} width={28} height={28} />
        </div>
        <div className="flex-1 text-left">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-zinc-400">{description}</p>
        </div>
        <ChevronRight className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}

