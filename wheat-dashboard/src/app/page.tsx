import { DashboardLayout } from "@/components/dashboard-layout"
import { DashboardContent } from "@/components/dashboard-content"

export default function Home() {
  return (
    <div className="bg-[#0A0B0D] text-white">
      <DashboardLayout>
        <DashboardContent />
      </DashboardLayout>
    </div>
  )
}

