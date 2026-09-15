"use client";

import React from 'react';
import type { CommunicationCategory, CommunicationMessage } from '../student_communication_types/student_communication_types';
import { Mail, BellRing, Bell, AlertTriangle, FileText, Calendar, BookOpen, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  selectedCategory: CommunicationCategory;
  onSelectCategory: (cat: CommunicationCategory) => void;
  messages: CommunicationMessage[];
}

export default function StudentCommunicationSidebar({ selectedCategory, onSelectCategory, messages }: Props) {
  
  const getUnreadCount = (cat: CommunicationCategory) => {
    if (cat === 'All') return messages.filter(m => !m.isRead).length;
    return messages.filter(m => m.category === cat && !m.isRead).length;
  };

  const categories: { label: CommunicationCategory, icon: any, color: string }[] = [
    { label: 'All', icon: <Mail size={16} />, color: 'text-primary' },
    { label: 'Important Update', icon: <AlertTriangle size={16} />, color: 'text-danger' },
    { label: 'School Notice', icon: <BellRing size={16} />, color: 'text-primary' },
    { label: 'Class Notice', icon: <Bell size={16} />, color: 'text-info' },
    { label: 'Exam Notification', icon: <FileText size={16} />, color: 'text-purple-500' },
    { label: 'Homework Notification', icon: <BookOpen size={16} />, color: 'text-amber-500' },
    { label: 'Event Notification', icon: <Calendar size={16} />, color: 'text-emerald-500' },
    { label: 'Attendance Notification', icon: <CheckCircle size={16} />, color: 'text-success' },
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-4 sticky top-6 shadow-sm">
      <h3 className="text-sm font-bold text-text-primary mb-4 flex items-center gap-2 border-b border-border pb-3">
        <Mail size={16} className="text-text-secondary" /> Inbox Folders
      </h3>

      <div className="space-y-1.5">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.label;
          const unread = getUnreadCount(cat.label);
          
          return (
            <button
              key={cat.label}
              onClick={() => onSelectCategory(cat.label)}
              className={clsx(
                "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-bold transition-all",
                isSelected ? "bg-primary/10 text-primary border border-primary/20 shadow-sm" : "text-text-secondary hover:bg-page hover:text-text-primary border border-transparent"
              )}
            >
              <div className="flex items-center gap-3">
                <span className={clsx(isSelected ? "text-primary" : cat.color)}>{cat.icon}</span>
                <span className="truncate">{cat.label === 'All' ? 'All Messages' : cat.label.replace(' Notification', '')}</span>
              </div>
              
              {unread > 0 && (
                <span className={clsx(
                  "px-2 py-0.5 rounded-full text-[10px] font-bold border",
                  isSelected ? "bg-primary text-white border-primary" : "bg-danger text-white border-danger"
                )}>
                  {unread}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
