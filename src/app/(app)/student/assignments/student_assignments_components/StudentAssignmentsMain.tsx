"use client";

import React, { useEffect, useState } from 'react';
import { fetchStudentAssignments } from '../student_assignments_api/student_assignments_api';
import type { StudentAssignmentsData, AssignmentItem, AssignmentStatus } from '../student_assignments_types/student_assignments_types';
import StudentAssignmentsList from './StudentAssignmentsList';
import StudentAssignmentsModal from './StudentAssignmentsModal';
import { Loader2, Filter } from 'lucide-react';
import clsx from 'clsx';

/**
 * RESPONSIBILITY: Orchestrates the Assignments view, manages filtering and modal state.
 */
export default function StudentAssignmentsMain() {
  const [data, setData] = useState<StudentAssignmentsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [filter, setFilter] = useState<'All' | AssignmentStatus>('All');
  const [selectedAssignment, setSelectedAssignment] = useState<AssignmentItem | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchStudentAssignments();
        if (isMounted) {
          if (response.success) {
            setData(response.data);
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) {
          setError("Failed to load assignments.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }
    loadData();
    return () => { isMounted = false; };
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center motion-safe:animate-pulse">
        <Loader2 className="animate-spin text-primary w-8 h-8" />
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

  const filteredAssignments = data.assignments.filter(asn => filter === 'All' ? true : asn.status === filter);

  return (
    <div className="flex flex-col gap-6 relative">
      
      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-2 sm:pb-0">
          <Filter size={16} className="text-text-secondary mr-2" />
          {['All', 'Pending', 'Submitted', 'Graded', 'Overdue'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={clsx(
                "px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap motion-safe:transition-all",
                filter === f 
                  ? "bg-primary text-white shadow-sm" 
                  : "bg-page border border-border text-text-secondary hover:border-primary/50"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Main List */}
      <StudentAssignmentsList 
        assignments={filteredAssignments} 
        onViewDetails={(asn) => setSelectedAssignment(asn)} 
      />

      {/* Details & Submission Modal */}
      {selectedAssignment && (
        <StudentAssignmentsModal 
          assignment={selectedAssignment} 
          onClose={() => setSelectedAssignment(null)} 
        />
      )}

    </div>
  );
}
