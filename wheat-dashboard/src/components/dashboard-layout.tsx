"use client"

import type React from "react"
import { Wallet, PieChart, Lock } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { DashboardHeader } from "@/components/dashboard-header"

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
          <SidebarContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.href}
                      className="flex items-center gap-4 text-sm py-2 px-4 hover:bg-accent transition-colors"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <div className="flex-1">
          <DashboardHeader />
          {children}
        </div>
      </div>
    </SidebarProvider>
  )
}

