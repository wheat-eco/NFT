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
    <div className="flex flex-col min-h-screen bg-[#0A0B0D]">
      <Navigation onConnect={handleConnect} isConnecting={isConnecting} />

      <main className="flex-1 container mx-auto px-4 pt-20 pb-20">
        {isConnected && (
          <div className="mb-6 p-4 rounded-lg bg-[#0F1114] border border-zinc-800">
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-400">Connected</span>
              <div className="h-2 w-2 rounded-full bg-green-500" />
            </div>
            <div className="font-mono text-sm text-white mt-1">0xb0592e97...6df4d6d1</div>
          </div>
        )}

        <div className="space-y-4">
          <ActionCard
            title="Claim SWHIT"
            description="Claim your SWHIT tokens"
            iconSrc="/claim.png"
            gradient="from-blue-900/20 to-blue-800/10"
          />
          <ActionCard
            title="Staking"
            description="Stake your tokens to earn rewards"
            iconSrc="/staking-1.png"
            gradient="from-purple-900/20 to-purple-800/10"
          />
          <ActionCard
            title="Token Locks"
            description="View and manage your locked tokens"
            iconSrc="/lock-1.png"
            gradient="from-indigo-900/20 to-indigo-800/10"
          />
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 border-t border-zinc-800 bg-[#0A0B0D]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0A0B0D]/60">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
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
    <div className={cn("rounded-lg border border-zinc-800 overflow-hidden", "bg-gradient-to-br", gradient)}>
      <button className="w-full p-4 flex items-center gap-4 hover:bg-white/5 transition-colors">
        <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center">
          <Image src={iconSrc || "/placeholder.svg"} alt={title} width={28} height={28} />
        </div>
        <div className="flex-1 text-left">
          <h3 className="text-lg font-medium text-white">{title}</h3>
          <p className="text-sm text-zinc-400">{description}</p>
        </div>
        <ChevronRight className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}

