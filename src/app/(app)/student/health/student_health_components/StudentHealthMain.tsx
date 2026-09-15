"use client";

import React, { useEffect, useState } from 'react';
import { fetchStudentHealthData } from '../student_health_api/student_health_api';
import type { StudentHealthData } from '../student_health_types/student_health_types';
import StudentHealthProfile from './StudentHealthProfile';
import StudentHealthCheckups from './StudentHealthCheckups';
import StudentHealthNotices from './StudentHealthNotices';
import { Loader2, Activity, HeartPulse, BellRing, Lock } from 'lucide-react';
import clsx from 'clsx';

/**
 * RESPONSIBILITY: Orchestrates the Health & Medical module views.
 */
export default function StudentHealthMain() {
  const [data, setData] = useState<StudentHealthData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState<'profile' | 'checkups' | 'notices'>('profile');

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchStudentHealthData();
        if (isMounted) {
          if (response.success) {
            setData(response.data);
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) setError("Failed to load health details.");
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

  return (
    <div className="flex flex-col gap-6">
      
      {/* Privacy Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-info/10 border border-info/20 p-4 rounded-xl text-info">
        <div className="flex items-center gap-3">
          <Lock size={20} className="shrink-0" />
          <p className="text-sm font-semibold">
            This is a restricted view containing limited medical information required for school operations. Detailed clinical records are kept private.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1 bg-card border border-border rounded-lg w-fit shadow-sm">
        <button
          onClick={() => setActiveTab('profile')}
          className={clsx(
            "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all",
            activeTab === 'profile' ? "bg-primary text-white shadow-sm" : "text-text-secondary hover:text-text-primary hover:bg-page"
          )}
        >
          <Activity size={16} /> Health Profile
        </button>
        <button
          onClick={() => setActiveTab('checkups')}
          className={clsx(
            "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all",
            activeTab === 'checkups' ? "bg-primary text-white shadow-sm" : "text-text-secondary hover:text-text-primary hover:bg-page"
          )}
        >
          <HeartPulse size={16} /> Checkup Records
        </button>
        <button
          onClick={() => setActiveTab('notices')}
          className={clsx(
            "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all",
            activeTab === 'notices' ? "bg-primary text-white shadow-sm" : "text-text-secondary hover:text-text-primary hover:bg-page"
          )}
        >
          <BellRing size={16} /> Medical Notices
          {data.notices.some(n => n.isUrgent) && (
            <span className="w-2 h-2 rounded-full bg-danger animate-pulse ml-1"></span>
          )}
        </button>
      </div>

      {/* Main Content Area */}
      <div className="w-full">
        {activeTab === 'profile' && <StudentHealthProfile profile={data.profile} emergency={data.emergency} />}
        {activeTab === 'checkups' && <StudentHealthCheckups checkups={data.checkups} />}
        {activeTab === 'notices' && <StudentHealthNotices notices={data.notices} />}
      </div>

    </div>
  );
}
