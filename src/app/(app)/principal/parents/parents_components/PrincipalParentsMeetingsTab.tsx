"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalParentMeeting } from '../parents_types/PrincipalParents.types';
import { fetchPrincipalMeetings } from '../parents_api/PrincipalParentsApi';
import { CalendarSync, Search, Filter, CheckCircle, Clock, XCircle } from 'lucide-react';
import { usePrincipalParentsStore } from '../parents_store/usePrincipalParentsStore';
import clsx from 'clsx';

export default function PrincipalParentsMeetingsTab() {
  const [meetings, setMeetings] = useState<PrincipalParentMeeting[]>([]);
  const [loading, setLoading] = useState(true);
  const { setSelectedMeeting } = usePrincipalParentsStore();

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
          {[...Array(4)].map((_, i) => <div key={i} className="h-16 bg-skeleton-base animate-pulse rounded" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-[18px] font-bold text-text-primary flex items-center gap-2">
            <CalendarSync className="text-primary" size={20} />
            Meetings & Important Cases
          </h2>
          <p className="text-[13px] text-text-secondary mt-1">Track scheduled and completed principal-parent meetings.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-2 bg-input border border-border rounded-md px-3 py-1.5 focus-within:border-primary transition-colors">
            <Search size={14} className="text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search parent..." 
              className="bg-transparent border-none outline-none text-[13px] text-text-primary w-full sm:w-48 placeholder:text-text-secondary/50"
            />
          </div>
          <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-coming-soon', { detail: 'Action completed successfully!' })); }} className="flex items-center justify-center gap-2 px-4 py-1.5 bg-page hover:bg-white/5 border border-border rounded-md text-[13px] font-bold text-text-primary transition-colors">
            <Filter size={14} /> Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-48">Parent Name</th>
              <th className="p-4 w-48">Student Name</th>
              <th className="p-4 w-40">Date & Time</th>
              <th className="p-4">Reason / Notes</th>
              <th className="p-4 w-32 text-center">Status</th>
              <th className="p-4 w-32 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {meetings.map((mtg) => (
              <tr key={mtg.id} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                <td className="p-4">
                  <p className="text-[14px] font-bold text-text-primary">{mtg.parentName}</p>
                  <p className="text-[12px] text-text-secondary">ID: {mtg.parentId}</p>
                </td>
                <td className="p-4">
                  <p className="text-[13px] font-medium text-text-primary">{mtg.studentName}</p>
                </td>
                <td className="p-4">
                  <p className="text-[13px] font-bold text-primary">{mtg.meetingDate}</p>
                  <p className="text-[12px] text-text-secondary mt-0.5">{mtg.meetingTime}</p>
                </td>
                <td className="p-4">
                  <p className="text-[13px] text-text-secondary line-clamp-2" title={mtg.reason}>{mtg.reason}</p>
                </td>
                <td className="p-4 text-center">
                  <span className={clsx("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border", 
                    mtg.status === 'Scheduled' ? 'bg-warning/10 text-warning border-warning/20' :
                    mtg.status === 'Completed' ? 'bg-success/10 text-success border-success/20' :
                    'bg-danger/10 text-danger border-danger/20'
                  )}>
                    {mtg.status === 'Scheduled' && <Clock size={12}/>}
                    {mtg.status === 'Completed' && <CheckCircle size={12}/>}
                    {mtg.status === 'Cancelled' && <XCircle size={12}/>}
                    {mtg.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button 
                    onClick={() => setSelectedMeeting(mtg)}
                    className="px-4 py-1.5 rounded bg-page border border-border hover:bg-white/5 text-text-primary font-bold text-[12px] transition-colors"
                  >
                    Details
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
