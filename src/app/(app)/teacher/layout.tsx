import React from 'react';
import TeacherSidebar from '@/components/layout/TeacherSidebar';
import TeacherHeader from '@/components/layout/TeacherHeader';
import TeacherComingSoonModal from '@/components/layout/TeacherComingSoonModal';

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg-main flex">
      <TeacherSidebar />
      <div className="flex-1 flex flex-col min-w-0 lg:pl-64 transition-all duration-300">
        <TeacherHeader />
        <main className="flex-1 overflow-x-hidden p-4 md:p-6 pb-24">
          {children}
        </main>
      </div>
      <TeacherComingSoonModal />
    </div>
  );
}
