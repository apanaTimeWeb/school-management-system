"use client";
import React from 'react';
import { X, Presentation, CalendarClock, MapPin, Users, ListChecks } from 'lucide-react';
import { usePrincipalMeetingsStore } from '../meetings_store/usePrincipalMeetingsStore';
import clsx from 'clsx';

export default function PrincipalMeetingDetailsModal() {
  const { selectedMeeting, setSelectedMeeting } = usePrincipalMeetingsStore();

  if (!selectedMeeting) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-0">
      <div className="w-full max-w-2xl bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        <div className="px-5 py-4 bg-card border-b border-border flex items-center justify-between shrink-0">
          <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
            <Presentation className="text-primary" size={18} /> 
            Meeting Details & Agenda
          </h2>
          <button 
            onClick={() => setSelectedMeeting(null)}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
          
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className={clsx("px-2.5 py-1 rounded text-[11px] font-bold border", 
                selectedMeeting.type === 'Staff' ? 'bg-primary/20 text-primary border-primary/30' :
                selectedMeeting.type === 'Parent' ? 'bg-info/20 text-info border-info/30' :
                selectedMeeting.type === 'Academic' ? 'bg-warning/20 text-warning border-warning/30' :
                'bg-success/20 text-success border-success/30'
              )}>
                {selectedMeeting.type} Meeting
              </span>
              <span className={clsx("px-2.5 py-1 rounded-full text-[11px] font-bold border", 
                selectedMeeting.status === 'Scheduled' ? 'bg-warning/10 text-warning border-warning/30' :
                selectedMeeting.status === 'In Progress' ? 'bg-info/10 text-info border-info/30' :
                selectedMeeting.status === 'Completed' ? 'bg-success/10 text-success border-success/30' :
                'bg-danger/10 text-danger border-danger/30'
              )}>
                Status: {selectedMeeting.status}
              </span>
            </div>
            <h3 className="text-[22px] font-bold text-text-primary leading-snug">{selectedMeeting.title}</h3>
            <p className="text-[13px] text-text-secondary mt-1">Organized by: {selectedMeeting.organizer}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-card border border-border p-4 rounded-lg flex flex-col">
              <span className="text-[12px] text-text-secondary mb-1 flex items-center gap-2"><CalendarClock size={14} className="text-primary"/> Schedule</span>
              <span className="text-[14px] font-bold text-text-primary">{selectedMeeting.date}</span>
              <span className="text-[13px] text-text-secondary">{selectedMeeting.time} ({selectedMeeting.duration})</span>
            </div>
            <div className="bg-card border border-border p-4 rounded-lg flex flex-col">
              <span className="text-[12px] text-text-secondary mb-1 flex items-center gap-2"><MapPin size={14} className="text-warning"/> Location</span>
              <span className="text-[14px] font-bold text-text-primary">{selectedMeeting.location}</span>
            </div>
            <div className="bg-card border border-border p-4 rounded-lg flex flex-col">
              <span className="text-[12px] text-text-secondary mb-1 flex items-center gap-2"><Users size={14} className="text-info"/> Attendance</span>
              {selectedMeeting.actualAttendeesCount ? (
                <span className="text-[14px] font-bold text-text-primary">{selectedMeeting.actualAttendeesCount} / {selectedMeeting.expectedAttendeesCount}</span>
              ) : (
                <span className="text-[14px] font-bold text-text-primary">{selectedMeeting.expectedAttendeesCount} Expected</span>
              )}
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="px-4 py-3 border-b border-border bg-page/50 flex items-center gap-2">
              <ListChecks size={16} className="text-success" />
              <h4 className="text-[14px] font-bold text-text-primary">Meeting Agenda</h4>
            </div>
            <div className="p-4 space-y-3">
              {selectedMeeting.agenda.map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[11px] font-bold shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-[14px] text-text-primary mt-0.5">{item}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="px-5 py-4 border-t border-border bg-card flex justify-end shrink-0">
          <button
            onClick={() => setSelectedMeeting(null)}
            className="px-6 py-2 rounded-md bg-primary hover:bg-primary-hover text-black text-[13px] font-bold transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
