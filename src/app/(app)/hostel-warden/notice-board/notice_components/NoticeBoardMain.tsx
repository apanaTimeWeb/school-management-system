"use client";

import React, { useState } from 'react';
import { 
  Megaphone, Search, Filter, AlertTriangle, 
  CalendarDays, Zap, Pin, Clock, Radio, Plus, Eye, Target
} from 'lucide-react';
import { MOCK_NOTICES } from '../notice_constants/notice.constants';
import type { HostelNotice, NoticeCategory } from '../notice_types/notice.types';

export default function NoticeBoardMain() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL');

  const filteredNotices = MOCK_NOTICES.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          notice.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (categoryFilter === 'ALL') return matchesSearch;
    return matchesSearch && notice.category === categoryFilter;
  });

  const getCategoryBadge = (category: NoticeCategory) => {
    switch(category) {
      case 'General': return <span className="px-2.5 py-1 bg-blue-500/10 text-blue-600 border border-blue-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 w-fit"><Pin size={10}/> General</span>;
      case 'Maintenance': return <span className="px-2.5 py-1 bg-orange-500/10 text-orange-600 border border-orange-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 w-fit"><Zap size={10}/> Maintenance</span>;
      case 'Event': return <span className="px-2.5 py-1 bg-fuchsia-500/10 text-fuchsia-600 border border-fuchsia-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 w-fit"><CalendarDays size={10}/> Event</span>;
      case 'Urgent Alert': return <span className="px-2.5 py-1 bg-red-500/10 text-red-600 border border-red-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 w-fit animate-pulse"><AlertTriangle size={10}/> Urgent Alert</span>;
      default: return null;
    }
  };

  const getNoticeBgColor = (category: NoticeCategory) => {
    if (category === 'Urgent Alert') return 'bg-red-50 dark:bg-red-500/5 border-red-200 dark:border-red-500/20';
    return 'bg-[var(--bg-card)] border-[var(--border)]';
  };

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0 shadow-sm">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <Megaphone className="text-amber-500" size={24} /> Digital Notice Board
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Broadcast announcements, maintenance schedules, and urgent alerts to students.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
           <button className="flex items-center justify-center gap-2 px-4 py-2 bg-amber-600 text-white text-sm font-bold rounded-lg shadow-sm hover:bg-amber-700 transition-colors shrink-0">
              <Plus size={16} /> New Announcement
           </button>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shadow-sm">
         <select 
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="bg-[var(--bg-input)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:border-amber-500 outline-none w-full sm:w-48"
         >
            <option value="ALL">All Categories</option>
            <option value="General">General</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Event">Events</option>
            <option value="Urgent Alert">Urgent Alerts</option>
         </select>
         
         <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={16} />
            <input 
               type="text" 
               placeholder="Search announcements by title or content..." 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-lg pl-9 pr-4 py-2 text-sm focus:border-amber-500 outline-none transition-colors"
            />
         </div>
      </div>

      {/* Grid of Notices */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 pb-6">
         {filteredNotices.map(notice => (
            <div key={notice.id} className={`border rounded-xl p-5 shadow-sm flex flex-col hover:shadow-md transition-all relative overflow-hidden ${getNoticeBgColor(notice.category)}`}>
               
               {/* Background Watermark Icon */}
               <div className="absolute -right-8 -bottom-8 opacity-[0.03] pointer-events-none">
                  {notice.category === 'Urgent Alert' ? <AlertTriangle size={150} /> : <Megaphone size={150} />}
               </div>
               
               <div className="relative z-10 flex flex-col h-full">
                  
                  {/* Top Bar */}
                  <div className="flex justify-between items-start mb-4">
                     {getCategoryBadge(notice.category)}
                     <span className="text-[10px] font-bold text-[var(--text-secondary)] flex items-center gap-1 bg-[var(--bg-input)] px-2 py-1 rounded border border-[var(--border)]">
                        <Clock size={10} /> {new Date(notice.datePosted).toLocaleDateString('en-GB')}
                     </span>
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                     <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 leading-tight">{notice.title}</h2>
                     <p className="text-sm text-[var(--text-primary)] leading-relaxed">{notice.content}</p>
                  </div>

                  {/* Details block */}
                  <div className="mt-auto grid grid-cols-2 gap-4 pt-4 border-t border-[var(--border)]">
                     <div>
                        <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] block mb-1">Target Audience</span>
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-primary)]">
                           <Target size={14} className="text-indigo-500" />
                           {notice.targetAudience}
                           {notice.targetDetail && <span className="text-indigo-600 bg-indigo-500/10 px-1.5 py-0.5 rounded ml-1">{notice.targetDetail}</span>}
                        </div>
                     </div>
                     <div>
                        <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] block mb-1">Broadcast Status</span>
                        {notice.isBroadcasted ? (
                           <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                              <Radio size={14} className="animate-pulse" /> Sent as Push/SMS
                           </div>
                        ) : (
                           <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-secondary)]">
                              <Eye size={14} /> Board Display Only
                           </div>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         ))}

         {filteredNotices.length === 0 && (
            <div className="col-span-full py-16 flex flex-col items-center justify-center text-[var(--text-secondary)] border-2 border-dashed border-[var(--border)] rounded-xl bg-[var(--bg-card)]">
               <Megaphone size={48} className="opacity-20 mb-4" />
               <p className="font-medium text-lg">No announcements found</p>
            </div>
         )}
      </div>

    </div>
  );
}
