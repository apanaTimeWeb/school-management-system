import React from 'react';
import MyProfileMain from './profile_components/MyProfileMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Profile | Hostel Warden',
  description: 'View and edit your personal information and assignment details.',
};

export default function MyProfilePage() {
  return (
    <div className="w-full h-full min-h-[calc(100vh-64px)] bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <MyProfileMain />
    </div>
  );
}
