import { StatsCards } from "@/components/stats-cards"
import { RevenueChart } from "@/components/charts/revenue-chart"
import { ProductsChart } from "@/components/charts/products-chart"
import { CustomersMap } from "@/components/charts/customers-map"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <StatsCards />
      <div className="grid gap-6 md:grid-cols-2">
        <RevenueChart />
        <ProductsChart />
      </div>
      <CustomersMap />
    </div>
  )
}

