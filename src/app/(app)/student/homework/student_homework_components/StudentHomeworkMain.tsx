"use client";

import React, { useEffect, useState } from 'react';
import { fetchStudentHomework } from '../student_homework_api/student_homework_api';
import type { StudentHomeworkData, HomeworkItem } from '../student_homework_types/student_homework_types';
import StudentHomeworkList from './StudentHomeworkList';
import StudentHomeworkDetailsModal from './StudentHomeworkDetailsModal';
import { Loader2, Filter } from 'lucide-react';
import clsx from 'clsx';

/**
 * RESPONSIBILITY: Orchestrates the Homework view, manages filtering, and controls the Details Modal.
 */
export default function StudentHomeworkMain() {
  const [data, setData] = useState<StudentHomeworkData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [filter, setFilter] = useState<'All' | 'Pending' | 'Completed' | 'Overdue'>('All');
  const [selectedHomework, setSelectedHomework] = useState<HomeworkItem | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchStudentHomework();
        if (isMounted) {
          if (response.success) {
            setData(response.data);
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) {
          setError("Failed to load homework.");
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

  const filteredHomeworks = data.homeworks.filter(hw => filter === 'All' ? true : hw.status === filter);

  return (
    <div className="flex flex-col gap-6 relative">
      
      {/* Top Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-2 sm:pb-0">
          <Filter size={16} className="text-text-secondary mr-2" />
          {['All', 'Pending', 'Overdue', 'Completed'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={clsx(
                "px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap motion-safe:transition-all",
                filter === f 
                  ? "bg-primary text-white shadow-sm" 
                  : "bg-page border border-border text-text-secondary hover:border-primary/50"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Main List */}
      <StudentHomeworkList 
        homeworks={filteredHomeworks} 
        onViewDetails={(hw) => setSelectedHomework(hw)} 
      />

      {/* Details Modal */}
      {selectedHomework && (
        <StudentHomeworkDetailsModal 
          homework={selectedHomework} 
          onClose={() => setSelectedHomework(null)} 
        />
      )}

    </div>
  );
}
