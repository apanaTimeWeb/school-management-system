"use client";
import React, { useState } from 'react';
import { Users, Clock, Calendar, CheckCircle2, AlertTriangle, ArrowRight, BookOpen, MapPin } from 'lucide-react';
import { useTeacherSubstitutesStore } from '../substitutes_store/useTeacherSubstitutesStore';
import { TEACHER_SUBSTITUTES_MOCK } from '../substitutes_constants/TeacherSubstitutesMockData';
import TeacherSubstituteActionModal from './TeacherSubstituteActionModal';

export default function TeacherSubstitutesMain() {
  const { openActionModal } = useTeacherSubstitutesStore();
  const [activeTab, setActiveTab] = useState<'Upcoming' | 'History'>('Upcoming');

  const filteredSubstitutes = TEACHER_SUBSTITUTES_MOCK.filter(sub => {
    if (activeTab === 'Upcoming') return sub.status === 'Pending Acknowledgment' || sub.status === 'Accepted';
    if (activeTab === 'History') return sub.status === 'Completed' || sub.status === 'Rejected';
    return true;
  });

  return (
    <div className="flex flex-col h-full w-full max-w-7xl mx-auto">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary">Substitute & Replacements</h1>
          <p className="text-[14px] text-text-secondary mt-1">Manage your assigned replacement classes and view substitute history.</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-4 mb-6">
        <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-1">
          {['Upcoming', 'History'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-5 py-2 rounded-lg text-[13px] font-bold transition-colors whitespace-nowrap ${
                activeTab === tab 
                ? 'bg-primary text-black shadow-sm' 
                : 'bg-page border border-border text-text-secondary hover:text-text-primary hover:bg-white/5'
              }`}
            >
              {tab === 'Upcoming' ? 'Assigned Classes' : 'Substitute History'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSubstitutes.map((sub) => (
          <div key={sub.id} className="bg-card border border-border rounded-xl flex flex-col hover:border-primary/50 transition-colors group">
             
             {/* Header */}
             <div className="p-5 border-b border-border bg-black/10 relative">
               <span className={`absolute top-4 right-[-30px] w-[120px] text-center text-[10px] font-bold uppercase tracking-wider py-1 transform rotate-45 ${
                 sub.status === 'Pending Acknowledgment' ? 'bg-warning text-black animate-pulse' : 
                 sub.status === 'Accepted' ? 'bg-info text-black' : 
                 sub.status === 'Completed' ? 'bg-success text-black' : 'bg-danger text-white'
               }`}>
                 {sub.status === 'Pending Acknowledgment' ? 'Action Req.' : sub.status}
               </span>
               <h3 className="text-[18px] font-bold text-text-primary group-hover:text-primary transition-colors pr-10">{sub.class}</h3>
               <p className="text-[13px] text-text-secondary font-bold flex items-center gap-2 mt-1">
                 <BookOpen size={14} className="text-primary"/> {sub.subject}
               </p>
             </div>

             {/* Details */}
             <div className="p-5 flex-1 space-y-4">
                <div className="flex items-center gap-4 text-[13px] text-text-primary bg-page border border-border p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-text-secondary" />
                    <span className="font-bold">{sub.date}</span>
                  </div>
                  <div className="w-px h-4 bg-border"></div>
                  <div className="flex items-center gap-2 text-info">
                    <MapPin size={16} />
                    <span className="font-bold">{sub.roomNo}</span>
                  </div>
                </div>

                <div>
                  <p className="text-[11px] text-text-secondary uppercase tracking-wider font-bold flex items-center gap-1.5 mb-1"><Clock size={12}/> Period Details</p>
                  <p className="text-[14px] font-bold text-text-primary">{sub.period}</p>
                </div>

                <div>
                  <p className="text-[11px] text-text-secondary uppercase tracking-wider font-bold mb-1">Replacing</p>
                  <p className="text-[13px] text-text-primary bg-input border border-border px-3 py-1.5 rounded inline-block">{sub.originalTeacher}</p>
                </div>
             </div>

             {/* Action Button */}
             <div className="px-5 py-4 border-t border-border bg-black/10">
               {sub.status === 'Pending Acknowledgment' || sub.status === 'Accepted' ? (
                 <button 
                   onClick={() => openActionModal(sub)}
                   className={`w-full py-2 flex items-center justify-center gap-2 text-[13px] font-bold rounded transition-colors ${
                     sub.status === 'Pending Acknowledgment' 
                     ? 'bg-primary text-black hover:bg-primary/90' 
                     : 'bg-page border border-info text-info hover:bg-info hover:text-black'
                   }`}
                 >
                   {sub.status === 'Pending Acknowledgment' ? 'Review & Acknowledge' : 'View Instructions'} <ArrowRight size={16} />
                 </button>
               ) : (
                 <div className="flex items-center justify-center gap-2 text-[13px] font-bold text-text-secondary py-2">
                   <CheckCircle2 size={16} className={sub.status === 'Completed' ? 'text-success' : 'text-text-secondary'}/> {sub.status}
                 </div>
               )}
             </div>
          </div>
        ))}

        {filteredSubstitutes.length === 0 && (
          <div className="col-span-full py-16 text-center text-text-secondary bg-card rounded-xl border border-border">
            <Users size={48} className="mx-auto mb-4 opacity-50" />
            <p className="text-[16px] font-bold text-text-primary">No Records Found</p>
            <p className="text-[13px] mt-1">There are no substitute classes in this category.</p>
          </div>
        )}
      </div>

      <TeacherSubstituteActionModal />
    </div>
  );
}
