"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    CetusSwap: {
      init: (config: any) => void
    }
  }
}

export default function CetusTerminal() {
  const initialized = useRef(false)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const script = document.createElement("script")
    const link = document.createElement("link")

    script.src = "https://archive.cetus.zone/assets/terminal/main.js"
    script.async = true

    link.rel = "stylesheet"
    link.href = "https://archive.cetus.zone/assets/terminal/style.css"

    const initializeTerminal = () => {
      if (terminalRef.current && window.CetusSwap) {
        try {
          window.CetusSwap.init({
            containerId: "cetus-terminal",
            independentWallet: true,
            displayMode: "Integrated",
          })
        } catch (error) {
          console.error("Failed to initialize Cetus Terminal:", error)
        }
      }
    }

    script.onload = initializeTerminal

    document.head.appendChild(link)
    document.body.appendChild(script)

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script)
      if (link.parentNode) link.parentNode.removeChild(link)
    }
  }, [])

  return (
    <div
      id="cetus-terminal"
      ref={terminalRef}
      className="w-full h-screen flex items-center justify-center"
      style={{
        minHeight: "100dvh",
        background: "#1a1b1f",
      }}
    />
  )
}

