"use client";

import React from 'react';
import type { TimetableClass } from '../student_dashboard_types/student_dashboard_types';
import { Clock, MapPin, User, CheckCircle2 } from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';
import { StudentDashboardUrls } from '../student_dashboard_url_config';

interface Props {
  todayClasses: TimetableClass[];
}

/**
 * RESPONSIBILITY: Renders today's timetable list.
 */
export default function StudentDashboardTimetable({ todayClasses }: Props) {
  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-bold text-text-primary flex items-center gap-2">
          <span className="w-1 h-4 bg-primary rounded-full"></span> Today's Timetable
        </h3>
        <Link href={StudentDashboardUrls.TIMETABLE} className="text-xs font-semibold text-primary hover:underline">View Full</Link>
      </div>

      <div className="space-y-3">
        {todayClasses.length === 0 ? (
          <div className="text-center py-6 text-sm text-text-secondary">No classes scheduled for today.</div>
        ) : (
          todayClasses.map((cls) => (
            <div 
              key={cls.id} 
              className={clsx(
                "flex items-center gap-4 p-3 rounded-lg border motion-safe:transition-all hover:bg-page",
                cls.status === 'ongoing' ? "border-primary/50 bg-primary/5" : "border-border bg-page"
              )}
            >
              {/* Time Column */}
              <div className="flex flex-col items-center justify-center min-w-[80px] shrink-0 border-r border-border pr-4">
                <span className="text-xs font-bold text-text-primary">{cls.startTime}</span>
                <span className="text-[10px] text-text-secondary font-semibold">{cls.endTime}</span>
              </div>

              {/* Detail Column */}
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-text-primary">{cls.subject}</h4>
                  {cls.status === 'ongoing' && (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-success text-white animate-pulse">LIVE</span>
                  )}
                  {cls.status === 'completed' && (
                    <CheckCircle2 size={14} className="text-success" />
                  )}
                </div>
                <div className="flex items-center gap-4 mt-1">
                  <span className="text-xs text-text-secondary flex items-center gap-1">
                    <User size={12} className="text-primary" /> {cls.teacher}
                  </span>
                  <span className="text-xs text-text-secondary flex items-center gap-1">
                    <MapPin size={12} className="text-info" /> {cls.room}
                  </span>
                </div>
              </div>

            </div>
          ))
        )}
      </div>
    </div>
  );
}
