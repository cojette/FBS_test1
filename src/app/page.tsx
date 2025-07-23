
"use client"

import * as React from 'react';
import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { SidebarNav } from '@/components/sidebar-nav';
import { Header } from '@/components/dashboard/header';
import { StatsCard } from '@/components/dashboard/stats-card';
import { PerformanceRankings } from '@/components/dashboard/performance-rankings';
import { Video, ShieldCheck, Clock, CheckCircle, XCircle, Send, Package, BarChart, FileText, Share2, Users, Target, CalendarCheck, PlayCircle, MessageSquare } from 'lucide-react';
import { SellerPerformanceChart } from '@/components/dashboard/seller-performance-chart';
import { DateRangePicker } from '@/components/dashboard/date-range-picker';
import type { DateRange } from 'react-day-picker';
import { subDays } from 'date-fns';
import { ComplianceStatusChart } from '@/components/dashboard/compliance-status-chart';
import { VideoSharingChart } from '@/components/dashboard/video-sharing-chart';
import { ComplianceReviewAnalytics } from '@/components/dashboard/compliance-review-analytics';
import { ProductPerformanceChart } from '@/components/dashboard/product-performance-chart';

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
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                  <StatsCard
                    title="Total Videos Uploaded"
                    value="1,250"
                    icon={Video}
                    description="All videos from sellers"
                    dateRange={date}
                  />
                  <StatsCard
                    title="Overall Compliance Rate"
                    value="92.8%"
                    icon={ShieldCheck}
                    description="Approved videos vs. total"
                    dateRange={date}
                  />
                   <StatsCard
                    title="Videos Awaiting Review"
                    value="42"
                    icon={Clock}
                    description="Pending compliance officer approval"
                    dateRange={date}
                  />
                   <StatsCard
                    title="Meetings Booked"
                    value="215"
                    icon={CalendarCheck}
                    description="Total meetings scheduled"
                    dateRange={date}
                  />
                </div>
                <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                  <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                     <ComplianceReviewAnalytics dateRange={date} />
                     <SellerPerformanceChart dateRange={date}/>
                     <ProductPerformanceChart dateRange={date}/>
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
                    title="My Videos Uploaded"
                    value="58"
                    icon={Video}
                    description="Total videos you uploaded"
                    dateRange={date}
                    seller={selectedSeller}
                  />
                  <StatsCard
                    title="My Videos Watched"
                    value="1,280"
                    icon={PlayCircle}
                    description="Total views on your videos"
                    dateRange={date}
                     seller={selectedSeller}
                  />
                   <StatsCard
                    title="My Meetings Booked"
                    value="23"
                    icon={CalendarCheck}
                    description="Meetings you've scheduled"
                    dateRange={date}
                     seller={selectedSeller}
                  />
                   <StatsCard
                    title="My Chat Messages"
                    value="157"
                    icon={MessageSquare}
                    description="Messages sent to buyers"
                    dateRange={date}
                     seller={selectedSeller}
                  />
                </div>
                <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                  <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                    <ComplianceReviewAnalytics dateRange={date} seller={selectedSeller}/>
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                      <ComplianceStatusChart dateRange={date} seller={selectedSeller}/>
                      <VideoSharingChart dateRange={date} seller={selectedSeller}/>
                    </div>
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
