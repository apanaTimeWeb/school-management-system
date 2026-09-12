import React from 'react';
import AdminSidebar from './admin_components/AdminSidebar';
import AdminHeader from './admin_components/AdminHeader';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-page flex">
      <AdminSidebar />
      
      <div className="flex-1 lg:ml-[240px] flex flex-col min-h-screen transition-all duration-300">
        <AdminHeader />
        
        <main className="flex-1 mt-16 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
