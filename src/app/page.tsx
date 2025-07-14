"use client"

import * as React from 'react';
import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { SidebarNav } from '@/components/sidebar-nav';
import { Header } from '@/components/dashboard/header';
import { StatsCard } from '@/components/dashboard/stats-card';
import { ProductOverviewChart } from '@/components/dashboard/product-overview-chart';
import { ReviewAnalyticsChart } from '@/components/dashboard/review-analytics-chart';
import { SnsDistributionChart } from '@/components/dashboard/sns-distribution-chart';
import { PerformanceRankings } from '@/components/dashboard/performance-rankings';
import { Archive, Film, Users, ShieldCheck, UserCheck, Video, HeartHandshake, FileCheck, ThumbsUp } from 'lucide-react';

export type DashboardTab = 'headquarters' | 'individual';

export default function Home() {
  const [activeTab, setActiveTab] = React.useState<DashboardTab>('headquarters');

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarNav />
      </Sidebar>
      <SidebarInset>
        <div className="flex min-h-screen w-full flex-col">
          <Header activeTab={activeTab} onTabChange={setActiveTab} />
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 bg-background">
            {activeTab === 'headquarters' ? (
              <>
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                  <StatsCard
                    title="총 등록 상품"
                    value="58"
                    icon={Archive}
                    description="전체 상품 갯수"
                  />
                  <StatsCard
                    title="총 등록 영상"
                    value="2,120"
                    icon={Film}
                    description="전체 영상 갯수"
                  />
                  <StatsCard
                    title="총 전달 고객"
                    value="15,830"
                    icon={Users}
                    description="+15.1% from last month"
                  />
                   <StatsCard
                    title="전체 검토 완료"
                    value="99.1%"
                    icon={ShieldCheck}
                    description="전체 영상 대비"
                  />
                </div>
                <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                  <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                    <ProductOverviewChart />
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                      <SnsDistributionChart />
                      <ReviewAnalyticsChart />
                    </div>
                  </div>
                  <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                    <PerformanceRankings />
                  </div>
                </div>
              </>
            ) : (
              <>
                 <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                  <StatsCard
                    title="내 등록 영상"
                    value="48"
                    icon={Video}
                    description="이번달 등록 영상"
                  />
                  <StatsCard
                    title="내 고객"
                    value="215"
                    icon={UserCheck}
                    description="+25% from last month"
                  />
                   <StatsCard
                    title="고객 계약 전환"
                    value="32"
                    icon={HeartHandshake}
                    description="이번달 고객 계약"
                  />
                  <StatsCard
                    title="내 검토 완료"
                    value="100%"
                    icon={FileCheck}
                    description="48건 중 48건 완료"
                  />
                </div>
                <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                  <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                    <ProductOverviewChart />
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                      <SnsDistributionChart />
                       <Card>
                          <CardHeader>
                            <CardTitle className="font-headline">고객 만족도</CardTitle>
                             <CardDescription>영상 전달 고객 만족도 현황</CardDescription>
                          </CardHeader>
                          <CardContent className="flex flex-col items-center justify-center pt-6">
                            <ThumbsUp className="w-20 h-20 text-primary mb-4" />
                            <div className="text-5xl font-bold">95%</div>
                             <p className="text-sm text-muted-foreground mt-2">긍정적 피드백</p>
                          </CardContent>
                        </Card>
                    </div>
                  </div>
                  <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                    <PerformanceRankings />
                  </div>
                </div>
              </>
            )}
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

// Add Card, CardHeader, CardTitle, CardDescription, CardContent for completeness from individual dashboard
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
