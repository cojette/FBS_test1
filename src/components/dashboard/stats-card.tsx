
import React, { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { DateRange } from "react-day-picker";
import { format } from 'date-fns';

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  description: string;
  dateRange?: DateRange;
  seller?: string;
}

export function StatsCard({ title, value: initialValue, icon: Icon, description, dateRange, seller }: StatsCardProps) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    // This effect runs when dateRange or seller changes
    const isPercentage = initialValue.includes('%');
    let newValue: string;

    // A simple hash function to generate a consistent "random" value for a seller
    const sellerHash = seller ? seller.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) : 1;
    
    if (isPercentage) {
      const randomPercentage = (85 + (sellerHash % 15) + (Math.random() * 5)).toFixed(1);
      newValue = `${randomPercentage}%`;
    } else {
      const numericValue = parseInt(initialValue.replace(/,/g, ''), 10);
      if (isNaN(numericValue)) {
          setValue(initialValue);
          return;
      }
      // Use a combination of a base value, seller-specific hash, and a small random factor
      const randomFactor = 0.8 + (sellerHash % 40) / 100 + (Math.random() * 0.2); // 80% to 140%
      newValue = Math.floor(numericValue * randomFactor).toLocaleString();
    }
    setValue(newValue);
  // Using seller in dependency array to re-trigger randomization
  }, [dateRange, initialValue, seller]);


  const getDateRangeText = () => {
    if (!dateRange?.from) return "for all time.";
    const from = format(dateRange.from, "LLL dd, y");
    const to = dateRange.to ? format(dateRange.to, "LLL dd, y") : null;
    return to ? `from ${from} to ${to}` : `since ${from}`;
  }


  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
         {dateRange?.from && (
            <p className="text-xs text-muted-foreground pt-2">
              {getDateRangeText()}
            </p>
          )}
      </CardContent>
    </Card>
  );
}
