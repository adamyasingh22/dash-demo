"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Mon", visitors: 400 },
  { name: "Tue", visitors: 300 },
  { name: "Wed", visitors: 500 },
  { name: "Thu", visitors: 400 },
  { name: "Fri", visitors: 300 },
  { name: "Sat", visitors: 200 },
  { name: "Sun", visitors: 100 },
]

export function VisitorsChart() {
  return (
    <div className="h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="visitors" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

