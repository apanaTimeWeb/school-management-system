"use client";
import React from 'react';
import { X, Megaphone, CalendarClock, Target, Paperclip } from 'lucide-react';
import { usePrincipalCommunicationStore } from '../communication_store/usePrincipalCommunicationStore';
import clsx from 'clsx';

export default function PrincipalCommunicationNoticeModal() {
  const { selectedNotice, setSelectedNotice } = usePrincipalCommunicationStore();

  if (!selectedNotice) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-0">
      <div className="w-full max-w-2xl bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        <div className="px-5 py-4 bg-card border-b border-border flex items-center justify-between shrink-0">
          <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
            <Megaphone className="text-primary" size={18} /> 
            Notice Details
          </h2>
          <button 
            onClick={() => setSelectedNotice(null)}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
          
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className={clsx("px-2.5 py-1 rounded text-[11px] font-bold border", 
                selectedNotice.priority === 'Urgent' ? 'bg-danger/20 text-danger border-danger/30' :
                selectedNotice.priority === 'High' ? 'bg-warning/20 text-warning border-warning/30' :
                'bg-success/20 text-success border-success/30'
              )}>
                {selectedNotice.priority} Priority
              </span>
              <span className="px-2.5 py-1 rounded bg-page border border-border text-[11px] font-bold text-text-primary">
                {selectedNotice.type}
              </span>
            </div>
            <h3 className="text-[20px] font-bold text-text-primary leading-snug">{selectedNotice.title}</h3>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-text-secondary border-y border-border py-3">
            <span className="flex items-center gap-2"><Target size={16} className="text-info"/> Audience: <strong className="text-text-primary">{selectedNotice.targetAudience}</strong></span>
            <span className="flex items-center gap-2"><CalendarClock size={16} className="text-primary"/> Posted: <strong className="text-text-primary">{selectedNotice.datePosted}</strong></span>
            <span className="flex items-center gap-2 text-text-primary">By: {selectedNotice.postedBy}</span>
          </div>

          <div className="bg-card border border-border p-5 rounded-lg text-[14px] text-text-primary leading-relaxed whitespace-pre-wrap">
            {selectedNotice.content}
          </div>

          {selectedNotice.attachments && (
            <div className="flex items-center gap-3 p-4 border border-border rounded-lg bg-page">
              <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
                <Paperclip size={20} />
              </div>
              <div>
                <p className="text-[13px] font-bold text-text-primary">{selectedNotice.attachments} Attachment(s) Available</p>
                <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-coming-soon', { detail: 'This action is part of the next development phase.' })); }} className="text-[12px] text-primary hover:underline font-semibold mt-0.5">Download All</button>
              </div>
            </div>
          )}

        </div>

        <div className="px-5 py-4 border-t border-border bg-card flex justify-end shrink-0">
          <button
            onClick={() => setSelectedNotice(null)}
            className="px-6 py-2 rounded-md bg-primary hover:bg-primary-hover text-black text-[13px] font-bold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
