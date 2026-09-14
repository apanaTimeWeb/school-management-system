"use client";

import React, { useState } from 'react';
import AdminSidebar from './admin_components/AdminSidebar';
import AdminHeader from './admin_components/AdminHeader';
import HRSidebar from '@/components/layout/HRSidebar';
import { usePathname } from 'next/navigation';
import { useHRLayoutStore } from '@/components/layout/useHRLayoutStore';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const isHRPath = pathname.startsWith('/admin/hr_') || pathname.startsWith('/admin/office_admin');
  const setHRMobileOpen = useHRLayoutStore(state => state.setMobileSidebarOpen);

  const handleMenuClick = () => {
    if (isHRPath) {
      setHRMobileOpen(true);
    } else {
      setIsSidebarOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-page flex">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && !isHRPath && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {isHRPath ? <HRSidebar /> : <AdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />}
      
      <div className="flex-1 md:pl-[280px] flex flex-col min-h-screen transition-all duration-300 w-full">
        <AdminHeader onMenuClick={handleMenuClick} />
        
        <main className="flex-1 mt-16 p-4 md:p-6 w-full max-w-[100vw] overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
