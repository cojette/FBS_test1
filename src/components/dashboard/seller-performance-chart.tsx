
"use client"

import React, { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip } from "recharts"
import type { DateRange } from "react-day-picker";
import { format } from "date-fns";
import { ChevronDown } from "lucide-react";

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
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { sellers, generateSellerData } from "@/lib/data";

interface SellerPerformanceChartProps {
  dateRange?: DateRange;
}

export function SellerPerformanceChart({ dateRange }: SellerPerformanceChartProps) {
  const [selectedSellers, setSelectedSellers] = useState<string[]>(sellers.slice(0, 5));
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    const data = selectedSellers.map(seller => generateSellerData(seller, dateRange));
    setChartData(data);
  }, [dateRange, selectedSellers]);

  const handleSellerSelection = (seller: string) => {
    setSelectedSellers(prev => 
      prev.includes(seller) 
        ? prev.filter(s => s !== seller) 
        : [...prev, seller]
    );
  };

  const getDateRangeText = () => {
    if (!dateRange?.from) return "for all time.";
    const from = format(dateRange.from, "LLL dd, y");
    const to = dateRange.to ? format(dateRange.to, "LLL dd, y") : null;
    return to ? `from ${from} to ${to}.` : `since ${from}.`;
  }
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <CardTitle className="font-headline">Seller Performance</CardTitle>
          <CardDescription>
            Key metrics by seller. Select sellers to compare.
          </CardDescription>
          <CardDescription className="text-xs text-muted-foreground pt-1">Showing data {getDateRangeText()}</CardDescription>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Select Sellers <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 h-72 overflow-y-auto">
            {sellers.map(seller => (
              <DropdownMenuCheckboxItem
                key={seller}
                checked={selectedSellers.includes(seller)}
                onSelect={(e) => e.preventDefault()}
                onClick={() => handleSellerSelection(seller)}
              >
                {seller}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
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
            <Bar dataKey="meetingsBooked" fill="hsl(var(--chart-4))" name="Meetings" radius={[4, 4, 0, 0]}/>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
