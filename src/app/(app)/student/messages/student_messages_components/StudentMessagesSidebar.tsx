"use client";

import React from 'react';
import type { ConversationThread } from '../student_messages_types/student_messages_types';
import { MessageSquare, User, ShieldCheck } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  threads: ConversationThread[];
  selectedThreadId: string | null;
  onSelectThread: (id: string) => void;
}

export default function StudentMessagesSidebar({ threads, selectedThreadId, onSelectThread }: Props) {
  
  return (
    <>
      {/* Sidebar Header */}
      <div className="p-4 border-b border-border bg-page">
        <h3 className="text-sm font-bold text-text-primary flex items-center gap-2">
          <MessageSquare size={16} className="text-primary" /> Active Conversations
        </h3>
      </div>

      {/* Thread List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
        {threads.map((thread) => {
          const isSelected = thread.id === selectedThreadId;
          const hasUnread = thread.unreadCount > 0;
          const isTeacher = thread.startedByRole === 'Teacher';

          return (
            <button
              key={thread.id}
              onClick={() => onSelectThread(thread.id)}
              className={clsx(
                "w-full text-left p-3 rounded-lg transition-all flex items-start gap-3 relative",
                isSelected 
                  ? "bg-primary/10 border border-primary/20" 
                  : "bg-transparent border border-transparent hover:bg-page"
              )}
            >
              {/* Avatar Mock */}
              <div className={clsx(
                "w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white shadow-sm mt-1",
                isTeacher ? "bg-info" : "bg-danger"
              )}>
                {isTeacher ? <User size={18} /> : <ShieldCheck size={18} />}
              </div>

              {/* Thread Info */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-0.5">
                  <span className={clsx("text-sm font-bold truncate", isSelected || hasUnread ? "text-text-primary" : "text-text-secondary")}>
                    {thread.startedBy}
                  </span>
                  <span className="text-[10px] font-semibold text-text-secondary shrink-0 ml-2">
                    {thread.lastMessageTime}
                  </span>
                </div>
                
                <h4 className={clsx(
                  "text-xs truncate mb-1", 
                  hasUnread ? "font-bold text-text-primary" : "font-semibold text-text-secondary"
                )}>
                  {thread.topic}
                </h4>
                
                <p className="text-[11px] text-text-secondary truncate pr-4">
                  {thread.lastMessagePreview}
                </p>
              </div>

              {/* Unread Badge */}
              {hasUnread && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {thread.unreadCount}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </>
  );
}
