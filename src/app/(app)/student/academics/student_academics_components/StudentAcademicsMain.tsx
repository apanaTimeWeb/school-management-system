"use client";

import React, { useEffect, useState } from 'react';
import { fetchStudentAcademics } from '../student_academics_api/student_academics_api';
import type { StudentAcademicsData } from '../student_academics_types/student_academics_types';
import StudentAcademicsHeader from './StudentAcademicsHeader';
import StudentAcademicsSubjects from './StudentAcademicsSubjects';
import StudentAcademicsSyllabusProgress from './StudentAcademicsSyllabusProgress';
import StudentAcademicsHistory from './StudentAcademicsHistory';
import { Loader2 } from 'lucide-react';

/**
 * RESPONSIBILITY: Orchestrates the My Academics view.
 */
export default function StudentAcademicsMain() {
  const [data, setData] = useState<StudentAcademicsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchStudentAcademics();
        if (isMounted) {
          if (response.success) {
            setData(response.data);
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) {
          setError("Failed to load academic data.");
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
      
      {/* Top Details */}
      <StudentAcademicsHeader currentClass={data.currentClass} section={data.section} session={data.academicSession} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left/Main Column - Subjects and Syllabus */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <StudentAcademicsSubjects subjects={data.subjects} />
          <StudentAcademicsSyllabusProgress syllabus={data.syllabus} subjects={data.subjects} />
        </div>

        {/* Right Column - Academic History */}
        <div className="flex flex-col gap-6">
          <StudentAcademicsHistory history={data.academicHistory} />
        </div>
      </div>

    </div>
  );
}
