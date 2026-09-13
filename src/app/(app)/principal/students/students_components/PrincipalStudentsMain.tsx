"use client";
// RESPONSIBILITY: Main orchestrator for the Principal Students view. Combines Filters, List, and Modal.
import React, { useEffect, useState } from 'react';
import { usePrincipalStudentsStore } from '../students_store/usePrincipalStudentsStore';
import { fetchPrincipalStudentsList } from '../students_api/PrincipalStudentsApi';
import { PrincipalStudent } from '../students_types/PrincipalStudents.types';

import PrincipalStudentsFilters from './PrincipalStudentsFilters';
import PrincipalStudentsList from './PrincipalStudentsList';
import PrincipalStudentProfileModal from './PrincipalStudentProfileModal'; // To be created

export default function PrincipalStudentsMain() {
  const { filters, isProfileModalOpen } = usePrincipalStudentsStore();
  const [students, setStudents] = useState<PrincipalStudent[]>([]);
  const [loading, setLoading] = useState(true);

  // Re-fetch data when filters change
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetchPrincipalStudentsList(filters).then(data => {
      if (isMounted) {
        setStudents(data);
        setLoading(false);
      }
    }).catch(err => {
      console.error(err);
      if (isMounted) setLoading(false);
    });

    return () => { isMounted = false; };
  }, [filters]);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-[22px] font-bold text-text-primary">Student Management</h1>
        <p className="text-[14px] text-text-secondary mt-1">View and filter complete student registry.</p>
      </div>

      <PrincipalStudentsFilters />
      <PrincipalStudentsList students={students} isLoading={loading} />

      {/* Render the modal overlay if open */}
      {isProfileModalOpen && <PrincipalStudentProfileModal />}
    </div>
  );
}
