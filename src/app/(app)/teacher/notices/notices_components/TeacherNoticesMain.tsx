"use client";
import React, { useState } from 'react';
import { Plus, Bell, Megaphone, FileText, CalendarCheck, CheckCircle2, MessageSquare, BookOpen, AlertTriangle, Search, Paperclip } from 'lucide-react';
import { useTeacherNoticesStore, NoticeType } from '../notices_store/useTeacherNoticesStore';
import TeacherCreateNoticeModal from './TeacherCreateNoticeModal';

export default function TeacherNoticesMain() {
  const { openCreateNotice, noticesList, eventsList } = useTeacherNoticesStore();
  const [activeTab, setActiveTab] = useState<'All' | 'Notices & Announcements' | 'Reminders' | 'Upcoming Events'>('All');
  const [search, setSearch] = useState('');

  const getIconForType = (type: NoticeType) => {
    switch(type) {
      case 'Class Notice': return <Bell size={18} className="text-primary"/>;
      case 'Announcement': return <Megaphone size={18} className="text-info"/>;
      case 'Important Update': return <AlertTriangle size={18} className="text-danger"/>;
      case 'Homework Reminder': return <FileText size={18} className="text-warning"/>;
      case 'Exam Reminder': return <CheckCircle2 size={18} className="text-success"/>;
      case 'Assignment Reminder': return <BookOpen size={18} className="text-primary"/>;
      default: return <MessageSquare size={18} className="text-text-secondary"/>;
    }
  };

  const filteredNotices = noticesList.filter(notice => {
    const matchSearch = notice.title.toLowerCase().includes(search.toLowerCase()) || notice.targetClass.toLowerCase().includes(search.toLowerCase());
    if (!matchSearch) return false;

    if (activeTab === 'All') return true;
    if (activeTab === 'Notices & Announcements') {
      return ['Class Notice', 'Announcement', 'Important Update'].includes(notice.type);
    }
    if (activeTab === 'Reminders') {
      return ['Homework Reminder', 'Exam Reminder', 'Assignment Reminder'].includes(notice.type);
    }
    return false; // For 'Upcoming Events', we handle it separately
  });

  const filteredEvents = eventsList.filter(event => 
    event.title.toLowerCase().includes(search.toLowerCase()) || 
    event.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full w-full max-w-7xl mx-auto">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary">Class Communication (Notice Board)</h1>
          <p className="text-[14px] text-text-secondary mt-1">Manage class notices, announcements, and send academic reminders to students.</p>
        </div>
        <button 
          onClick={() => openCreateNotice()}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-bold text-[14px] rounded-lg hover:bg-primary/90 transition-colors shadow-sm self-start md:self-auto"
        >
          <Plus size={18} /> Compose Notice
        </button>
      </div>

      <div className="bg-card border border-border rounded-xl p-4 mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-2 sm:pb-0 w-full sm:w-auto">
          {['All', 'Notices & Announcements', 'Reminders', 'Upcoming Events'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-4 py-2 rounded-lg text-[13px] font-bold transition-colors whitespace-nowrap ${
                activeTab === tab 
                ? 'bg-primary text-white' 
                : 'bg-page border border-border text-text-secondary hover:text-text-primary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-2.5 text-text-secondary" size={18} />
          <input 
            type="text" 
            placeholder="Search titles or classes..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-input border border-border rounded-lg pl-10 pr-4 py-2 text-[14px] text-text-primary focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      {activeTab === 'Upcoming Events' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors flex flex-col">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2 px-2 py-1 rounded bg-input border border-border text-[11px] font-bold text-text-primary uppercase tracking-wider">
                  <CalendarCheck size={18} className="text-info"/> {event.type}
                </div>
              </div>
              
              <h3 className="text-[18px] font-bold text-text-primary mb-2">{event.title}</h3>
              
              <div className="pt-4 mt-auto border-t border-border flex items-center justify-between text-[12px]">
                 <div>
                   <p className="text-text-secondary mb-1">Date</p>
                   <p className="font-bold text-text-primary">{event.date}</p>
                 </div>
              </div>
            </div>
          ))}
          {filteredEvents.length === 0 && (
            <div className="col-span-full py-12 text-center text-text-secondary bg-card rounded-xl border border-border">
              No upcoming events or holidays found matching your criteria.
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotices.map((notice) => (
            <div key={notice.id} className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors flex flex-col">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2 px-2 py-1 rounded bg-input border border-border text-[11px] font-bold text-text-primary uppercase tracking-wider">
                  {getIconForType(notice.type)} {notice.type}
                </div>
                <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded ${notice.status === 'Sent' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'}`}>
                  {notice.status}
                </span>
              </div>
              
              <h3 className="text-[18px] font-bold text-text-primary mb-2 line-clamp-2">{notice.title}</h3>
              <p className="text-[13px] text-text-secondary mb-4 flex-1 line-clamp-3">{notice.description}</p>
              
              <div className="pt-4 border-t border-border flex items-center justify-between text-[12px]">
                 <div>
                   <p className="text-text-secondary mb-1">Target Class</p>
                   <p className="font-bold text-primary">{notice.targetClass}</p>
                 </div>
                 <div className="text-right flex flex-col items-end">
                   <p className="text-text-secondary mb-1">Date</p>
                   <p className="font-bold text-text-primary flex items-center gap-1.5">
                     {notice.dateSent}
                     {notice.hasAttachment && <Paperclip size={14} className="text-info"/>}
                   </p>
                 </div>
              </div>

              {notice.status === 'Draft' && (
                <button 
                  onClick={() => openCreateNotice(notice)}
                  className="w-full mt-4 py-2 bg-page border border-border text-text-primary font-bold text-[13px] rounded hover:border-primary/50 transition-colors"
                >
                  Edit Draft
                </button>
              )}
            </div>
          ))}

          {filteredNotices.length === 0 && (
            <div className="col-span-full py-12 text-center text-text-secondary bg-card rounded-xl border border-border">
              No notices or reminders found matching your criteria.
            </div>
          )}
        </div>
      )}

      <TeacherCreateNoticeModal />
    </div>
  );
}
