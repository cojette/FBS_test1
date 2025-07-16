"use client"

import React, { useEffect, useState } from "react";
import { Pie, PieChart, ResponsiveContainer, Cell } from "recharts"
import type { DateRange } from "react-day-picker";
import { format } from "date-fns";

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

const initialData = [
  { reviewType: "CFPB - UDAAP", videos: 45, fill: "hsl(var(--chart-1))" },
  { reviewType: "FTC - Truth-in-Advertising", videos: 82, fill: "hsl(var(--chart-2))" },
  { reviewType: "SEC - Anti-Fraud", videos: 65, fill: "hsl(var(--chart-3))" },
  { reviewType: "FINRA - Rule 2210", videos: 53, fill: "hsl(var(--chart-4))" },
  { reviewType: "OCC - Fair Lending", videos: 30, fill: "hsl(var(--chart-5))" },
]

const chartConfig = {
  videos: {
    label: "Videos",
  },
  "CFPB - UDAAP": {
    label: "CFPB - UDAAP",
    color: "hsl(var(--chart-1))",
  },
  "FTC - Truth-in-Advertising": {
    label: "FTC - Truth-in-Advertising",
    color: "hsl(var(--chart-2))",
  },
  "SEC - Anti-Fraud": {
    label: "SEC - Anti-Fraud",
    color: "hsl(var(--chart-3))",
  },
  "FINRA - Rule 2210": {
    label: "FINRA - Rule 2210",
    color: "hsl(var(--chart-4))",
  },
  "OCC - Fair Lending": {
    label: "OCC - Fair Lending",
    color: "hsl(var(--chart-5))",
  },
}

interface ReviewAnalyticsChartProps {
  dateRange?: DateRange;
}

export function ReviewAnalyticsChart({ dateRange }: ReviewAnalyticsChartProps) {
  const [chartData, setChartData] = useState(initialData);

  useEffect(() => {
    if (dateRange?.from) {
       setChartData(initialData.map(item => ({
        ...item,
        videos: Math.floor(Math.random() * 90) + 10,
      })));
    }
  }, [dateRange]);

  const totalVideos = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.videos, 0)
  }, [chartData])
  
  const getDateRangeText = () => {
    if (!dateRange?.from) return "for all time.";
    const from = format(dateRange.from, "LLL dd, y");
    const to = dateRange.to ? format(dateRange.to, "LLL dd, y") : null;
    return to ? `from ${from} to ${to}.` : `since ${from}.`;
  }

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle className="font-headline">Compliance Review Analytics</CardTitle>
        <CardDescription>Breakdown by key compliance checks</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="videos"
              nameKey="reviewType"
              innerRadius={60}
              strokeWidth={5}
              labelLine={false}
              label={({ percent, name }) => `${(percent * 100).toFixed(0)}%`}
            >
               {chartData.map((entry) => (
                  <Cell key={`cell-${entry.reviewType}`} fill={entry.fill} />
                ))}
            </Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="reviewType" />}
              className="[&_.recharts-legend-item-text]:text-xs"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex w-full items-center justify-center text-center">
          <span className="text-muted-foreground">
            Total {totalVideos} videos reviewed
          </span>
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total videos reviewed {getDateRangeText()}
        </div>
      </CardFooter>
    </Card>
  )
}
