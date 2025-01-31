"use client"

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", conversion: 4000 },
  { name: "Feb", conversion: 3000 },
  { name: "Mar", conversion: 5000 },
  { name: "Apr", conversion: 4000 },
  { name: "May", conversion: 3000 },
  { name: "Jun", conversion: 5000 },
]

export function ConversionChart() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="conversion" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

