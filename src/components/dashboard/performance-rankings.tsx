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

export function PerformanceRankings() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Internal Video Production Ranking</CardTitle>
          <CardDescription>
            Top 5 sales representatives by video production.
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
                <TableRow key={item.rank}>
                  <TableCell>
                    <Badge variant="secondary">{item.rank}</Badge>
                  </TableCell>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell className="text-right">{item.videos}</TableCell>
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
                <TableRow key={item.rank}>
                  <TableCell>
                    <Badge variant="secondary">{item.rank}</Badge>
                  </TableCell>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell className="text-right">{item.shares.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
