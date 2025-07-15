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

export function StatsCard({ title, value, icon: Icon, description, dateRange }: StatsCardProps) {
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
              {format(dateRange.from, "LLL dd, y")}
              {dateRange.to ? ` - ${format(dateRange.to, "LLL dd, y")}` : ""}
            </p>
          )}
      </CardContent>
    </Card>
  );
}
