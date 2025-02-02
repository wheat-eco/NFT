"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Twitter, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const routes = [
  { href: "/", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#trade", label: "TRADE" },
  { href: "#contracts", label: "CONTRACTS" },
]

export function Navigation({
  onConnect,
  isConnecting,
}: {
  onConnect: () => void
  isConnecting: boolean
}) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-800/40 bg-[#0A0B0D]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0A0B0D]/60">
      <nav className="container flex h-14 items-center">
        <div className="flex flex-1 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="WheatChain Logo" width={24} height={24} />
            <span className="font-bold text-lg">WheatChain</span>
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                {route.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <Link
                href="https://twitter.com/wheatchain_xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://t.me/swhit_tg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white"
              >
                <Send className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <Button
          onClick={onConnect}
          variant="outline"
          size="sm"
          disabled={isConnecting}
          className="ml-6 bg-transparent border-zinc-700 text-white hover:bg-zinc-800"
        >
          Connect Wallet
        </Button>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="ml-4 md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-[#0A0B0D]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0A0B0D]/60"
          >
            <div className="flex flex-col space-y-6 pt-6">
              <div className="flex items-center space-x-2">
                <Image src="/logo.png" alt="WheatChain Logo" width={24} height={24} />
                <span className="text-lg font-bold">WheatChain</span>
              </div>
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                >
                  {route.label}
                </Link>
              ))}
              <div className="flex space-x-4">
                <Link
                  href="https://twitter.com/wheatchain_xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="https://t.me/swhit_tg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white"
                >
                  <Send className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

