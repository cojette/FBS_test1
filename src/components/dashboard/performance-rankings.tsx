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


const videoRanking = [
  { rank: 1, name: "Minjun Kim", videos: 48, change: 2 },
  { rank: 2, name: "Seoyeon Lee", videos: 42, change: -1 },
  { rank: 3, name: "Doyun Park", videos: 35, change: 0 },
  { rank: 4, name: "Jiwu Choi", videos: 31, change: 3 },
  { rank: 5, name: "Haeun Jeong", videos: 28, change: -1 },
];

const snsRanking = [
  { rank: 1, name: "Seoyeon Lee", shares: 1250, change: 0 },
  { rank: 2, name: "Minjun Kim", shares: 1100, change: 1 },
  { rank: 3, name: "Doyun Park", shares: 980, change: 1 },
  { rank: 4, name: "Haeun Jeong", shares: 920, change: -2 },
  { rank: 5, name: "Jiwu Choi", shares: 850, change: 0 },
];

interface PerformanceRankingsProps {
  dateRange?: DateRange;
  selectedSeller?: string;
}

export function PerformanceRankings({ dateRange, selectedSeller }: PerformanceRankingsProps) {
  const getDateRangeText = () => {
    if (!dateRange?.from) return null;
    const from = format(dateRange.from, "LLL dd, y");
    const to = dateRange.to ? format(dateRange.to, "LLL dd, y") : null;
    return to ? `${from} - ${to}` : from;
  }

  const isSelected = (name: string) => name === selectedSeller;

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Internal Video Production Ranking</CardTitle>
          <CardDescription>
            Top 5 sales representatives by video production.
            {dateRange?.from && <div className="text-xs text-muted-foreground pt-1">{getDateRangeText()}</div>}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="text-right">Videos</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {videoRanking.map((item) => (
                <TableRow key={item.rank} className={cn(isSelected(item.name) && "bg-accent")}>
                  <TableCell>
                    <Badge variant={isSelected(item.name) ? "default" : "secondary"}>{item.rank}</Badge>
                  </TableCell>
                  <TableCell className={cn("font-medium", isSelected(item.name) ? "text-accent-foreground" : "")}>{item.name}</TableCell>
                  <TableCell className={cn("text-right", isSelected(item.name) ? "text-accent-foreground" : "")}>{item.videos}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">SNS Distribution Ranking</CardTitle>
          <CardDescription>
            Top 5 sales representatives by SNS shares.
             {dateRange?.from && <div className="text-xs text-muted-foreground pt-1">{getDateRangeText()}</div>}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="text-right">Shares</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {snsRanking.map((item) => (
                <TableRow key={item.rank} className={cn(isSelected(item.name) && "bg-accent")}>
                  <TableCell>
                    <Badge variant={isSelected(item.name) ? "default" : "secondary"}>{item.rank}</Badge>
                  </TableCell>
                  <TableCell className={cn("font-medium", isSelected(item.name) ? "text-accent-foreground" : "")}>{item.name}</TableCell>
                  <TableCell className={cn("text-right", isSelected(item.name) ? "text-accent-foreground" : "")}>{item.shares.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
