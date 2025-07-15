"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { type: "Funds", count: 12, fill: "var(--color-chart-1)" },
  { type: "Bonds", count: 21, fill: "var(--color-chart-2)" },
  { type: "Stocks", count: 8, fill: "var(--color-chart-3)" },
  { type: "Insurance", count: 15, fill: "var(--color-chart-4)" },
  { type: "Annuities", count: 5, fill: "var(--color-chart-5)" },
]

const chartConfig = {
  count: {
    label: "Products",
  },
  "Funds": {
    label: "Funds",
    color: "hsl(var(--chart-1))",
  },
  "Bonds": {
    label: "Bonds",
    color: "hsl(var(--chart-2))",
  },
  "Stocks": {
    label: "Stocks",
    color: "hsl(var(--chart-3))",
  },
  "Insurance": {
    label: "Insurance",
    color: "hsl(var(--chart-4))",
  },
  "Annuities": {
    label: "Annuities",
    color: "hsl(var(--chart-5))",
  },
}

export function ProductOverviewChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Product Overview</CardTitle>
        <CardDescription>Number of registered products by type</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
            <BarChart accessibilityLayer data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20}}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="type"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <YAxis />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Bar dataKey="count" radius={8}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
