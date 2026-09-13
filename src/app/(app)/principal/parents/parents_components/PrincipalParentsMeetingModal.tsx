"use client";
import React from 'react';
import { X, CalendarSync, Clock, CheckCircle, Info } from 'lucide-react';
import { usePrincipalParentsStore } from '../parents_store/usePrincipalParentsStore';
import clsx from 'clsx';

export default function PrincipalParentsMeetingModal() {
  const { selectedMeeting, setSelectedMeeting } = usePrincipalParentsStore();

  if (!selectedMeeting) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-0">
      <div className="w-full max-w-xl bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        <div className="px-5 py-4 bg-card border-b border-border flex items-center justify-between shrink-0">
          <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
            <CalendarSync className="text-primary" size={18} /> 
            Meeting Details
          </h2>
          <button 
            onClick={() => setSelectedMeeting(null)}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
          
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-[18px] font-bold text-text-primary">{selectedMeeting.parentName}</h3>
              <p className="text-[13px] text-text-secondary">Meeting regarding: <strong className="text-info">{selectedMeeting.studentName}</strong></p>
            </div>
            <span className={clsx("inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-bold border", 
              selectedMeeting.status === 'Scheduled' ? 'bg-warning/20 text-warning border-warning/30' :
              selectedMeeting.status === 'Completed' ? 'bg-success/20 text-success border-success/30' :
              'bg-danger/20 text-danger border-danger/30'
            )}>
              {selectedMeeting.status === 'Scheduled' && <Clock size={14}/>}
              {selectedMeeting.status === 'Completed' && <CheckCircle size={14}/>}
              {selectedMeeting.status}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card border border-border p-4 rounded-lg">
              <p className="text-[12px] text-text-secondary mb-1">Date</p>
              <p className="text-[15px] font-bold text-primary">{selectedMeeting.meetingDate}</p>
            </div>
            <div className="bg-card border border-border p-4 rounded-lg">
              <p className="text-[12px] text-text-secondary mb-1">Time</p>
              <p className="text-[15px] font-bold text-text-primary">{selectedMeeting.meetingTime}</p>
            </div>
          </div>

          <div className="bg-card border border-border p-4 rounded-lg">
            <p className="text-[12px] text-text-secondary mb-2 flex items-center gap-2"><Info size={14} className="text-info"/> Reason for Meeting</p>
            <p className="text-[14px] text-text-primary leading-relaxed">{selectedMeeting.reason}</p>
          </div>

          {selectedMeeting.notes && (
            <div className="bg-success/10 border border-success/20 p-4 rounded-lg">
              <p className="text-[12px] text-success font-bold uppercase tracking-wider mb-2 flex items-center gap-2"><CheckCircle size={14}/> Meeting Notes & Conclusion</p>
              <p className="text-[14px] text-text-primary">{selectedMeeting.notes}</p>
            </div>
          )}

        </div>

        <div className="px-5 py-4 border-t border-border bg-card flex justify-end shrink-0">
          <button
            onClick={() => setSelectedMeeting(null)}
            className="px-6 py-2 rounded-md bg-primary hover:bg-primary-hover text-black text-[13px] font-bold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
