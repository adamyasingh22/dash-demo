import { Card } from "@/components/ui/card"
import { SalesChart } from "@/components/charts/sales-chart"
import { VisitorsChart } from "@/components/charts/visitors-chart"
import { ConversionChart } from "@/components/charts/conversion-chart"

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Analytics Overview</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <Card className="p-6">
          <SalesChart />
        </Card>
        <Card className="p-6">
          <VisitorsChart />
        </Card>
        <Card className="p-6 lg:col-span-3">
          <ConversionChart />
        </Card>
      </div>
    </div>
  )
}

