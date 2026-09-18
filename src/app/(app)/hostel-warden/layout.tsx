import React from 'react';
import HostelWardenSidebar from '@/components/layout/HostelWardenSidebar';
import HostelWardenHeader from '@/components/layout/HostelWardenHeader';

export default function HostelWardenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#F0FDF4]">
      <HostelWardenSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <HostelWardenHeader />
        <main className="flex-1 overflow-y-auto overflow-x-hidden pt-16 lg:pl-[280px]">
          {children}
        </main>
      </div>
    </div>
  );
}
