"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Twitter, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

const routes = [
  { href: "/", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#buy", label: "TRADE" },
  { href: "#contracts", label: "CONTRACTS" },
]

export function Navigation({ onConnect }: { onConnect: () => void }) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <nav className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="WheatChain Logo" width={32} height={32} />
          <span className="font-titillium font-black text-xl">WheatChain</span>
        </Link>

        <div className="hidden md:flex md:items-center md:space-x-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {route.label}
            </Link>
          ))}
          <Link
            href="https://x.com/wheatchain_xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary"
          >
            <Twitter className="h-5 w-5" />
          </Link>
          <Link
            href="https://t.me/swhit_tg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary"
          >
            <Send className="h-5 w-5" />
          </Link>
          <Button onClick={onConnect} variant="outline" size="sm">
            Connect Wallet
          </Button>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col space-y-6 pt-6">
              <div className="flex items-center space-x-2 mb-6">
                <Image src="/logo.png" alt="WheatChain Logo" width={32} height={32} />
                <span className="text-xl font-bold">WheatChain</span>
              </div>
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {route.label}
                </Link>
              ))}
              <div className="flex space-x-4 mt-4">
                <Link
                  href="https://x.com/wheatchain_xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="https://t.me/swhit_tg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary"
                >
                  <Send className="h-5 w-5" />
                </Link>
              </div>
              <Button onClick={onConnect} variant="outline" size="sm" className="mt-4">
                Connect Wallet
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

