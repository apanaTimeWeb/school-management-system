"use client";

import React, { useEffect, useState } from 'react';
import { fetchStudentLeaveData, submitLeaveApplication } from '../student_leave_api/student_leave_api';
import type { StudentLeaveData, LeaveRequest } from '../student_leave_types/student_leave_types';
import StudentLeaveForm from './StudentLeaveForm';
import StudentLeaveHistory from './StudentLeaveHistory';
import { Loader2, Plus, History } from 'lucide-react';
import clsx from 'clsx';

/**
 * RESPONSIBILITY: Master controller. Switches between Apply Form and History views.
 */
export default function StudentLeaveMain() {
  const [data, setData] = useState<StudentLeaveData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // View State: 'form' | 'history'
  const [activeTab, setActiveTab] = useState<'form' | 'history'>('form');

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchStudentLeaveData();
        if (isMounted) {
          if (response.success) {
            setData(response.data);
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) setError("Failed to load leave data.");
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

  const handleLeaveSubmit = async (payload: Partial<LeaveRequest>) => {
    const res = await submitLeaveApplication(payload);
    if (res.success && res.data) {
      // Optimistic UI update
      setData(prev => prev ? { ...prev, requests: [res.data!, ...prev.requests] } : null);
      setActiveTab('history');
      alert("Leave Application Submitted Successfully!");
    }
  };

  return (
    <div className="flex flex-col gap-6 motion-safe:animate-[fadeIn_0.3s_ease-out]">
      
      {/* Tabs */}
      <div className="flex items-center gap-2 p-1 bg-card border border-border rounded-lg w-fit">
        <button
          onClick={() => setActiveTab('form')}
          className={clsx(
            "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all",
            activeTab === 'form' ? "bg-primary text-white shadow-sm" : "text-text-secondary hover:text-text-primary hover:bg-page"
          )}
        >
          <Plus size={16} /> Apply Leave
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={clsx(
            "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all",
            activeTab === 'history' ? "bg-primary text-white shadow-sm" : "text-text-secondary hover:text-text-primary hover:bg-page"
          )}
        >
          <History size={16} /> Leave History
        </button>
      </div>

      {/* Main Content Area */}
      <div className="w-full">
        {activeTab === 'form' ? (
          <StudentLeaveForm onSubmit={handleLeaveSubmit} />
        ) : (
          <StudentLeaveHistory history={data.history} />
        )}
      </div>

    </div>
  );
}
