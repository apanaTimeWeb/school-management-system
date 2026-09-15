"use client";

import React, { useEffect, useState } from 'react';
import { fetchStudentCertificates, requestCertificate } from '../student_certificates_api/student_certificates_api';
import type { StudentCertificatesData, CertificateRequest } from '../student_certificates_types/student_certificates_types';
import StudentCertificatesList from './StudentCertificatesList';
import StudentCertificatesRequest from './StudentCertificatesRequest';
import { Loader2, FileCheck2, FilePlus2 } from 'lucide-react';
import clsx from 'clsx';

/**
 * RESPONSIBILITY: Orchestrates the Certificates module views.
 */
export default function StudentCertificatesMain() {
  const [data, setData] = useState<StudentCertificatesData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState<'generated' | 'request'>('generated');

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchStudentCertificates();
        if (isMounted) {
          if (response.success) {
            setData(response.data);
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) setError("Failed to load certificates.");
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    loadData();
    return () => { isMounted = false; };
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center motion-safe:animate-pulse">
        <Loader2 className="animate-spin text-primary w-10 h-10" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="bg-danger/10 border border-danger text-danger p-4 rounded-md">
        {error || "No data found."}
      </div>
    );
  }

  const handleRequestSubmit = async (payload: Partial<CertificateRequest>) => {
    const res = await requestCertificate(payload);
    if (res.success && res.data) {
      setData(prev => prev ? { ...prev, requests: [res.data!, ...prev.requests] } : null);
    }
    return res;
  };

  return (
    <div className="flex flex-col gap-6">
      
      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1 bg-card border border-border rounded-lg w-fit shadow-sm">
        <button
          onClick={() => setActiveTab('generated')}
          className={clsx(
            "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all",
            activeTab === 'generated' ? "bg-primary text-white shadow-sm" : "text-text-secondary hover:text-text-primary hover:bg-page"
          )}
        >
          <FileCheck2 size={16} /> My Certificates
        </button>
        <button
          onClick={() => setActiveTab('request')}
          className={clsx(
            "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all",
            activeTab === 'request' ? "bg-primary text-white shadow-sm" : "text-text-secondary hover:text-text-primary hover:bg-page"
          )}
        >
          <FilePlus2 size={16} /> Request Certificate
        </button>
      </div>

      {/* Main Content Area */}
      <div className="w-full">
        {activeTab === 'generated' && <StudentCertificatesList generated={data.generated} />}
        {activeTab === 'request' && <StudentCertificatesRequest requests={data.requests} onSubmit={handleRequestSubmit} />}
      </div>

    </div>
  );
}
