import React from 'react';
import RoleGuard from '@/components/RoleGuard';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <RoleGuard>
      {children}
    </RoleGuard>
  );
}
