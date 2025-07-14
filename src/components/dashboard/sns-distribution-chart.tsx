"use client"

import { Bar, BarChart, CartesianGrid, XAxis, ResponsiveContainer } from "recharts"

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
  { platform: "카카오톡", shares: 1250, fill: "var(--color-chart-1)" },
  { platform: "인스타그램", shares: 850, fill: "var(--color-chart-2)" },
  { platform: "페이스북", shares: 450, fill: "var(--color-chart-3)" },
  { platform: "문자 메시지", shares: 980, fill: "var(--color-chart-4)" },
]

const chartConfig = {
  shares: {
    label: "전달 수",
  },
  "카카오톡": {
    label: "카카오톡",
    color: "hsl(var(--chart-1))",
  },
  "인스타그램": {
    label: "인스타그램",
    color: "hsl(var(--chart-2))",
  },
  "페이스북": {
    label: "페이스북",
    color: "hsl(var(--chart-3))",
  },
  "문자 메시지": {
    label: "문자 메시지",
    color: "hsl(var(--chart-4))",
  },
}

export function SnsDistributionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">SNS 전달 수</CardTitle>
        <CardDescription>Shares per social media platform</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
            <BarChart
              accessibilityLayer
              data={chartData}
              layout="vertical"
              margin={{ left: 10 }}
            >
              <CartesianGrid horizontal={false} />
              <XAxis type="number" dataKey="shares" hide />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Bar dataKey="shares" layout="vertical" radius={5} />
            </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
