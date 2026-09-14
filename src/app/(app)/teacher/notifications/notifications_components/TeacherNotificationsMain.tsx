"use client";
import React, { useState } from 'react';
import { Bell, CheckCircle2, Server, BookOpen, CalendarCheck, FileText, Activity, MessageSquare } from 'lucide-react';
import { useTeacherNotificationsStore, NotificationCategory } from '../notifications_store/useTeacherNotificationsStore';

export default function TeacherNotificationsMain() {
  const { markAsRead, markAllAsRead, notificationsList } = useTeacherNotificationsStore();
  const [filterCategory, setFilterCategory] = useState<'All' | NotificationCategory>('All');

  const filteredNotifications = notificationsList.filter(notif => {
    if (filterCategory === 'All') return true;
    return notif.category === filterCategory;
  });

  const getCategoryIconAndColor = (category: NotificationCategory) => {
    switch(category) {
      case 'System': return { icon: <Server size={18}/>, color: 'bg-primary/20 text-primary border-primary/20' };
      case 'Class': return { icon: <UsersIcon/>, color: 'bg-info/20 text-info border-info/20' };
      case 'Homework': return { icon: <BookOpen size={18}/>, color: 'bg-warning/20 text-warning border-warning/20' };
      case 'Assignment': return { icon: <FileText size={18}/>, color: 'bg-primary/20 text-primary border-primary/20' };
      case 'Exam': return { icon: <MessageSquare size={18}/>, color: 'bg-danger/20 text-danger border-danger/20' };
      case 'Result': return { icon: <Activity size={18}/>, color: 'bg-success/20 text-success border-success/20' };
      case 'Attendance': return { icon: <CalendarCheck size={18}/>, color: 'bg-danger/20 text-danger border-danger/20' };
    }
  };

  const categories = ['All', 'System', 'Class', 'Homework', 'Assignment', 'Exam', 'Result', 'Attendance'];

  return (
    <div className="flex flex-col h-full w-full max-w-5xl mx-auto">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
             <Bell className="text-primary" size={24}/> Notification Center
          </h1>
          <p className="text-[14px] text-text-secondary mt-1">Stay updated with alerts, reminders, and system messages.</p>
        </div>
        <button 
          onClick={markAllAsRead}
          className="flex items-center gap-2 px-4 py-2 bg-page border border-border text-text-primary font-bold text-[14px] rounded-lg hover:border-primary/50 transition-colors shadow-sm self-start md:self-auto"
        >
          <CheckCircle2 size={18} /> Mark all as read
        </button>
      </div>

      <div className="bg-card border border-border rounded-xl p-4 mb-6">
        <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-1">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilterCategory(cat as any)}
              className={`px-4 py-1.5 rounded-lg text-[13px] font-bold transition-colors whitespace-nowrap ${
                filterCategory === cat 
                ? 'bg-primary text-white' 
                : 'bg-page border border-border text-text-secondary hover:text-text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredNotifications.map((notif) => {
          const { icon, color } = getCategoryIconAndColor(notif.category);
          
          return (
            <div 
              key={notif.id} 
              className={`bg-card border rounded-xl p-5 flex flex-col sm:flex-row sm:items-start gap-4 hover:border-primary/50 transition-colors ${notif.isRead ? 'border-border opacity-70' : 'border-primary/30 shadow-[0_0_15px_rgba(var(--primary),0.05)]'}`}
            >
               <div className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center border ${color}`}>
                 {icon}
               </div>

               <div className="flex-1">
                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                   <h3 className={`text-[16px] font-bold ${notif.isRead ? 'text-text-primary' : 'text-primary'}`}>
                     {notif.title}
                   </h3>
                   <span className="text-[11px] text-text-secondary font-bold uppercase tracking-wider">{notif.timestamp}</span>
                 </div>
                 
                 <p className="text-[14px] text-text-primary mb-3">
                   {notif.message}
                 </p>

                 <div className="flex items-center gap-3">
                   <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border ${color}`}>
                     {notif.category} Alert
                   </span>
                   {!notif.isRead && (
                     <button onClick={() => markAsRead(notif.id)} className="text-[12px] font-bold text-text-secondary hover:text-primary transition-colors flex items-center gap-1">
                       <CheckCircle2 size={14}/> Mark as Read
                     </button>
                   )}
                 </div>
               </div>
               
               {!notif.isRead && (
                 <div className="w-3 h-3 rounded-full bg-primary absolute top-5 right-5 sm:relative sm:top-0 sm:right-0 animate-pulse"></div>
               )}
            </div>
          );
        })}

        {filteredNotifications.length === 0 && (
          <div className="py-16 text-center text-text-secondary bg-card rounded-xl border border-border">
            <Bell size={48} className="mx-auto mb-4 opacity-50" />
            <p className="text-[16px] font-bold text-text-primary">No Notifications</p>
            <p className="text-[13px] mt-1">You're all caught up in this category.</p>
          </div>
        )}
      </div>

    </div>
  );
}

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
