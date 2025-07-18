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
  { name: 'Minjun K.', uploaded: 58, approved: 52 },
  { name: 'Seoyeon L.', uploaded: 52, approved: 48 },
  { name: 'Doyun P.', uploaded: 45, approved: 41 },
  { name: 'Jiwu C.', uploaded: 41, approved: 35 },
  { name: 'Haeun J.', uploaded: 38, approved: 36 },
];

interface SellerPerformanceChartProps {
  dateRange?: DateRange;
}

export function SellerPerformanceChart({ dateRange }: SellerPerformanceChartProps) {
  const [chartData, setChartData] = useState(initialData);

  useEffect(() => {
    if(dateRange?.from) {
      setChartData(initialData.map(item => {
        const uploaded = Math.floor(Math.random() * 60) + 10;
        const approved = Math.floor(uploaded * (0.8 + Math.random() * 0.2));
        return {
          ...item,
          uploaded,
          approved,
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
        <CardTitle className="font-headline">Seller Performance</CardTitle>
        <CardDescription>
          Video uploads and compliance approvals by top sellers.
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
            <Bar dataKey="uploaded" fill="hsl(var(--chart-2))" name="Uploaded" radius={[4, 4, 0, 0]} />
            <Bar dataKey="approved" fill="hsl(var(--chart-1))" name="Approved" radius={[4, 4, 0, 0]}/>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
