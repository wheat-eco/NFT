import Image from "next/image"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <SidebarTrigger />
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="WheatChain Logo" width={24} height={24} />
        <h2 className="text-lg font-bold">WheatChain</h2>
        <Image src="/sui-logo.png" alt="SUI Logo" width={16} height={16} />
        <span className="text-lg font-bold">Sui</span>
      </div>
    </header>
  )
}

