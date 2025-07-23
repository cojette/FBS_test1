
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
    }));
};


const initialUploadRanking = generateInitialRankings().sort((a, b) => b.uploads - a.uploads).map((item, index) => ({...item, rank: index + 1}));
const initialApprovalRanking = generateInitialRankings().sort((a, b) => b.approvals - a.approvals).map((item, index) => ({...item, rank: index + 1}));


interface PerformanceRankingsProps {
  dateRange?: DateRange;
  selectedSeller?: string;
}

export function PerformanceRankings({ dateRange, selectedSeller }: PerformanceRankingsProps) {
  const [uploadRanking, setUploadRanking] = useState(initialUploadRanking);
  const [approvalRanking, setApprovalRanking] = useState(initialApprovalRanking);

  useEffect(() => {
    if (dateRange?.from) {
      const newUploads = generateInitialRankings()
        .sort((a, b) => b.uploads - a.uploads)
        .map((item, index) => ({ ...item, rank: index + 1 }));
      setUploadRanking(newUploads);
      
      const newApprovals = generateInitialRankings()
        .sort((a, b) => b.approvals - a.approvals)
        .map((item, index) => ({ ...item, rank: index + 1 }));
      setApprovalRanking(newApprovals);
    }
  }, [dateRange]);


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
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Video Upload Ranking</CardTitle>
          <CardDescription>
            Top 10 sellers by video uploads.
            {dateRange?.from && <div className="text-xs text-muted-foreground pt-1">{getDateRangeText()}</div>}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="text-right">Uploads</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {uploadRanking.slice(0, 10).map((item) => (
                <TableRow key={item.name} className={getRowClass(item.name)}>
                  <TableCell>
                    <Badge variant={getBadgeVariant(item.name)}>{item.rank}</Badge>
                  </TableCell>
                  <TableCell className={cn("font-medium", getCellClass(item.name))}>{item.name}</TableCell>
                  <TableCell className={cn("text-right", getCellClass(item.name))}>{item.uploads}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Compliance Approval Ranking</CardTitle>
          <CardDescription>
            Top 10 sellers by compliance approvals.
             {dateRange?.from && <div className="text-xs text-muted-foreground pt-1">{getDateRangeText()}</div>}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="text-right">Approvals</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {approvalRanking.slice(0, 10).map((item) => (
                <TableRow key={item.name} className={getRowClass(item.name)}>
                  <TableCell>
                    <Badge variant={getBadgeVariant(item.name)}>{item.rank}</Badge>
                  </TableCell>
                  <TableCell className={cn("font-medium", getCellClass(item.name))}>{item.name}</TableCell>
                  <TableCell className={cn("text-right", getCellClass(item.name))}>{item.approvals}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
