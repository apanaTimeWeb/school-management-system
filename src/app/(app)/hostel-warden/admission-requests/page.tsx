import React from 'react';
import AdmissionRequestsMain from './admission_components/AdmissionRequestsMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admission Requests | Hostel Warden',
  description: 'Review, approve, and process new hostel admission requests.',
};

export default function AdmissionRequestsPage() {
  return (
    <div className="w-full h-full min-h-[calc(100vh-64px)] bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <AdmissionRequestsMain />
    </div>
  );
}
