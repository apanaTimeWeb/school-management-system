"use client";

import React from 'react';
import SuperAdminSidebar from '@/components/layout/SuperAdminSidebar';
import SuperAdminHeader from '@/components/layout/SuperAdminHeader';

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#EFF6FF] overflow-hidden font-sans">
      <SuperAdminSidebar />
      <div className="flex-1 flex flex-col h-screen md:pl-[280px] transition-all duration-300">
        <SuperAdminHeader />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
