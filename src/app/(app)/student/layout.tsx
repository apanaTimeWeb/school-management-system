"use client";

import React, { useState } from 'react';
import StudentSidebar from '../../../components/layout/StudentSidebar';
import StudentHeader from '../../../components/layout/StudentHeader';

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-bg-main overflow-hidden font-sans">
      {/* Sidebar */}
      <StudentSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative lg:ml-[280px]">
        
        {/* Header */}
        <StudentHeader toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        
        {/* Scrollable Page Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {children}
        </div>

      </div>
    </div>
  );
}
