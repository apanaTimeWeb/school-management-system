import React from 'react';
import PrincipalSidebar from '@/components/layout/PrincipalSidebar';
import PrincipalHeader from '@/components/layout/PrincipalHeader';
import PrincipalComingSoonModal from '@/components/layout/PrincipalComingSoonModal';

export default function PrincipalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg-main flex">
      <PrincipalSidebar />
      <div className="flex-1 flex flex-col min-w-0 lg:pl-64 transition-all duration-300">
        <PrincipalHeader />
        <main className="flex-1 overflow-x-hidden p-4 md:p-6 pb-24">
          {children}
        </main>
      </div>
      <PrincipalComingSoonModal />
    </div>
  );
}
