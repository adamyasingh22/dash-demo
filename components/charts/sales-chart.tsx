"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const data = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 4000 },
  { name: "May", sales: 3000 },
  { name: "Jun", sales: 5000 },
]

export function SalesChart() {
  return (
    <Card>
    <CardHeader>
        <CardTitle>Monthly Sales</CardTitle>
        <CardDescription>Distribution of product sales</CardDescription>
    </CardHeader>    
    <CardContent>
     <div className="h-[260px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
     </div>
    </CardContent>
    </Card>
  )
}

