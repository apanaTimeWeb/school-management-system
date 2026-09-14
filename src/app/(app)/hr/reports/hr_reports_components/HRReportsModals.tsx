"use client";
import React from "react";
import { X, DownloadCloud, FileText } from "lucide-react";
import { useHRReportsStore } from "../hr_reports_store/useHRReportsStore";

export default function HRReportsModals() {
  const { 
    isActionModalOpen, setActionModalOpen,
    selectedRecord
  } = useHRReportsStore();

  if (!selectedRecord || !isActionModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm fade-in">
      <div className="bg-card w-full max-w-sm rounded-2xl shadow-xl overflow-hidden flex flex-col scale-in">
        <div className="p-4 border-b border-border flex justify-between items-center bg-bg-input">
          <h3 className="text-lg font-black text-text-primary">Download Report</h3>
          <button 
            onClick={() => setActionModalOpen(false)}
            className="p-2 text-text-secondary hover:text-danger hover:bg-danger/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-8 flex flex-col items-center text-center space-y-4">
           <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
             <FileText size={32} />
           </div>
           
           <div>
             <h4 className="text-lg font-black text-text-primary">{selectedRecord.reportName}</h4>
             <p className="text-sm font-semibold text-text-secondary mt-1">Generated on {selectedRecord.date}</p>
             <p className="text-xs font-bold text-purple-600 mt-2">Format: {selectedRecord.format}</p>
           </div>
        </div>

        <div className="p-4 border-t border-border flex justify-between bg-bg-input">
          <button 
            onClick={() => setActionModalOpen(false)}
            className="px-4 py-2 font-bold text-sm text-text-secondary bg-bg-page border border-border rounded-lg hover:bg-border transition-colors w-full mr-2"
          >
            Cancel
          </button>
          
          <button 
            onClick={() => setActionModalOpen(false)}
            className="px-4 py-2 font-bold text-sm text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors shadow-md flex items-center justify-center gap-2 w-full ml-2"
          >
            <DownloadCloud size={16} /> Download
          </button>
        </div>
      </div>
    </div>
  );
}
