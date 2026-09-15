"use client";

import React, { useEffect, useState } from 'react';
import { fetchStudentOnlineTests } from '../student_online_tests_api/student_online_tests_api';
import type { StudentOnlineTestsData, OnlineTest, TestAttemptHistory } from '../student_online_tests_types/student_online_tests_types';
import StudentOnlineTestsDashboard from './StudentOnlineTestsDashboard';
import StudentActiveTestRunner from './StudentActiveTestRunner';
import StudentTestResultModal from './StudentTestResultModal';
import { Loader2 } from 'lucide-react';

/**
 * RESPONSIBILITY: Master controller. Switches between Dashboard view and Active Test view.
 */
export default function StudentOnlineTestsMain() {
  const [data, setData] = useState<StudentOnlineTestsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // App State Router
  const [activeTest, setActiveTest] = useState<OnlineTest | null>(null);
  
  // Results Modal State
  const [showResultModal, setShowResultModal] = useState<TestAttemptHistory | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchStudentOnlineTests();
        if (isMounted) {
          if (response.success) {
            setData(response.data);
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) setError("Failed to load tests.");
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

  // Handle Submission from Runner
  const handleTestSubmit = (score: number, totalMarks: number) => {
    if (!activeTest) return;
    
    const percentage = Math.round((score / totalMarks) * 100);
    const mockResultRecord: TestAttemptHistory = {
      id: "hist_new_" + Date.now(),
      testId: activeTest.id,
      testTitle: activeTest.title,
      subject: activeTest.subject,
      attemptDate: "Just Now",
      score,
      totalMarks,
      percentage,
      status: percentage >= 40 ? 'Pass' : 'Fail'
    };

    // Close runner, show result modal
    setActiveTest(null);
    setShowResultModal(mockResultRecord);
  };

  return (
    <div className="relative w-full h-full">
      
      {/* View Router */}
      {activeTest ? (
        <StudentActiveTestRunner 
          test={activeTest}
          onCancel={() => setActiveTest(null)}
          onSubmit={handleTestSubmit}
        />
      ) : (
        <StudentOnlineTestsDashboard 
          data={data}
          onStartTest={(test) => setActiveTest(test)}
          onViewHistoryResult={(hist) => setShowResultModal(hist)}
        />
      )}

      {/* Post-Submit Result Modal */}
      {showResultModal && (
        <StudentTestResultModal 
          result={showResultModal}
          onClose={() => setShowResultModal(null)}
        />
      )}

    </div>
  );
}
