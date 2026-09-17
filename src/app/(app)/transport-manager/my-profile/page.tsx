import React from 'react';
import MyProfileMain from './my_profile_components/MyProfileMain';
import { Metadata } from 'next';

// RESPONSIBILITY: Server component for My Profile Route

export const metadata: Metadata = {
  title: 'My Profile | Transport Manager',
  description: 'Manage personal information, security settings, active sessions, and login history.',
};

export default function MyProfilePage() {
  return (
    <div className="w-full h-full min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <MyProfileMain />
    </div>
  );
}
