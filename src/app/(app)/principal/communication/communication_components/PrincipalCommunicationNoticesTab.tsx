"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalNotice } from '../communication_types/PrincipalCommunication.types';
import { fetchPrincipalNotices } from '../communication_api/PrincipalCommunicationApi';
import { Search, Filter, Megaphone, Bell, CalendarClock, Paperclip } from 'lucide-react';
import { usePrincipalCommunicationStore } from '../communication_store/usePrincipalCommunicationStore';
import clsx from 'clsx';

export default function PrincipalCommunicationNoticesTab() {
  const [notices, setNotices] = useState<PrincipalNotice[]>([]);
  const [loading, setLoading] = useState(true);
  const { setSelectedNotice } = usePrincipalCommunicationStore();

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalNotices().then(data => {
      if (isMounted) {
        setNotices(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => <div key={i} className="h-24 bg-skeleton-base animate-pulse rounded" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-[18px] font-bold text-text-primary">School Notices & Announcements</h2>
          <p className="text-[13px] text-text-secondary">View active board notices and general announcements.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-2 bg-input border border-border rounded-md px-3 py-1.5 focus-within:border-primary transition-colors">
            <Search size={14} className="text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search notices..." 
              className="bg-transparent border-none outline-none text-[13px] text-text-primary w-full sm:w-48 placeholder:text-text-secondary/50"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-1.5 bg-page hover:bg-white/5 border border-border rounded-md text-[13px] font-bold text-text-primary transition-colors">
            <Filter size={14} /> Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-16">Type</th>
              <th className="p-4">Title & Description</th>
              <th className="p-4 w-40">Audience</th>
              <th className="p-4 w-40">Priority</th>
              <th className="p-4 w-32 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice) => (
              <tr key={notice.id} className="border-b border-border/50 hover:bg-white/5 transition-colors group">
                <td className="p-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 mx-auto">
                    {notice.type === 'Notice' ? <Bell size={18} /> : <Megaphone size={18} />}
                  </div>
                </td>
                <td className="p-4">
                  <p className="text-[15px] font-bold text-text-primary mb-1 group-hover:text-primary transition-colors cursor-pointer" onClick={() => setSelectedNotice(notice)}>{notice.title}</p>
                  <p className="text-[13px] text-text-secondary line-clamp-1">{notice.content}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-[11px] text-text-secondary/70 flex items-center gap-1"><CalendarClock size={12}/> {notice.datePosted}</span>
                    <span className="text-[11px] text-text-secondary/70">By: {notice.postedBy}</span>
                    {notice.attachments && <span className="text-[11px] text-info flex items-center gap-1"><Paperclip size={12}/> {notice.attachments} Files</span>}
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-2.5 py-1 rounded bg-page border border-border text-[12px] font-medium text-text-primary shadow-sm">
                    {notice.targetAudience}
                  </span>
                </td>
                <td className="p-4">
                  <span className={clsx("inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold border", 
                    notice.priority === 'Urgent' ? 'bg-danger/20 text-danger border-danger/30' :
                    notice.priority === 'High' ? 'bg-warning/20 text-warning border-warning/30' :
                    'bg-success/20 text-success border-success/30'
                  )}>
                    {notice.priority}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button 
                    onClick={() => setSelectedNotice(notice)}
                    className="px-4 py-1.5 rounded bg-primary/10 hover:bg-primary border border-primary/30 hover:border-primary text-[12px] font-bold text-primary hover:text-black transition-colors"
                  >
                    Read More
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
