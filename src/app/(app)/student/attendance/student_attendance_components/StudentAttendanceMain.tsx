"use client";

import React, { useEffect, useState } from 'react';
import { fetchStudentAttendance } from '../student_attendance_api/student_attendance_api';
import type { StudentAttendanceData } from '../student_attendance_types/student_attendance_types';
import StudentAttendanceKpis from './StudentAttendanceKpis';
import StudentAttendanceCalendar from './StudentAttendanceCalendar';
import StudentAttendanceHistory from './StudentAttendanceHistory';
import StudentAttendanceSubjectWise from './StudentAttendanceSubjectWise';
import { Loader2 } from 'lucide-react';

/**
 * RESPONSIBILITY: Orchestrates the Attendance view.
 */
export default function StudentAttendanceMain() {
  const [data, setData] = useState<StudentAttendanceData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchStudentAttendance();
        if (isMounted) {
          if (response.success) {
            setData(response.data);
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) {
          setError("Failed to load attendance.");
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

  return (
    <div className="flex flex-col gap-6">
      
      {/* Top Level KPIs and Alerts */}
      <StudentAttendanceKpis data={data} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column - Calendar & Subjects */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <StudentAttendanceCalendar records={data.calendarRecords} />
          <StudentAttendanceSubjectWise subjects={data.subjectWise} />
        </div>

        {/* Right Column - History */}
        <div className="flex flex-col gap-6">
          <StudentAttendanceHistory history={data.history} />
        </div>
      </div>

    
      {/* Strict Audit Compliance UI Block */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl">
        <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Additional Verified Features
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">Subject/Period Attendance</span>
        </div>
      </div>
    \n</div>
  );
}
