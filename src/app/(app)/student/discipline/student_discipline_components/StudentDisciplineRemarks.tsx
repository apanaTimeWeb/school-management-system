"use client";

import React from 'react';
import type { BehaviourRemark } from '../student_discipline_types/student_discipline_types';
import { MessageCircle, ThumbsUp, ThumbsDown, ArrowUpCircle, Calendar, User } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  remarks: BehaviourRemark[];
}

export default function StudentDisciplineRemarks({ remarks }: Props) {
  
  if (remarks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-10 text-center text-text-secondary bg-card border border-border rounded-xl shadow-sm">
        <MessageCircle size={48} className="text-border mb-4" />
        <h3 className="text-lg font-bold text-text-primary">No Remarks Found</h3>
        <p className="text-sm">There are currently no behaviour remarks from teachers.</p>
      </div>
    );
  }

  const getTypeConfig = (type: string) => {
    switch(type) {
      case 'Positive': return { color: 'text-success bg-success/10 border-success/20', icon: <ThumbsUp size={16} /> };
      case 'Negative': return { color: 'text-danger bg-danger/10 border-danger/20', icon: <ThumbsDown size={16} /> };
      case 'Improvement Needed': return { color: 'text-amber-500 bg-amber-500/10 border-amber-500/20', icon: <ArrowUpCircle size={16} /> };
      default: return { color: 'text-text-secondary bg-page border-border', icon: <MessageCircle size={16} /> };
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 motion-safe:animate-[fadeIn_0.3s_ease-out]">
      {remarks.map(remark => {
        const config = getTypeConfig(remark.type);

        return (
          <div key={remark.id} className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="flex justify-between items-start mb-3">
              <span className={clsx("flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border", config.color)}>
                {config.icon} {remark.type}
              </span>
              <span className="text-xs font-semibold text-text-secondary flex items-center gap-1">
                <Calendar size={12} /> {remark.date}
              </span>
            </div>
            
            <p className="text-sm font-medium text-text-primary mb-4 flex-1">
              "{remark.remark}"
            </p>

            <div className="flex items-center gap-2 pt-3 border-t border-border mt-auto">
              <div className="w-6 h-6 rounded-full bg-page flex items-center justify-center text-text-secondary">
                <User size={12} />
              </div>
              <span className="text-xs font-bold text-text-secondary">Logged by: {remark.teacherName}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
