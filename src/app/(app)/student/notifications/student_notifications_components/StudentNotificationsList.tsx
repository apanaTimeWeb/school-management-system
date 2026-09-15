"use client";

import React from 'react';
import type { AppNotification } from '../student_notifications_types/student_notifications_types';
import { BellOff, UserCheck, BookOpen, FileText, CalendarDays, Award, Wallet, Clock, Megaphone, CheckCircle, ShieldAlert, ArrowRight, Circle, CheckCircle2 } from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';

interface Props {
  notifications: AppNotification[];
  onToggleRead: (id: string) => void;
}

export default function StudentNotificationsList({ notifications, onToggleRead }: Props) {
  
  if (notifications.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-10 text-center text-text-secondary bg-card border border-border rounded-xl shadow-sm">
        <BellOff size={48} className="text-border mb-4" />
        <h3 className="text-lg font-bold text-text-primary">All Caught Up!</h3>
        <p className="text-sm">You have no notifications in this category.</p>
      </div>
    );
  }

  const getCategoryTheme = (cat: string) => {
    switch(cat) {
      case 'Fee': return { color: 'text-danger bg-danger/10 border-danger/20', icon: <Wallet size={20} /> };
      case 'Result': return { color: 'text-success bg-success/10 border-success/20', icon: <Award size={20} /> };
      case 'Exam': return { color: 'text-purple-500 bg-purple-500/10 border-purple-500/20', icon: <CalendarDays size={20} /> };
      case 'Homework':
      case 'Assignment': return { color: 'text-info bg-info/10 border-info/20', icon: <BookOpen size={20} /> };
      case 'Attendance': return { color: 'text-amber-500 bg-amber-500/10 border-amber-500/20', icon: <UserCheck size={20} /> };
      case 'Leave': return { color: 'text-teal-500 bg-teal-500/10 border-teal-500/20', icon: <Clock size={20} /> };
      case 'Event':
      case 'Notice': return { color: 'text-pink-500 bg-pink-500/10 border-pink-500/20', icon: <Megaphone size={20} /> };
      case 'Certificate': return { color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20', icon: <CheckCircle size={20} /> };
      case 'System': return { color: 'text-text-primary bg-border border-border', icon: <ShieldAlert size={20} /> };
      default: return { color: 'text-primary bg-primary/10 border-primary/20', icon: <FileText size={20} /> };
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {notifications.map(notif => {
        const theme = getCategoryTheme(notif.category);
        
        return (
          <div key={notif.id} className={clsx(
            "p-4 rounded-xl border transition-all flex gap-4 group",
            notif.isRead ? "bg-card border-border opacity-70" : "bg-page border-primary/30 shadow-sm"
          )}>
            
            {/* Icon */}
            <div className={clsx("w-12 h-12 rounded-full flex items-center justify-center shrink-0 border", theme.color)}>
              {theme.icon}
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className={clsx("text-base font-bold flex items-center gap-2", notif.isRead ? "text-text-secondary" : "text-text-primary")}>
                  {notif.title}
                  {!notif.isRead && <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>}
                </h3>
                <span className="text-xs font-semibold text-text-secondary whitespace-nowrap ml-2">{notif.timestamp}</span>
              </div>
              <p className={clsx("text-sm mb-3", notif.isRead ? "text-text-secondary" : "text-text-primary")}>
                {notif.message}
              </p>
              
              <div className="flex items-center gap-4">
                {notif.link && (
                  <Link href={notif.link} className="flex items-center gap-1.5 text-xs font-bold text-primary hover:underline">
                    View Details <ArrowRight size={14} />
                  </Link>
                )}
                
                <button 
                  onClick={() => onToggleRead(notif.id)}
                  className="flex items-center gap-1.5 text-xs font-bold text-text-secondary hover:text-text-primary ml-auto"
                >
                  {notif.isRead ? <Circle size={14} /> : <CheckCircle2 size={14} />}
                  {notif.isRead ? "Mark as unread" : "Mark as read"}
                </button>
              </div>
            </div>
            
          </div>
        );
      })}
    </div>
  );
}
