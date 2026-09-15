"use client";

import React from 'react';
import type { TestAttemptHistory } from '../student_online_tests_types/student_online_tests_types';
import { X, Trophy, Frown, Target, CheckCircle2 } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  result: TestAttemptHistory;
  onClose: () => void;
}

/**
 * RESPONSIBILITY: Shows the final score/result after test submission or when clicking history.
 */
export default function StudentTestResultModal({ result, onClose }: Props) {
  const isPass = result.status === 'Pass';

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-overlay/80 backdrop-blur-sm motion-safe:animate-[fadeIn_0.2s_ease-out]">
      <div className="bg-popover border border-border rounded-xl w-full max-w-md flex flex-col shadow-2xl relative motion-safe:animate-[slideIn_0.3s_ease-out] overflow-hidden">
        
        {/* Dynamic Header */}
        <div className={clsx(
          "p-8 flex flex-col items-center justify-center text-center relative overflow-hidden",
          isPass ? "bg-success/10" : "bg-danger/10"
        )}>
          {/* Confetti / Sad Background Mock */}
          <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
            {isPass ? <Trophy size={200} className="text-success" /> : <Frown size={200} className="text-danger" />}
          </div>
          
          <div className={clsx(
            "w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg border-4 z-10",
            isPass ? "bg-success text-white border-success/30" : "bg-danger text-white border-danger/30"
          )}>
            {isPass ? <Trophy size={40} /> : <Frown size={40} />}
          </div>
          
          <h2 className={clsx("text-2xl font-bold z-10", isPass ? "text-success" : "text-danger")}>
            {isPass ? "Congratulations!" : "Needs Improvement"}
          </h2>
          <p className="text-sm font-semibold text-text-primary z-10 mt-1">You scored {result.percentage}%</p>
        </div>

        {/* Content Body */}
        <div className="p-6 bg-card">
          <h3 className="text-base font-bold text-text-primary mb-4 text-center border-b border-border pb-4">{result.testTitle}</h3>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-page border border-border rounded-lg p-3 flex flex-col items-center text-center">
              <Target size={16} className="text-primary mb-1" />
              <span className="text-[10px] font-bold text-text-secondary uppercase">Score</span>
              <span className="text-xl font-bold text-text-primary">{result.score} <span className="text-sm text-text-secondary">/ {result.totalMarks}</span></span>
            </div>
            <div className="bg-page border border-border rounded-lg p-3 flex flex-col items-center text-center">
              <CheckCircle2 size={16} className={isPass ? "text-success" : "text-danger"} mb-1 />
              <span className="text-[10px] font-bold text-text-secondary uppercase">Result</span>
              <span className={clsx("text-xl font-bold", isPass ? "text-success" : "text-danger")}>{result.status}</span>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-full py-3 rounded-lg bg-primary text-white font-bold text-sm hover:bg-primary-hover transition-colors shadow-sm"
          >
            Back to Dashboard
          </button>
        </div>

      </div>
    </div>
  );
}
