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
  { name: 'Funds', created: 40, distributed: 24 },
  { name: 'Bonds', created: 30, distributed: 13 },
  { name: 'Stocks', created: 20, distributed: 9 },
  { name: 'Insurance', created: 27, distributed: 19 },
  { name: 'Annuities', created: 18, distributed: 8 },
];

export function ProductPerformanceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Product Performance</CardTitle>
        <CardDescription>Video creation and distribution by product</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}} className="min-h-[250px] w-full">
          <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false}/>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="created" fill="var(--color-chart-2)" name="Created" radius={[4, 4, 0, 0]}/>
            <Bar dataKey="distributed" fill="var(--color-chart-1)" name="Distributed" radius={[4, 4, 0, 0]}/>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
