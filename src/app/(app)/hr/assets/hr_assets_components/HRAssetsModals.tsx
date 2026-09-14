"use client";
import React from "react";
import { X, Save, Monitor } from "lucide-react";
import { useHRAssetsStore } from "../hr_assets_store/useHRAssetsStore";
import clsx from "clsx";

export default function HRAssetsModals() {
  const { 
    isActionModalOpen, setActionModalOpen,
    selectedRecord
  } = useHRAssetsStore();

  if (!selectedRecord || !isActionModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm fade-in">
      <div className="bg-card w-full max-w-lg rounded-2xl shadow-xl overflow-hidden flex flex-col scale-in">
        <div className="p-4 border-b border-border flex justify-between items-center bg-bg-input">
          <h3 className="text-lg font-black text-text-primary">Update Asset Status</h3>
          <button 
            onClick={() => setActionModalOpen(false)}
            className="p-2 text-text-secondary hover:text-danger hover:bg-danger/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-indigo-100 border border-indigo-200 mt-1 shrink-0">
              <Monitor size={24} className="text-indigo-600" />
            </div>
            <div>
              <h4 className="text-lg font-black text-text-primary">{selectedRecord.assetName}</h4>
              <p className="text-sm font-bold text-text-secondary">{selectedRecord.assetType} • {selectedRecord.id}</p>
              <div className="mt-2 flex gap-2">
                <span className="px-2 py-1 bg-bg-page border border-border rounded text-[10px] font-bold text-text-secondary uppercase">
                  Assigned to: {selectedRecord.assignedTo}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Update Status</label>
              <select 
                className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-bold outline-none focus:border-indigo-500"
                defaultValue={selectedRecord.status}
              >
                <option value="Assigned">Assigned</option>
                <option value="Returned">Returned</option>
                <option value="In Repair">In Repair</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Asset Condition</label>
              <select 
                className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-bold outline-none focus:border-indigo-500"
                defaultValue={selectedRecord.condition}
              >
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Poor">Poor (Needs Repair)</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Remarks / Notes</label>
            <textarea 
              className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-semibold outline-none focus:border-indigo-500 min-h-[80px]" 
              placeholder="Add details about repair, return, or maintenance..."
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
            <Save size={16} /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
