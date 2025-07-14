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
  { type: "상해 보험", count: 12, fill: "var(--color-chart-1)" },
  { type: "자동차 보험", count: 21, fill: "var(--color-chart-2)" },
  { type: "운전자 보험", count: 8, fill: "var(--color-chart-3)" },
  { type: "건강 보험", count: 15, fill: "var(--color-chart-4)" },
  { type: "종신 보험", count: 5, fill: "var(--color-chart-5)" },
]

const chartConfig = {
  count: {
    label: "상품 수",
  },
  "상해 보험": {
    label: "상해 보험",
    color: "hsl(var(--chart-1))",
  },
  "자동차 보험": {
    label: "자동차 보험",
    color: "hsl(var(--chart-2))",
  },
  "운전자 보험": {
    label: "운전자 보험",
    color: "hsl(var(--chart-3))",
  },
  "건강 보험": {
    label: "건강 보험",
    color: "hsl(var(--chart-4))",
  },
  "종신 보험": {
    label: "종신 보험",
    color: "hsl(var(--chart-5))",
  },
}

export function ProductOverviewChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">등록 상품 현황</CardTitle>
        <CardDescription>Number of registered products by insurance type</CardDescription>
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
