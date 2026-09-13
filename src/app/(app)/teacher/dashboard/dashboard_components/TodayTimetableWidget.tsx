"use client";
import React from 'react';
import { Clock, CheckCircle2, Circle } from 'lucide-react';
import { TEACHER_MOCK_DATA } from '../dashboard_constants/TeacherMockData';

export default function TodayTimetableWidget() {
  const { todayTimetable } = TEACHER_MOCK_DATA;

  return (
    <div className="bg-card border border-border rounded-xl flex flex-col h-full overflow-hidden">
      <div className="p-4 border-b border-border bg-black/20 flex items-center justify-between">
        <h3 className="text-[15px] font-bold text-text-primary flex items-center gap-2">
          <Clock className="text-info" size={18} />
          Today's Timetable
        </h3>
        <span className="text-[12px] font-medium text-text-secondary">{todayTimetable.length} Periods</span>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
        {todayTimetable.map((period, index) => (
          <div key={period.id} className="relative flex gap-4">
            {/* Timeline Line */}
            {index !== todayTimetable.length - 1 && (
              <div className="absolute left-[11px] top-7 bottom-[-16px] w-[2px] bg-border/50"></div>
            )}
            
            <div className="mt-1 shrink-0 z-10">
              {period.completed ? (
                <CheckCircle2 size={24} className="text-success bg-card rounded-full" />
              ) : (
                <Circle size={24} className="text-border bg-card rounded-full" />
              )}
            </div>
            
            <div className={`flex-1 p-3 rounded-lg border ${period.completed ? 'bg-success/5 border-success/20' : period.class === 'Free' ? 'bg-page border-border/50' : 'bg-primary/5 border-primary/20 hover:border-primary/50 transition-colors'}`}>
              <div className="flex justify-between items-start mb-1">
                <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">{period.period}</span>
                <span className="text-[12px] font-medium text-text-secondary">{period.time}</span>
              </div>
              <h4 className={`text-[15px] font-bold ${period.class === 'Free' ? 'text-text-secondary' : 'text-text-primary'}`}>{period.class}</h4>
              {period.class !== 'Free' && (
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[13px] text-text-secondary">{period.subject}</span>
                  <span className="w-1 h-1 rounded-full bg-border"></span>
                  <span className="text-[12px] font-medium text-info">{period.type}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
