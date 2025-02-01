"use client"

import type React from "react"
import Image from "next/image"
import { LayoutDashboard, Wallet, PieChart, Lock, Settings, HelpCircle } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const menuItems = [
    { icon: Wallet, label: "Wallet", href: "/wallet" },
    { icon: PieChart, label: "Staking", href: "/staking" },
    { icon: Lock, label: "Locks", href: "/locks" },

  
  ]

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar className="w-64">
          <SidebarHeader className="border-b px-6 py-4 flex items-center gap-3">
            <Image src="/logo.png" alt="WheatChain Logo" width={40} height={40} />
            <h2 className="text-xl font-bold">WheatChain</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.href}
                      className="flex items-center gap-4 text-lg py-3 px-6 hover:bg-accent transition-colors"
                    >
                      <item.icon className="h-6 w-6" />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <div className="flex-1">
          <div className="p-4">
            <SidebarTrigger />
          </div>
          {children}
        </div>
      </div>
    </SidebarProvider>
  )
}

