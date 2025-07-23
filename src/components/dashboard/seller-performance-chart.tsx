
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
  { name: 'Minjun K.', uploaded: 58, approved: 52, shared: 45 },
  { name: 'Seoyeon L.', uploaded: 52, approved: 48, shared: 42 },
  { name: 'Doyun P.', uploaded: 45, approved: 41, shared: 35 },
  { name: 'Jiwu C.', uploaded: 41, approved: 35, shared: 28 },
  { name: 'Haeun J.', uploaded: 38, approved: 36, shared: 31 },
  { name: 'Yejun S.', uploaded: 35, approved: 31, shared: 25 },
  { name: 'Somin H.', uploaded: 32, approved: 28, shared: 22 },
  { name: 'Eunwoo L.', uploaded: 29, approved: 25, shared: 20 },
  { name: 'Jiho Y.', uploaded: 26, approved: 22, shared: 18 },
  { name: 'Sia K.', uploaded: 23, approved: 20, shared: 15 },
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
        const shared = Math.floor(approved * (0.7 + Math.random() * 0.25));
        return {
          ...item,
          uploaded,
          approved,
          shared
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
        <CardTitle className="font-headline">Seller Performance</CardTitle>
        <CardDescription>
          Video uploads, compliance approvals, and shares by top sellers.
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
            <Bar dataKey="uploaded" fill="hsl(var(--chart-2))" name="Uploaded" radius={[4, 4, 0, 0]} />
            <Bar dataKey="approved" fill="hsl(var(--chart-1))" name="Approved" radius={[4, 4, 0, 0]}/>
            <Bar dataKey="shared" fill="hsl(var(--chart-3))" name="Shared" radius={[4, 4, 0, 0]}/>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
