"use client";
import React from 'react';
import { Clock, MapPin, AlertCircle, ArrowRight } from 'lucide-react';
import { useTeacherTimetableStore } from '../academics_store/useTeacherTimetableStore';
import { TEACHER_WEEKLY_TIMETABLE } from '../academics_constants/TeacherTimetableMockData';

export default function TeacherDailyTimetable() {
  const { openPeriodDetails } = useTeacherTimetableStore();
  
  // Hardcoding 'Monday' as today for demonstration purposes
  const dailySchedule = TEACHER_WEEKLY_TIMETABLE.filter(p => p.day === 'Monday').sort((a, b) => a.periodNumber - b.periodNumber);

  const getCardStyle = (type: string) => {
    switch (type) {
      case 'substitute': return 'bg-warning/10 border-warning/30 hover:border-warning/60 shadow-[inset_4px_0_0_0_rgba(234,179,8,1)]';
      case 'free': return 'bg-page border-border/50 hover:border-border text-text-secondary';
      case 'lab': return 'bg-primary/5 border-primary/20 hover:border-primary/50 shadow-[inset_4px_0_0_0_rgba(59,130,246,1)]';
      default: return 'bg-card border-border hover:border-info/50 shadow-[inset_4px_0_0_0_rgba(14,165,233,1)]';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {dailySchedule.map((period) => (
        <div 
          key={period.id} 
          onClick={() => openPeriodDetails(period)}
          className={`border rounded-xl p-5 cursor-pointer transition-all duration-200 group relative overflow-hidden ${getCardStyle(period.type)}`}
        >
          {period.type === 'substitute' && (
             <div className="absolute top-0 right-0 bg-warning text-black text-[10px] font-bold px-2 py-1 rounded-bl-lg">SUBSTITUTE</div>
          )}
          
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[12px] font-bold text-text-secondary uppercase tracking-wider">Period {period.periodNumber}</p>
              <h3 className={`text-[20px] font-bold mt-1 ${period.type === 'free' ? 'text-text-secondary' : 'text-text-primary'}`}>{period.subject}</h3>
            </div>
            <div className={`p-2 rounded-lg ${period.type === 'free' ? 'bg-black/10' : 'bg-black/20'}`}>
              <Clock size={20} className={period.type === 'free' ? 'text-text-secondary' : period.type === 'substitute' ? 'text-warning' : 'text-info'} />
            </div>
          </div>
          
          <div className="space-y-2 mt-auto">
            <div className="flex items-center gap-2 text-[13px] text-text-secondary">
              <Clock size={14} /> {period.time}
            </div>
            {period.type !== 'free' && (
              <div className="flex items-center gap-2 text-[13px] text-text-secondary">
                <MapPin size={14} /> {period.room} • <span className="font-bold text-text-primary">{period.class}</span>
              </div>
            )}
            {period.type === 'free' && (
               <div className="flex items-center gap-2 text-[13px] text-text-secondary">
                <MapPin size={14} /> {period.room}
              </div>
            )}
          </div>
          
          <div className="mt-4 pt-3 border-t border-black/10 flex justify-between items-center">
            <span className="text-[12px] font-semibold opacity-70 group-hover:opacity-100 transition-opacity">View Details</span>
            <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      ))}
    </div>
  );
}
