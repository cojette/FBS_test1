"use client"

import { Pie, PieChart, ResponsiveContainer } from "recharts"

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
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart"

const chartData = [
  { reviewType: "준법 검토", count: 275, fill: "var(--color-chart-1)" },
  { reviewType: "정확성 검토", count: 200, fill: "var(--color-chart-2)" },
  { reviewType: "오탈자 검토", count: 187, fill: "var(--color-chart-3)" },
  { reviewType: "필수 항목 검토", count: 173, fill: "var(--color-chart-4)" },
]

const chartConfig = {
  count: {
    label: "횟수",
  },
  "준법 검토": {
    label: "준법 검토",
    color: "hsl(var(--chart-1))",
  },
  "정확성 검토": {
    label: "정확성 검토",
    color: "hsl(var(--chart-2))",
  },
  "오탈자 검토": {
    label: "오탈자 검토",
    color: "hsl(var(--chart-3))",
  },
  "필수 항목 검토": {
    label: "필수 항목 검토",
    color: "hsl(var(--chart-4))",
  },
}

export function ReviewAnalyticsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">검토 체크 현황</CardTitle>
        <CardDescription>Frequency of review check types</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="reviewType"
              innerRadius={60}
              strokeWidth={5}
            />
             <ChartLegend
              content={<ChartLegendContent nameKey="reviewType" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
