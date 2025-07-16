"use client"

import React, { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer } from "recharts"
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
  {
    name: 'Minjun K.',
    WhatsApp: 400,
    Instagram: 240,
    Facebook: 140,
    customers: 780,
  },
  {
    name: 'Seoyeon L.',
    WhatsApp: 300,
    Instagram: 139,
    Facebook: 100,
    customers: 539,
  },
  {
    name: 'Doyun P.',
    WhatsApp: 200,
    Instagram: 980,
    Facebook: 200,
    customers: 1380,
  },
  {
    name: 'Jiwu C.',
    WhatsApp: 278,
    Instagram: 390,
    Facebook: 150,
    customers: 818,
  },
  {
    name: 'Haeun J.',
    WhatsApp: 189,
    Instagram: 480,
    Facebook: 210,
    customers: 879,
  },
];

interface SellerSnsChartProps {
  dateRange?: DateRange;
}

export function SellerSnsChart({ dateRange }: SellerSnsChartProps) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    if (dateRange?.from) {
      setData(initialData.map(item => ({
        ...item,
        WhatsApp: Math.floor(Math.random() * 500),
        Instagram: Math.floor(Math.random() * 1000),
        Facebook: Math.floor(Math.random() * 300),
        customers: Math.floor(Math.random() * 1500),
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
        <CardTitle className="font-headline">SNS Distribution by Seller</CardTitle>
        <CardDescription>
          Shares and customers reached per seller
          {dateRange?.from && <div className="text-xs text-muted-foreground pt-1">{getDateRangeText()}</div>}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}} className="min-h-[300px] w-full">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
              />
              <Legend />
              <Bar dataKey="WhatsApp" stackId="a" fill="hsl(var(--chart-1))" name="WhatsApp" />
              <Bar dataKey="Instagram" stackId="a" fill="hsl(var(--chart-2))" name="Instagram" />
              <Bar dataKey="Facebook" stackId="a" fill="hsl(var(--chart-3))" name="Facebook" />
              <Bar dataKey="customers" fill="hsl(var(--chart-5))" name="Customers Reached" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
