import React from 'react';
import TransportManagerSidebar from '@/components/layout/TransportManagerSidebar';
import TransportManagerHeader from '@/components/layout/TransportManagerHeader';

export default function TransportManagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <TransportManagerSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TransportManagerHeader />
        <main className="flex-1 overflow-y-auto overflow-x-hidden pt-16 lg:pl-[280px]">
          {children}
        </main>
      </div>
    </div>
  );
}
