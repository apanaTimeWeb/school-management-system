"use client";

import React, { useState, useEffect } from 'react';
import type { OnlineTest } from '../student_online_tests_types/student_online_tests_types';
import { Clock, AlertTriangle, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  test: OnlineTest;
  onCancel: () => void;
  onSubmit: (score: number, totalMarks: number) => void;
}

/**
 * RESPONSIBILITY: Renders the active test taking UI (Questions, Timer).
 */
export default function StudentActiveTestRunner({ test, onCancel, onSubmit }: Props) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [timeLeft, setTimeLeft] = useState(test.durationMinutes * 60);

  const questions = test.questions || [];
  const currentQ = questions[currentQuestionIndex];

  // Timer Logic
  useEffect(() => {
    if (timeLeft <= 0) {
      handleFinalSubmit(); // Auto submit when time is up
      return;
    }
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (qId: string, optionIndex: number) => {
    setAnswers(prev => ({ ...prev, [qId]: optionIndex }));
  };

  const handleFinalSubmit = () => {
    // Mock calculate score
    let score = 0;
    let total = 0;
    questions.forEach(q => {
      total += q.marks;
      if (answers[q.id] === q.correctOptionIndex) {
        score += q.marks;
      }
    });
    onSubmit(score, total);
  };

  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const attemptedCount = Object.keys(answers).length;

  return (
    <div className="fixed inset-0 z-[100] bg-background flex flex-col motion-safe:animate-[fadeIn_0.3s_ease-out]">
      
      {/* Top Navigation Bar */}
      <div className="h-16 border-b border-border bg-card flex items-center justify-between px-6 shrink-0 shadow-sm">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => { if(confirm("Are you sure you want to quit? Your progress will be lost.")) onCancel(); }}
            className="text-xs font-bold text-danger hover:underline"
          >
            Quit Test
          </button>
          <div className="h-6 w-[1px] bg-border mx-2"></div>
          <div>
            <span className="text-[10px] font-bold text-text-secondary uppercase block">{test.subject}</span>
            <h2 className="text-sm font-bold text-text-primary">{test.title}</h2>
          </div>
        </div>

        {/* Timer */}
        <div className={clsx(
          "flex items-center gap-2 px-4 py-1.5 rounded-full font-bold text-sm transition-colors",
          timeLeft < 60 ? "bg-danger text-white animate-pulse" : "bg-page border border-border text-text-primary"
        )}>
          <Clock size={16} /> {formatTime(timeLeft)}
        </div>
      </div>

      {/* Main Body */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Side: Question Area */}
        <div className="flex-1 p-6 md:p-10 overflow-y-auto custom-scrollbar flex flex-col items-center">
          <div className="w-full max-w-3xl">
            
            {/* Question Header */}
            <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
              <h3 className="text-lg font-bold text-text-primary">Question {currentQuestionIndex + 1} of {questions.length}</h3>
              <span className="text-xs font-bold text-text-secondary bg-page px-3 py-1 rounded-full border border-border">
                {currentQ.marks} Marks
              </span>
            </div>

            {/* Question Text */}
            <p className="text-lg text-text-primary mb-8 leading-relaxed font-medium">
              {currentQ.questionText}
            </p>

            {/* Options */}
            <div className="space-y-4">
              {currentQ.options.map((opt, idx) => {
                const isSelected = answers[currentQ.id] === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(currentQ.id, idx)}
                    className={clsx(
                      "w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-4 group",
                      isSelected ? "border-primary bg-primary/5 shadow-sm" : "border-border bg-card hover:border-primary/30"
                    )}
                  >
                    <div className={clsx(
                      "w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors",
                      isSelected ? "border-primary bg-primary" : "border-border group-hover:border-primary/50"
                    )}>
                      {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                    <span className={clsx("text-base font-semibold", isSelected ? "text-primary" : "text-text-primary")}>
                      {opt}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Next / Prev Controls */}
            <div className="flex justify-between items-center mt-10 pt-6 border-t border-border">
              <button 
                onClick={() => setCurrentQuestionIndex(p => Math.max(0, p - 1))}
                disabled={currentQuestionIndex === 0}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card text-sm font-bold text-text-secondary hover:text-text-primary disabled:opacity-50 transition-colors"
              >
                <ChevronLeft size={16} /> Previous
              </button>
              
              {!isLastQuestion ? (
                <button 
                  onClick={() => setCurrentQuestionIndex(p => Math.min(questions.length - 1, p + 1))}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-bold shadow-sm hover:bg-primary-hover transition-colors"
                >
                  Next <ChevronRight size={16} />
                </button>
              ) : (
                <button 
                  onClick={() => { if(confirm("Are you sure you want to submit your test?")) handleFinalSubmit(); }}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-success text-white text-sm font-bold shadow-sm hover:bg-success/90 transition-colors animate-pulse"
                >
                  <CheckCircle size={18} /> Submit Test
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Right Side: Navigation Grid (Desktop) */}
        <div className="hidden lg:block w-72 border-l border-border bg-card p-6 overflow-y-auto custom-scrollbar shrink-0">
          <h4 className="text-sm font-bold text-text-primary mb-4 flex items-center justify-between">
            Question Map
            <span className="text-[10px] bg-page border border-border px-2 py-1 rounded text-text-secondary">{attemptedCount}/{questions.length} Attempted</span>
          </h4>
          
          <div className="grid grid-cols-4 gap-2">
            {questions.map((q, idx) => {
              const isAttempted = answers[q.id] !== undefined;
              const isCurrent = currentQuestionIndex === idx;
              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestionIndex(idx)}
                  className={clsx(
                    "w-10 h-10 rounded-lg text-sm font-bold flex items-center justify-center transition-colors border",
                    isCurrent ? "border-primary text-primary bg-primary/10 ring-2 ring-primary/20" :
                    isAttempted ? "border-success bg-success/10 text-success" : "border-border bg-page text-text-secondary hover:border-primary/50"
                  )}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-border space-y-3">
            <div className="flex items-center gap-3 text-xs text-text-secondary font-semibold">
              <div className="w-4 h-4 rounded border border-success bg-success/10"></div> Attempted
            </div>
            <div className="flex items-center gap-3 text-xs text-text-secondary font-semibold">
              <div className="w-4 h-4 rounded border border-border bg-page"></div> Not Attempted
            </div>
            <div className="flex items-center gap-3 text-xs text-text-secondary font-semibold">
              <div className="w-4 h-4 rounded border border-primary bg-primary/10"></div> Current
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
