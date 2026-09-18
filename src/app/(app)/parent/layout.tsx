"use client";

import React, { useState } from 'react';
import ParentSidebar from '../../../components/layout/ParentSidebar';
import ParentHeader from '../../../components/layout/ParentHeader';

export default function ParentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-[#FFFBEB] overflow-hidden font-sans">
      {/* Sidebar */}
      <ParentSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative lg:ml-[280px]">
        
        {/* Header */}
        <ParentHeader toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        
        {/* Scrollable Page Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {children}
        </div>

      </div>
    </div>
  );
}
