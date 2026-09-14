"use client";
import React, { useState } from 'react';
import { Plus, Users, Calendar, Clock, CheckCircle2, ChevronRight, MessageSquare, AlertCircle } from 'lucide-react';
import { useTeacherMeetingsStore, MeetingStatus } from '../meetings_store/useTeacherMeetingsStore';
import TeacherScheduleMeetingModal from './TeacherScheduleMeetingModal';
import TeacherMeetingActionModal from './TeacherMeetingActionModal';

export default function TeacherMeetingsMain() {
  const { openScheduleModal, openActionModal, meetingsList } = useTeacherMeetingsStore();
  const [activeTab, setActiveTab] = useState<'Upcoming' | 'Completed'>('Upcoming');

  const filteredMeetings = meetingsList.filter(m => {
    if (activeTab === 'Upcoming') return m.status === 'Scheduled';
    if (activeTab === 'Completed') return m.status === 'Completed' || m.status === 'Cancelled';
    return true;
  });

  return (
    <div className="flex flex-col h-full w-full max-w-7xl mx-auto">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
             <Users className="text-primary" size={24}/> Parent Meetings
          </h1>
          <p className="text-[14px] text-text-secondary mt-1">Schedule meetings, log parent feedback, and track follow-ups.</p>
        </div>
        <button 
          onClick={openScheduleModal}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-bold text-[14px] rounded-lg hover:bg-primary/90 transition-colors shadow-sm self-start md:self-auto"
        >
          <Plus size={18} /> Schedule Meeting
        </button>
      </div>

      <div className="bg-card border border-border rounded-xl p-4 mb-6">
        <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-1">
          {['Upcoming', 'Completed'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-2 rounded-lg text-[13px] font-bold transition-colors whitespace-nowrap ${
                activeTab === tab 
                ? 'bg-primary text-black shadow-sm' 
                : 'bg-page border border-border text-text-secondary hover:text-text-primary hover:bg-white/5'
              }`}
            >
              {tab} Meetings
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredMeetings.map((meeting) => (
          <div key={meeting.id} className="bg-card border border-border rounded-xl flex flex-col hover:border-primary/50 transition-colors group">
            
            <div className="p-5 border-b border-border bg-black/10 flex items-start justify-between">
               <div>
                 <h3 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
                    {meeting.studentName}
                 </h3>
                 <p className="text-[12px] text-text-secondary mt-1">Parent: {meeting.parentName} • {meeting.class}</p>
               </div>
               <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider border ${
                 meeting.status === 'Scheduled' ? 'bg-warning/20 text-warning border-warning/20 animate-pulse' : 
                 meeting.status === 'Completed' ? 'bg-success/20 text-success border-success/20' : 
                 'bg-danger/20 text-danger border-danger/20'
               }`}>
                 {meeting.status}
               </span>
            </div>

            <div className="p-5 flex-1 space-y-4">
               <div className="flex items-center gap-4 bg-page border border-border p-3 rounded-lg">
                 <div className="flex items-center gap-2 text-text-primary">
                   <Calendar size={16} className="text-primary"/> <span className="font-bold text-[13px]">{meeting.date}</span>
                 </div>
                 <div className="w-px h-4 bg-border"></div>
                 <div className="flex items-center gap-2 text-text-primary">
                   <Clock size={16} className="text-info"/> <span className="font-bold text-[13px]">{meeting.time}</span>
                 </div>
               </div>

               <div>
                 <p className="text-[12px] font-bold text-text-secondary uppercase mb-1 flex items-center gap-1.5"><AlertCircle size={14}/> Reason for Meeting</p>
                 <p className="text-[14px] text-text-primary leading-relaxed">
                   "{meeting.reason}"
                 </p>
               </div>
            </div>

            <div className="px-5 py-4 border-t border-border bg-black/10">
               {meeting.status === 'Scheduled' ? (
                 <button 
                   onClick={() => openActionModal(meeting)}
                   className="w-full py-2 bg-primary text-white font-bold text-[13px] rounded hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                 >
                   Log Meeting Notes <ChevronRight size={16}/>
                 </button>
               ) : (
                 <button 
                   onClick={() => openActionModal(meeting)}
                   className="w-full py-2 bg-page border border-border text-text-primary font-bold text-[13px] rounded hover:border-primary/50 transition-colors flex items-center justify-center gap-2"
                 >
                   <MessageSquare size={16}/> View Meeting Summary
                 </button>
               )}
            </div>

          </div>
        ))}

        {filteredMeetings.length === 0 && (
          <div className="col-span-full py-16 text-center text-text-secondary bg-card rounded-xl border border-border">
            <Users size={48} className="mx-auto mb-4 opacity-50" />
            <p className="text-[16px] font-bold text-text-primary">No Meetings Found</p>
            <p className="text-[13px] mt-1">You don't have any {activeTab.toLowerCase()} meetings.</p>
          </div>
        )}
      </div>

      <TeacherScheduleMeetingModal />
      <TeacherMeetingActionModal />
    </div>
  );
}
