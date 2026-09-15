"use client";

import React, { useEffect, useState } from 'react';
import { fetchStudentExaminations } from '../student_examinations_api/student_examinations_api';
import type { StudentExaminationsData, ExamTerm, ExamSubjectSchedule } from '../student_examinations_types/student_examinations_types';
import StudentExaminationsTermSelector from './StudentExaminationsTermSelector';
import StudentExaminationsSchedule from './StudentExaminationsSchedule';
import StudentExaminationsDetailsModal from './StudentExaminationsDetailsModal';
import { Loader2 } from 'lucide-react';

/**
 * RESPONSIBILITY: Orchestrates the Examinations view.
 */
export default function StudentExaminationsMain() {
  const [data, setData] = useState<StudentExaminationsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [selectedTermId, setSelectedTermId] = useState<string | null>(null);
  const [selectedSchedule, setSelectedSchedule] = useState<ExamSubjectSchedule | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchStudentExaminations();
        if (isMounted) {
          if (response.success) {
            setData(response.data);
            if (response.data.upcomingExams.length > 0) {
              setSelectedTermId(response.data.upcomingExams[0].id);
            } else if (response.data.pastExams.length > 0) {
              setSelectedTermId(response.data.pastExams[0].id);
            }
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) setError("Failed to load examinations.");
      } finally {
        if (isMounted) setIsLoading(false);
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

  // Combine both arrays to find the selected term
  const allTerms = [...data.upcomingExams, ...data.pastExams];
  const selectedTermData = allTerms.find(t => t.id === selectedTermId);

  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      
      {/* Sidebar for Exam Terms */}
      <div className="w-full md:w-72 shrink-0">
        <StudentExaminationsTermSelector 
          upcomingExams={data.upcomingExams}
          pastExams={data.pastExams}
          selectedTermId={selectedTermId}
          onSelectTerm={(id) => setSelectedTermId(id)}
        />
      </div>

      {/* Main Schedule Area */}
      <div className="flex-1 w-full">
        {selectedTermData ? (
          <StudentExaminationsSchedule 
            termData={selectedTermData}
            onViewDetails={(schedule) => setSelectedSchedule(schedule)}
          />
        ) : (
          <div className="bg-card border border-border rounded-xl p-10 text-center text-text-secondary">
            Select an examination term from the left sidebar to view the schedule.
          </div>
        )}
      </div>

      {/* Details Modal */}
      {selectedSchedule && (
        <StudentExaminationsDetailsModal 
          schedule={selectedSchedule}
          onClose={() => setSelectedSchedule(null)}
        />
      )}

    </div>
  );
}
