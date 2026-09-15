"use client";

import React from 'react';
import type { ExamTerm } from '../student_examinations_types/student_examinations_types';
import { Award, Calendar, AlertCircle } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  upcomingExams: ExamTerm[];
  pastExams: ExamTerm[];
  selectedTermId: string | null;
  onSelectTerm: (id: string) => void;
}

/**
 * RESPONSIBILITY: Renders the sidebar for selecting examination terms.
 */
export default function StudentExaminationsTermSelector({ upcomingExams, pastExams, selectedTermId, onSelectTerm }: Props) {
  
  const renderTermList = (terms: ExamTerm[], title: string, isUpcoming: boolean) => {
    if (terms.length === 0) return null;
    return (
      <div className="mb-6 last:mb-0">
        <h4 className="text-[11px] font-bold text-text-secondary uppercase tracking-wider mb-3 px-1">{title}</h4>
        <div className="space-y-2">
          {terms.map(term => {
            const isSelected = term.id === selectedTermId;
            return (
              <button
                key={term.id}
                onClick={() => onSelectTerm(term.id)}
                className={clsx(
                  "w-full flex items-start gap-3 px-3 py-3 rounded-xl text-left transition-all",
                  isSelected 
                    ? "bg-primary/10 border-primary/30 shadow-sm border" 
                    : "bg-page border border-border hover:border-primary/30"
                )}
              >
                <div className={clsx(
                  "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5",
                  isSelected ? "bg-primary text-white" : "bg-card border border-border text-text-secondary"
                )}>
                  <Award size={16} />
                </div>
                <div className="flex flex-col">
                  <span className={clsx("text-sm font-bold line-clamp-2", isSelected ? "text-primary" : "text-text-primary")}>
                    {term.termName}
                  </span>
                  <span className="text-[10px] font-semibold text-text-secondary mt-1 flex items-center gap-1">
                    <Calendar size={10} /> {term.startDate}
                  </span>
                  {isUpcoming && isSelected && (
                    <span className="text-[9px] font-bold bg-amber-500/10 text-amber-600 px-2 py-0.5 rounded mt-2 inline-flex items-center gap-1 w-fit">
                      <AlertCircle size={10} /> Upcoming
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-card border border-border rounded-xl p-4 flex flex-col h-full sticky top-6">
      <h3 className="text-sm font-bold text-text-primary mb-5 flex items-center gap-2 border-b border-border pb-3">
        <Award size={16} className="text-primary" /> Exam Calendar
      </h3>

      {upcomingExams.length === 0 && pastExams.length === 0 ? (
        <div className="text-center py-6 text-sm text-text-secondary">No exams scheduled.</div>
      ) : (
        <>
          {renderTermList(upcomingExams, "Upcoming / Ongoing", true)}
          {renderTermList(pastExams, "Past Examinations", false)}
        </>
      )}
    </div>
  );
}
