import React from 'react';
import NoticeBoardMain from './notice_components/NoticeBoardMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notice Board | Hostel Warden',
  description: 'Broadcast announcements, maintenance schedules, and urgent alerts to students.',
};

export default function NoticeBoardPage() {
  return (
    <div className="w-full h-full min-h-[calc(100vh-64px)] bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <NoticeBoardMain />
    </div>
  );
}
