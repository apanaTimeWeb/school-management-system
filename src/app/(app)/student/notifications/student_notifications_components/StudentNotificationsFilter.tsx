"use client";

import React from 'react';
import type { NotificationCategory } from '../student_notifications_types/student_notifications_types';
import { Bell, UserCheck, BookOpen, FileText, CalendarDays, Award, Wallet, Clock, Megaphone, CheckCircle, ShieldAlert } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  activeFilter: NotificationCategory;
  onFilterChange: (f: NotificationCategory) => void;
  counts: Record<NotificationCategory, number>;
}

export default function StudentNotificationsFilter({ activeFilter, onFilterChange, counts }: Props) {
  
  const getIcon = (cat: NotificationCategory) => {
    switch(cat) {
      case 'Attendance': return <UserCheck size={16} />;
      case 'Homework': return <BookOpen size={16} />;
      case 'Assignment': return <FileText size={16} />;
      case 'Exam': return <CalendarDays size={16} />;
      case 'Result': return <Award size={16} />;
      case 'Fee': return <Wallet size={16} />;
      case 'Leave': return <Clock size={16} />;
      case 'Event': return <Megaphone size={16} />;
      case 'Certificate': return <CheckCircle size={16} />;
      case 'System': return <ShieldAlert size={16} />;
      default: return <Bell size={16} />;
    }
  };

  const categories: NotificationCategory[] = [
    'All', 'Attendance', 'Homework', 'Assignment', 'Exam', 'Result', 
    'Fee', 'Leave', 'Event', 'Notice', 'Certificate', 'System'
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-4 shadow-sm flex flex-col gap-1 sticky top-24">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onFilterChange(cat)}
          className={clsx(
            "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-bold transition-all",
            activeFilter === cat 
              ? "bg-primary text-white shadow-sm" 
              : "text-text-secondary hover:bg-page hover:text-text-primary"
          )}
        >
          <div className="flex items-center gap-2">
            {getIcon(cat)}
            <span>{cat}</span>
          </div>
          {counts[cat] > 0 && (
            <span className={clsx(
              "px-1.5 py-0.5 rounded-full text-[10px]",
              activeFilter === cat ? "bg-white/20" : "bg-border text-text-primary"
            )}>
              {counts[cat]}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
