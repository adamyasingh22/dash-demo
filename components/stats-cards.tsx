import { Users, UserCheck, MonitorPlay } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    label: "Total Customers",
    value: "5,423",
    trend: "16% this month",
    trendUp: true,
    icon: Users,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    label: "Members",
    value: "1,893",
    trend: "1% this month",
    trendUp: false,
    icon: UserCheck,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    label: "Active Now",
    value: "189",
    icon: MonitorPlay,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    showAvatars: true,
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.label}>
          <CardContent className="p-4 sm:p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-xl sm:text-2xl font-semibold mt-1">{stat.value}</p>
                {stat.trend && (
                  <p className="text-sm mt-1">
                    <span className={stat.trendUp ? "text-green-500" : "text-red-500"}>{stat.trend}</span>
                  </p>
                )}
              </div>
              <div className={`p-2 sm:p-3 rounded-lg ${stat.iconBg}`}>
                <stat.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${stat.iconColor}`} />
              </div>
            </div>
            {stat.showAvatars && (
              <div className="flex -space-x-2 mt-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-200" />
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

