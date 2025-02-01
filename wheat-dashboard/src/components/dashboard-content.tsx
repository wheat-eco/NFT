"use client"
import Image from "next/image"
import { Copy, Twitter, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function DashboardContent() {
  const walletAddress = "0xb0592e97...6df4d6d1"

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress)
  }

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Wallet Address */}
      <Card className="p-3 border-2">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm">{walletAddress}</span>
          <Button variant="ghost" size="sm" onClick={handleCopy}>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </Card>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ActionCard title="Claim SWHIT" iconSrc="/claim.png" />
        <ActionCard title="Staking" iconSrc="/staking.png" />
        <ActionCard title="Token Locks" iconSrc="/lock.png" />
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 border-t bg-background p-3">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            Powered by <Image src="/cetus-logo.png" alt="Cetus Logo" width={16} height={16} />
            <span className="font-medium">Cetus</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://twitter.com/WheatChain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="https://t.me/WheatChain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Send className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

function ActionCard({ title, iconSrc }: { title: string; iconSrc: string }) {
  return (
    <Card className="p-4 border-2 hover:bg-accent transition-colors cursor-pointer">
      <Button variant="ghost" className="w-full h-16 flex flex-col items-center justify-center gap-2">
        <Image src={iconSrc || "/cetus-logo.png"} alt={title} width={24} height={24} />
        <span className="text-sm font-medium">{title}</span>
      </Button>
    </Card>
  )
}

