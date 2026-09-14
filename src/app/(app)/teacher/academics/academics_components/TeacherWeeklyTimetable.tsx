"use client";
import React from 'react';
import { useTeacherTimetableStore } from '../academics_store/useTeacherTimetableStore';
import { TEACHER_WEEKLY_TIMETABLE, WEEK_DAYS, PERIOD_TIMES } from '../academics_constants/TeacherTimetableMockData';

export default function TeacherWeeklyTimetable() {
  const { openPeriodDetails } = useTeacherTimetableStore();

  return (
    <div className="bg-card border border-border rounded-xl overflow-x-auto custom-scrollbar">
      <table className="w-full text-left border-collapse min-w-[1000px]">
        <thead>
          <tr className="bg-black/30 border-b border-border">
            <th className="p-4 w-32 border-r border-border text-[13px] font-bold text-text-secondary">Day / Period</th>
            {PERIOD_TIMES.map((pt) => (
              <th key={pt.num} className="p-4 text-center border-r border-border min-w-[140px]">
                <div className="text-[13px] font-bold text-text-primary">Period {pt.num}</div>
                <div className="text-[11px] text-text-secondary mt-1">{pt.time}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {WEEK_DAYS.map((day) => (
            <tr key={day} className="border-b border-border hover:bg-white/5 transition-colors group">
              <td className="p-4 border-r border-border text-[14px] font-bold text-text-primary bg-black/10">
                {day}
              </td>
              {PERIOD_TIMES.map((pt) => {
                const period = TEACHER_WEEKLY_TIMETABLE.find(p => p.day === day && p.periodNumber === pt.num);
                
                if (!period) return <td key={pt.num} className="border-r border-border p-2"></td>;

                let cellStyle = 'bg-transparent text-text-primary hover:bg-info/10';
                if (period.type === 'free') cellStyle = 'bg-page text-text-secondary opacity-50 hover:opacity-100';
                if (period.type === 'substitute') cellStyle = 'bg-warning/10 text-warning hover:bg-warning/20 border border-warning/30';
                if (period.type === 'lab') cellStyle = 'bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30';

                return (
                  <td key={pt.num} className="border-r border-border p-2 align-top">
                    <div 
                      onClick={() => openPeriodDetails(period)}
                      className={`h-full p-2 rounded-lg cursor-pointer transition-colors flex flex-col items-center justify-center text-center ${cellStyle}`}
                    >
                      <span className={`text-[13px] font-bold ${period.type === 'free' ? 'text-text-secondary' : ''}`}>{period.subject}</span>
                      {period.type !== 'free' && (
                        <>
                          <span className="text-[11px] mt-1 font-medium">{period.class}</span>
                          <span className="text-[10px] opacity-80">{period.room}</span>
                        </>
                      )}
                      {period.type === 'substitute' && (
                        <span className="text-[9px] bg-warning text-white px-1 mt-1 rounded uppercase font-bold tracking-widest">Sub</span>
                      )}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
