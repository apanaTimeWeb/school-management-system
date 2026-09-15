"use client";

import React from 'react';
import type { DailyAttendanceRecord } from '../student_attendance_types/student_attendance_types';
import { Calendar } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  records: DailyAttendanceRecord[];
}

/**
 * RESPONSIBILITY: Renders the visual attendance calendar.
 */
export default function StudentAttendanceCalendar({ records }: Props) {
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Present': return 'bg-success text-white shadow-sm shadow-success/30 hover:scale-110';
      case 'Absent': return 'bg-danger text-white shadow-sm shadow-danger/30 hover:scale-110';
      case 'Late': return 'bg-amber-500 text-white shadow-sm shadow-amber-500/30 hover:scale-110';
      case 'Leave': return 'bg-blue-500 text-white shadow-sm shadow-blue-500/30 hover:scale-110';
      case 'Holiday': return 'bg-page border border-border text-text-secondary';
      default: return 'bg-card border border-border text-text-secondary opacity-50';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-base font-bold text-text-primary flex items-center gap-2">
          <Calendar size={18} className="text-primary" /> August 2024
        </h3>
        
        {/* Legend */}
        <div className="flex gap-3 hidden sm:flex">
          {['Present', 'Absent', 'Late', 'Leave'].map(st => (
            <div key={st} className="flex items-center gap-1.5">
              <div className={clsx("w-3 h-3 rounded-full", getStatusColor(st))} />
              <span className="text-[10px] font-bold text-text-secondary uppercase">{st}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar Grid (Simplified for UI mockup) */}
      <div className="grid grid-cols-7 gap-2">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
          <div key={day} className="text-center text-[10px] font-bold text-text-secondary mb-2 uppercase">{day}</div>
        ))}

        {/* Padding for offset (starts on Thursday e.g.) */}
        <div className="h-10"></div><div className="h-10"></div><div className="h-10"></div>

        {records.map((record) => {
          const dayNum = parseInt(record.date.split('-')[2]);
          return (
            <div 
              key={record.id} 
              className="flex flex-col items-center justify-center relative group"
            >
              <div 
                className={clsx(
                  "w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs font-bold cursor-default motion-safe:transition-all",
                  getStatusColor(record.status)
                )}
              >
                {dayNum}
              </div>
              
              {/* Tooltip */}
              {record.remarks && (
                <div className="absolute bottom-full mb-2 hidden group-hover:block w-max max-w-[120px] bg-gray-900 text-white text-[10px] p-2 rounded-md z-10 shadow-lg text-center pointer-events-none">
                  {record.status}: {record.remarks}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
