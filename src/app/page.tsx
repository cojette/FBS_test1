import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { SidebarNav } from '@/components/sidebar-nav';
import { Header } from '@/components/dashboard/header';
import { StatsCard } from '@/components/dashboard/stats-card';
import { ProductOverviewChart } from '@/components/dashboard/product-overview-chart';
import { ReviewAnalyticsChart } from '@/components/dashboard/review-analytics-chart';
import { SnsDistributionChart } from '@/components/dashboard/sns-distribution-chart';
import { PerformanceRankings } from '@/components/dashboard/performance-rankings';
import { Archive, Film, Users, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarNav />
      </Sidebar>
      <SidebarInset>
        <div className="flex min-h-screen w-full flex-col">
          <Header />
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 bg-background">
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
              <StatsCard
                title="등록 상품"
                value="32"
                icon={Archive}
                description="총 상품 갯수"
              />
              <StatsCard
                title="등록 영상"
                value="1,245"
                icon={Film}
                description="총 영상 갯수"
              />
              <StatsCard
                title="전달 고객 수"
                value="8,321"
                icon={Users}
                description="+12.2% from last month"
              />
              <StatsCard
                title="검토 완료"
                value="98.5%"
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
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
