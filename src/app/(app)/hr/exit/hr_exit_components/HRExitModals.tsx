"use client";
import React from "react";
import { X, CheckSquare, Settings } from "lucide-react";
import { useHRExitStore } from "../hr_exit_store/useHRExitStore";
import clsx from "clsx";

export default function HRExitModals() {
  const { 
    isActionModalOpen, setActionModalOpen,
    selectedRecord
  } = useHRExitStore();

  if (!selectedRecord || !isActionModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm fade-in">
      <div className="bg-card w-full max-w-lg rounded-2xl shadow-xl overflow-hidden flex flex-col scale-in">
        <div className="p-4 border-b border-border flex justify-between items-center bg-bg-input">
          <h3 className="text-lg font-black text-text-primary">Exit Process Workflow</h3>
          <button 
            onClick={() => setActionModalOpen(false)}
            className="p-2 text-text-secondary hover:text-danger hover:bg-danger/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 font-black text-lg shrink-0">
              {selectedRecord.name.charAt(0)}
            </div>
            <div>
              <h4 className="text-lg font-black text-text-primary">{selectedRecord.name}</h4>
              <p className="text-sm font-bold text-text-secondary">{selectedRecord.role} • {selectedRecord.department}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-bg-page border border-border rounded-xl">
              <span className="text-[10px] font-bold text-text-secondary uppercase">Resignation Date</span>
              <p className="text-sm font-bold text-text-primary mt-0.5">{selectedRecord.resignationDate}</p>
            </div>
            <div className="p-3 bg-bg-page border border-border rounded-xl">
              <span className="text-[10px] font-bold text-text-secondary uppercase">Last Working Day</span>
              <p className="text-sm font-bold text-text-primary mt-0.5">{selectedRecord.lastWorkingDay}</p>
            </div>
            <div className="p-3 bg-bg-page border border-border rounded-xl col-span-2">
              <span className="text-[10px] font-bold text-text-secondary uppercase">Reason for Exit</span>
              <p className="text-sm font-semibold text-text-primary mt-0.5">{selectedRecord.reason}</p>
            </div>
          </div>

          <div className="border border-border rounded-xl overflow-hidden">
            <div className="bg-bg-input px-4 py-2 border-b border-border">
              <span className="text-[11px] font-bold text-text-secondary uppercase">Clearance Checklist</span>
            </div>
            <div className="divide-y divide-border">
              <div className="flex items-center justify-between p-3 bg-card hover:bg-bg-page transition-colors cursor-pointer">
                <span className="text-sm font-bold text-text-primary">IT Asset Recovery</span>
                <CheckSquare size={18} className="text-border" />
              </div>
              <div className="flex items-center justify-between p-3 bg-card hover:bg-bg-page transition-colors cursor-pointer">
                <span className="text-sm font-bold text-text-primary">ID Card & Keys Submission</span>
                <CheckSquare size={18} className="text-border" />
              </div>
              <div className="flex items-center justify-between p-3 bg-card hover:bg-bg-page transition-colors cursor-pointer">
                <span className="text-sm font-bold text-text-primary">Knowledge Transfer Sign-off</span>
                <CheckSquare size={18} className="text-border" />
              </div>
              <div className="flex items-center justify-between p-3 bg-card hover:bg-bg-page transition-colors cursor-pointer">
                <span className="text-sm font-bold text-text-primary">Final Full & Final Settlement (F&F)</span>
                <CheckSquare size={18} className="text-border" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-border flex justify-between bg-bg-input">
          <button 
            onClick={() => setActionModalOpen(false)}
            className="px-4 py-2 font-bold text-sm text-text-secondary bg-bg-page border border-border rounded-lg hover:bg-border transition-colors"
          >
            Close
          </button>
          
          <button 
            onClick={() => setActionModalOpen(false)}
            className="px-4 py-2 font-bold text-sm text-white bg-rose-600 rounded-lg hover:bg-rose-700 transition-colors shadow-md flex items-center gap-2"
          >
            <Settings size={16} /> Update Status
          </button>
        </div>
      </div>
    </div>
  );
}
