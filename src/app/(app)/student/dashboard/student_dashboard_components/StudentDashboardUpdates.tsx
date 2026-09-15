"use client";

import React from 'react';
import type { DashboardUpdate } from '../student_dashboard_types/student_dashboard_types';
import { Bell, Megaphone, Calendar, FileText, ChevronRight } from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';
import { StudentDashboardUrls } from '../student_dashboard_url_config';

interface Props {
  updates: DashboardUpdate[];
}

/**
 * RESPONSIBILITY: Renders notices, events, and announcements list.
 */
export default function StudentDashboardUpdates({ updates }: Props) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'notice': return <FileText size={16} className="text-blue-500" />;
      case 'announcement': return <Megaphone size={16} className="text-amber-500" />;
      case 'event': return <Calendar size={16} className="text-purple-500" />;
      default: return <Bell size={16} className="text-text-secondary" />;
    }
  };

  const getBg = (type: string) => {
    switch (type) {
      case 'notice': return 'bg-blue-500/10';
      case 'announcement': return 'bg-amber-500/10';
      case 'event': return 'bg-purple-500/10';
      default: return 'bg-border';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-5 flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-bold text-text-primary flex items-center gap-2">
          <span className="w-1 h-4 bg-info rounded-full"></span> Notice Board
        </h3>
        <Link href={StudentDashboardUrls.NOTICES} className="text-xs font-semibold text-primary hover:underline">View All</Link>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto custom-scrollbar pr-1 max-h-[500px]">
        {updates.length === 0 ? (
          <div className="text-center py-10 text-sm text-text-secondary">No new updates.</div>
        ) : (
          updates.map((update) => (
            <Link 
              key={update.id}
              href={StudentDashboardUrls.NOTICES}
              className={clsx(
                "p-3 rounded-lg border flex gap-3 cursor-pointer group motion-safe:transition-all hover:bg-page hover:shadow-sm hover:-translate-y-0.5 block",
                update.isUnread ? "bg-page border-primary/20 shadow-sm shadow-primary/5" : "bg-transparent border-transparent hover:border-border"
              )}
            >
              <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${getBg(update.type)}`}>
                {getIcon(update.type)}
              </div>
              
              <div className="flex flex-col flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h4 className={clsx(
                    "text-sm line-clamp-2",
                    update.isUnread ? "font-bold text-text-primary" : "font-semibold text-text-secondary group-hover:text-text-primary"
                  )}>
                    {update.title}
                  </h4>
                  {update.isUnread && <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5" />}
                </div>
                
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[10px] font-bold uppercase text-text-secondary tracking-wider">{update.type}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="text-[10px] font-semibold text-text-secondary/70">{update.date}</span>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
