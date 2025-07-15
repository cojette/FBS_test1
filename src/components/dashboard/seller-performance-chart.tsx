"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer
} from "@/components/ui/chart"

const chartData = [
  { name: 'Minjun K.', created: 48, distributed: 40 },
  { name: 'Seoyeon L.', created: 42, distributed: 38 },
  { name: 'Doyun P.', created: 35, distributed: 28 },
  { name: 'Jiwu C.', created: 31, distributed: 25 },
  { name: 'Haeun J.', created: 28, distributed: 22 },
];

export function SellerPerformanceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Seller Performance</CardTitle>
        <CardDescription>Video creation and distribution by seller</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}} className="min-h-[250px] w-full">
          <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip 
              contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
            />
            <Legend />
            <Bar dataKey="created" fill="var(--color-chart-4)" name="Created" radius={[4, 4, 0, 0]} />
            <Bar dataKey="distributed" fill="var(--color-chart-5)" name="Distributed" radius={[4, 4, 0, 0]}/>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
