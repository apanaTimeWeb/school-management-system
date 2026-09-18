"use client";

import React from 'react';
import HRSidebar from '@/components/layout/HRSidebar';
import HRHeader from '@/components/layout/HRHeader';
import { usePathname } from 'next/navigation';

export default function HRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FDF2F8] flex">
      <HRSidebar />
      
      <div className="flex-1 lg:pl-[256px] flex flex-col min-h-screen transition-all duration-300 w-full">
        {/* HR Header */}
        <HRHeader />
        
        <main className="flex-1 w-full overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
