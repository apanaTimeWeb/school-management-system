"use client";

import React from 'react';
import type { HomeworkItem } from '../student_homework_types/student_homework_types';
import { BookOpen, Calendar, Clock, User, CheckCircle, AlertCircle, ChevronRight, Paperclip } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  homeworks: HomeworkItem[];
  onViewDetails: (hw: HomeworkItem) => void;
}

/**
 * RESPONSIBILITY: Renders a grid/list of homework cards.
 */
export default function StudentHomeworkList({ homeworks, onViewDetails }: Props) {
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-success/10 text-success border-success/20';
      case 'Pending': return 'bg-amber-500/10 text-amber-600 border-amber-500/20';
      case 'Overdue': return 'bg-danger/10 text-danger border-danger/20';
      default: return 'bg-border text-text-secondary border-border';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed': return <CheckCircle size={14} className="text-success" />;
      case 'Pending': return <Clock size={14} className="text-amber-500" />;
      case 'Overdue': return <AlertCircle size={14} className="text-danger" />;
      default: return null;
    }
  };

  if (homeworks.length === 0) {
    return (
      <div className="bg-card border border-border rounded-xl p-10 flex flex-col items-center justify-center text-center">
        <CheckCircle size={48} className="text-success/50 mb-4" />
        <h3 className="text-lg font-bold text-text-primary">All caught up!</h3>
        <p className="text-sm text-text-secondary mt-1">No homework found for the selected filter.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {homeworks.map((hw) => (
        <div 
          key={hw.id} 
          onClick={() => onViewDetails(hw)}
          className="bg-card border border-border rounded-xl p-5 flex flex-col hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 motion-safe:transition-all cursor-pointer group relative overflow-hidden"
        >
          {hw.status === 'Overdue' && (
            <div className="absolute top-0 right-0 w-16 h-16 bg-danger/5 rounded-bl-full -z-10" />
          )}

          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                <BookOpen size={16} className="text-primary" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-text-secondary">{hw.subject}</span>
            </div>
            <span className={clsx("text-[10px] font-bold px-2 py-1 rounded-md border flex items-center gap-1.5", getStatusColor(hw.status))}>
              {getStatusIcon(hw.status)} {hw.status}
            </span>
          </div>

          <h3 className="text-base font-bold text-text-primary group-hover:text-primary transition-colors line-clamp-1 mb-2">
            {hw.title}
          </h3>

          <p className="text-xs text-text-secondary line-clamp-2 mb-4 flex-1">
            {hw.description}
          </p>

          <div className="flex flex-col gap-2 mt-auto border-t border-border pt-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-text-secondary flex items-center gap-1.5">
                <User size={14} className="text-info" /> {hw.teacher}
              </span>
              {hw.attachments.length > 0 && (
                <span className="text-xs font-bold text-text-secondary flex items-center gap-1 bg-page border border-border px-2 py-0.5 rounded-md">
                  <Paperclip size={12} className="text-purple-500" /> {hw.attachments.length}
                </span>
              )}
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className={clsx(
                "text-xs font-bold flex items-center gap-1.5",
                hw.status === 'Overdue' ? "text-danger" : "text-amber-600"
              )}>
                <Calendar size={14} /> Due: {hw.dueDate}
              </span>
              <ChevronRight size={16} className="text-text-secondary group-hover:text-primary transition-colors" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
