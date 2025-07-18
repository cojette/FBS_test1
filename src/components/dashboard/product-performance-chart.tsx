"use client"

import React, { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip } from "recharts"
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
  ChartContainer
} from "@/components/ui/chart"

const initialData = [
  { name: 'Funds', created: 45, distributed: 35 },
  { name: 'Bonds', created: 38, distributed: 28 },
  { name: 'Stocks', created: 30, distributed: 25 },
  { name: 'Insurance', created: 25, distributed: 20 },
  { name: 'Loans', created: 20, distributed: 15 },
];

interface ProductPerformanceChartProps {
  dateRange?: DateRange;
}

export function ProductPerformanceChart({ dateRange }: ProductPerformanceChartProps) {
  const [chartData, setChartData] = useState(initialData);

  useEffect(() => {
    if(dateRange?.from) {
      setChartData(initialData.map(item => {
        const created = Math.floor(Math.random() * 50) + 10;
        const distributed = Math.floor(created * (0.6 + Math.random() * 0.35));
        return {
          ...item,
          created,
          distributed,
        };
      }));
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
        <CardTitle className="font-headline">Product Performance</CardTitle>
        <CardDescription>
          Videos created and distributed by product type.
        </CardDescription>
         <CardDescription className="text-xs text-muted-foreground pt-1">Showing data {getDateRangeText()}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}} className="min-h-[300px] w-full">
          <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip 
              contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
            />
            <Legend />
            <Bar dataKey="created" fill="hsl(var(--chart-4))" name="Created" radius={[4, 4, 0, 0]} />
            <Bar dataKey="distributed" fill="hsl(var(--chart-5))" name="Distributed" radius={[4, 4, 0, 0]}/>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
