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
import { Archive, Film, ShieldCheck, UserCheck, Video, FileCheck } from 'lucide-react';
import { SellerPerformanceChart } from '@/components/dashboard/seller-performance-chart';
import { ProductPerformanceChart } from '@/components/dashboard/product-performance-chart';
import { SellerSnsChart } from '@/components/dashboard/seller-sns-chart';
import { DateRangePicker } from '@/components/dashboard/date-range-picker';
import type { DateRange } from 'react-day-picker';
import { subDays } from 'date-fns';

export type DashboardTab = 'headquarters' | 'individual';

export default function Home() {
  const [activeTab, setActiveTab] = React.useState<DashboardTab>('headquarters');
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: subDays(new Date(), 29),
    to: new Date(),
  });
  const [selectedSeller, setSelectedSeller] = React.useState<string>("Minjun Kim");

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarNav />
      </Sidebar>
      <SidebarInset>
        <div className="flex min-h-screen w-full flex-col">
          <Header 
            activeTab={activeTab} 
            onTabChange={setActiveTab}
            selectedSeller={selectedSeller}
            onSellerChange={setSelectedSeller}
          >
             <DateRangePicker date={date} onDateChange={setDate} />
          </Header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 bg-background">
            {activeTab === 'headquarters' ? (
              <>
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                  <StatsCard
                    title="Total Registered Products"
                    value="58"
                    icon={Archive}
                    description="All Products"
                    dateRange={date}
                  />
                  <StatsCard
                    title="Total Registered Videos"
                    value="2,120"
                    icon={Film}
                    description="All Videos"
                    dateRange={date}
                  />
                   <StatsCard
                    title="Overall Review Completion"
                    value="99.1%"
                    icon={ShieldCheck}
                    description="Compared to total videos"
                    dateRange={date}
                  />
                </div>
                <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                  <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                      <SellerPerformanceChart dateRange={date}/>
                      <ProductPerformanceChart dateRange={date}/>
                    </div>
                    <ReviewAnalyticsChart dateRange={date}/>
                    <SellerSnsChart dateRange={date}/>
                  </div>
                  <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                     <PerformanceRankings dateRange={date} selectedSeller={selectedSeller}/>
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
                    dateRange={date}
                  />
                  <StatsCard
                    title="My Customers Reached"
                    value="215"
                    icon={UserCheck}
                    description="+25% from last month"
                    dateRange={date}
                  />
                  <StatsCard
                    title="Total Registered Products"
                    value="12"
                    icon={Archive}
                    description="My registered products"
                    dateRange={date}
                  />
                  <StatsCard
                    title="My Review Completion"
                    value="100%"
                    icon={FileCheck}
                    description="48 of 48 completed"
                    dateRange={date}
                  />
                </div>
                <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                  <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                     <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                      <ProductOverviewChart dateRange={date}/>
                      <SnsDistributionChart dateRange={date}/>
                    </div>
                    <ReviewAnalyticsChart dateRange={date}/>
                  </div>
                  <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                    <PerformanceRankings dateRange={date} selectedSeller={selectedSeller}/>
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
