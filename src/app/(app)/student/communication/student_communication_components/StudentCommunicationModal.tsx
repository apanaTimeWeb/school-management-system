"use client";

import React, { useEffect } from 'react';
import type { CommunicationMessage } from '../student_communication_types/student_communication_types';
import { X, Mail, AlertTriangle, Paperclip, Calendar, Clock, User, Download } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  message: CommunicationMessage;
  onClose: () => void;
}

export default function StudentCommunicationModal({ message, onClose }: Props) {
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-overlay/80 backdrop-blur-sm motion-safe:animate-[fadeIn_0.2s_ease-out]">
      <div className="bg-popover border border-border rounded-xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl relative motion-safe:animate-[slideIn_0.3s_ease-out]">
        
        {/* Header */}
        <div className={clsx(
          "flex items-start justify-between p-5 border-b border-border rounded-t-xl",
          message.isUrgent ? "bg-danger/5" : "bg-page"
        )}>
          <div className="flex items-start gap-4 pr-4">
            <div className={clsx(
              "w-12 h-12 rounded-full flex items-center justify-center shrink-0 border",
              message.isUrgent ? "bg-danger text-white border-danger" : "bg-primary text-white border-primary"
            )}>
              {message.isUrgent ? <AlertTriangle size={24} /> : <Mail size={24} />}
            </div>
            <div>
              <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">{message.category}</span>
              <h2 className="text-xl font-bold text-text-primary leading-tight mt-1 mb-2">
                {message.title}
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold text-text-secondary">
                <span className="flex items-center gap-1 text-primary"><User size={12}/> {message.senderName} ({message.senderRole})</span>
                <span className="flex items-center gap-1"><Calendar size={12}/> {message.date}</span>
                <span className="flex items-center gap-1"><Clock size={12}/> {message.time}</span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-text-secondary hover:bg-danger/10 hover:text-danger hover:border-danger/30 transition-colors shrink-0"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
          <div className="text-sm text-text-secondary leading-relaxed whitespace-pre-wrap font-medium">
            {message.content}
          </div>
          
          {message.hasAttachment && (
            <div className="mt-8">
              <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider mb-3">Attachments</h4>
              <div className="flex items-center gap-3 p-3 rounded-lg border border-border bg-page max-w-sm hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded bg-info/10 flex items-center justify-center text-info shrink-0">
                  <Paperclip size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-text-primary truncate group-hover:text-primary transition-colors">Attached_Document.pdf</p>
                  <p className="text-xs text-text-secondary">PDF • 1.2 MB</p>
                </div>
                <Download size={16} className="text-text-secondary group-hover:text-primary mr-2" />
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
