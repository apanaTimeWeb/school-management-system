"use client";
import React from "react";
import { X, Printer, Camera } from "lucide-react";
import { useHRIDCardsStore } from "../hr_id_cards_store/useHRIDCardsStore";
import clsx from "clsx";

export default function HRIDCardsModals() {
  const { 
    isActionModalOpen, setActionModalOpen,
    selectedRecord
  } = useHRIDCardsStore();

  if (!selectedRecord || !isActionModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm fade-in">
      <div className="bg-card w-full max-w-sm rounded-2xl shadow-xl overflow-hidden flex flex-col scale-in">
        <div className="p-4 border-b border-border flex justify-between items-center bg-bg-input">
          <h3 className="text-lg font-black text-text-primary">ID Card Preview</h3>
          <button 
            onClick={() => setActionModalOpen(false)}
            className="p-2 text-text-secondary hover:text-danger hover:bg-danger/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 flex justify-center bg-bg-page">
          {/* Mock ID Card Design */}
          <div className="w-[250px] bg-white rounded-xl shadow-lg border border-border overflow-hidden relative">
            <div className="h-20 bg-indigo-600 flex flex-col items-center justify-center text-white relative">
              <h2 className="text-lg font-black tracking-wider leading-tight">GLOBAL ERP</h2>
              <p className="text-[10px] font-semibold opacity-80">INTERNATIONAL SCHOOL</p>
            </div>
            
            <div className="flex justify-center -mt-10">
              <div className="w-20 h-20 rounded-full bg-slate-200 border-4 border-white flex items-center justify-center overflow-hidden">
                 <Camera size={32} className="text-slate-400" />
              </div>
            </div>

            <div className="text-center p-4 space-y-1">
              <h3 className="text-lg font-black text-slate-800 leading-tight">{selectedRecord.name}</h3>
              <p className="text-xs font-bold text-indigo-600">{selectedRecord.role}</p>
              
              <div className="pt-3 pb-2 space-y-1.5 text-left ml-2">
                <div className="flex text-[10px]">
                  <span className="w-16 font-bold text-slate-500 uppercase">Emp ID:</span>
                  <span className="font-bold text-slate-800">{selectedRecord.employeeId}</span>
                </div>
                <div className="flex text-[10px]">
                  <span className="w-16 font-bold text-slate-500 uppercase">Blood Grp:</span>
                  <span className="font-bold text-rose-600">{selectedRecord.bloodGroup}</span>
                </div>
                <div className="flex text-[10px]">
                  <span className="w-16 font-bold text-slate-500 uppercase">Emergency:</span>
                  <span className="font-bold text-slate-800">{selectedRecord.emergencyContact}</span>
                </div>
                <div className="flex text-[10px]">
                  <span className="w-16 font-bold text-slate-500 uppercase">Valid Till:</span>
                  <span className="font-bold text-slate-800">{selectedRecord.validUntil}</span>
                </div>
              </div>
            </div>

            <div className="h-2 bg-indigo-600 w-full mt-2"></div>
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
            <Printer size={16} /> Print Card
          </button>
        </div>
      </div>
    </div>
  );
}
