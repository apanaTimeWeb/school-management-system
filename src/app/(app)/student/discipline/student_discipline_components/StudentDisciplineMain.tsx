"use client";

import React, { useEffect, useState } from 'react';
import { fetchStudentDisciplineData } from '../student_discipline_api/student_discipline_api';
import type { StudentDisciplineData } from '../student_discipline_types/student_discipline_types';
import StudentDisciplineRemarks from './StudentDisciplineRemarks';
import StudentDisciplineWarnings from './StudentDisciplineWarnings';
import StudentDisciplineCounselling from './StudentDisciplineCounselling';
import { Loader2, MessageCircle, AlertTriangle, Users, Lock } from 'lucide-react';
import clsx from 'clsx';

/**
 * RESPONSIBILITY: Orchestrates the Discipline module views.
 */
export default function StudentDisciplineMain() {
  const [data, setData] = useState<StudentDisciplineData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState<'remarks' | 'warnings' | 'counselling'>('remarks');

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchStudentDisciplineData();
        if (isMounted) {
          if (response.success) {
            setData(response.data);
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) setError("Failed to load discipline records.");
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
            Confidentiality Notice: Only records explicitly shared with students and parents as per the school's disciplinary policy are visible here. Internal counselling notes are kept strictly confidential.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1 bg-card border border-border rounded-lg w-fit shadow-sm">
        <button
          onClick={() => setActiveTab('remarks')}
          className={clsx(
            "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all",
            activeTab === 'remarks' ? "bg-primary text-white shadow-sm" : "text-text-secondary hover:text-text-primary hover:bg-page"
          )}
        >
          <MessageCircle size={16} /> Behaviour Remarks
        </button>
        <button
          onClick={() => setActiveTab('warnings')}
          className={clsx(
            "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all",
            activeTab === 'warnings' ? "bg-primary text-white shadow-sm" : "text-text-secondary hover:text-text-primary hover:bg-page"
          )}
        >
          <AlertTriangle size={16} /> Official Warnings
          {data.warnings.some(w => w.status === 'Active') && (
            <span className="w-2 h-2 rounded-full bg-danger animate-pulse ml-1"></span>
          )}
        </button>
        <button
          onClick={() => setActiveTab('counselling')}
          className={clsx(
            "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all",
            activeTab === 'counselling' ? "bg-primary text-white shadow-sm" : "text-text-secondary hover:text-text-primary hover:bg-page"
          )}
        >
          <Users size={16} /> Counselling Records
        </button>
      </div>

      {/* Main Content Area */}
      <div className="w-full">
        {activeTab === 'remarks' && <StudentDisciplineRemarks remarks={data.remarks} />}
        {activeTab === 'warnings' && <StudentDisciplineWarnings warnings={data.warnings} />}
        {activeTab === 'counselling' && <StudentDisciplineCounselling records={data.counselling} />}
      </div>

    </div>
  );
}
