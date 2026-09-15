"use client";

import React, { useEffect, useState } from 'react';
import { fetchStudentDashboardStats } from '../student_dashboard_api/student_dashboard_api';
import type { StudentDashboardData } from '../student_dashboard_types/student_dashboard_types';
import StudentDashboardProfileHeader from './StudentDashboardProfileHeader';
import StudentDashboardKpis from './StudentDashboardKpis';
import StudentDashboardTimetable from './StudentDashboardTimetable';
import StudentDashboardAcademics from './StudentDashboardAcademics';
import StudentDashboardExams from './StudentDashboardExams';
import StudentDashboardUpdates from './StudentDashboardUpdates';
import StudentDashboardQuickActions from './StudentDashboardQuickActions';
import { Loader2 } from 'lucide-react';

/**
 * RESPONSIBILITY: Client orchestrator for Student Dashboard. Fetches data and renders sub-components.
 */
export default function StudentDashboardMain() {
  const [data, setData] = useState<StudentDashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchStudentDashboardStats();
        if (isMounted) {
          if (response.success) {
            setData(response.data);
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) {
          setError("Failed to fetch dashboard data.");
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
    // Relying on loading.tsx for full page load, but fallback here if needed
    return (
      <div className="flex h-64 items-center justify-center motion-safe:animate-pulse">
        <Loader2 className="animate-spin text-primary w-8 h-8" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="bg-danger/10 border border-danger text-danger p-4 rounded-md">
        {error || "Unknown error occurred"}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Top Profile Header */}
      <StudentDashboardProfileHeader profile={data.profile} />

      {/* KPI Row (Attendance, Fees) */}
      <StudentDashboardKpis kpis={data.kpis} />

      {/* Quick Actions Row */}
      <StudentDashboardQuickActions />

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column - Wider */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <StudentDashboardTimetable todayClasses={data.todayClasses} />
          <StudentDashboardAcademics pendingTasks={data.pendingTasks} />
          <StudentDashboardExams upcomingExams={data.upcomingExams} recentResults={data.recentResults} />
        </div>

        {/* Right Column - Narrower */}
        <div className="flex flex-col gap-6">
          <StudentDashboardUpdates updates={data.updates} />
        </div>
      </div>
    </div>
  );
}
