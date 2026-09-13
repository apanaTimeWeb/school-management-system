"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalTeacherTimetable } from '../timetable_types/PrincipalTimetable.types';
import { fetchPrincipalTeacherTimetable } from '../timetable_api/PrincipalTimetableApi';
import { usePrincipalTimetableStore } from '../timetable_store/usePrincipalTimetableStore';
import { UserPlus, MapPin, Clock } from 'lucide-react';

export default function PrincipalTimetableTeacherTab() {
  const [schedules, setSchedules] = useState<PrincipalTeacherTimetable[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState('Monday');
  const { setSubstituteModalOpen } = usePrincipalTimetableStore();

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalTeacherTimetable().then(data => {
      if (isMounted) {
        setSchedules(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => <div key={i} className="h-20 bg-skeleton-base animate-pulse rounded" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-[18px] font-bold text-text-primary">Teacher Timetable</h2>
          <p className="text-[13px] text-text-secondary">View workload and allocations per teacher.</p>
        </div>
        <div className="flex gap-2">
          <select className="bg-input border border-border rounded-md px-3 py-1.5 text-[13px] text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary w-full md:w-64">
            <option>Mr. Arvind Kumar</option>
            <option>Dr. R. Sharma</option>
          </select>
        </div>
      </div>

      <div className="flex overflow-x-auto border-b border-border bg-page">
        {days.map(day => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-6 py-3 text-[13px] font-bold whitespace-nowrap border-b-2 transition-colors ${
              selectedDay === day 
                ? 'text-info border-info bg-info/10' 
                : 'text-text-secondary border-transparent hover:text-text-primary hover:bg-white/5'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="p-5 overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-24 text-center">Period</th>
              <th className="p-4 w-32 text-center">Timing</th>
              <th className="p-4 w-48">Subject / Class</th>
              <th className="p-4 w-32">Room</th>
              <th className="p-4 w-32 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Taking first schedule for demonstration */}
            {schedules[0]?.schedule[selectedDay]?.map((period) => (
              <tr key={period.id} className="border-b border-border/50 hover:bg-white/5 transition-colors group">
                <td className="p-4 text-center">
                  <span className="w-8 h-8 rounded-full bg-white/5 border border-border flex items-center justify-center text-[13px] font-bold text-text-primary mx-auto">
                    {period.periodNumber}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <div className="flex flex-col items-center gap-1 text-[12px] font-medium text-text-secondary">
                    <span className="flex items-center gap-1"><Clock size={12} className="text-info"/> {period.startTime}</span>
                    <span className="text-border">to</span>
                    <span>{period.endTime}</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-text-primary">{period.subject}</span>
                    <span className="text-[12px] text-text-secondary">Class 10-A</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1.5 text-[13px] font-medium text-text-secondary">
                    <MapPin size={14} className="text-danger" />
                    {period.room}
                  </div>
                </td>
                <td className="p-4 text-right">
                  <button 
                    onClick={() => setSubstituteModalOpen(true, period.id)}
                    className="px-3 py-1.5 bg-info/10 hover:bg-info text-info hover:text-white border border-info/30 hover:border-info rounded-md text-[12px] font-bold transition-colors flex items-center gap-1.5 ml-auto opacity-0 group-hover:opacity-100"
                  >
                    <UserPlus size={14} />
                    Substitute
                  </button>
                </td>
              </tr>
            ))}
            
            {(!schedules[0]?.schedule[selectedDay] || schedules[0].schedule[selectedDay].length === 0) && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-[13px] text-text-secondary">
                  Teacher has no periods scheduled for this day (Free Day).
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
