"use client";

import React from 'react';
import type { StudentOnlineTestsData, OnlineTest, TestAttemptHistory } from '../student_online_tests_types/student_online_tests_types';
import { PlayCircle, Clock, FileQuestion, Calendar, CheckCircle2, XCircle, History } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  data: StudentOnlineTestsData;
  onStartTest: (test: OnlineTest) => void;
  onViewHistoryResult: (hist: TestAttemptHistory) => void;
}

/**
 * RESPONSIBILITY: Renders the available tests grid and past attempt history list.
 */
export default function StudentOnlineTestsDashboard({ data, onStartTest, onViewHistoryResult }: Props) {
  
  return (
    <div className="flex flex-col xl:flex-row gap-6 items-start">
      
      {/* Left Area: Available Tests */}
      <div className="flex-1 w-full">
        <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
          <PlayCircle size={20} className="text-primary" /> Available Tests
        </h3>
        
        {data.availableTests.length === 0 ? (
          <div className="bg-card border border-border rounded-xl p-10 flex flex-col items-center justify-center text-center">
            <CheckCircle2 size={48} className="text-success/50 mb-4" />
            <h4 className="text-lg font-bold text-text-primary">No Pending Tests!</h4>
            <p className="text-sm text-text-secondary mt-1">You have caught up with all your assessments.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.availableTests.map((test) => (
              <div key={test.id} className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors shadow-sm flex flex-col group">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-md border border-primary/20">
                    {test.subject}
                  </span>
                  <span className="text-xs font-bold text-danger flex items-center gap-1.5">
                    <Calendar size={14} /> Due: {test.dueDate}
                  </span>
                </div>
                
                <h4 className="text-base font-bold text-text-primary mb-4">{test.title}</h4>
                
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <div className="flex flex-col p-2 bg-page border border-border rounded-lg">
                    <span className="text-[10px] text-text-secondary uppercase font-bold flex items-center gap-1"><Clock size={12}/> Duration</span>
                    <span className="text-sm font-bold text-text-primary">{test.durationMinutes} Mins</span>
                  </div>
                  <div className="flex flex-col p-2 bg-page border border-border rounded-lg">
                    <span className="text-[10px] text-text-secondary uppercase font-bold flex items-center gap-1"><FileQuestion size={12}/> Questions</span>
                    <span className="text-sm font-bold text-text-primary">{test.totalQuestions} Qs</span>
                  </div>
                </div>

                <button 
                  onClick={() => onStartTest(test)}
                  className="mt-auto w-full py-2.5 rounded-lg bg-primary text-white font-bold text-sm hover:bg-primary-hover shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <PlayCircle size={18} /> Start Test Now
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Area: Attempt History Sidebar */}
      <div className="w-full xl:w-[350px] shrink-0">
        <div className="bg-card border border-border rounded-xl p-5 sticky top-6">
          <h3 className="text-sm font-bold text-text-primary mb-4 flex items-center gap-2 border-b border-border pb-3">
            <History size={16} className="text-text-secondary" /> Attempt History
          </h3>
          
          <div className="space-y-3">
            {data.attemptHistory.length === 0 ? (
              <p className="text-sm text-text-secondary text-center py-4">No past attempts.</p>
            ) : (
              data.attemptHistory.map((hist) => (
                <div 
                  key={hist.id}
                  onClick={() => onViewHistoryResult(hist)}
                  className="p-3 bg-page border border-border rounded-lg hover:border-primary/30 transition-colors cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[10px] font-bold text-text-secondary uppercase">{hist.subject}</span>
                    <span className={clsx(
                      "text-[10px] font-bold px-1.5 py-0.5 rounded",
                      hist.status === 'Pass' ? "bg-success/10 text-success" : "bg-danger/10 text-danger"
                    )}>
                      {hist.status}
                    </span>
                  </div>
                  <h5 className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors mb-2 line-clamp-1">{hist.testTitle}</h5>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-text-secondary">{hist.attemptDate}</span>
                    <span className="font-bold text-text-primary">{hist.score} / {hist.totalMarks}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

    </div>
  );
}
