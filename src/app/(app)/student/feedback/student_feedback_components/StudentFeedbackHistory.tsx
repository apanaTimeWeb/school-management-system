"use client";

import React from 'react';
import type { FeedbackSubmission } from '../student_feedback_types/student_feedback_types';
import { Star, EyeOff, MessageSquare, ShieldAlert, CheckCircle2, Clock, MessageCircleReply } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  history: FeedbackSubmission[];
}

export default function StudentFeedbackHistory({ history }: Props) {
  
  if (history.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-10 text-center text-text-secondary bg-card border border-border rounded-xl shadow-sm">
        <MessageSquare size={48} className="text-border mb-4" />
        <h3 className="text-lg font-bold text-text-primary">No Submissions</h3>
        <p className="text-sm">You haven't submitted any feedback or complaints yet.</p>
      </div>
    );
  }

  const getStatusBadge = (status: string) => {
    if (status === 'Resolved') return <span className="flex items-center gap-1 text-[10px] font-bold bg-success/10 text-success border border-success/20 px-2 py-0.5 rounded uppercase"><CheckCircle2 size={10} /> Resolved</span>;
    if (status === 'Reviewed') return <span className="flex items-center gap-1 text-[10px] font-bold bg-info/10 text-info border border-info/20 px-2 py-0.5 rounded uppercase"><CheckCircle2 size={10} /> Reviewed</span>;
    return <span className="flex items-center gap-1 text-[10px] font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20 px-2 py-0.5 rounded uppercase"><Clock size={10} /> Pending</span>;
  };

  return (
    <div className="flex flex-col gap-4 motion-safe:animate-[fadeIn_0.3s_ease-out]">
      {history.map(item => (
        <div key={item.id} className={clsx(
          "bg-card border rounded-xl p-5 shadow-sm transition-colors",
          item.category === 'Complaint/Grievance' ? "border-danger/30" : "border-border hover:border-primary/30"
        )}>
          
          <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
            <div className="flex items-center gap-3">
              <span className={clsx(
                "px-2.5 py-1 rounded text-xs font-bold border uppercase tracking-wider",
                item.category === 'Complaint/Grievance' ? "bg-danger/10 text-danger border-danger/20" : "bg-page text-text-secondary border-border"
              )}>
                {item.category}
              </span>
              {item.isAnonymous && (
                <span className="flex items-center gap-1 text-[10px] font-bold text-text-secondary bg-page px-2 py-1 rounded border border-border">
                  <EyeOff size={12} /> Anonymous
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-text-secondary">{item.date}</span>
              {getStatusBadge(item.status)}
            </div>
          </div>

          <div className="mb-4">
            {item.rating > 0 && (
              <div className="flex gap-0.5 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={14} className={star <= item.rating ? "fill-amber-500 text-amber-500" : "fill-transparent text-border"} />
                ))}
              </div>
            )}
            <p className="text-sm text-text-primary font-medium leading-relaxed">"{item.comments}"</p>
          </div>

          {item.adminReply && (
            <div className="bg-success/5 border border-success/20 rounded-lg p-3 flex items-start gap-3 mt-4">
              <MessageCircleReply size={16} className="text-success shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-bold text-success uppercase tracking-wider block mb-1">Official Reply</span>
                <p className="text-sm text-text-primary">{item.adminReply}</p>
              </div>
            </div>
          )}

        </div>
      ))}
    </div>
  );
}
