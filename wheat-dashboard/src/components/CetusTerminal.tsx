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
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://archive.cetus.zone/assets/terminal/main.js"
    script.async = true

    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "https://archive.cetus.zone/assets/terminal/style.css"

    document.head.appendChild(link)
    document.body.appendChild(script)

    script.onload = () => {
      if (terminalRef.current && window.CetusSwap) {
        window.CetusSwap.init({
          containerId: terminalRef.current.id,
          independentWallet: true,
          displayMode: "Integrated",
        })
      }
    }

    return () => {
      document.body.removeChild(script)
      document.head.removeChild(link)
    }
  }, [])

  return <div id="cetus-terminal" ref={terminalRef}></div>
}

