"use client";

import React, { useEffect, useState } from 'react';
import { fetchStudentHostelData, submitHostelLeave, submitVisitorPass } from '../student_hostel_api/student_hostel_api';
import type { StudentHostelData } from '../student_hostel_types/student_hostel_types';
import StudentHostelDetails from './StudentHostelDetails';
import StudentHostelLeave from './StudentHostelLeave';
import StudentHostelVisitors from './StudentHostelVisitors';
import StudentHostelNotices from './StudentHostelNotices';
import { Loader2, Home, BedSingle, CalendarClock, Users, BellRing } from 'lucide-react';
import clsx from 'clsx';

/**
 * RESPONSIBILITY: Orchestrates the Hostel module views conditionally.
 */
export default function StudentHostelMain() {
  const [data, setData] = useState<StudentHostelData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState<'details' | 'leave' | 'visitors' | 'notices'>('details');

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchStudentHostelData();
        if (isMounted) {
          if (response.success) {
            setData(response.data);
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) setError("Failed to load hostel details.");
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

  // CONDITIONAL CHECK FOR NON-HOSTELERS
  if (!data.isHosteler) {
    return (
      <div className="bg-card border border-border rounded-xl p-10 flex flex-col items-center justify-center text-center shadow-sm">
        <Home size={64} className="text-text-secondary/30 mb-6" />
        <h2 className="text-xl font-bold text-text-primary mb-2">Not Enrolled in Hostel</h2>
        <p className="text-sm text-text-secondary max-w-md">
          You are currently registered as a Day Scholar. If you wish to avail the hostel facility, please contact the administration office.
        </p>
      </div>
    );
  }

  const handleLeaveSubmit = async (payload: any) => {
    const res = await submitHostelLeave(payload);
    if (res.success && res.data) {
      setData(prev => prev ? { ...prev, leaves: [res.data!, ...prev.leaves] } : null);
    }
    return res;
  };

  const handleVisitorSubmit = async (payload: any) => {
    const res = await submitVisitorPass(payload);
    if (res.success && res.data) {
      setData(prev => prev ? { ...prev, visitors: [res.data!, ...prev.visitors] } : null);
    }
    return res;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 items-start">
      
      {/* Sidebar Navigation */}
      <div className="w-full lg:w-64 shrink-0 flex flex-col gap-2">
        
        <button
          onClick={() => setActiveTab('details')}
          className={clsx(
            "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-all text-left",
            activeTab === 'details' ? "bg-primary text-white shadow-sm" : "bg-card text-text-secondary border border-border hover:border-primary/50"
          )}
        >
          <BedSingle size={18} /> My Room Info
        </button>
        
        <button
          onClick={() => setActiveTab('leave')}
          className={clsx(
            "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-all text-left",
            activeTab === 'leave' ? "bg-primary text-white shadow-sm" : "bg-card text-text-secondary border border-border hover:border-primary/50"
          )}
        >
          <CalendarClock size={18} /> Hostel Leave
        </button>

        <button
          onClick={() => setActiveTab('visitors')}
          className={clsx(
            "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-all text-left",
            activeTab === 'visitors' ? "bg-primary text-white shadow-sm" : "bg-card text-text-secondary border border-border hover:border-primary/50"
          )}
        >
          <Users size={18} /> Visitor Pass
        </button>

        <button
          onClick={() => setActiveTab('notices')}
          className={clsx(
            "flex items-center justify-between px-4 py-3 rounded-lg text-sm font-bold transition-all text-left",
            activeTab === 'notices' ? "bg-primary text-white shadow-sm" : "bg-card text-text-secondary border border-border hover:border-primary/50"
          )}
        >
          <span className="flex items-center gap-3"><BellRing size={18} /> Notices</span>
          {data.notices.some(n => n.isUrgent) && (
             <span className="w-2 h-2 rounded-full bg-danger animate-pulse"></span>
          )}
        </button>

      </div>

      {/* Main Content Area */}
      <div className="flex-1 w-full bg-card border border-border rounded-xl shadow-sm p-4 md:p-6 min-h-[400px]">
        {activeTab === 'details' && <StudentHostelDetails details={data.details} />}
        {activeTab === 'leave' && <StudentHostelLeave leaves={data.leaves} onSubmit={handleLeaveSubmit} />}
        {activeTab === 'visitors' && <StudentHostelVisitors visitors={data.visitors} onSubmit={handleVisitorSubmit} />}
        {activeTab === 'notices' && <StudentHostelNotices notices={data.notices} />}
      </div>

    </div>
  );
}
