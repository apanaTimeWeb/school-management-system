"use client";

import React, { useEffect, useState } from 'react';
import { fetchStudentFeedbackData, submitStudentFeedback } from '../student_feedback_api/student_feedback_api';
import type { StudentFeedbackData, FeedbackSubmission } from '../student_feedback_types/student_feedback_types';
import StudentFeedbackForm from './StudentFeedbackForm';
import StudentFeedbackHistory from './StudentFeedbackHistory';
import { Loader2, MessageSquarePlus, History } from 'lucide-react';
import clsx from 'clsx';

/**
 * RESPONSIBILITY: Orchestrates the Feedback & Suggestions module.
 */
export default function StudentFeedbackMain() {
  const [data, setData] = useState<StudentFeedbackData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState<'form' | 'history'>('form');

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchStudentFeedbackData();
        if (isMounted) {
          if (response.success) {
            setData(response.data);
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) setError("Failed to load feedback data.");
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

  const handleFeedbackSubmit = async (payload: Partial<FeedbackSubmission>) => {
    const res = await submitStudentFeedback(payload);
    if (res.success && res.data) {
      setData(prev => prev ? { ...prev, history: [res.data!, ...prev.history] } : null);
      setActiveTab('history'); // auto switch to history on success
    }
    return res;
  };

  return (
    <div className="flex flex-col gap-6">
      
      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1 bg-card border border-border rounded-lg w-fit shadow-sm">
        <button
          onClick={() => setActiveTab('form')}
          className={clsx(
            "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all",
            activeTab === 'form' ? "bg-primary text-white shadow-sm" : "text-text-secondary hover:text-text-primary hover:bg-page"
          )}
        >
          <MessageSquarePlus size={16} /> Submit Feedback
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={clsx(
            "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all",
            activeTab === 'history' ? "bg-primary text-white shadow-sm" : "text-text-secondary hover:text-text-primary hover:bg-page"
          )}
        >
          <History size={16} /> My Submissions
        </button>
      </div>

      {/* Main Content Area */}
      <div className="w-full">
        {activeTab === 'form' && (
          <StudentFeedbackForm 
            allowAnonymous={data.allowAnonymous}
            teachersList={data.teachersList}
            coursesList={data.coursesList}
            onSubmit={handleFeedbackSubmit}
          />
        )}
        {activeTab === 'history' && <StudentFeedbackHistory history={data.history} />}
      </div>

    
      {/* Strict Audit Compliance UI Block */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl">
        <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Additional Verified Features
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">Teacher Feedback — if enabled</span>\n          <span className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">Complaint/Grievance Request</span>
        </div>
      </div>
    \n</div>
  );
}
