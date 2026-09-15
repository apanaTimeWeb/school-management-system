"use client";

import React from 'react';
import type { AttendanceMonthlySummary } from '../student_attendance_types/student_attendance_types';
import { History, Calendar } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  history: AttendanceMonthlySummary[];
}

/**
 * RESPONSIBILITY: Renders the monthly attendance history list.
 */
export default function StudentAttendanceHistory({ history }: Props) {
  return (
    <div className="bg-card border border-border rounded-xl p-5 h-full">
      <div className="flex justify-between items-center mb-4 border-b border-border pb-3">
        <h3 className="text-base font-bold text-text-primary flex items-center gap-2">
          <History size={18} className="text-primary" /> Monthly History
        </h3>
      </div>
      
      <div className="space-y-4">
        {history.map((record, index) => {
          const percent = Math.round((record.present / record.totalWorkingDays) * 100) || 0;
          return (
            <div key={index} className="relative pl-6 pb-4 last:pb-0 group">
              {/* Timeline Line */}
              {index !== history.length - 1 && (
                <div className="absolute left-2.5 top-5 w-[2px] h-full bg-border group-hover:bg-primary/30 transition-colors" />
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>

              <div className="bg-page border border-border rounded-lg p-3 hover:border-primary/30 hover:shadow-sm motion-safe:transition-all">
                <div className="flex justify-between items-center mb-3 border-b border-border pb-2">
                  <h4 className="text-sm font-bold text-text-primary flex items-center gap-1.5">
                    <Calendar size={14} className="text-primary" /> {record.month}
                  </h4>
                  <span className={clsx(
                    "text-[10px] font-bold px-2 py-0.5 rounded-md",
                    percent >= 75 ? "bg-success/10 text-success" : "bg-danger/10 text-danger"
                  )}>
                    {percent}%
                  </span>
                </div>
                
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase font-bold text-text-secondary">Present</span>
                    <span className="text-xs font-bold text-success">{record.present}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase font-bold text-text-secondary">Absent</span>
                    <span className="text-xs font-bold text-danger">{record.absent}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase font-bold text-text-secondary">Late</span>
                    <span className="text-xs font-bold text-amber-500">{record.late}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase font-bold text-text-secondary">Leave</span>
                    <span className="text-xs font-bold text-blue-500">{record.leave}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
