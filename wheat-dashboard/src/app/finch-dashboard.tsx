"use client"

import { Copy, Download, Lock, Mail, MoreVertical } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function FinchDashboard() {
  const walletAddress = "0xb0592e97...6df4d6d1"

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center gap-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20250201-194719-T8aiQyFHanv525Oe7WdNnbRgph3JRF.png"
            alt="Finch Coin Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-semibold">Finch Coin</span>
        </div>
        <Button variant="ghost" size="icon">
          <MoreVertical className="w-6 h-6" />
        </Button>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto p-4 space-y-6">
        {/* FINCH Base Header */}
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-2xl font-bold">FINCH</h1>
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Base</span>
        </div>

        {/* Wallet Address */}
        <div className="flex items-center gap-2 bg-gray-900 rounded-lg p-4">
          <span className="font-mono text-gray-300">{walletAddress}</span>
          <Button variant="ghost" size="icon" className="text-gray-400">
            <Copy className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400">
            <Mail className="w-4 h-4" />
          </Button>
        </div>

        {/* Action Cards */}
        <div className="space-y-4">
          <Card className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors cursor-pointer">
            <Button variant="ghost" className="w-full h-32 flex flex-col items-center justify-center gap-2">
              <Download className="w-8 h-8 text-gray-400" />
              <span className="text-xl">Claim FINCH</span>
            </Button>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors cursor-pointer">
            <Button variant="ghost" className="w-full h-32 flex flex-col items-center justify-center gap-2">
              <Lock className="w-8 h-8 text-gray-400" />
              <span className="text-xl">View Token Locks</span>
            </Button>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-4">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            Powered by{" "}
            <Link href="#" className="text-white">
              unvest.io
            </Link>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link href="#" className="text-gray-400 hover:text-white">
              About
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              Docs
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              App
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

