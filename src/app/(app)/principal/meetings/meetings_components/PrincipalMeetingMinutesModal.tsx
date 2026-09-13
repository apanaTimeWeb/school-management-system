"use client";
import React from 'react';
import { X, CheckSquare, Clock, CheckCircle, CircleDashed } from 'lucide-react';
import { usePrincipalMeetingsStore } from '../meetings_store/usePrincipalMeetingsStore';
import clsx from 'clsx';

export default function PrincipalMeetingMinutesModal() {
  const { selectedMinutes, setSelectedMinutes } = usePrincipalMeetingsStore();

  if (!selectedMinutes) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-0">
      <div className="w-full max-w-3xl bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        <div className="px-5 py-4 bg-card border-b border-border flex items-center justify-between shrink-0">
          <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
            <CheckSquare className="text-primary" size={18} /> 
            Minutes of Meeting
          </h2>
          <button 
            onClick={() => setSelectedMinutes(null)}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
          
          <div>
            <p className="text-[13px] text-text-secondary mb-1">Meeting Date: <strong className="text-primary">{selectedMinutes.date}</strong></p>
            <h3 className="text-[22px] font-bold text-text-primary leading-snug">{selectedMinutes.meetingTitle}</h3>
            <p className="text-[12px] text-text-secondary mt-2">Recorded by: {selectedMinutes.recordedBy}</p>
          </div>

          <div className="bg-card border border-border p-5 rounded-lg">
            <h4 className="text-[14px] font-bold text-text-primary mb-3">Executive Summary</h4>
            <p className="text-[14px] text-text-secondary leading-relaxed whitespace-pre-wrap">{selectedMinutes.summary}</p>
          </div>

          <div>
            <h4 className="text-[15px] font-bold text-text-primary mb-3 border-b border-border pb-2">Follow-up Action Items</h4>
            <div className="grid gap-3">
              {selectedMinutes.actionItems.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg bg-page border border-border gap-4">
                  <div className="flex-1">
                    <p className="text-[14px] font-bold text-text-primary mb-1">{item.task}</p>
                    <div className="flex items-center gap-4 text-[12px] text-text-secondary">
                      <span className="font-semibold text-info">Assigned to: {item.assignedTo}</span>
                      <span>Due: {item.dueDate}</span>
                    </div>
                  </div>
                  <span className={clsx("inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-bold border shrink-0", 
                    item.status === 'Pending' ? 'bg-danger/10 text-danger border-danger/30' :
                    item.status === 'In Progress' ? 'bg-warning/10 text-warning border-warning/30' :
                    'bg-success/10 text-success border-success/30'
                  )}>
                    {item.status === 'Pending' && <CircleDashed size={14}/>}
                    {item.status === 'In Progress' && <Clock size={14}/>}
                    {item.status === 'Completed' && <CheckCircle size={14}/>}
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="px-5 py-4 border-t border-border bg-card flex justify-end shrink-0">
          <button
            onClick={() => setSelectedMinutes(null)}
            className="px-6 py-2 rounded-md bg-primary hover:bg-primary-hover text-black text-[13px] font-bold transition-colors"
          >
            Close Minutes
          </button>
        </div>
      </div>
    </div>
  );
}
