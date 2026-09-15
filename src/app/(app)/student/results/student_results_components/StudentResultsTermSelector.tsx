"use client";

import React from 'react';
import type { ExamResult } from '../student_results_types/student_results_types';
import { FileBadge, Calendar } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  results: ExamResult[];
  selectedResultId: string | null;
  onSelectResult: (id: string) => void;
}

/**
 * RESPONSIBILITY: Renders sidebar list of previous exam results.
 */
export default function StudentResultsTermSelector({ results, selectedResultId, onSelectResult }: Props) {
  
  return (
    <div className="bg-card border border-border rounded-xl p-4 flex flex-col h-full sticky top-6">
      <h3 className="text-sm font-bold text-text-primary mb-4 flex items-center gap-2 border-b border-border pb-3">
        <FileBadge size={16} className="text-primary" /> Past Results
      </h3>

      {results.length === 0 ? (
        <div className="text-center py-6 text-sm text-text-secondary">No results published yet.</div>
      ) : (
        <div className="space-y-2">
          {results.map((res) => {
            const isSelected = res.id === selectedResultId;
            return (
              <button
                key={res.id}
                onClick={() => onSelectResult(res.id)}
                className={clsx(
                  "w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all",
                  isSelected 
                    ? "bg-primary/10 border-primary/30 shadow-sm border" 
                    : "bg-page border border-border hover:border-primary/30"
                )}
              >
                <div className={clsx(
                  "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                  isSelected ? "bg-primary text-white" : "bg-card border border-border text-text-secondary"
                )}>
                  <FileBadge size={16} />
                </div>
                <div className="flex flex-col">
                  <span className={clsx("text-sm font-bold line-clamp-1", isSelected ? "text-primary" : "text-text-primary")}>
                    {res.termName}
                  </span>
                  <span className="text-[10px] font-semibold text-text-secondary mt-1 flex items-center gap-1">
                    <Calendar size={10} /> Published: {res.datePublished}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
