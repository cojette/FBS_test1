"use client";

import * as React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { DashboardTab } from '@/app/page';

const sellers = [
  "Minjun Kim",
  "Seoyeon Lee",
  "Doyun Park",
  "Jiwu Choi",
  "Haeun Jeong",
];

interface HeaderProps {
  activeTab: DashboardTab;
  onTabChange: (tab: DashboardTab) => void;
  selectedSeller: string;
  onSellerChange: (seller: string) => void;
  children?: React.ReactNode;
}

export function Header({ 
  activeTab, 
  onTabChange, 
  selectedSeller,
  onSellerChange,
  children 
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-card/80 backdrop-blur-sm px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <SidebarTrigger className="md:hidden" />
      <div className="flex items-center gap-4">
        <Tabs 
          defaultValue="headquarters" 
          value={activeTab} 
          onValueChange={(value) => onTabChange(value as DashboardTab)}
        >
          <TabsList>
            <TabsTrigger value="headquarters">Headquarters</TabsTrigger>
            <TabsTrigger value="individual">Individual</TabsTrigger>
          </TabsList>
        </Tabs>
        {activeTab === 'individual' && (
           <Select value={selectedSeller} onValueChange={onSellerChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Seller" />
            </SelectTrigger>
            <SelectContent>
              {sellers.map(seller => (
                <SelectItem key={seller} value={seller}>{seller}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>
      <div className="flex flex-1 items-center justify-end gap-4">
        {children}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="overflow-hidden rounded-full"
            >
              <Avatar>
                <AvatarImage src="https://placehold.co/32x32.png" alt="@sales_rep" data-ai-hint="person avatar" />
                <AvatarFallback>SR</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
