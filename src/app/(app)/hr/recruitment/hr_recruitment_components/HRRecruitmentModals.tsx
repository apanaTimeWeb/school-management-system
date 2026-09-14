"use client";
import React from "react";
import { X, CheckCircle, XCircle, FileText, CalendarClock } from "lucide-react";
import { useHRRecruitmentStore } from "../hr_recruitment_store/useHRRecruitmentStore";
import clsx from "clsx";

export default function HRRecruitmentModals() {
  const { 
    isActionModalOpen, setActionModalOpen,
    selectedCandidate
  } = useHRRecruitmentStore();

  if (!selectedCandidate || !isActionModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm fade-in">
      <div className="bg-card w-full max-w-xl rounded-2xl shadow-xl overflow-hidden flex flex-col scale-in">
        <div className="p-4 border-b border-border flex justify-between items-center bg-bg-input">
          <h3 className="text-lg font-black text-text-primary">Candidate Application</h3>
          <button 
            onClick={() => setActionModalOpen(false)}
            className="p-2 text-text-secondary hover:text-danger hover:bg-danger/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-black text-xl shrink-0">
              {selectedCandidate.name.charAt(0)}
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-black text-text-primary">{selectedCandidate.name}</h4>
              <p className="text-sm font-bold text-text-secondary">{selectedCandidate.appliedPosition} • {selectedCandidate.experience}</p>
            </div>
            <div>
              <span className={clsx(
                "px-2.5 py-1 rounded-md text-xs font-bold border", 
                selectedCandidate.status === 'Screening' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                selectedCandidate.status === 'Interviewed' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                selectedCandidate.status === 'Offered' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                'bg-rose-50 text-rose-700 border-rose-200'
              )}>
                {selectedCandidate.status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-bg-page border border-border rounded-xl">
              <span className="text-[10px] font-bold text-text-secondary uppercase">Email</span>
              <p className="text-sm font-bold text-text-primary mt-0.5 truncate">{selectedCandidate.email}</p>
            </div>
            <div className="p-3 bg-bg-page border border-border rounded-xl">
              <span className="text-[10px] font-bold text-text-secondary uppercase">Phone</span>
              <p className="text-sm font-bold text-text-primary mt-0.5">{selectedCandidate.phone}</p>
            </div>
          </div>

          {selectedCandidate.status !== 'Offered' && selectedCandidate.status !== 'Rejected' && (
            <div className="bg-teal-50 border border-teal-100 rounded-xl p-4 flex flex-col gap-3">
              <h5 className="text-sm font-bold text-teal-800">Update Status</h5>
              <div className="flex flex-wrap gap-2">
                <button className="px-3 py-1.5 bg-blue-600 text-white text-xs font-bold rounded shadow-sm hover:bg-blue-700 transition flex items-center gap-1.5">
                  <CalendarClock size={14} /> Schedule Interview
                </button>
                <button className="px-3 py-1.5 bg-emerald-600 text-white text-xs font-bold rounded shadow-sm hover:bg-emerald-700 transition flex items-center gap-1.5">
                  <CheckCircle size={14} /> Mark as Offered
                </button>
                <button className="px-3 py-1.5 bg-rose-600 text-white text-xs font-bold rounded shadow-sm hover:bg-rose-700 transition flex items-center gap-1.5">
                  <XCircle size={14} /> Reject Candidate
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-border flex justify-between bg-bg-input items-center">
          <button className="text-teal-600 text-sm font-bold hover:underline flex items-center gap-2">
            <FileText size={16} /> View Attached Resume
          </button>
          <button 
            onClick={() => setActionModalOpen(false)}
            className="px-4 py-2 font-bold text-sm text-text-secondary bg-bg-page border border-border rounded-lg hover:bg-border transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
