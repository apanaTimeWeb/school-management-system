"use client";

import React, { useState } from 'react';
import type { DailyTimetable } from '../student_timetable_types/student_timetable_types';
import { Clock, MapPin, User, AlertCircle, Coffee } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  schedule: DailyTimetable[];
}

/**
 * RESPONSIBILITY: Renders the daily list view of periods.
 */
export default function StudentTimetableDaily({ schedule }: Props) {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const currentDay = schedule[selectedDayIndex];

  if (!currentDay) return null;

  return (
    <div className="bg-card border border-border rounded-xl p-5">
      
      {/* Day Selector */}
      <div className="flex overflow-x-auto custom-scrollbar gap-2 mb-6 pb-2">
        {schedule.map((day, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedDayIndex(idx)}
            className={clsx(
              "flex flex-col items-center justify-center min-w-[80px] py-2 px-4 rounded-lg border motion-safe:transition-all",
              selectedDayIndex === idx 
                ? "bg-primary/10 border-primary text-primary" 
                : "bg-page border-border text-text-secondary hover:border-primary/50 hover:bg-page"
            )}
          >
            <span className="text-[10px] font-bold uppercase tracking-wider">{day.dayName.substring(0, 3)}</span>
            <span className="text-sm font-bold">{day.date}</span>
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {currentDay.periods.length === 0 ? (
          <div className="text-center py-10 text-text-secondary text-sm">No classes scheduled for {currentDay.dayName}.</div>
        ) : (
          currentDay.periods.map((period) => (
            <div 
              key={period.id} 
              className={clsx(
                "flex items-stretch gap-4 p-4 rounded-lg border motion-safe:transition-all hover:shadow-sm",
                period.type === 'break' ? "bg-amber-500/5 border-amber-500/20" : "bg-page border-border hover:border-primary/30"
              )}
            >
              {/* Time Block */}
              <div className="flex flex-col items-center justify-center min-w-[100px] border-r border-border pr-4 shrink-0">
                <span className="text-sm font-bold text-text-primary">{period.startTime}</span>
                <span className="text-[10px] font-semibold text-text-secondary">to {period.endTime}</span>
              </div>

              {/* Details Block */}
              <div className="flex flex-col justify-center flex-1">
                {period.type === 'break' ? (
                  <div className="flex items-center gap-2 text-amber-600">
                    <Coffee size={20} />
                    <span className="font-bold text-lg">{period.periodNumber} Break</span>
                  </div>
                ) : (
                  <>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-primary/10 text-primary text-[10px] font-bold flex items-center justify-center">
                          {period.periodNumber}
                        </span>
                        <h4 className="text-base font-bold text-text-primary">{period.subject}</h4>
                      </div>
                      <span className="text-xs font-bold text-text-secondary uppercase tracking-wider flex items-center gap-1">
                        {period.type === 'lab' && <span className="bg-purple-500/10 text-purple-600 px-2 py-0.5 rounded-full">LAB</span>}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2">
                      <span className="text-sm font-semibold text-text-secondary flex items-center gap-1.5">
                        <User size={14} className="text-info" /> 
                        {period.teacher}
                      </span>
                      <span className="text-sm font-semibold text-text-secondary flex items-center gap-1.5">
                        <MapPin size={14} className="text-rose-500" /> 
                        {period.room}
                      </span>
                      
                      {period.isSubstitute && (
                        <span className="text-[11px] font-bold text-danger bg-danger/10 px-2 py-0.5 rounded-md flex items-center gap-1">
                          <AlertCircle size={12} /> Sub: {period.substituteTeacherName}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>

            </div>
          ))
        )}
      </div>

    </div>
  );
}
