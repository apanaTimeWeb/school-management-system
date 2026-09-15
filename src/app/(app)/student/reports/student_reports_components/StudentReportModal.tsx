"use client";

import React from 'react';
import type { ReportConfig } from '../student_reports_types/student_reports_types';
import { X, FileText, Download } from 'lucide-react';

interface Props {
  report: ReportConfig;
  onClose: () => void;
}

export default function StudentReportModal({ report, onClose }: Props) {
  
  const handleDownload = () => {
    alert(`Downloading ${report.type} as PDF... (Mock Action)`);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:animate-[fadeIn_0.2s_ease-out]">
      <div className="bg-card w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden motion-safe:animate-[slideIn_0.2s_ease-out]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-border bg-page/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <FileText size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-text-primary leading-tight">{report.type}</h2>
              <span className="text-xs font-semibold text-text-secondary">Preview Mode - Last Updated: {report.lastUpdated}</span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-border text-text-secondary hover:text-text-primary transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mock Report Content */}
        <div className="p-4 md:p-8 overflow-y-auto custom-scrollbar flex-1 bg-gray-50 flex flex-col items-center">
          
          {/* A mock "paper" sheet */}
          <div className="w-full max-w-2xl bg-white shadow-md border border-gray-200 p-8 min-h-[500px]">
             
             {/* Header */}
             <div className="text-center border-b-2 border-gray-800 pb-4 mb-6">
               <h1 className="text-xl font-black text-gray-900 uppercase tracking-widest">Smart Gym 360 International School</h1>
               <h2 className="text-sm font-bold text-gray-600 mt-1 uppercase">{report.type}</h2>
             </div>

             {/* Mock Data */}
             <div className="space-y-4 text-sm text-gray-700">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-bold">Student Name:</span>
                  <span>Rahul Sharma</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-bold">Admission Number:</span>
                  <span>ADM-998877</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-bold">Class & Section:</span>
                  <span>Class X - A</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-bold">Report Generated:</span>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
             </div>

             <div className="mt-8 p-6 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-center text-gray-500 bg-gray-50">
                <FileText size={48} className="mb-4 opacity-50" />
                <p className="font-bold">Detailed Analytics View</p>
                <p className="text-xs mt-2">In a production environment, this space would render the specific charts, tables, and analytical data for the <strong>{report.type}</strong>.</p>
             </div>

          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border bg-page/50 flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-5 py-2 rounded-lg font-bold text-sm text-text-secondary hover:bg-border transition-colors"
          >
            Close Preview
          </button>
          <button 
            onClick={handleDownload}
            className="px-5 py-2 rounded-lg font-bold text-sm bg-primary text-white hover:bg-primary-hover shadow-sm transition-colors flex items-center gap-2"
          >
            <Download size={16} /> Download Full PDF
          </button>
        </div>

      </div>
    </div>
  );
}
