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
  { name: 'Funds', created: 40, distributed: 24 },
  { name: 'Bonds', created: 30, distributed: 13 },
  { name: 'Stocks', created: 20, distributed: 9 },
  { name: 'Insurance', created: 27, distributed: 19 },
  { name: 'Annuities', created: 18, distributed: 8 },
];

interface ProductPerformanceChartProps {
  dateRange?: DateRange;
}


export function ProductPerformanceChart({ dateRange }: ProductPerformanceChartProps) {
  const [chartData, setChartData] = useState(initialData);

  useEffect(() => {
    if(dateRange?.from) {
      setChartData(initialData.map(item => {
        const created = Math.floor(Math.random() * 45) + 5;
        const distributed = Math.floor(Math.random() * created);
        return {
          ...item,
          created,
          distributed,
        };
      }));
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
        <CardTitle className="font-headline">Product Performance</CardTitle>
        <CardDescription>
          Video creation and distribution by product
           {dateRange?.from && <div className="text-xs text-muted-foreground pt-1">{getDateRangeText()}</div>}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}} className="min-h-[250px] w-full">
          <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false}/>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
            />
            <Legend />
            <Bar dataKey="created" fill="hsl(var(--chart-2))" name="Created" radius={[4, 4, 0, 0]}/>
            <Bar dataKey="distributed" fill="hsl(var(--chart-1))" name="Distributed" radius={[4, 4, 0, 0]}/>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
