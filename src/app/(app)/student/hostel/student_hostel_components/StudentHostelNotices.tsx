"use client";

import React from 'react';
import type { HostelNotice } from '../student_hostel_types/student_hostel_types';
import { BellRing, AlertTriangle, MessageSquare } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  notices: HostelNotice[];
}

export default function StudentHostelNotices({ notices }: Props) {
  
  if (notices.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-10 text-center text-text-secondary bg-page border border-border rounded-xl">
        <BellRing size={48} className="text-border mb-4" />
        <h3 className="text-lg font-bold text-text-primary">No Notices</h3>
        <p className="text-sm">There are currently no notices from the hostel warden.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 motion-safe:animate-[fadeIn_0.3s_ease-out]">
      <h2 className="text-lg font-bold text-text-primary flex items-center gap-2 border-b border-border pb-4 mb-2">
        <BellRing size={20} className="text-primary" /> Hostel Notice Board
      </h2>

      {notices.map(notice => (
        <div key={notice.id} className={clsx(
          "p-5 rounded-xl border flex gap-4",
          notice.isUrgent ? "bg-danger/5 border-danger/30" : "bg-page border-border"
        )}>
          <div className={clsx(
            "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
            notice.isUrgent ? "bg-danger/10 text-danger" : "bg-primary/10 text-primary"
          )}>
            {notice.isUrgent ? <AlertTriangle size={20} /> : <MessageSquare size={20} />}
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-base font-bold text-text-primary">{notice.title}</h3>
              <span className="text-xs font-semibold text-text-secondary shrink-0 ml-2">{notice.date}</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">{notice.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
