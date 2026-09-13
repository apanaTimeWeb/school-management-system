"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalMeetingMinutes } from '../meetings_types/PrincipalMeetings.types';
import { fetchPrincipalMinutes } from '../meetings_api/PrincipalMeetingsApi';
import { Search, Filter, FileText, CheckCircle, Clock } from 'lucide-react';
import { usePrincipalMeetingsStore } from '../meetings_store/usePrincipalMeetingsStore';
import clsx from 'clsx';

export default function PrincipalMeetingsMinutesTab() {
  const [minutes, setMinutes] = useState<PrincipalMeetingMinutes[]>([]);
  const [loading, setLoading] = useState(true);
  const { setSelectedMinutes } = usePrincipalMeetingsStore();

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalMinutes().then(data => {
      if (isMounted) {
        setMinutes(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => <div key={i} className="h-20 bg-skeleton-base animate-pulse rounded" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-[18px] font-bold text-text-primary">Minutes & Action Items</h2>
          <p className="text-[13px] text-text-secondary">Review meeting summaries and track the progress of follow-up tasks.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-2 bg-input border border-border rounded-md px-3 py-1.5 focus-within:border-primary transition-colors">
            <Search size={14} className="text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search minutes..." 
              className="bg-transparent border-none outline-none text-[13px] text-text-primary w-full sm:w-48 placeholder:text-text-secondary/50"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-1.5 bg-page hover:bg-white/5 border border-border rounded-md text-[13px] font-bold text-text-primary transition-colors">
            <Filter size={14} /> Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-64">Meeting Info</th>
              <th className="p-4">Summary Preview</th>
              <th className="p-4 w-64">Action Items Status</th>
              <th className="p-4 w-32 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {minutes.map((min) => {
              const totalItems = min.actionItems.length;
              const completedItems = min.actionItems.filter(i => i.status === 'Completed').length;
              
              return (
                <tr key={min.id} className="border-b border-border/50 hover:bg-white/5 transition-colors group">
                  <td className="p-4">
                    <p className="text-[14px] font-bold text-text-primary mb-0.5 cursor-pointer hover:text-primary transition-colors" onClick={() => setSelectedMinutes(min)}>{min.meetingTitle}</p>
                    <p className="text-[12px] text-text-secondary">{min.date}</p>
                    <p className="text-[11px] text-text-secondary/70 mt-1">By: {min.recordedBy}</p>
                  </td>
                  <td className="p-4">
                    <p className="text-[13px] text-text-secondary line-clamp-2" title={min.summary}>{min.summary}</p>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 text-[12px] font-bold text-text-primary">
                        <span>{completedItems}/{totalItems} Completed</span>
                      </div>
                      <div className="w-full bg-input rounded-full h-1.5 overflow-hidden">
                        <div 
                          className={clsx("h-full rounded-full transition-all duration-500", 
                            completedItems === totalItems ? 'bg-success' : 'bg-warning'
                          )} 
                          style={{ width: `${(completedItems / totalItems) * 100}%` }}
                        />
                      </div>
                      <span className={clsx("text-[11px] font-bold", 
                        completedItems === totalItems ? 'text-success' : 'text-warning'
                      )}>
                        {completedItems === totalItems ? 'All tasks done' : 'Pending tasks remain'}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <button 
                      onClick={() => setSelectedMinutes(min)}
                      className="px-4 py-1.5 rounded bg-page border border-border hover:bg-white/5 text-[12px] font-bold text-text-primary transition-colors flex items-center gap-2 ml-auto"
                    >
                      <FileText size={14}/> Read Full
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
