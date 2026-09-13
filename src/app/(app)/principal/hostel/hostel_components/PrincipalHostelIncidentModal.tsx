"use client";
import React, { useState } from 'react';
import { X, MessageSquareWarning, CheckCircle } from 'lucide-react';
import { usePrincipalHostelStore } from '../hostel_store/usePrincipalHostelStore';
import { resolveHostelIncident } from '../hostel_api/PrincipalHostelApi';
import clsx from 'clsx';

export default function PrincipalHostelIncidentModal() {
  const { selectedIncident, setSelectedIncident } = usePrincipalHostelStore();
  const [remarks, setRemarks] = useState('');
  const [loading, setLoading] = useState(false);

  if (!selectedIncident) return null;

  const handleAction = async () => {
    setLoading(true);
    await resolveHostelIncident(selectedIncident.id, remarks);
    setSelectedIncident(null);
    setLoading(false);
    setRemarks('');
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-0">
      <div className="w-full max-w-xl bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col">
        
        <div className="px-5 py-4 bg-card border-b border-border flex items-center justify-between shrink-0">
          <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
            <MessageSquareWarning className="text-danger" size={18} /> 
            Hostel Incident Review
          </h2>
          <button 
            onClick={() => setSelectedIncident(null)}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-5">
          
          <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
            <div>
              <span className="text-[11px] font-bold bg-primary/20 text-primary border border-primary/30 px-2 py-0.5 rounded mb-2 inline-block">{selectedIncident.category}</span>
              <h3 className="text-[18px] font-bold text-text-primary mb-1">{selectedIncident.title}</h3>
              <p className="text-[12px] text-text-secondary font-mono">Reported by {selectedIncident.reportedBy} | {selectedIncident.date}</p>
            </div>
            <span className={clsx("inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold border", 
              selectedIncident.status === 'Open' ? 'bg-danger/10 text-danger border-danger/30' : 'bg-success/10 text-success border-success/30'
            )}>
              {selectedIncident.status}
            </span>
          </div>

          <div className="bg-card border border-border p-3 rounded-lg">
            <p className="text-[11px] text-text-secondary mb-1">Incident Location</p>
            <p className="text-[14px] font-bold text-text-primary">{selectedIncident.block}</p>
            {selectedIncident.roomNumber && <p className="text-[12px] text-text-secondary font-mono mt-1">Room {selectedIncident.roomNumber}</p>}
          </div>

          <div className="bg-card border border-border p-4 rounded-lg">
            <h4 className="text-[12px] font-bold text-text-secondary mb-2">Description</h4>
            <p className="text-[14px] text-text-primary leading-relaxed">{selectedIncident.description}</p>
          </div>

          {selectedIncident.status === 'Resolved' && selectedIncident.resolutionNote && (
            <div className="bg-success/5 border border-success/30 p-4 rounded-lg">
              <h4 className="text-[12px] font-bold text-success mb-2 flex items-center gap-1.5"><CheckCircle size={14}/> Resolution Note</h4>
              <p className="text-[14px] text-success leading-relaxed">{selectedIncident.resolutionNote}</p>
            </div>
          )}

          {selectedIncident.status === 'Open' && (
            <div className="space-y-2">
              <label className="text-[13px] font-bold text-text-primary">Resolution Remarks</label>
              <textarea 
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                className="w-full h-24 bg-input border border-border rounded-lg p-3 text-[13px] text-text-primary outline-none focus:border-primary transition-colors resize-none"
                placeholder="Detail the actions taken to resolve this incident..."
              />
            </div>
          )}

        </div>

        <div className="px-5 py-4 border-t border-border bg-card flex justify-end shrink-0 gap-3">
          <button
            onClick={() => setSelectedIncident(null)}
            className="px-5 py-2 rounded-md bg-page hover:bg-white/5 border border-border text-text-primary text-[13px] font-bold transition-colors"
          >
            {selectedIncident.status === 'Open' ? 'Cancel' : 'Close'}
          </button>
          
          {selectedIncident.status === 'Open' && (
            <button
              onClick={handleAction}
              disabled={loading || !remarks.trim()}
              className="px-6 py-2 rounded-md bg-success hover:bg-success-hover text-black text-[13px] font-bold transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              <CheckCircle size={16}/> Mark Resolved
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
