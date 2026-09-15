"use client";

import React, { useEffect } from 'react';
import type { HomeworkItem } from '../student_homework_types/student_homework_types';
import { X, BookOpen, Calendar, User, Paperclip, CheckCircle2, UploadCloud } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  homework: HomeworkItem;
  onClose: () => void;
}

/**
 * RESPONSIBILITY: Renders a popup modal showing full homework details.
 */
export default function StudentHomeworkDetailsModal({ homework, onClose }: Props) {
  
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-overlay/80 backdrop-blur-sm motion-safe:animate-[fadeIn_0.2s_ease-out]">
      
      {/* Modal Container */}
      <div className="bg-popover border border-border rounded-xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl relative motion-safe:animate-[slideIn_0.3s_ease-out]">
        
        {/* Header */}
        <div className="flex items-start justify-between p-5 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <BookOpen size={20} className="text-primary" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">{homework.subject}</span>
              <h2 className="text-lg font-bold text-text-primary leading-tight">{homework.title}</h2>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-page border border-border flex items-center justify-center text-text-secondary hover:bg-danger/10 hover:text-danger hover:border-danger/30 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-5">
          
          {/* Metadata Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div className="flex flex-col gap-1 p-3 rounded-lg bg-page border border-border">
              <span className="text-[10px] font-bold text-text-secondary uppercase">Assigned</span>
              <span className="text-xs font-bold text-text-primary flex items-center gap-1.5"><Calendar size={12} className="text-primary"/> {homework.assignedDate}</span>
            </div>
            <div className="flex flex-col gap-1 p-3 rounded-lg bg-page border border-border">
              <span className="text-[10px] font-bold text-text-secondary uppercase">Due Date</span>
              <span className={clsx("text-xs font-bold flex items-center gap-1.5", homework.status === 'Overdue' ? 'text-danger' : 'text-amber-600')}>
                <Calendar size={12} /> {homework.dueDate}
              </span>
            </div>
            <div className="flex flex-col gap-1 p-3 rounded-lg bg-page border border-border">
              <span className="text-[10px] font-bold text-text-secondary uppercase">Teacher</span>
              <span className="text-xs font-bold text-text-primary flex items-center gap-1.5"><User size={12} className="text-info"/> {homework.teacher}</span>
            </div>
            <div className="flex flex-col gap-1 p-3 rounded-lg bg-page border border-border">
              <span className="text-[10px] font-bold text-text-secondary uppercase">Status</span>
              <span className={clsx(
                "text-xs font-bold",
                homework.status === 'Completed' ? 'text-success' : homework.status === 'Overdue' ? 'text-danger' : 'text-amber-600'
              )}>
                {homework.status}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-text-primary mb-2">Description</h4>
            <div className="bg-page border border-border rounded-lg p-4 text-sm text-text-secondary leading-relaxed">
              {homework.description}
            </div>
          </div>

          {/* Attachments */}
          {homework.attachments.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-bold text-text-primary mb-2 flex items-center gap-2">
                <Paperclip size={16} className="text-purple-500" /> Reference Material
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {homework.attachments.map(att => (
                  <a key={att.id} href={att.url} className="flex items-center justify-between p-3 rounded-lg border border-border bg-page hover:border-purple-500/30 transition-colors group">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-purple-500/10 flex items-center justify-center text-[10px] font-bold text-purple-600 uppercase">
                        {att.fileType}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-text-primary group-hover:text-purple-600 transition-colors line-clamp-1">{att.fileName}</span>
                        <span className="text-[10px] text-text-secondary">{att.fileSize}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Feedback Section (If completed) */}
          {homework.status === 'Completed' && (homework.marks || homework.teacherRemarks) && (
            <div className="bg-success/5 border border-success/20 rounded-lg p-4">
              <h4 className="text-sm font-bold text-success mb-2 flex items-center gap-2">
                <CheckCircle2 size={16} /> Teacher Feedback
              </h4>
              {homework.marks && <div className="text-2xl font-bold text-text-primary mb-2">{homework.marks}</div>}
              {homework.teacherRemarks && <p className="text-sm text-text-secondary">{homework.teacherRemarks}</p>}
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-border bg-page rounded-b-xl flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-5 py-2 rounded-md text-sm font-bold text-text-secondary border border-border hover:bg-border/50 transition-colors"
          >
            Close
          </button>
          
          {(homework.status === 'Pending' || homework.status === 'Overdue') && (
            <button 
              onClick={() => alert("Simulating upload... This would open an upload drawer/modal.")}
              className="px-5 py-2 rounded-md text-sm font-bold bg-primary text-white hover:bg-primary-hover transition-colors shadow-sm flex items-center gap-2"
            >
              <UploadCloud size={16} />
              Submit Homework
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
