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

    </div>
  );
}
