"use client";
import React from 'react';
import { X, TrendingUp, AlertTriangle, BookOpen } from 'lucide-react';
import { usePrincipalAnalyticsStore } from '../analytics_store/usePrincipalAnalyticsStore';

export default function PrincipalAnalyticsDetailModal() {
  const { selectedTrend, setSelectedTrend, selectedRiskStudent, setSelectedRiskStudent } = usePrincipalAnalyticsStore();

  const handleClose = () => {
    setSelectedTrend(null);
    setSelectedRiskStudent(null);
  };

  if (!selectedTrend && !selectedRiskStudent) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-0">
      <div className="w-full max-w-lg bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col">
        
        <div className="px-5 py-4 bg-card border-b border-border flex items-center justify-between shrink-0">
          <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
            {selectedTrend ? (
              <><TrendingUp className="text-primary" size={18} /> Trend Analysis</>
            ) : (
              <><AlertTriangle className="text-warning" size={18} /> At-Risk Intervention</>
            )}
          </h2>
          <button 
            onClick={handleClose}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-5">
          
          {selectedTrend && (
            <>
              <div className="text-center mb-6">
                <span className="text-[12px] font-bold text-text-secondary bg-black/20 px-3 py-1 rounded-full mb-3 inline-block">
                  {selectedTrend.category} Metric
                </span>
                <h3 className="text-[32px] font-bold text-text-primary mb-1">{selectedTrend.value}</h3>
                <p className="text-[16px] font-bold text-primary mb-2">{selectedTrend.title}</p>
                <div className="flex justify-center">
                  <span className={`px-2 py-0.5 rounded text-[12px] font-bold ${
                    selectedTrend.trend === 'up' ? 'bg-success/10 text-success border border-success/30' :
                    selectedTrend.trend === 'down' ? 'bg-danger/10 text-danger border border-danger/30' :
                    'bg-info/10 text-info border border-info/30'
                  }`}>
                    {selectedTrend.trend === 'up' ? '↗ ' : selectedTrend.trend === 'down' ? '↘ ' : '- '}
                    {selectedTrend.percentage} {selectedTrend.description}
                  </span>
                </div>
              </div>
              <div className="bg-card border border-border p-4 rounded-lg flex items-center justify-center h-32 text-[12px] text-text-secondary">
                (Detailed Chart Visualization would render here)
              </div>
            </>
          )}

          {selectedRiskStudent && (
            <>
              <div className="flex justify-between items-start border-b border-border pb-4">
                <div>
                  <h3 className="text-[20px] font-bold text-text-primary mb-1">{selectedRiskStudent.studentName}</h3>
                  <p className="text-[13px] text-text-secondary font-mono">Class: {selectedRiskStudent.classSection}</p>
                </div>
                <div className={`px-2 py-1 rounded text-[11px] font-bold border ${selectedRiskStudent.riskLevel === 'High' ? 'bg-danger/10 text-danger border-danger/30' : 'bg-warning/10 text-warning border-warning/30'}`}>
                  {selectedRiskStudent.riskLevel} Risk
                </div>
              </div>
              
              <div className="bg-card border border-border p-4 rounded-lg">
                <p className="text-[11px] text-text-secondary font-bold mb-1 flex items-center gap-1.5"><AlertTriangle size={12}/> Primary Concern: {selectedRiskStudent.riskType}</p>
                <p className="text-[14px] text-text-primary">{selectedRiskStudent.reason}</p>
              </div>

              <div className="bg-success/5 border border-success/30 p-4 rounded-lg">
                <p className="text-[11px] text-success font-bold mb-1 flex items-center gap-1.5"><BookOpen size={12}/> Intervention History</p>
                <p className="text-[14px] text-success">{selectedRiskStudent.lastActionTaken}</p>
              </div>

              <div className="flex gap-2 mt-4">
                <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-coming-soon', { detail: 'This action is part of the next development phase.' })); }} className="flex-1 py-2 bg-primary/10 hover:bg-primary border border-primary/30 hover:border-primary text-primary hover:text-black font-bold text-[13px] rounded transition-colors">
                  Schedule Meeting
                </button>
                <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-coming-soon', { detail: 'This action is part of the next development phase.' })); }} className="flex-1 py-2 bg-info/10 hover:bg-info border border-info/30 hover:border-info text-info hover:text-black font-bold text-[13px] rounded transition-colors">
                  Send Warning Letter
                </button>
              </div>
            </>
          )}

        </div>

        <div className="px-5 py-4 border-t border-border bg-card flex justify-end shrink-0 gap-3">
          <button
            onClick={handleClose}
            className="px-6 py-2 rounded-md bg-page hover:bg-white/5 border border-border text-text-primary text-[13px] font-bold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
