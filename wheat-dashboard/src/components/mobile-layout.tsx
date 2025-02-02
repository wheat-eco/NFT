"use client"
import { usePathname, useRouter } from "next/navigation"
import { Wallet, BarChartIcon as ChartBar, Lock, Home, ArrowLeftRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function MobileLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  const navItems = [
    { id: "/", icon: Home, label: "Home" },
    { id: "/swap", icon: ArrowLeftRight, label: "Swap" },
    { id: "/wallet", icon: Wallet, label: "Wallet" },
    { id: "/staking", icon: ChartBar, label: "Staking" },
    { id: "/locks", icon: Lock, label: "Locks" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#030711]">
      <main className="flex-1 pb-20">{children}</main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 border-t border-zinc-800 bg-[#070B14]/80 backdrop-blur-lg">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => router.push(item.id)}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full gap-1",
                "text-zinc-500 transition-colors",
                pathname === item.id && "text-white",
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}

