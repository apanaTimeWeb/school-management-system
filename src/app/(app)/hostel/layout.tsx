"use client";

import React, { useState } from 'react';
import HostelSidebar from '@/components/layout/HostelSidebar';
import HostelHeader from '@/components/layout/HostelHeader';

export default function HostelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-page flex">
      <HostelSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      
      <div className="flex-1 lg:pl-[280px] flex flex-col min-h-screen transition-all duration-300 w-full">
        <HostelHeader />
        
        <main className="flex-1 w-full overflow-x-hidden p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
