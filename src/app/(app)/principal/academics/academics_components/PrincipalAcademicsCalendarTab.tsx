"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalAcademicCalendarEvent } from '../academics_types/PrincipalAcademics.types';
import { fetchPrincipalCalendar } from '../academics_api/PrincipalAcademicsApi';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';

export default function PrincipalAcademicsCalendarTab() {
  const [events, setEvents] = useState<PrincipalAcademicCalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalCalendar().then(data => {
      if (isMounted) {
        setEvents(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-20 bg-card border border-border rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Exam': return 'bg-danger/20 text-danger border-danger/30';
      case 'Holiday': return 'bg-success/20 text-success border-success/30';
      case 'Activity': return 'bg-info/20 text-info border-info/30';
      default: return 'bg-page text-text-secondary border-border';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
        <CalendarIcon className="text-primary" size={24} />
        <div>
          <h2 className="text-[18px] font-bold text-text-primary">Academic Calendar</h2>
          <p className="text-[12px] text-text-secondary">Upcoming events, exams, and holidays for the term.</p>
        </div>
      </div>

      <div className="space-y-4">
        {events.map((ev) => (
          <div key={ev.id} className="flex gap-4 p-4 rounded-lg bg-page border border-border/50 hover:bg-white/5 hover:border-primary/30 transition-all">
            <div className="flex flex-col items-center justify-center bg-black/40 rounded-md px-4 py-2 min-w-[70px] border border-border">
              <span className="text-[11px] text-primary font-bold uppercase tracking-widest">
                {new Date(ev.date).toLocaleString('default', { month: 'short' })}
              </span>
              <span className="text-[20px] font-bold text-text-primary">
                {new Date(ev.date).getDate()}
              </span>
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-[15px] font-bold text-text-primary">{ev.title}</h3>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold border uppercase tracking-wider ${getTypeColor(ev.type)}`}>
                  {ev.type}
                </span>
              </div>
              
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1.5 text-[12px] text-text-secondary">
                  <Clock size={14} className="text-text-secondary" />
                  {ev.endDate ? (
                    <span>{new Date(ev.date).toLocaleDateString()} to {new Date(ev.endDate).toLocaleDateString()}</span>
                  ) : (
                    <span>{new Date(ev.date).toLocaleDateString()}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {events.length === 0 && (
          <p className="text-center text-text-secondary py-8 text-[13px]">No upcoming events in the calendar.</p>
        )}
      </div>
    </div>
  );
}
