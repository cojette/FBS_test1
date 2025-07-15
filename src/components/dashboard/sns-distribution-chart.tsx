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
  { platform: "WhatsApp", shares: 1250, fill: "var(--color-chart-1)" },
  { platform: "Instagram", shares: 850, fill: "var(--color-chart-2)" },
  { platform: "Facebook", shares: 450, fill: "var(--color-chart-3)" },
  { platform: "Text Message", shares: 980, fill: "var(--color-chart-4)" },
];


const chartConfig = {
  shares: {
    label: "Shares",
  },
  "WhatsApp": {
    label: "WhatsApp",
    color: "hsl(var(--chart-1))",
  },
  "Instagram": {
    label: "Instagram",
    color: "hsl(var(--chart-2))",
  },
  "Facebook": {
    label: "Facebook",
    color: "hsl(var(--chart-3))",
  },
  "Text Message": {
    label: "Text Message",
    color: "hsl(var(--chart-4))",
  },
}

export function SnsDistributionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">SNS Distribution</CardTitle>
        <CardDescription>Shares per messenger platform</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
            <BarChart
              accessibilityLayer
              data={chartData}
              layout="vertical"
              margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
            >
              <CartesianGrid horizontal={false} />
              <YAxis dataKey="platform" type="category" width={80} tickLine={false} axisLine={false} />
              <XAxis dataKey="shares" type="number" hide />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Bar dataKey="shares" radius={5} layout="vertical">
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
