"use client";

import React, { useEffect } from 'react';
import type { ClassworkSubjectRecord } from '../student_classwork_types/student_classwork_types';
import { X, BookOpen, User, Hash, Info, Lightbulb } from 'lucide-react';

interface Props {
  record: ClassworkSubjectRecord;
  onClose: () => void;
}

/**
 * RESPONSIBILITY: Renders the modal to read full classwork details and instructions.
 */
export default function StudentClassworkDetailsModal({ record, onClose }: Props) {
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-overlay/80 backdrop-blur-sm motion-safe:animate-[fadeIn_0.2s_ease-out]">
      <div className="bg-popover border border-border rounded-xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl relative motion-safe:animate-[slideIn_0.3s_ease-out]">
        
        {/* Header */}
        <div className="flex items-start justify-between p-5 border-b border-border bg-page rounded-t-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <BookOpen size={20} className="text-primary" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">{record.subject}</span>
              <h2 className="text-lg font-bold text-text-primary leading-tight flex items-center gap-2">
                {record.topic}
              </h2>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-text-secondary hover:bg-danger/10 hover:text-danger hover:border-danger/30 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-5">
          
          {/* Meta Info */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1 flex flex-col gap-1 p-3 rounded-lg bg-page border border-border">
              <span className="text-[10px] font-bold text-text-secondary uppercase">Chapter</span>
              <span className="text-sm font-bold text-primary flex items-center gap-1.5"><Hash size={14}/> {record.chapter}</span>
            </div>
            <div className="flex-1 flex flex-col gap-1 p-3 rounded-lg bg-page border border-border">
              <span className="text-[10px] font-bold text-text-secondary uppercase">Teacher</span>
              <span className="text-sm font-bold text-text-primary flex items-center gap-1.5"><User size={14} className="text-info"/> {record.teacher}</span>
            </div>
          </div>

          {/* Notes */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-text-primary mb-3 flex items-center gap-2">
              <Lightbulb size={16} className="text-amber-500" /> Classwork Notes
            </h4>
            <div className="bg-page border border-border rounded-lg p-4 text-sm text-text-secondary leading-relaxed whitespace-pre-wrap">
              {record.notes}
            </div>
          </div>

          {/* Teacher Instructions */}
          {record.teacherInstructions && (
            <div>
              <h4 className="text-sm font-bold text-text-primary mb-3 flex items-center gap-2">
                <Info size={16} className="text-info" /> Teacher Instructions
              </h4>
              <div className="bg-info/5 border border-info/20 rounded-lg p-4 text-sm text-text-secondary leading-relaxed italic">
                "{record.teacherInstructions}"
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-5 border-t border-border bg-page rounded-b-xl flex justify-end">
          <button 
            onClick={onClose}
            className="px-5 py-2 rounded-md text-sm font-bold bg-primary text-white hover:bg-primary-hover transition-colors shadow-sm"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
}
