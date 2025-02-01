"use client"
import Image from "next/image"
import { Twitter, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function DashboardContent() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-8 bg-[#0A0B0D] min-h-screen">
      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ActionCard title="Claim SWHIT" iconSrc="/claim.png" />
        <ActionCard title="Staking" iconSrc="/staking-1.png" />
        <ActionCard title="Token Locks" iconSrc="/lock-1.png" />
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 border-t border-zinc-800 bg-[#0A0B0D] p-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            Powered by <Image src="/cetus-logo.png" alt="Cetus Logo" width={20} height={20} />
            <span className="font-medium text-white">Cetus</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com/WheatChain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://t.me/WheatChain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Send className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

function ActionCard({ title, iconSrc }: { title: string; iconSrc: string }) {
  return (
    <Card className="bg-[#0F1114] border-2 border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer overflow-hidden">
      <Button
        variant="ghost"
        className="w-full py-12 flex flex-col items-center justify-center gap-4 hover:bg-zinc-800/50"
      >
        <Image src={iconSrc || "/placeholder.svg"} alt={title} width={48} height={48} className="opacity-90" />
        <span className="text-lg font-medium text-white">{title}</span>
      </Button>
    </Card>
  )
}

