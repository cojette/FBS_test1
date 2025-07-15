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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Archive, Film, Users, ShieldCheck, UserCheck, Video, HeartHandshake, FileCheck, ThumbsUp } from 'lucide-react';
import { SellerPerformanceChart } from '@/components/dashboard/seller-performance-chart';
import { ProductPerformanceChart } from '@/components/dashboard/product-performance-chart';
import { SellerSnsChart } from '@/components/dashboard/seller-sns-chart';

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
                    title="Total Registered Products"
                    value="58"
                    icon={Archive}
                    description="All Products"
                  />
                  <StatsCard
                    title="Total Registered Videos"
                    value="2,120"
                    icon={Film}
                    description="All Videos"
                  />
                  <StatsCard
                    title="Total Customers Reached"
                    value="15,830"
                    icon={Users}
                    description="+15.1% from last month"
                  />
                   <StatsCard
                    title="Overall Review Completion"
                    value="99.1%"
                    icon={ShieldCheck}
                    description="Compared to total videos"
                  />
                </div>
                <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                  <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                      <SellerPerformanceChart />
                      <ProductPerformanceChart />
                    </div>
                    <ReviewAnalyticsChart />
                    <SellerSnsChart />
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
                    title="My Registered Videos"
                    value="48"
                    icon={Video}
                    description="This month's registered videos"
                  />
                  <StatsCard
                    title="My Customers"
                    value="215"
                    icon={UserCheck}
                    description="+25% from last month"
                  />
                   <StatsCard
                    title="Customer Contract Conversion"
                    value="32"
                    icon={HeartHandshake}
                    description="This month's customer contracts"
                  />
                  <StatsCard
                    title="My Review Completion"
                    value="100%"
                    icon={FileCheck}
                    description="48 of 48 completed"
                  />
                </div>
                <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                  <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                    <ProductOverviewChart />
                    <ReviewAnalyticsChart />
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                      <SnsDistributionChart />
                       <Card>
                          <CardHeader>
                            <CardTitle className="font-headline">Customer Satisfaction</CardTitle>
                             <CardDescription>Video delivery customer satisfaction status</CardDescription>
                          </CardHeader>
                          <CardContent className="flex flex-col items-center justify-center pt-6">
                            <ThumbsUp className="w-20 h-20 text-primary mb-4" />
                            <div className="text-5xl font-bold">95%</div>
                             <p className="text-sm text-muted-foreground mt-2">Positive Feedback</p>
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
