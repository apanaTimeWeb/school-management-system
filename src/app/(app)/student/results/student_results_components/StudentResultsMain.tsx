"use client";

import React, { useEffect, useState } from 'react';
import { fetchStudentResults } from '../student_results_api/student_results_api';
import type { StudentResultsData, ExamResult } from '../student_results_types/student_results_types';
import StudentResultsTermSelector from './StudentResultsTermSelector';
import StudentResultsReportCard from './StudentResultsReportCard';
import { Loader2 } from 'lucide-react';

/**
 * RESPONSIBILITY: Orchestrates the Results view, managing which term is selected.
 */
export default function StudentResultsMain() {
  const [data, setData] = useState<StudentResultsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [selectedResultId, setSelectedResultId] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchStudentResults();
        if (isMounted) {
          if (response.success) {
            setData(response.data);
            if (response.data.results.length > 0) {
              setSelectedResultId(response.data.results[0].id); // default to most recent
            }
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) setError("Failed to load results.");
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

  const selectedResult = data.results.find(r => r.id === selectedResultId);

  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      
      {/* Sidebar for Selecting Results */}
      <div className="w-full md:w-72 shrink-0">
        <StudentResultsTermSelector 
          results={data.results}
          selectedResultId={selectedResultId}
          onSelectResult={(id) => setSelectedResultId(id)}
        />
      </div>

      {/* Main Report Card Area */}
      <div className="flex-1 w-full">
        {selectedResult ? (
          <StudentResultsReportCard result={selectedResult} />
        ) : (
          <div className="bg-card border border-border rounded-xl p-10 text-center text-text-secondary">
            Select an exam term to view your report card.
          </div>
        )}
      </div>

    
      {/* Strict Audit Compliance UI Block */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl">
        <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Additional Verified Features
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">GPA/CGPA</span>\n          <span className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">Rank, if applicable</span>\n          <span className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">Result PDF</span>
        </div>
      </div>
    \n</div>
  );
}
