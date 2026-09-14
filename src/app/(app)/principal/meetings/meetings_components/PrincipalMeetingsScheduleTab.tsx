"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalMeeting } from '../meetings_types/PrincipalMeetings.types';
import { fetchPrincipalMeetings } from '../meetings_api/PrincipalMeetingsApi';
import { Search, Filter, Clock, MapPin, Users, CheckCircle, CalendarClock } from 'lucide-react';
import { usePrincipalMeetingsStore } from '../meetings_store/usePrincipalMeetingsStore';
import clsx from 'clsx';

export default function PrincipalMeetingsScheduleTab() {
  const [meetings, setMeetings] = useState<PrincipalMeeting[]>([]);
  const [loading, setLoading] = useState(true);
  const { setSelectedMeeting } = usePrincipalMeetingsStore();

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalMeetings().then(data => {
      if (isMounted) {
        setMeetings(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => <div key={i} className="h-24 bg-skeleton-base animate-pulse rounded" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-[18px] font-bold text-text-primary">Meeting Schedule</h2>
          <p className="text-[13px] text-text-secondary">Track upcoming and past meetings, agendas, and attendance.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-2 bg-input border border-border rounded-md px-3 py-1.5 focus-within:border-primary transition-colors">
            <Search size={14} className="text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search meetings..." 
              className="bg-transparent border-none outline-none text-[13px] text-text-primary w-full sm:w-48 placeholder:text-text-secondary/50"
            />
          </div>
          <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-coming-soon', { detail: 'Action completed successfully!' })); }} className="flex items-center justify-center gap-2 px-4 py-1.5 bg-page hover:bg-white/5 border border-border rounded-md text-[13px] font-bold text-text-primary transition-colors">
            <Filter size={14} /> Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-64">Meeting Title & Type</th>
              <th className="p-4 w-48">Date & Time</th>
              <th className="p-4 w-48">Location</th>
              <th className="p-4 w-32 text-center">Status</th>
              <th className="p-4 w-32 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {meetings.map((mtg) => (
              <tr key={mtg.id} className="border-b border-border/50 hover:bg-white/5 transition-colors group">
                <td className="p-4">
                  <p className="text-[15px] font-bold text-text-primary mb-1 cursor-pointer hover:text-primary transition-colors" onClick={() => setSelectedMeeting(mtg)}>{mtg.title}</p>
                  <span className={clsx("inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold border", 
                    mtg.type === 'Staff' ? 'bg-primary/10 text-primary border-primary/20' :
                    mtg.type === 'Parent' ? 'bg-info/10 text-info border-info/20' :
                    mtg.type === 'Academic' ? 'bg-warning/10 text-warning border-warning/20' :
                    'bg-success/10 text-success border-success/20'
                  )}>
                    {mtg.type} Meeting
                  </span>
                </td>
                <td className="p-4">
                  <p className="text-[13px] font-bold text-text-primary flex items-center gap-2 mb-1"><CalendarClock size={14} className="text-primary"/> {mtg.date}</p>
                  <p className="text-[12px] text-text-secondary flex items-center gap-1.5"><Clock size={12}/> {mtg.time} ({mtg.duration})</p>
                </td>
                <td className="p-4">
                  <p className="text-[13px] text-text-primary flex items-center gap-2 mb-1"><MapPin size={14} className="text-warning"/> {mtg.location}</p>
                  <p className="text-[12px] text-text-secondary flex items-center gap-1.5">
                    <Users size={12}/> {mtg.actualAttendeesCount ? `${mtg.actualAttendeesCount}/${mtg.expectedAttendeesCount} Attended` : `${mtg.expectedAttendeesCount} Expected`}
                  </p>
                </td>
                <td className="p-4 text-center">
                  <span className={clsx("inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold border", 
                    mtg.status === 'Scheduled' ? 'bg-warning/10 text-warning border-warning/30' :
                    mtg.status === 'In Progress' ? 'bg-info/10 text-info border-info/30' :
                    mtg.status === 'Completed' ? 'bg-success/10 text-success border-success/30' :
                    'bg-danger/10 text-danger border-danger/30'
                  )}>
                    {mtg.status === 'Completed' && <CheckCircle size={12} className="mr-1"/>}
                    {mtg.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button 
                    onClick={() => setSelectedMeeting(mtg)}
                    className="px-4 py-1.5 rounded bg-primary/10 hover:bg-primary border border-primary/30 hover:border-primary text-[12px] font-bold text-primary hover:text-white transition-colors"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
