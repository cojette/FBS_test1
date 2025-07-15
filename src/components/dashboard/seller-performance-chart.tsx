"use client"

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

const chartData = [
  { name: 'Minjun K.', created: 48, distributed: 40 },
  { name: 'Seoyeon L.', created: 42, distributed: 38 },
  { name: 'Doyun P.', created: 35, distributed: 28 },
  { name: 'Jiwu C.', created: 31, distributed: 25 },
  { name: 'Haeun J.', created: 28, distributed: 22 },
];

interface SellerPerformanceChartProps {
  dateRange?: DateRange;
}

export function SellerPerformanceChart({ dateRange }: SellerPerformanceChartProps) {
    const getDateRangeText = () => {
    if (!dateRange?.from) return null;
    const from = format(dateRange.from, "LLL dd, y");
    const to = dateRange.to ? format(dateRange.to, "LLL dd, y") : null;
    return to ? `${from} - ${to}` : from;
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Seller Performance</CardTitle>
        <CardDescription>
          Video creation and distribution by seller
          {dateRange?.from && <div className="text-xs text-muted-foreground pt-1">{getDateRangeText()}</div>}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}} className="min-h-[250px] w-full">
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
