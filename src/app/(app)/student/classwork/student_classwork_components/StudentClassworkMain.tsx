"use client";

import React, { useEffect, useState } from 'react';
import { fetchStudentClasswork } from '../student_classwork_api/student_classwork_api';
import type { StudentClassworkData, DailyClasswork, ClassworkSubjectRecord } from '../student_classwork_types/student_classwork_types';
import StudentClassworkHistorySidebar from './StudentClassworkHistorySidebar';
import StudentClassworkDayView from './StudentClassworkDayView';
import StudentClassworkDetailsModal from './StudentClassworkDetailsModal';
import { Loader2 } from 'lucide-react';

/**
 * RESPONSIBILITY: Orchestrates the Classwork view, managing selected date and modal state.
 */
export default function StudentClassworkMain() {
  const [data, setData] = useState<StudentClassworkData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [selectedDayId, setSelectedDayId] = useState<string | null>(null);
  const [selectedRecord, setSelectedRecord] = useState<ClassworkSubjectRecord | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchStudentClasswork();
        if (isMounted) {
          if (response.success) {
            setData(response.data);
            if (response.data.history.length > 0) {
              setSelectedDayId(response.data.history[0].id);
            }
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) setError("Failed to load classwork.");
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

  const selectedDayData = data.history.find(d => d.id === selectedDayId);

  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      
      {/* Sidebar for History Navigation */}
      <div className="w-full md:w-64 shrink-0">
        <StudentClassworkHistorySidebar 
          history={data.history}
          selectedDayId={selectedDayId}
          onSelectDay={(id) => setSelectedDayId(id)}
        />
      </div>

      {/* Main Classwork Feed */}
      <div className="flex-1 w-full">
        {selectedDayData ? (
          <StudentClassworkDayView 
            dayData={selectedDayData}
            onViewDetails={(rec) => setSelectedRecord(rec)}
          />
        ) : (
          <div className="bg-card border border-border rounded-xl p-10 text-center text-text-secondary">
            Select a date from the history to view classwork.
          </div>
        )}
      </div>

      {/* Details Modal */}
      {selectedRecord && (
        <StudentClassworkDetailsModal 
          record={selectedRecord}
          onClose={() => setSelectedRecord(null)}
        />
      )}

    </div>
  );
}
