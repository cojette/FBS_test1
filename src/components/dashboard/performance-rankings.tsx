
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import type { DateRange } from "react-day-picker";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { sellers } from "@/lib/data";

const generateInitialRankings = () => {
    return sellers.map(name => ({
        name,
        uploads: Math.floor(Math.random() * 80) + 10,
        approvals: Math.floor(Math.random() * 70) + 5,
        shares: Math.floor(Math.random() * 150) + 20,
        meetings: Math.floor(Math.random() * 40) + 5,
    }));
};

type RankingMetric = 'uploads' | 'approvals' | 'shares' | 'meetings';

const initialRankings = {
    uploads: generateInitialRankings().sort((a, b) => b.uploads - a.uploads).map((item, index) => ({...item, rank: index + 1})),
    approvals: generateInitialRankings().sort((a, b) => b.approvals - a.approvals).map((item, index) => ({...item, rank: index + 1})),
    shares: generateInitialRankings().sort((a, b) => b.shares - a.shares).map((item, index) => ({...item, rank: index + 1})),
    meetings: generateInitialRankings().sort((a, b) => b.meetings - a.meetings).map((item, index) => ({...item, rank: index + 1})),
};

interface PerformanceRankingsProps {
  dateRange?: DateRange;
  selectedSeller?: string;
  metric: RankingMetric;
}

const metricConfig = {
    uploads: { title: "Video Upload Ranking", valueKey: "uploads", valueHeader: "Uploads" },
    approvals: { title: "Compliance Approval Ranking", valueKey: "approvals", valueHeader: "Approvals" },
    shares: { title: "Video Sharing Ranking", valueKey: "shares", valueHeader: "Shares" },
    meetings: { title: "Meetings Booked Ranking", valueKey: "meetings", valueHeader: "Meetings" },
};

export function PerformanceRankings({ dateRange, selectedSeller, metric }: PerformanceRankingsProps) {
  const [rankings, setRankings] = useState(initialRankings[metric]);
  
  const config = metricConfig[metric];

  useEffect(() => {
    if (dateRange?.from) {
      const newRankings = generateInitialRankings()
        .sort((a, b) => b[metric] - a[metric])
        .map((item, index) => ({ ...item, rank: index + 1 }));
      setRankings(newRankings);
    }
  }, [dateRange, metric]);

  const getDateRangeText = () => {
    if (!dateRange?.from) return null;
    const from = format(dateRange.from, "LLL dd, y");
    const to = dateRange.to ? format(dateRange.to, "LLL dd, y") : null;
    return to ? `${from} - ${to}` : from;
  }

  const getRowClass = (name: string) => {
    if (name === selectedSeller) return "bg-accent";
    return "";
  };

  const getBadgeVariant = (name: string) => {
    if (name === selectedSeller) return "default";
    return "secondary";
  };
  
  const getCellClass = (name: string) => {
    if (name === selectedSeller) return "text-accent-foreground";
    return "";
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">{config.title}</CardTitle>
        <CardDescription>
          Top 10 sellers by {config.valueHeader.toLowerCase()}.
          {dateRange?.from && <div className="text-xs text-muted-foreground pt-1">{getDateRangeText()}</div>}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Rank</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">{config.valueHeader}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rankings.slice(0, 10).map((item) => (
              <TableRow key={item.name} className={getRowClass(item.name)}>
                <TableCell>
                  <Badge variant={getBadgeVariant(item.name)}>{item.rank}</Badge>
                </TableCell>
                <TableCell className={cn("font-medium", getCellClass(item.name))}>{item.name}</TableCell>
                <TableCell className={cn("text-right", getCellClass(item.name))}>
                  {item[metric as keyof typeof item]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
