"use client"
import { CetusSwap } from "@cetusprotocol/terminal"
import "@cetusprotocol/terminal/dist/style.css"
import { MobileLayout } from "./mobile-layout"

export function SwapView() {
  return (
    <MobileLayout>
      <div className="flex flex-col min-h-screen bg-[#030711] px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-xl font-bold text-white">Swap</h1>
        </div>

        <div className="flex-1 -mx-4">
          <CetusSwap
            initProps={{
              displayMode: "Integrated",
              independentWallet: true,
            }}
          />
        </div>
      </div>
    </MobileLayout>
  )
}

