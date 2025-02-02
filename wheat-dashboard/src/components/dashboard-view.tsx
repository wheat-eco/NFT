"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
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
    <div className="flex flex-col min-h-screen bg-[#030711]">
      <Navigation onConnect={handleConnect} />

      <main className="flex-1 container mx-auto px-4 pt-20 pb-16">
        {/* Wallet Connection Status */}
        {isConnected && (
          <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-zinc-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-zinc-400">Connected</span>
              <div className="h-2 w-2 rounded-full bg-green-500" />
            </div>
            <div className="font-mono text-sm text-white">0xb0592e97...6df4d6d1</div>
          </div>
        )}

        {/* Main Actions */}
        <div className="space-y-6">
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
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 border-t border-zinc-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 py-2">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-zinc-400">Powered by</span>
            <div className="flex items-center gap-1">
              <Image src="/cetus-logo.png" alt="Cetus" width={16} height={16} />
              <span className="text-sm font-medium text-white">Cetus</span>
            </div>
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

