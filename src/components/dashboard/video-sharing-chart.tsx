"use client"

import React, { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts"
import type { DateRange } from "react-day-picker";
import { format } from "date-fns";

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

const initialData = [
  { platform: "WhatsApp", shares: 45, fill: "hsl(var(--chart-1))" },
  { platform: "Email", shares: 22, fill: "hsl(var(--chart-2))" },
  { platform: "Link Copy", shares: 15, fill: "hsl(var(--chart-3))" },
];


const chartConfig = {
  shares: {
    label: "Shares",
  },
  "WhatsApp": {
    label: "WhatsApp",
    color: "hsl(var(--chart-1))",
  },
  "Email": {
    label: "Email",
    color: "hsl(var(--chart-2))",
  },
  "Link Copy": {
    label: "Link Copy",
    color: "hsl(var(--chart-3))",
  },
}

interface VideoSharingChartProps {
  dateRange?: DateRange;
}

export function VideoSharingChart({ dateRange }: VideoSharingChartProps) {
    const [chartData, setChartData] = useState(initialData);

    useEffect(() => {
        if (dateRange?.from) {
            setChartData(initialData.map(item => ({
                ...item,
                shares: Math.floor(Math.random() * 50) + 5,
            })));
        }
    }, [dateRange]);

  const getDateRangeText = () => {
    if (!dateRange?.from) return null;
    const from = format(dateRange.from, "LLL dd, y");
    const to = dateRange.to ? format(dateRange.to, "LLL dd, y") : null;
    return to ? `${from} - ${to}` : from;
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Video Sharing</CardTitle>
        <CardDescription>
          Videos you've shared by platform
          {dateRange?.from && <div className="text-xs text-muted-foreground pt-1">{getDateRangeText()}</div>}
        </CardDescription>
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
                 {chartData.map((entry) => (
                  <Cell key={`cell-${entry.platform}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
