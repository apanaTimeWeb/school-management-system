"use client";

import React from 'react';
import type { CommunicationMessage } from '../student_communication_types/student_communication_types';
import { Mail, Clock, Calendar, AlertTriangle, Paperclip, CheckCircle2 } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  messages: CommunicationMessage[];
  onViewMessage: (msg: CommunicationMessage) => void;
}

export default function StudentCommunicationList({ messages, onViewMessage }: Props) {
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Important Update': return 'text-danger bg-danger/10 border-danger/20';
      case 'Exam Notification': return 'text-purple-600 bg-purple-500/10 border-purple-500/20';
      case 'Event Notification': return 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20';
      case 'Homework Notification': return 'text-amber-600 bg-amber-500/10 border-amber-500/20';
      case 'Class Notice': return 'text-info bg-info/10 border-info/20';
      default: return 'text-primary bg-primary/10 border-primary/20';
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {messages.length === 0 ? (
        <div className="bg-card border border-border rounded-xl p-10 flex flex-col items-center justify-center text-center">
          <CheckCircle2 size={48} className="text-success/50 mb-4" />
          <h3 className="text-lg font-bold text-text-primary">All Caught Up!</h3>
          <p className="text-sm text-text-secondary mt-1">There are no messages in this category.</p>
        </div>
      ) : (
        messages.map((msg) => (
          <div 
            key={msg.id} 
            onClick={() => onViewMessage(msg)}
            className={clsx(
              "border rounded-xl p-5 cursor-pointer transition-all hover:shadow-md flex flex-col md:flex-row md:items-start gap-4 relative overflow-hidden group",
              !msg.isRead ? "bg-primary/5 border-primary/30" : "bg-card border-border hover:border-primary/30"
            )}
          >
            {/* Unread Indicator Bar */}
            {!msg.isRead && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
            )}

            {/* Icon Block */}
            <div className={clsx(
              "w-12 h-12 rounded-full flex items-center justify-center shrink-0 border",
              !msg.isRead ? "bg-primary text-white border-primary" : "bg-page text-text-secondary border-border"
            )}>
              <Mail size={20} />
            </div>

            {/* Content Area */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className={clsx("text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider", getCategoryColor(msg.category))}>
                  {msg.category}
                </span>
                {msg.isUrgent && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded border border-danger/30 bg-danger/10 text-danger uppercase tracking-wider flex items-center gap-1">
                    <AlertTriangle size={10} /> Urgent
                  </span>
                )}
              </div>
              
              <h3 className={clsx(
                "text-base mb-1 truncate",
                !msg.isRead ? "font-bold text-text-primary" : "font-semibold text-text-primary/90"
              )}>
                {msg.title}
              </h3>
              
              <p className="text-sm text-text-secondary line-clamp-1 mb-3">
                {msg.content}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-[11px] font-bold text-text-secondary">
                <span className="text-primary">{msg.senderName} ({msg.senderRole})</span>
                <span className="flex items-center gap-1 border-l border-border pl-4"><Calendar size={12}/> {msg.date}</span>
                <span className="flex items-center gap-1 border-l border-border pl-4"><Clock size={12}/> {msg.time}</span>
                {msg.hasAttachment && (
                  <span className="flex items-center gap-1 border-l border-border pl-4 text-info"><Paperclip size={12}/> Attachment</span>
                )}
              </div>
            </div>

          </div>
        ))
      )}
    </div>
  );
}
