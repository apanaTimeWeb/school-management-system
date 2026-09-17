import React from 'react';
import DisciplinaryMain from './disciplinary_components/DisciplinaryMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disciplinary Actions | Hostel Warden',
  description: 'Log incidents, track disciplinary measures, fines, and parent notifications.',
};

export default function DisciplinaryPage() {
  return (
    <div className="w-full h-full min-h-[calc(100vh-64px)] bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <DisciplinaryMain />
    </div>
  );
}
