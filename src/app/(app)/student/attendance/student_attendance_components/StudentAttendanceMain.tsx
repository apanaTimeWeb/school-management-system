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

    </div>
  );
}
