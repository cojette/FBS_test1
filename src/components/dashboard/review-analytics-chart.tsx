"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart, ResponsiveContainer, Cell, Legend } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

const chartData = [
  { reviewType: "상품 광고 심의", count: 275, fill: "var(--color-chart-1)" },
  { reviewType: "급여 지급 심의", count: 200, fill: "var(--color-chart-2)" },
  { reviewType: "일반 민원 심의", count: 187, fill: "var(--color-chart-3)" },
  { reviewType: "기타", count: 173, fill: "var(--color-chart-4)" },
]

const chartConfig = {
  count: {
    label: "횟수",
  },
  "상품 광고 심의": {
    label: "상품 광고 심의",
    color: "hsl(var(--chart-1))",
  },
  "급여 지급 심의": {
    label: "급여 지급 심의",
    color: "hsl(var(--chart-2))",
  },
  "일반 민원 심의": {
    label: "일반 민원 심의",
    color: "hsl(var(--chart-3))",
  },
  "기타": {
    label: "기타",
    color: "hsl(var(--chart-4))",
  },
}

export function ReviewAnalyticsChart() {
  const totalReviews = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.count, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle className="font-headline">준법 검토 현황</CardTitle>
        <CardDescription>Compliance review status</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
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
              labelLine={false}
            >
               {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
            </Pie>
            <ChartLegend content={<ChartLegendContent nameKey="reviewType" />} />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex w-full items-center justify-center text-center">
          <span className="text-muted-foreground">
            총 {totalReviews}건의 검토 완료
          </span>
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total reviews for compliance checks.
        </div>
      </CardFooter>
    </Card>
  )
}
