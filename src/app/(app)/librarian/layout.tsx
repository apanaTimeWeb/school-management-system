"use client";

import React from 'react';
import LibrarianSidebar from '@/components/layout/LibrarianSidebar';
import LibrarianHeader from '@/components/layout/LibrarianHeader';

export default function LibrarianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#FAF5FF] overflow-hidden font-sans">
      
      {/* Sidebar Component */}
      <LibrarianSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen lg:pl-[280px] transition-all duration-300">
        
        {/* Global Header */}
        <LibrarianHeader />

        {/* Scrollable Page Content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>

      </div>
    </div>
  );
}
