"use client"

import { Copy, Download, Lock, Coins } from "lucide-react"
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
        <h1 className="text-2xl font-bold">WHEAT</h1>
        <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm">SUI</span>
      </div>

      {/* Wallet Address */}
      <Card className="p-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm">{walletAddress}</span>
          <Button variant="ghost" size="icon" onClick={handleCopy}>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </Card>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 hover:bg-accent transition-colors cursor-pointer">
          <Button variant="ghost" className="w-full h-32 flex flex-col items-center justify-center gap-3">
            <Download className="h-8 w-8" />
            <span className="text-lg font-medium">Claim WHEAT</span>
          </Button>
        </Card>

        <Card className="p-6 hover:bg-accent transition-colors cursor-pointer">
          <Button variant="ghost" className="w-full h-32 flex flex-col items-center justify-center gap-3">
            <Coins className="h-8 w-8" />
            <span className="text-lg font-medium">Staking</span>
          </Button>
        </Card>

        <Card className="p-6 hover:bg-accent transition-colors cursor-pointer">
          <Button variant="ghost" className="w-full h-32 flex flex-col items-center justify-center gap-3">
            <Lock className="h-8 w-8" />
            <span className="text-lg font-medium">Token Locks</span>
          </Button>
        </Card>
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
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              About
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Docs
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

