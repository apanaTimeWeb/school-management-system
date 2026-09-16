"use client";

import React, { useState, useMemo } from 'react';
import { 
  MessageSquare, ChevronDown, CheckCircle2, Bell, Megaphone, 
  AlertTriangle, BookOpen, GraduationCap, Award, Wallet, Calendar, CheckCircle
} from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';

// Mock Data
const childrenList = [
  { id: 'c1', name: 'Aarav Kumar', class: 'Class 5', section: 'A', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=b6e3f4' },
  { id: 'c2', name: 'Riya Kumar', class: 'Class 8', section: 'B', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=f4b6e3' },
];

const communicationData = {
  'c1': [
    { id: 1, type: 'School Notice', title: 'Diwali Holidays Announcement', desc: 'The school will remain closed from 20th Oct to 25th Oct on account of Diwali.', date: '10 Oct, 2023', isRead: false },
    { id: 2, type: 'Homework Alert', title: 'Mathematics Homework Pending', desc: 'Aarav has not submitted the Fractions worksheet due yesterday.', date: '09 Oct, 2023', isRead: false },
    { id: 3, type: 'Fee Reminder', title: 'Tuition Fee Due Soon', desc: 'Gentle reminder to pay the Q3 Tuition fee by 15th Oct to avoid late fines.', date: '08 Oct, 2023', isRead: true },
    { id: 4, type: 'Class Notice', title: 'Parent-Teacher Meeting', desc: 'PTM is scheduled for this Saturday between 9 AM and 12 PM in Classroom 5A.', date: '05 Oct, 2023', isRead: true },
    { id: 5, type: 'Result Notification', title: 'Mid-Term Results Declared', desc: 'Results for the Mid-Term examinations have been published. Check the Results tab.', date: '01 Oct, 2023', isRead: true },
  ],
  'c2': [
    { id: 6, type: 'Exam Notification', title: 'Board Prep Exams Schedule', desc: 'First Term Board prep exams will commence from 15th Oct. Please check the timetable.', date: '10 Oct, 2023', isRead: false },
    { id: 7, type: 'School Notice', title: 'Diwali Holidays Announcement', desc: 'The school will remain closed from 20th Oct to 25th Oct on account of Diwali.', date: '10 Oct, 2023', isRead: true },
    { id: 8, type: 'Teacher Announcement', title: 'Physics Lab Coat Mandatory', desc: 'All students must bring their lab coats for tomorrow\'s Physics practical.', date: '09 Oct, 2023', isRead: false },
    { id: 9, type: 'Event Notification', title: 'Annual Science Fair', desc: 'Riya has been selected for the Inter-school Science Fair. Further details sent to email.', date: '02 Oct, 2023', isRead: true },
  ]
};

const filterCategories = [
  'All', 'School Notice', 'Class Notice', 'Teacher Announcement', 
  'Homework Alert', 'Exam Notification', 'Result Notification', 
  'Fee Reminder', 'Event Notification'
];

export default function CommunicationPage() {
  const [selectedChildId, setSelectedChildId] = useState(childrenList[0].id);
  const [showChildSwitcher, setShowChildSwitcher] = useState(false);
  
  const [selectedFilter, setSelectedFilter] = useState('All');
  
  const childInfo = childrenList.find(c => c.id === selectedChildId)!;
  const rawNotices = communicationData[selectedChildId as keyof typeof communicationData];

  // Local state to manage read/unread interactions
  const [notices, setNotices] = useState(rawNotices);

  // Update notices when child changes
  React.useEffect(() => {
    setNotices(communicationData[selectedChildId as keyof typeof communicationData]);
    setSelectedFilter('All');
  }, [selectedChildId]);

  const filteredNotices = useMemo(() => {
    if (selectedFilter === 'All') return notices;
    return notices.filter(n => n.type === selectedFilter);
  }, [notices, selectedFilter]);

  const unreadCount = notices.filter(n => !n.isRead).length;

  const markAsRead = (id: number) => {
    setNotices(notices.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  const markAllAsRead = () => {
    setNotices(notices.map(n => ({ ...n, isRead: true })));
  };

  const getTypeStyle = (type: string) => {
    if (type.includes('School Notice') || type.includes('Announcement')) return { icon: <Megaphone size={20}/>, bg: 'bg-indigo-50 text-indigo-600 border-indigo-200' };
    if (type.includes('Class Notice') || type.includes('Event')) return { icon: <Calendar size={20}/>, bg: 'bg-blue-50 text-blue-600 border-blue-200' };
    if (type.includes('Homework')) return { icon: <BookOpen size={20}/>, bg: 'bg-orange-50 text-orange-600 border-orange-200' };
    if (type.includes('Exam')) return { icon: <GraduationCap size={20}/>, bg: 'bg-purple-50 text-purple-600 border-purple-200' };
    if (type.includes('Result')) return { icon: <Award size={20}/>, bg: 'bg-emerald-50 text-emerald-600 border-emerald-200' };
    if (type.includes('Fee')) return { icon: <Wallet size={20}/>, bg: 'bg-red-50 text-red-600 border-red-200' };
    return { icon: <Bell size={20}/>, bg: 'bg-slate-50 text-slate-600 border-slate-200' };
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header & Child Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm">
        <div>
          <div className="flex items-center gap-3 mb-1">
             <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">Communication</h1>
             {unreadCount > 0 && (
               <span className="px-2.5 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full animate-bounce">
                 {unreadCount} New
               </span>
             )}
          </div>
          <p className="text-text-secondary text-sm">Stay updated with notices, alerts, and announcements.</p>
        </div>
        
        <div className="relative z-30">
          <button 
            onClick={() => setShowChildSwitcher(!showChildSwitcher)}
            className="flex items-center gap-3 px-4 py-2 bg-pink-50 border border-pink-200 rounded-xl hover:bg-pink-100 transition-colors focus:outline-none"
          >
            <img src={childInfo.avatar} alt={childInfo.name} className="w-8 h-8 rounded-full border border-pink-300" />
            <div className="text-left">
              <p className="text-sm font-bold text-pink-700 leading-none">{childInfo.name}</p>
              <p className="text-[10px] font-bold text-pink-500 uppercase mt-1">{childInfo.class} - {childInfo.section}</p>
            </div>
            <ChevronDown size={16} className={clsx("text-pink-600 transition-transform", showChildSwitcher && "rotate-180")} />
          </button>
          
          {showChildSwitcher && (
            <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-border rounded-xl shadow-xl overflow-hidden animate-[fadeIn_0.15s_ease-out]">
              {childrenList.map((child) => (
                <button
                  key={child.id}
                  onClick={() => { setSelectedChildId(child.id); setShowChildSwitcher(false); }}
                  className={clsx(
                    "w-full flex items-center justify-between px-4 py-3 text-left transition-colors hover:bg-page",
                    selectedChildId === child.id ? "bg-pink-50 border-l-4 border-pink-500" : "border-l-4 border-transparent"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <img src={child.avatar} alt={child.name} className="w-8 h-8 rounded-full bg-page border border-border" />
                    <div>
                      <p className="text-sm font-bold text-text-primary">{child.name}</p>
                      <p className="text-xs text-text-secondary">{child.class} - {child.section}</p>
                    </div>
                  </div>
                  {selectedChildId === child.id && <CheckCircle2 size={16} className="text-pink-500" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left Column: Filters */}
        <div className="lg:col-span-1 space-y-4">
           <div className="flex items-center justify-between px-2">
             <h3 className="text-xs font-bold uppercase tracking-wider text-text-tertiary">Filter by Type</h3>
           </div>
           <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 custom-scrollbar">
             {filterCategories.map((cat, idx) => (
               <button
                 key={idx}
                 onClick={() => setSelectedFilter(cat)}
                 className={clsx(
                   "flex items-center justify-between gap-3 px-4 py-3 rounded-xl font-bold transition-all whitespace-nowrap lg:whitespace-normal text-left",
                   selectedFilter === cat 
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20" 
                    : "bg-white border border-border text-text-secondary hover:text-indigo-600 hover:border-indigo-200"
                 )}
               >
                 <span>{cat}</span>
                 {cat === 'All' && unreadCount > 0 && selectedFilter !== 'All' && (
                   <span className="w-2 h-2 rounded-full bg-red-500"></span>
                 )}
               </button>
             ))}
           </div>
        </div>

        {/* Right Column: Messages List */}
        <div className="lg:col-span-3 space-y-4">
          
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-text-primary">{selectedFilter} Notifications ({filteredNotices.length})</h3>
            {unreadCount > 0 && (
              <button 
                onClick={markAllAsRead}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 transition-colors"
              >
                <CheckCircle size={14}/> Mark all as read
              </button>
            )}
          </div>

          <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden min-h-[400px]">
             
             {filteredNotices.length === 0 ? (
               <div className="text-center py-20 flex flex-col items-center justify-center h-full">
                 <div className="w-16 h-16 bg-page rounded-full flex items-center justify-center mb-4 border border-dashed border-border">
                   <Bell size={32} className="text-text-tertiary opacity-50" />
                 </div>
                 <h3 className="text-lg font-bold text-text-primary mb-1">No Notifications</h3>
                 <p className="text-sm text-text-secondary">You're all caught up for '{selectedFilter}'.</p>
               </div>
             ) : (
               <div className="divide-y divide-border">
                 {filteredNotices.map((notice) => {
                   const style = getTypeStyle(notice.type);
                   return (
                     <div 
                       key={notice.id} 
                       onClick={() => !notice.isRead && markAsRead(notice.id)}
                       className={clsx(
                         "p-5 flex gap-4 transition-colors cursor-default relative overflow-hidden group",
                         notice.isRead ? "bg-white hover:bg-page/30" : "bg-indigo-50/40 hover:bg-indigo-50/70"
                       )}
                     >
                        {!notice.isRead && (
                          <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                        )}
                        
                        <div className={clsx("w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 mt-1", style.bg)}>
                          {style.icon}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-text-tertiary">{notice.type}</span>
                            <span className="text-xs font-semibold text-text-secondary">{notice.date}</span>
                          </div>
                          
                          <h4 className={clsx(
                            "text-base mb-1",
                            notice.isRead ? "font-bold text-text-primary" : "font-extrabold text-indigo-900"
                          )}>
                            {notice.title}
                          </h4>
                          
                          <p className={clsx(
                            "text-sm leading-relaxed",
                            notice.isRead ? "text-text-secondary" : "text-text-primary font-medium"
                          )}>
                            {notice.desc}
                          </p>
                        </div>
                        
                        {!notice.isRead && (
                          <div className="hidden md:flex items-center justify-center flex-shrink-0">
                            <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full"></div>
                          </div>
                        )}
                     </div>
                   )
                 })}
               </div>
             )}

          </div>

        </div>

      </div>
    </div>
  );
}
