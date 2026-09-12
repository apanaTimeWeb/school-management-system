"use client";

import React, { useState } from 'react';
import SuperAdminSidebar from './super_admin_components/SuperAdminSidebar';
import SuperAdminHeader from './super_admin_components/SuperAdminHeader';

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-page flex">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <SuperAdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      <div className="flex-1 md:pl-[280px] flex flex-col min-h-screen transition-all duration-300 w-full">
        <SuperAdminHeader onMenuClick={() => setIsSidebarOpen(true)} />
        
        <main className="flex-1 mt-16 p-4 md:p-6 w-full max-w-[100vw] overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
