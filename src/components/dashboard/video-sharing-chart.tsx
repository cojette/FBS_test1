
"use client"

import React, { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from "recharts"
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
  ChartTooltipContent,
} from "@/components/ui/chart"

const initialData = [
  { platform: "WhatsApp", shares: 45, fill: "hsl(var(--chart-1))" },
  { platform: "Email", shares: 22, fill: "hsl(var(--chart-2))" },
  { platform: "Link Copy", shares: 15, fill: "hsl(var(--chart-3))" },
  { platform: "Telegram", shares: 12, fill: "hsl(var(--chart-4))" },
  { platform: "SMS", shares: 8, fill: "hsl(var(--chart-5))" },
];


const chartConfig = {
  shares: {
    label: "Shares",
  },
}

interface VideoSharingChartProps {
  dateRange?: DateRange;
  seller?: string;
}

export function VideoSharingChart({ dateRange, seller }: VideoSharingChartProps) {
    const [chartData, setChartData] = useState(initialData);

    useEffect(() => {
        // This effect runs when dateRange or seller changes
        const sellerHash = seller ? seller.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) : 1;
        setChartData(initialData.map(item => {
            const baseShares = item.shares;
            const newShares = Math.floor(baseShares * (0.5 + (sellerHash % 100) / 100) + Math.random() * 5);
            return { ...item, shares: newShares };
        }));
    }, [dateRange, seller]);

  const getDateRangeText = () => {
    if (!dateRange?.from) return "for all time.";
    const from = format(dateRange.from, "LLL dd, y");
    const to = dateRange.to ? format(dateRange.to, "LLL dd, y") : null;
    return to ? `from ${from} to ${to}.` : `since ${from}.`;
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Video Sharing by SNS</CardTitle>
        <CardDescription>
          Videos you've shared by platform
        </CardDescription>
        <CardDescription className="text-xs text-muted-foreground pt-1">Showing data {getDateRangeText()}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
            <BarChart
              accessibilityLayer
              data={chartData}
              layout="vertical"
              margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
            >
              <CartesianGrid horizontal={false} />
              <YAxis dataKey="platform" type="category" width={80} tickLine={false} axisLine={false} />
              <XAxis dataKey="shares" type="number" hide />
              <Tooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" hideLabel />}
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
