"use client";
import React from "react";
import { X, Save, Clock } from "lucide-react";
import { useHRWorkloadStore } from "../hr_workload_store/useHRWorkloadStore";
import clsx from "clsx";

export default function HRWorkloadModals() {
  const { 
    isActionModalOpen, setActionModalOpen,
    selectedRecord
  } = useHRWorkloadStore();

  if (!selectedRecord || !isActionModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm fade-in">
      <div className="bg-card w-full max-w-lg rounded-2xl shadow-xl overflow-hidden flex flex-col scale-in">
        <div className="p-4 border-b border-border flex justify-between items-center bg-bg-input">
          <h3 className="text-lg font-black text-text-primary">Adjust Workload</h3>
          <button 
            onClick={() => setActionModalOpen(false)}
            className="p-2 text-text-secondary hover:text-danger hover:bg-danger/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-black text-lg shrink-0">
              {selectedRecord.name.charAt(0)}
            </div>
            <div>
              <h4 className="text-lg font-black text-text-primary">{selectedRecord.name}</h4>
              <p className="text-sm font-bold text-text-secondary">{selectedRecord.role} • {selectedRecord.department}</p>
            </div>
            <div className="ml-auto">
              <span className={clsx(
                "px-2.5 py-1 rounded-md text-[10px] font-bold border", 
                selectedRecord.status === 'Overloaded' ? 'bg-rose-50 text-rose-700 border-rose-200' :
                selectedRecord.status === 'Underutilized' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                'bg-emerald-50 text-emerald-700 border-emerald-200'
              )}>
                {selectedRecord.status}
              </span>
            </div>
          </div>

          <div className="p-4 bg-bg-page border border-border rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-text-secondary uppercase">Current Total Hours</span>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-indigo-500" />
                <span className="text-lg font-black text-text-primary">{selectedRecord.totalHours} <span className="text-xs font-bold text-text-secondary">hrs/week</span></span>
              </div>
            </div>
            
            {selectedRecord.assignedClasses.length > 0 && (
              <div>
                <span className="text-xs font-bold text-text-secondary uppercase block mb-1">Assigned Classes</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedRecord.assignedClasses.map(cls => (
                    <span key={cls} className="px-2 py-1 rounded text-[11px] font-bold bg-card border border-border text-text-primary flex items-center gap-1">
                      {cls}
                      <button className="text-text-secondary hover:text-rose-500 ml-1"><X size={12} /></button>
                    </span>
                  ))}
                  <button className="px-2 py-1 rounded text-[11px] font-bold bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-100 transition-colors">
                    + Add Class
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Adjustment Notes</label>
            <textarea 
              className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-semibold outline-none focus:border-indigo-500 min-h-[80px]" 
              placeholder="Provide reason for workload modification..."
            />
          </div>
        </div>

        <div className="p-4 border-t border-border flex justify-between bg-bg-input">
          <button 
            onClick={() => setActionModalOpen(false)}
            className="px-4 py-2 font-bold text-sm text-text-secondary bg-bg-page border border-border rounded-lg hover:bg-border transition-colors"
          >
            Cancel
          </button>
          
          <button 
            onClick={() => setActionModalOpen(false)}
            className="px-4 py-2 font-bold text-sm text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-md flex items-center gap-2"
          >
            <Save size={16} /> Save Workload
          </button>
        </div>
      </div>
    </div>
  );
}
