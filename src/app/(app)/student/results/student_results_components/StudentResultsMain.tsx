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

    </div>
  );
}
