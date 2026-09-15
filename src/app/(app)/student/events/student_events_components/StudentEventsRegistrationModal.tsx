"use client";

import React, { useEffect, useState } from 'react';
import type { SchoolEvent } from '../student_events_types/student_events_types';
import { X, CalendarHeart, Loader2, Info } from 'lucide-react';

interface Props {
  event: SchoolEvent;
  onClose: () => void;
  onConfirm: () => Promise<void>;
}

export default function StudentEventsRegistrationModal({ event, onClose, onConfirm }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape' && !isSubmitting) onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose, isSubmitting]);

  const handleConfirm = async () => {
    setIsSubmitting(true);
    await onConfirm();
    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-overlay/80 backdrop-blur-sm motion-safe:animate-[fadeIn_0.2s_ease-out]">
      <div className="bg-popover border border-border rounded-xl w-full max-w-md flex flex-col shadow-2xl relative motion-safe:animate-[slideIn_0.3s_ease-out]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border bg-page rounded-t-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <CalendarHeart size={20} />
            </div>
            <h2 className="text-lg font-bold text-text-primary leading-tight">
              Confirm Registration
            </h2>
          </div>
          {!isSubmitting && (
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-text-secondary hover:bg-danger/10 hover:text-danger hover:border-danger/30 transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-sm text-text-secondary mb-6">
            You are about to register for the following event. Please confirm your details.
          </p>
          
          <div className="bg-page border border-border rounded-lg p-4 mb-6">
            <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-1">{event.category}</span>
            <h3 className="text-base font-bold text-text-primary mb-2">{event.title}</h3>
            <div className="flex flex-col gap-1 text-xs text-text-secondary font-semibold">
              <span className="flex justify-between"><span>Date:</span> <span>{event.date}</span></span>
              <span className="flex justify-between"><span>Time:</span> <span>{event.time}</span></span>
              <span className="flex justify-between"><span>Venue:</span> <span>{event.venue}</span></span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-info/10 border border-info/20 rounded-lg text-info">
            <Info size={16} className="mt-0.5 shrink-0" />
            <p className="text-xs font-medium">By registering, you commit to attending the event. Habitual absenteeism after registration may result in a ban from future events.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-border bg-page rounded-b-xl flex justify-end gap-3">
          <button 
            onClick={onClose}
            disabled={isSubmitting}
            className="px-5 py-2.5 rounded-lg text-sm font-bold text-text-secondary hover:bg-card hover:text-text-primary transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button 
            onClick={handleConfirm}
            disabled={isSubmitting}
            className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-white text-sm font-bold shadow-sm hover:bg-primary-hover transition-colors disabled:opacity-70"
          >
            {isSubmitting ? <><Loader2 size={16} className="animate-spin" /> Processing...</> : "Confirm Registration"}
          </button>
        </div>

      </div>
    </div>
  );
}
