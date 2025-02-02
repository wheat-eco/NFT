import CetusTerminal from "@/components/CetusTerminal"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Cetus Terminal Integration</h1>
      <CetusTerminal />
    </main>
  )
}

