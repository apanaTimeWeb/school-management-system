"use client";
import React, { useState } from 'react';
import { X, CalendarHeart, CalendarClock, IndianRupee, MapPin, Users, Info, CheckCircle, XCircle } from 'lucide-react';
import { usePrincipalEventsStore } from '../events_store/usePrincipalEventsStore';
import { approveRejectPrincipalEvent } from '../events_api/PrincipalEventsApi';
import clsx from 'clsx';

export default function PrincipalEventDetailsModal() {
  const { selectedEvent, setSelectedEvent } = usePrincipalEventsStore();
  const [loading, setLoading] = useState(false);

  if (!selectedEvent) return null;

  const handleApproval = async (action: 'Approve' | 'Reject') => {
    setLoading(true);
    await approveRejectPrincipalEvent(selectedEvent.id, action);
    // In a real app, we would update the store/fetch again
    setSelectedEvent(null);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-0">
      <div className="w-full max-w-2xl bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        <div className="px-5 py-4 bg-card border-b border-border flex items-center justify-between shrink-0">
          <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
            <CalendarHeart className="text-primary" size={18} /> 
            Event Approval & Details
          </h2>
          <button 
            onClick={() => setSelectedEvent(null)}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
          
          <div>
            <div className="flex items-center justify-between gap-3 mb-2">
              <span className="px-2.5 py-1 rounded bg-page border border-border text-[11px] font-bold text-text-primary">
                {selectedEvent.type}
              </span>
              <span className={clsx("inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold border", 
                selectedEvent.status === 'Pending Approval' ? 'bg-warning/20 text-warning border-warning/30' :
                selectedEvent.status === 'Approved' ? 'bg-primary/20 text-primary border-primary/30' :
                selectedEvent.status === 'Completed' ? 'bg-success/20 text-success border-success/30' :
                'bg-danger/20 text-danger border-danger/30'
              )}>
                {selectedEvent.status}
              </span>
            </div>
            <h3 className="text-[22px] font-bold text-text-primary leading-snug">{selectedEvent.title}</h3>
            <p className="text-[13px] text-text-secondary mt-1">Event ID: {selectedEvent.id}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-card border border-border p-3 rounded-lg">
              <p className="text-[11px] text-text-secondary mb-1 flex items-center gap-1.5"><CalendarClock size={12}/> Dates</p>
              <p className="text-[13px] font-bold text-text-primary">{selectedEvent.startDate}</p>
            </div>
            <div className="bg-card border border-border p-3 rounded-lg">
              <p className="text-[11px] text-text-secondary mb-1 flex items-center gap-1.5"><MapPin size={12}/> Organizer</p>
              <p className="text-[13px] font-bold text-text-primary">{selectedEvent.organizer}</p>
            </div>
            <div className="bg-card border border-border p-3 rounded-lg">
              <p className="text-[11px] text-text-secondary mb-1 flex items-center gap-1.5"><IndianRupee size={12} className="text-success"/> Budget</p>
              <p className="text-[13px] font-bold text-success">{selectedEvent.budget.toLocaleString()}</p>
            </div>
            <div className="bg-card border border-border p-3 rounded-lg">
              <p className="text-[11px] text-text-secondary mb-1 flex items-center gap-1.5"><Users size={12} className="text-info"/> Participants</p>
              <p className="text-[13px] font-bold text-text-primary">{selectedEvent.participantsCount || 0}</p>
            </div>
          </div>

          <div className="bg-card border border-border p-5 rounded-lg">
            <p className="text-[13px] font-bold text-text-primary mb-2 flex items-center gap-2"><Info size={16} className="text-info"/> Event Description</p>
            <p className="text-[14px] text-text-secondary leading-relaxed whitespace-pre-wrap">{selectedEvent.description}</p>
          </div>

        </div>

        <div className="px-5 py-4 border-t border-border bg-card flex justify-end shrink-0 gap-3">
          <button
            onClick={() => setSelectedEvent(null)}
            className="px-6 py-2 rounded-md bg-page hover:bg-white/5 border border-border text-text-primary text-[13px] font-bold transition-colors"
          >
            Close
          </button>
          
          {selectedEvent.status === 'Pending Approval' && (
            <>
              <button
                onClick={() => handleApproval('Reject')}
                disabled={loading}
                className="px-6 py-2 rounded-md bg-danger/10 hover:bg-danger border border-danger/30 hover:border-danger text-danger hover:text-white text-[13px] font-bold transition-colors flex items-center gap-2 disabled:opacity-50"
              >
                <XCircle size={16}/> Reject
              </button>
              <button
                onClick={() => handleApproval('Approve')}
                disabled={loading}
                className="px-6 py-2 rounded-md bg-success hover:bg-success-hover text-black text-[13px] font-bold transition-colors flex items-center gap-2 disabled:opacity-50"
              >
                <CheckCircle size={16}/> Approve Event
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
