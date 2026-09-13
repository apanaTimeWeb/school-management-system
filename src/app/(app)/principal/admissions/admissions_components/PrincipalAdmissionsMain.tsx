"use client";
import React, { useEffect, useState } from 'react';
import PrincipalAdmissionsStatsCards from './PrincipalAdmissionsStatsCards';
import PrincipalAdmissionsFilters from './PrincipalAdmissionsFilters';
import PrincipalAdmissionsList from './PrincipalAdmissionsList';
import PrincipalApplicationReviewModal from './PrincipalApplicationReviewModal';
import { usePrincipalAdmissionsStore } from '../admissions_store/usePrincipalAdmissionsStore';
import { fetchPrincipalAdmissionsStats, fetchPrincipalApplicationsList } from '../admissions_api/PrincipalAdmissionsApi';
import { PrincipalAdmissionsStats, PrincipalAdmissionApplication } from '../admissions_types/PrincipalAdmissions.types';
import { BookOpen } from 'lucide-react';

export default function PrincipalAdmissionsMain() {
  const { filters, isReviewModalOpen } = usePrincipalAdmissionsStore();
  const [stats, setStats] = useState<PrincipalAdmissionsStats | null>(null);
  const [applications, setApplications] = useState<PrincipalAdmissionApplication[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch initial stats
  useEffect(() => {
    let isMounted = true;
    fetchPrincipalAdmissionsStats().then(data => {
      if (isMounted) setStats(data);
    });
    return () => { isMounted = false; };
  }, []);

  // Fetch list when filters change
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    
    // Debounce simulation
    const timeout = setTimeout(() => {
      fetchPrincipalApplicationsList(filters.stageFilter, filters.searchQuery).then(data => {
        if (isMounted) {
          setApplications(data);
          setLoading(false);
        }
      });
    }, 300);

    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, [filters]);

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-text-primary flex items-center gap-2">
            <BookOpen className="text-primary" size={24} />
            Admission Management
          </h1>
          <p className="text-[14px] text-text-secondary mt-1">
            Review enquiries, applications, document verifications, interviews, and approve candidates.
          </p>
        </div>
      </div>

      <PrincipalAdmissionsStatsCards stats={stats} loading={!stats} />
      
      <PrincipalAdmissionsFilters />
      
      <div className="flex-1 min-h-0">
        <PrincipalAdmissionsList applications={applications} loading={loading} />
      </div>

      {isReviewModalOpen && <PrincipalApplicationReviewModal />}
    </div>
  );
}
