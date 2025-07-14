import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  LayoutGrid,
  Package,
  Video,
  ClipboardCheck,
  Share2,
  Trophy,
  ShieldCheck,
  Settings,
  LogOut,
} from "lucide-react";

export function SidebarNav() {
  return (
    <>
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2 p-1">
          <ShieldCheck className="h-8 w-8 text-sky-300" />
          <h2 className="text-xl font-headline font-bold text-sidebar-foreground">
            VeriSend
          </h2>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Dashboard" isActive>
              <LayoutGrid />
              <span>대시보드</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Products">
              <Package />
              <span>상품</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Videos">
              <Video />
              <span>영상</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Reviews">
              <ClipboardCheck />
              <span>검토</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Distribution">
              <Share2 />
              <span>전달</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Ranking">
              <Trophy />
              <span>순위</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Settings">
              <Settings />
              <span>설정</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <LogOut />
              <span>로그아웃</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="flex items-center gap-3 p-2 border-t border-sidebar-border">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://placehold.co/40x40.png" data-ai-hint="person avatar" />
            <AvatarFallback>SR</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-sm">
            <span className="font-semibold text-sidebar-foreground">
              Sales Rep
            </span>
            <span className="text-muted-foreground">
              sales.rep@verisend.com
            </span>
          </div>
        </div>
      </SidebarFooter>
    </>
  );
}
