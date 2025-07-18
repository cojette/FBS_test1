"use client"

import React, { useEffect, useState } from "react";
import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from "recharts"
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
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

const initialData = [
  { status: "Passed", count: 52, fill: "hsl(var(--chart-1))" },
  { status: "Failed", count: 6, fill: "hsl(var(--chart-2))" },
  { status: "Pending", count: 12, fill: "hsl(var(--chart-3))" },
]

const chartConfig = {
  count: {
    label: "Videos",
  },
  "Passed": {
    label: "Passed",
    color: "hsl(var(--chart-1))",
  },
  "Failed": {
    label: "Failed",
    color: "hsl(var(--chart-2))",
  },
  "Pending": {
    label: "Pending",
    color: "hsl(var(--chart-3))",
  },
}

interface ComplianceStatusChartProps {
  dateRange?: DateRange;
}

export function ComplianceStatusChart({ dateRange }: ComplianceStatusChartProps) {
  const [chartData, setChartData] = useState(initialData);

  useEffect(() => {
    if (dateRange?.from) {
       setChartData(initialData.map(item => ({
        ...item,
        count: Math.floor(Math.random() * 60) + 5,
      })));
    }
  }, [dateRange]);

  const totalVideos = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.count, 0)
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
        <CardTitle className="font-headline">Compliance Status</CardTitle>
        <CardDescription>Breakdown of your videos</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <Tooltip
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="status"
              innerRadius={50}
              strokeWidth={5}
            >
               {chartData.map((entry) => (
                  <Cell key={`cell-${entry.status}`} fill={entry.fill} />
                ))}
            </Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="status" />}
              className="[&_.recharts-legend-item-text]:text-xs"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex w-full items-center justify-center text-center">
          <span className="text-muted-foreground">
            Total {totalVideos} videos processed
          </span>
        </div>
        <div className="leading-none text-muted-foreground">
          Showing data {getDateRangeText()}
        </div>
      </CardFooter>
    </Card>
  )
}
