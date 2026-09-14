"use client";

import { X, Star, Target, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import type { EmployeePerformanceRecord } from "../hr_performance_types/HrPerformanceTypes";

interface HrPerformanceModalProps {
  record: EmployeePerformanceRecord | null;
  close: () => void;
  updateGoal: (recId: string, goalId: string, achieved: number) => void;
  submitAppraisal: (record: EmployeePerformanceRecord, complete: boolean) => void;
}

export default function HrPerformanceModal({ record, close, updateGoal, submitAppraisal }: HrPerformanceModalProps) {
  
  const [localRecord, setLocalRecord] = useState<EmployeePerformanceRecord | null>(null);

  useEffect(() => {
    if (record) setLocalRecord(JSON.parse(JSON.stringify(record))); // deep clone for local edits
  }, [record]);

  if (!localRecord || !record) return null;

  const handleStarClick = (rating: number) => {
    setLocalRecord(prev => prev ? { ...prev, overallRating: rating } : prev);
  };

  const handleSave = (complete: boolean) => {
    submitAppraisal(localRecord, complete);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div className="bg-card border border-border rounded-xl w-full max-w-5xl shadow-2xl overflow-hidden motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 flex flex-col max-h-[95vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-overlay">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Appraisal: {localRecord.employeeName}</h2>
            <div className="flex gap-3 mt-1">
              <span className="text-sm font-bold text-primary">{localRecord.designation}</span>
              <span className="text-sm font-medium text-muted-foreground border-l border-border pl-3">Cycle: {localRecord.cycle}</span>
            </div>
          </div>
          <button onClick={close} className="p-2 hover:bg-input rounded-full text-muted-foreground transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-card flex flex-col lg:flex-row gap-6">
          
          {/* Left: Goals & Evaluation */}
          <div className="flex-1 flex flex-col gap-6">
            
            {/* Goals */}
            <div className="border border-border rounded-xl p-5 bg-input/10">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 border-b border-border/50 pb-2 flex items-center gap-2"><Target size={16} className="text-info"/> Goal Evaluation</h3>
              <div className="space-y-4">
                {localRecord.goals.map(g => (
                  <div key={g.id} className="bg-card border border-border p-3 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-sm font-bold text-foreground">{g.description}</p>
                      <span className="text-[10px] font-bold bg-input px-2 py-0.5 rounded text-muted-foreground">Weight: {g.weightage}%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <input 
                        type="range" min="0" max={g.weightage} value={g.achieved}
                        onChange={(e) => {
                          const val = parseInt(e.target.value);
                          setLocalRecord(prev => prev ? { ...prev, goals: prev.goals.map(x => x.id === g.id ? { ...x, achieved: val } : x) } : prev);
                        }}
                        className="w-full accent-primary"
                      />
                      <span className="text-sm font-bold text-primary min-w-[40px] text-right">{g.achieved}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Overall Rating */}
            <div className="border border-border rounded-xl p-5 bg-input/10">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 border-b border-border/50 pb-2">Overall Performance Rating</h3>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star 
                    key={star} 
                    size={32}
                    onClick={() => handleStarClick(star)}
                    className={`cursor-pointer transition-all hover:scale-110 active:scale-95 ${localRecord.overallRating >= star ? 'text-primary fill-primary drop-shadow-md' : 'text-border fill-input'}`} 
                  />
                ))}
                <span className="ml-4 text-xl font-bold text-foreground">{localRecord.overallRating > 0 ? `${localRecord.overallRating} / 5` : ''}</span>
              </div>
            </div>

          </div>

          {/* Right: Reviews & Promotion */}
          <div className="flex-1 flex flex-col gap-6">
            
            {/* Remarks */}
            <div className="border border-border rounded-xl p-5 bg-card shadow-sm flex-1">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 border-b border-border/50 pb-2">Reviews & Remarks</h3>
              
              <div className="mb-4">
                <label className="block text-xs font-bold text-muted-foreground mb-1">Manager Remarks</label>
                <textarea 
                  rows={3} 
                  value={localRecord.managerRemarks}
                  onChange={(e) => setLocalRecord(prev => prev ? { ...prev, managerRemarks: e.target.value } : prev)}
                  placeholder="Enter detailed feedback from reporting manager..."
                  className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary outline-none"
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-bold text-muted-foreground mb-1">HR / Final Review</label>
                <textarea 
                  rows={3} 
                  value={localRecord.hrReview}
                  onChange={(e) => setLocalRecord(prev => prev ? { ...prev, hrReview: e.target.value } : prev)}
                  placeholder="Enter HR notes or final committee review..."
                  className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary outline-none"
                ></textarea>
              </div>

              {/* Promotion Toggle */}
              <div className="mt-6 p-4 border border-success/30 bg-success/5 rounded-lg flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-foreground">Promotion Recommendation</h4>
                  <p className="text-xs text-muted-foreground">Recommend employee for next level/band.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked={localRecord.promotionRecommended} onChange={(e) => setLocalRecord(prev => prev ? { ...prev, promotionRecommended: e.target.checked } : prev)} />
                  <div className="w-11 h-6 bg-input rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-success after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-auto">
              <button 
                onClick={() => handleSave(false)} 
                className="flex-1 py-3 bg-input text-foreground font-bold text-sm rounded-md hover:bg-border transition-colors flex items-center justify-center gap-2"
              >
                Save Draft (In Review)
              </button>
              <button 
                onClick={() => handleSave(true)} 
                className="flex-1 py-3 bg-primary text-card font-bold text-sm rounded-md hover:bg-yellow-500 shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <CheckCircle size={18} /> Finalize Appraisal
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

