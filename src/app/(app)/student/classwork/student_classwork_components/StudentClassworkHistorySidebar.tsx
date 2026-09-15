"use client";

import React from 'react';
import type { DailyClasswork } from '../student_classwork_types/student_classwork_types';
import { History, CalendarDays } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  history: DailyClasswork[];
  selectedDayId: string | null;
  onSelectDay: (id: string) => void;
}

/**
 * RESPONSIBILITY: Renders the sidebar for selecting a past date to view classwork.
 */
export default function StudentClassworkHistorySidebar({ history, selectedDayId, onSelectDay }: Props) {
  
  return (
    <div className="bg-card border border-border rounded-xl p-4 flex flex-col h-full sticky top-6">
      <h3 className="text-sm font-bold text-text-primary mb-4 flex items-center gap-2 border-b border-border pb-3">
        <History size={16} className="text-primary" /> Classwork History
      </h3>

      <div className="space-y-2">
        {history.map((day) => {
          const isSelected = day.id === selectedDayId;
          return (
            <button
              key={day.id}
              onClick={() => onSelectDay(day.id)}
              className={clsx(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors",
                isSelected ? "bg-primary/10 text-primary border border-primary/20" : "bg-page border border-border text-text-secondary hover:border-primary/30"
              )}
            >
              <div className={clsx(
                "w-8 h-8 rounded-md flex items-center justify-center shrink-0",
                isSelected ? "bg-primary text-white shadow-sm" : "bg-card border border-border text-text-secondary"
              )}>
                <CalendarDays size={16} />
              </div>
              <div className="flex flex-col">
                <span className={clsx("text-xs font-bold", isSelected ? "text-primary" : "text-text-primary")}>
                  {day.date}
                </span>
                <span className="text-[10px] font-semibold opacity-70">
                  {day.dayOfWeek} • {day.records.length} records
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
