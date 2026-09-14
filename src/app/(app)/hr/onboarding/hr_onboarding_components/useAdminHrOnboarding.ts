"use client";

import { useState, useEffect } from "react";
import { fetchOnboardingCandidates } from "../hr_onboarding_api/AdminHrOnboardingApi";
import type { OnboardingCandidate } from "../hr_onboarding_types/AdminHrOnboardingTypes";

export function useAdminHrOnboarding() {
  const [candidates, setCandidates] = useState<OnboardingCandidate[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filters
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchFilter, setSearchFilter] = useState("");

  const [selectedCandidate, setSelectedCandidate] = useState<OnboardingCandidate | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const res = await fetchOnboardingCandidates({ status: statusFilter, search: searchFilter });
      if (res.success) setCandidates(res.data);
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
  }, [statusFilter, searchFilter]);

  const openCandidate = (c: OnboardingCandidate) => setSelectedCandidate(c);
  const closeCandidate = () => setSelectedCandidate(null);

  const toggleChecklist = (candidateId: string, checklistId: string) => {
    const updateFn = (c: OnboardingCandidate) => {
      if (c.id !== candidateId) return c;
      const newChecklist = c.checklist.map(chk => chk.id === checklistId ? { ...chk, isCompleted: !chk.isCompleted } : chk);
      
      // Auto update status to "In Review" if they start checking things off
      let newStatus = c.status;
      if (c.status === 'Initiated' && newChecklist.some(x => x.isCompleted)) newStatus = 'In Review';
      
      return { ...c, checklist: newChecklist, status: newStatus };
    };

    setCandidates(prev => prev.map(updateFn));
    if (selectedCandidate) setSelectedCandidate(updateFn(selectedCandidate));
  };

  const verifyDocument = (candidateId: string, docId: string) => {
    const updateFn = (c: OnboardingCandidate) => {
      if (c.id !== candidateId) return c;
      const newDocs = c.documents.map(d => d.id === docId ? { ...d, isVerified: !d.isVerified } : d);
      return { ...c, documents: newDocs };
    };

    setCandidates(prev => prev.map(updateFn));
    if (selectedCandidate) setSelectedCandidate(updateFn(selectedCandidate));
  };

  const grantSystemAccess = (candidateId: string) => {
    const newEmpId = `EMP-2024-${Math.floor(Math.random() * 900) + 100}`;
    const updateFn = (c: OnboardingCandidate) => {
      if (c.id !== candidateId) return c;
      return { ...c, systemAccessGranted: true, status: 'Completed', finalEmployeeId: newEmpId };
    };

    setCandidates(prev => prev.map(updateFn));
    if (selectedCandidate) setSelectedCandidate(updateFn(selectedCandidate));
    
    alert(`Success: System Access Granted! User account created with ID: ${newEmpId}`);
  };

  return {
    candidates, isLoading,
    statusFilter, setStatusFilter,
    searchFilter, setSearchFilter,
    selectedCandidate, openCandidate, closeCandidate,
    toggleChecklist, verifyDocument, grantSystemAccess
  };
}
