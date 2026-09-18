"use client";

import React, { useState } from 'react';
import TransportSidebar from '@/components/layout/TransportSidebar';
import TransportHeader from '@/components/layout/TransportHeader';

export default function TransportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-page flex">
      <TransportSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      
      <div className="flex-1 lg:pl-[280px] flex flex-col min-h-screen transition-all duration-300 w-full">
        <TransportHeader />
        
        <main className="flex-1 w-full overflow-x-hidden p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
