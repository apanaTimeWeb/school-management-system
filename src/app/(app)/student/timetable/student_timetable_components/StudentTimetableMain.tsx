"use client";

import React, { useEffect, useState } from 'react';
import { fetchStudentTimetable } from '../student_timetable_api/student_timetable_api';
import type { StudentTimetableData } from '../student_timetable_types/student_timetable_types';
import StudentTimetableDaily from './StudentTimetableDaily';
import StudentTimetableWeekly from './StudentTimetableWeekly';
import StudentTimetableUpdates from './StudentTimetableUpdates';
import { Loader2, LayoutGrid, List } from 'lucide-react';
import clsx from 'clsx';

/**
 * RESPONSIBILITY: Orchestrates the Timetable view and toggles between Daily and Weekly views.
 */
export default function StudentTimetableMain() {
  const [data, setData] = useState<StudentTimetableData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'daily' | 'weekly'>('daily');

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchStudentTimetable();
        if (isMounted) {
          if (response.success) {
            setData(response.data);
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) {
          setError("Failed to load timetable.");
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
      
      {/* Top Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center bg-page border border-border rounded-lg p-1 w-fit">
          <button 
            onClick={() => setViewMode('daily')}
            className={clsx(
              "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-colors",
              viewMode === 'daily' ? "bg-primary text-white shadow-sm" : "text-text-secondary hover:text-text-primary hover:bg-border/50"
            )}
          >
            <List size={16} /> Daily View
          </button>
          <button 
            onClick={() => setViewMode('weekly')}
            className={clsx(
              "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-colors",
              viewMode === 'weekly' ? "bg-primary text-white shadow-sm" : "text-text-secondary hover:text-text-primary hover:bg-border/50"
            )}
          >
            <LayoutGrid size={16} /> Weekly Grid
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Main Area */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          {viewMode === 'daily' ? (
            <StudentTimetableDaily schedule={data.weeklySchedule} />
          ) : (
            <StudentTimetableWeekly schedule={data.weeklySchedule} />
          )}
        </div>

        {/* Right Sidebar */}
        <div className="flex flex-col gap-6">
          <StudentTimetableUpdates updates={data.updates} />
        </div>
      </div>

    </div>
  );
}
