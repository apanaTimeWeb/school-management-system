"use client";

import { useState, useEffect } from "react";
import { fetchJobPositions, fetchApplications } from "../hr_recruitment_api/HrRecruitmentApi";
import type { JobPosition, CandidateApplication, PipelineStatus } from "../hr_recruitment_types/HrRecruitmentTypes";

export function useHrRecruitment() {
  const [activeTab, setActiveTab] = useState<'Jobs' | 'Applications'>('Jobs');
  
  const [jobs, setJobs] = useState<JobPosition[]>([]);
  const [applications, setApplications] = useState<CandidateApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filters for Jobs
  const [jobStatus, setJobStatus] = useState("All");
  
  // Filters for Applications
  const [appStatus, setAppStatus] = useState("All");
  const [appJobId, setAppJobId] = useState("All");
  const [appSearch, setAppSearch] = useState("");

  const [selectedCandidate, setSelectedCandidate] = useState<CandidateApplication | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    try {
      if (activeTab === 'Jobs') {
        const res = await fetchJobPositions({ status: jobStatus });
        if (res.success) setJobs(res.data);
      } else {
        const res = await fetchApplications({ status: appStatus, jobId: appJobId, search: appSearch });
        if (res.success) setApplications(res.data);
        
        // Also fetch jobs for the filter dropdown if not loaded
        if (jobs.length === 0) {
          const jRes = await fetchJobPositions();
          if (jRes.success) setJobs(jRes.data);
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      loadData();
    }, 300);
    return () => clearTimeout(timer);
  }, [activeTab, jobStatus, appStatus, appJobId, appSearch]);

  const openCandidateModal = (candidate: CandidateApplication) => {
    setSelectedCandidate(candidate);
  };
  
  const closeCandidateModal = () => {
    setSelectedCandidate(null);
  };

  const updateCandidateStatus = (id: string, newStatus: PipelineStatus, actionNote: string) => {
    // Optimistic UI Update
    setApplications(prev => prev.map(app => {
      if (app.id === id) {
        return {
          ...app,
          status: newStatus,
          history: [...app.history, { date: new Date().toISOString().split('T')[0], action: newStatus, note: actionNote }]
        };
      }
      return app;
    }));
    
    // Also update selected candidate if open
    if (selectedCandidate && selectedCandidate.id === id) {
      setSelectedCandidate({
        ...selectedCandidate,
        status: newStatus,
        history: [...selectedCandidate.history, { date: new Date().toISOString().split('T')[0], action: newStatus, note: actionNote }]
      });
    }
  };

  return {
    activeTab, setActiveTab,
    jobs, applications, isLoading,
    jobStatus, setJobStatus,
    appStatus, setAppStatus,
    appJobId, setAppJobId,
    appSearch, setAppSearch,
    selectedCandidate, openCandidateModal, closeCandidateModal,
    updateCandidateStatus
  };
}

