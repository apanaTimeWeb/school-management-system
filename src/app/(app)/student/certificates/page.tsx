import React from 'react';
import StudentCertificatesMain from './student_certificates_components/StudentCertificatesMain';

export const metadata = {
  title: "Certificates & Documents | School ERP 360",
  description: "Request and download official school certificates.",
};

export default function StudentCertificatesPage() {
  return (
    <main className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Certificates & Documents</h1>
        <p className="text-sm text-text-secondary mt-1">Download your generated certificates or submit a request for a new one.</p>
      </div>
      <StudentCertificatesMain />
    </main>
  );
}
