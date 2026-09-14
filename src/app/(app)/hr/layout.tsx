"use client";

import React, { useState } from 'react';
import HRSidebar from '@/components/layout/HRSidebar';
import { usePathname } from 'next/navigation';
import { useHRLayoutStore } from '@/components/layout/useHRLayoutStore';
import { Menu, UserCircle, LogOut } from 'lucide-react';
import Link from 'next/link';
import clsx from 'clsx';

export default function HRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const setHRMobileOpen = useHRLayoutStore(state => state.setMobileSidebarOpen);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <div className="min-h-screen bg-page flex">
      <HRSidebar />
      
      <div className="flex-1 lg:pl-[256px] flex flex-col min-h-screen transition-all duration-300 w-full">
        {/* HR Header */}
        <header className="fixed top-0 right-0 left-0 lg:left-[256px] z-30 h-16 bg-header/90 backdrop-blur-md border-b border-border flex items-center justify-between px-4 md:px-6 transition-all duration-300">
          <div className="flex items-center gap-3">
            <button 
              className="lg:hidden p-2 -ml-2 rounded-md text-sidebar-text-muted hover:bg-primary-subtle hover:text-sidebar-text transition-colors"
              onClick={() => setHRMobileOpen(true)}
            >
              <Menu size={24} />
            </button>
            <h2 className="text-lg font-semibold text-sidebar-text hidden sm:block">HR & Office Portal</h2>
          </div>

          <div className="flex items-center gap-4 relative">
            {/* User Profile */}
            <div className="relative">
              <button 
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className={clsx(
                  "flex items-center gap-2 p-1.5 pr-2 rounded-lg transition-all duration-200 ease-in-out group",
                  showProfileMenu ? "bg-secondary shadow-sm" : "bg-transparent hover:bg-secondary"
                )}
              >
                <UserCircle size={28} className={clsx("transition-colors", showProfileMenu ? "text-primary" : "text-sidebar-text-muted group-hover:text-primary")} />
                <div className="hidden sm:flex flex-col items-start leading-tight">
                  <span className={clsx("text-sm font-semibold transition-colors", showProfileMenu ? "text-primary" : "text-sidebar-text group-hover:text-primary")}>HR Manager</span>
                  <span className="text-xs text-sidebar-text-muted">hr@erp360.com</span>
                </div>
              </button>

              {/* Profile Dropdown */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-xl overflow-hidden fade-in z-50 py-1">
                   <Link href="/hr/my-profile" className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-text-primary hover:bg-bg-page transition">
                     <UserCircle size={16}/> My Profile
                   </Link>
                   <div className="h-px w-full bg-border my-1"></div>
                   <Link href="/login" className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-danger hover:bg-danger/10 transition">
                     <LogOut size={16}/> Logout
                   </Link>
                </div>
              )}
            </div>
          </div>
        </header>
        
        <main className="flex-1 mt-16 w-full overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
