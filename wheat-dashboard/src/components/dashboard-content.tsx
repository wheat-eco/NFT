"use client"
import Image from "next/image"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function DashboardContent() {
  const walletAddress = "0xb0592e97...6df4d6d1"

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress)
  }

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      {/* WHEAT Header */}
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-3xl font-bold">WheatChain</h1>
        <Image src="/sui-logo.png" alt="SUI Logo" width={30} height={30} />
        <p className="text-3xl font-bold">Sui</p>
      </div>

      {/* Wallet Address */}
      <Card className="p-4 border-2">
        <div className="flex items-center gap-2">
          <span className="font-mono text-lg">{walletAddress}</span>
          <Button variant="ghost" size="icon" onClick={handleCopy}>
            <Copy className="h-5 w-5" />
          </Button>
        </div>
      </Card>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ActionCard title="Claim SWHIT" iconSrc="/claim-icon.png" />
        <ActionCard title="Staking" iconSrc="/staking-icon.png" />
        <ActionCard title="Token Locks" iconSrc="/lock-icon.png" />
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 border-t bg-background p-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            Powered by{" "}
            <a href="#" className="text-foreground hover:underline">
              unvest.io
            </a>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              About
            </a>

           <a href="#" className="text-muted-foreground hover:text-foreground">
              App
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

function ActionCard({ title, iconSrc }: { title: string; iconSrc: string }) {
  return (
    <Card className="p-6 border-2 hover:bg-accent transition-colors cursor-pointer">
      <Button variant="ghost" className="w-full h-24 flex flex-col items-center justify-center gap-3">
        <Image src={iconSrc || "/placeholder.svg"} alt={title} width={32} height={32} />
        <span className="text-lg font-medium">{title}</span>
      </Button>
    </Card>
  )
}

