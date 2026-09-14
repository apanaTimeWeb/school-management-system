"use client";
import React from "react";
import { X, Save, Package } from "lucide-react";
import { useHROfficeAdminStore } from "../hr_office_admin_store/useHROfficeAdminStore";
import clsx from "clsx";

export default function HROfficeAdminModals() {
  const { 
    isActionModalOpen, setActionModalOpen,
    selectedRecord
  } = useHROfficeAdminStore();

  if (!selectedRecord || !isActionModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm fade-in">
      <div className="bg-card w-full max-w-lg rounded-2xl shadow-xl overflow-hidden flex flex-col scale-in">
        <div className="p-4 border-b border-border flex justify-between items-center bg-bg-input">
          <h3 className="text-lg font-black text-text-primary">Update Request</h3>
          <button 
            onClick={() => setActionModalOpen(false)}
            className="p-2 text-text-secondary hover:text-danger hover:bg-danger/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-orange-100 border border-orange-200 mt-1 shrink-0">
              <Package size={24} className="text-orange-600" />
            </div>
            <div>
              <h4 className="text-lg font-black text-text-primary">{selectedRecord.item}</h4>
              <p className="text-sm font-bold text-text-secondary">{selectedRecord.category} • {selectedRecord.id}</p>
              <div className="mt-2 flex gap-2">
                <span className="px-2 py-1 bg-bg-page border border-border rounded text-[10px] font-bold text-text-secondary uppercase">
                  Req by: {selectedRecord.requestedBy}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Update Status</label>
              <select 
                className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-bold outline-none focus:border-orange-500"
                defaultValue={selectedRecord.status}
              >
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Procured">Procured</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Change Priority</label>
              <select 
                className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-bold outline-none focus:border-orange-500"
                defaultValue={selectedRecord.priority}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Admin Remarks</label>
            <textarea 
              className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-semibold outline-none focus:border-orange-500 min-h-[80px]" 
              placeholder="Add notes about procurement, delays, or reason for rejection..."
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
            className="px-4 py-2 font-bold text-sm text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors shadow-md flex items-center gap-2"
          >
            <Save size={16} /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
