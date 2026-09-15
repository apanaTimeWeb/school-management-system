"use client";

import React, { useEffect, useState } from 'react';
import { fetchStudentLibraryData } from '../student_library_api/student_library_api';
import type { StudentLibraryData } from '../student_library_types/student_library_types';
import StudentLibraryDiscover from './StudentLibraryDiscover';
import StudentLibraryIssued from './StudentLibraryIssued';
import StudentLibraryHistory from './StudentLibraryHistory';
import { Loader2, BookOpen, BookCheck, History } from 'lucide-react';
import clsx from 'clsx';

/**
 * RESPONSIBILITY: Orchestrates the Library module views.
 */
export default function StudentLibraryMain() {
  const [data, setData] = useState<StudentLibraryData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // View State
  const [activeTab, setActiveTab] = useState<'discover' | 'issued' | 'history'>('discover');

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchStudentLibraryData();
        if (isMounted) {
          if (response.success) {
            setData(response.data);
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) setError("Failed to load library data.");
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
      
      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1 bg-card border border-border rounded-lg w-fit shadow-sm">
        <button
          onClick={() => setActiveTab('discover')}
          className={clsx(
            "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all",
            activeTab === 'discover' ? "bg-primary text-white shadow-sm" : "text-text-secondary hover:text-text-primary hover:bg-page"
          )}
        >
          <BookOpen size={16} /> Discover Books
        </button>
        <button
          onClick={() => setActiveTab('issued')}
          className={clsx(
            "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all",
            activeTab === 'issued' ? "bg-primary text-white shadow-sm" : "text-text-secondary hover:text-text-primary hover:bg-page"
          )}
        >
          <BookCheck size={16} /> My Issued Books
          {data.issuedBooks.length > 0 && (
            <span className={clsx(
              "ml-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px]",
              activeTab === 'issued' ? "bg-white text-primary" : "bg-border text-text-primary"
            )}>
              {data.issuedBooks.length}
            </span>
          )}
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={clsx(
            "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all",
            activeTab === 'history' ? "bg-primary text-white shadow-sm" : "text-text-secondary hover:text-text-primary hover:bg-page"
          )}
        >
          <History size={16} /> Library History
        </button>
      </div>

      {/* Main Content Area */}
      <div className="w-full">
        {activeTab === 'discover' && <StudentLibraryDiscover catalog={data.catalog} />}
        {activeTab === 'issued' && <StudentLibraryIssued issuedBooks={data.issuedBooks} />}
        {activeTab === 'history' && <StudentLibraryHistory history={data.history} />}
      </div>

    </div>
  );
}
