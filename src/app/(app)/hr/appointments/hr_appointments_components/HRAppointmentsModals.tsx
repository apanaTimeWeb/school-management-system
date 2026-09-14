"use client";
import React from "react";
import { X } from "lucide-react";
import { useHRAppointmentsStore } from "../hr_appointments_store/useHRAppointmentsStore";

export default function HRAppointmentsModals() {
  const { 
    isGenerateModalOpen, setGenerateModalOpen
  } = useHRAppointmentsStore();

  if (!isGenerateModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm fade-in">
      <div className="bg-card w-full max-w-xl rounded-2xl shadow-xl overflow-hidden flex flex-col scale-in">
        <div className="p-4 border-b border-border flex justify-between items-center bg-bg-input">
          <h3 className="text-lg font-black text-text-primary">Generate New Letter</h3>
          <button 
            onClick={() => setGenerateModalOpen(false)}
            className="p-2 text-text-secondary hover:text-danger hover:bg-danger/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 space-y-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Letter Type</label>
            <select className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-bold outline-none focus:border-indigo-500 text-text-primary">
              <option value="Offer Letter">Offer Letter</option>
              <option value="Appointment Letter">Appointment Letter</option>
              <option value="Experience Letter">Experience Letter</option>
              <option value="Relieving Letter">Relieving Letter</option>
              <option value="Warning Letter">Warning Letter</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Select Recipient</label>
            <select className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-bold outline-none focus:border-indigo-500 text-text-primary">
              <option value="">Search Employee/Candidate...</option>
              <option value="Aakash Gupta">Aakash Gupta</option>
              <option value="Sunil Das">Sunil Das</option>
              <option value="Priya Singh">Priya Singh</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Issue Date</label>
            <input type="date" className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-bold outline-none focus:border-indigo-500 text-text-primary" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Additional Notes / Remarks</label>
            <textarea 
              className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-semibold outline-none focus:border-indigo-500 min-h-[80px]" 
              placeholder="Any custom remarks for the letter..."
            />
          </div>
        </div>

        <div className="p-4 border-t border-border flex justify-end gap-3 bg-bg-input">
          <button 
            onClick={() => setGenerateModalOpen(false)}
            className="px-4 py-2 font-bold text-sm text-text-secondary bg-bg-page border border-border rounded-lg hover:bg-border transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={() => setGenerateModalOpen(false)}
            className="px-4 py-2 font-bold text-sm text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
          >
            Generate Draft
          </button>
        </div>
      </div>
    </div>
  );
}
