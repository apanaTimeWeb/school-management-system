"use client";
import React from "react";
import { X, Save, Star } from "lucide-react";
import { useHRPerformanceStore } from "../hr_performance_store/useHRPerformanceStore";
import clsx from "clsx";

export default function HRPerformanceModals() {
  const { 
    isActionModalOpen, setActionModalOpen,
    selectedRecord
  } = useHRPerformanceStore();

  if (!selectedRecord || !isActionModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm fade-in">
      <div className="bg-card w-full max-w-lg rounded-2xl shadow-xl overflow-hidden flex flex-col scale-in">
        <div className="p-4 border-b border-border flex justify-between items-center bg-bg-input">
          <h3 className="text-lg font-black text-text-primary">Appraisal Review</h3>
          <button 
            onClick={() => setActionModalOpen(false)}
            className="p-2 text-text-secondary hover:text-danger hover:bg-danger/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-black text-lg shrink-0">
              {selectedRecord.name.charAt(0)}
            </div>
            <div>
              <h4 className="text-lg font-black text-text-primary">{selectedRecord.name}</h4>
              <p className="text-sm font-bold text-text-secondary">{selectedRecord.role} • {selectedRecord.department}</p>
            </div>
            <div className="ml-auto">
              <span className={clsx(
                "px-2.5 py-1 rounded-md text-[10px] font-bold border", 
                selectedRecord.status === 'Pending' ? 'bg-rose-50 text-rose-700 border-rose-200' :
                selectedRecord.status === 'In Progress' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                'bg-emerald-50 text-emerald-700 border-emerald-200'
              )}>
                {selectedRecord.status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-bg-page border border-border rounded-xl">
              <span className="text-[10px] font-bold text-text-secondary uppercase">Appraisal Cycle</span>
              <p className="text-sm font-bold text-text-primary mt-0.5">{selectedRecord.appraisalCycle}</p>
            </div>
            <div className="p-3 bg-bg-page border border-border rounded-xl">
              <span className="text-[10px] font-bold text-text-secondary uppercase">Reviewer</span>
              <p className="text-sm font-bold text-text-primary mt-0.5">{selectedRecord.reviewer}</p>
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Overall Rating</span>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button key={star} className="text-border hover:text-yellow-400 transition-colors">
                  <Star size={32} className={clsx(selectedRecord.status === 'Reviewed' && star <= selectedRecord.rating ? "fill-yellow-400 text-yellow-400" : "")} />
                </button>
              ))}
              <span className="ml-3 text-lg font-black text-text-primary">{selectedRecord.status === 'Reviewed' ? selectedRecord.rating : '-'} <span className="text-sm font-semibold text-text-secondary">/ 5</span></span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Feedback / Remarks</label>
            <textarea 
              className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-semibold outline-none focus:border-yellow-500 min-h-[100px]" 
              placeholder="Provide constructive feedback for the employee..."
              defaultValue={selectedRecord.status === 'Reviewed' ? "Consistently exceeds expectations. Highly recommended for the upcoming leadership roles." : ""}
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
            className="px-4 py-2 font-bold text-sm text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition-colors shadow-md flex items-center gap-2"
          >
            <Save size={16} /> Save Review
          </button>
        </div>
      </div>
    </div>
  );
}
