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
}

export function StatsCard({ title, value: initialValue, icon: Icon, description, dateRange }: StatsCardProps) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    if (dateRange?.from) {
      const isPercentage = initialValue.includes('%');
      let newValue: string;
      if (isPercentage) {
        const randomPercentage = (Math.random() * 10 + 88).toFixed(1);
        newValue = `${randomPercentage}%`;
      } else {
        const numericValue = parseInt(initialValue.replace(/,/g, ''), 10);
        if (isNaN(numericValue)) {
            setValue(initialValue);
            return;
        }
        const randomFactor = 0.8 + Math.random() * 0.4; // 80% to 120%
        newValue = Math.floor(numericValue * randomFactor).toLocaleString();
      }
      setValue(newValue);
    }
  }, [dateRange, initialValue]);


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
