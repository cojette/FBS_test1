"use client"

import React, { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from "recharts"
import type { DateRange } from "react-day-picker"
import { format } from "date-fns"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer
} from "@/components/ui/chart"

const initialData = [
  { name: "CFPB", "Checks": 120, "Videos": 85 },
  { name: "FTC", "Checks": 98, "Videos": 72 },
  { name: "SEC", "Checks": 75, "Videos": 60 },
  { name: "FINRA", "Checks": 110, "Videos": 90 },
  { name: "OCC/FDIC", "Checks": 88, "Videos": 78 },
];

const chartConfig = {
  "Checks": { color: "hsl(var(--chart-2))" },
  "Videos": { color: "hsl(var(--chart-1))" },
}

interface ComplianceReviewAnalyticsProps {
  dateRange?: DateRange;
}

export function ComplianceReviewAnalytics({ dateRange }: ComplianceReviewAnalyticsProps) {
  const [chartData, setChartData] = useState(initialData);

  useEffect(() => {
    if (dateRange?.from) {
      setChartData(initialData.map(item => ({
        ...item,
        "Checks": Math.floor(Math.random() * 100) + 20,
        "Videos": Math.floor(Math.random() * 80) + 10,
      })));
    }
  }, [dateRange]);

  const getDateRangeText = () => {
    if (!dateRange?.from) return "for all time.";
    const from = format(dateRange.from, "LLL dd, y");
    const to = dateRange.to ? format(dateRange.to, "LLL dd, y") : null;
    return to ? `from ${from} to ${to}.` : `since ${from}.`;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Compliance Review Analytics</CardTitle>
        <CardDescription>Frequency of review checks and videos by category.</CardDescription>
        <CardDescription className="text-xs text-muted-foreground pt-1">Showing data {getDateRangeText()}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
          <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip 
              contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
            />
            <Legend />
            <Bar dataKey="Checks" fill="hsl(var(--chart-2))" name="Review Checks" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Videos" fill="hsl(var(--chart-1))" name="Videos Reviewed" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
