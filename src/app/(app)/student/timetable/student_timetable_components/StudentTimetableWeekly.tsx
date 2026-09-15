"use client";

import React from 'react';
import type { DailyTimetable } from '../student_timetable_types/student_timetable_types';

interface Props {
  schedule: DailyTimetable[];
}

/**
 * RESPONSIBILITY: Renders the full week grid view.
 */
export default function StudentTimetableWeekly({ schedule }: Props) {
  // Assuming all days have the same period structure for a simple grid
  // In a real app, this might need dynamic column generation based on max periods
  const firstDayPeriods = schedule[0]?.periods || [];

  return (
    <div className="bg-card border border-border rounded-xl p-5 overflow-hidden">
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr>
              <th className="p-3 border-b border-r border-border bg-page text-sm font-bold text-text-primary w-24 text-center">Day</th>
              {firstDayPeriods.map((p, idx) => (
                <th key={idx} className="p-3 border-b border-r border-border bg-page text-xs font-bold text-text-secondary text-center min-w-[120px]">
                  P{p.periodNumber}<br/>
                  <span className="text-[9px] font-semibold">{p.startTime}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {schedule.map((day, dIdx) => (
              <tr key={dIdx} className="hover:bg-primary-subtle/30 transition-colors">
                <td className="p-3 border-b border-r border-border bg-page text-sm font-bold text-text-primary text-center">
                  {day.dayName.substring(0, 3)}
                </td>
                
                {day.periods.map((p, pIdx) => {
                  if (p.type === 'break') {
                    return (
                      <td key={pIdx} className="p-2 border-b border-r border-border bg-amber-500/5 text-center align-middle">
                        <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider block transform -rotate-90 origin-center whitespace-nowrap">
                          {p.periodNumber}
                        </span>
                      </td>
                    );
                  }

                  return (
                    <td key={pIdx} className="p-2 border-b border-r border-border bg-card align-top hover:bg-primary/5 transition-colors cursor-pointer group">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-text-primary group-hover:text-primary transition-colors line-clamp-1">{p.subject}</span>
                        <span className="text-[9px] text-text-secondary mt-1 line-clamp-1">{p.teacher}</span>
                        <span className="text-[9px] font-semibold text-text-secondary/70 mt-0.5">{p.room}</span>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
