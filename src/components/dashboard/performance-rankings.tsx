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
  { rank: 1, name: "김민준", videos: 48, change: 2 },
  { rank: 2, name: "이서연", videos: 42, change: -1 },
  { rank: 3, name: "박도윤", videos: 35, change: 0 },
  { rank: 4, name: "최지우", videos: 31, change: 3 },
  { rank: 5, name: "정하은", videos: 28, change: -1 },
];

const snsRanking = [
  { rank: 1, name: "이서연", shares: 1250, change: 0 },
  { rank: 2, name: "김민준", shares: 1100, change: 1 },
  { rank: 3, name: "박도윤", shares: 980, change: 1 },
  { rank: 4, name: "정하은", shares: 920, change: -2 },
  { rank: 5, name: "최지우", shares: 850, change: 0 },
];

export function PerformanceRankings() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">사내 영상화 순위</CardTitle>
          <CardDescription>
            Top 5 sales representatives by video production.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>순위</TableHead>
                <TableHead>이름</TableHead>
                <TableHead className="text-right">영상 수</TableHead>
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
          <CardTitle className="font-headline">SNS 전달 순위</CardTitle>
          <CardDescription>
            Top 5 sales representatives by SNS shares.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>순위</TableHead>
                <TableHead>이름</TableHead>
                <TableHead className="text-right">전달 수</TableHead>
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
