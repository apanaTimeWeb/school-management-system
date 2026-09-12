import React from 'react';
import SuperAdminSidebar from './super_admin_components/SuperAdminSidebar';
import SuperAdminHeader from './super_admin_components/SuperAdminHeader';

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-page flex">
      <SuperAdminSidebar />
      
      <div className="flex-1 lg:ml-[240px] flex flex-col min-h-screen transition-all duration-300">
        <SuperAdminHeader />
        
        <main className="flex-1 mt-16 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
