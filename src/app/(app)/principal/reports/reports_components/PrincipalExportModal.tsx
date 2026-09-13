"use client";
import React, { useEffect, useState } from 'react';
import { CheckCircle, FileSpreadsheet, FileText, Loader2 } from 'lucide-react';
import { usePrincipalReportsStore } from '../reports_store/usePrincipalReportsStore';
import { exportReportFile } from '../reports_api/PrincipalReportsApi';

export default function PrincipalExportModal() {
  const { isExportModalOpen, setIsExportModalOpen, exportType } = usePrincipalReportsStore();
  const [status, setStatus] = useState<'processing' | 'done'>('processing');

  useEffect(() => {
    if (isExportModalOpen) {
      setStatus('processing');
      exportReportFile(exportType).then(() => {
        setStatus('done');
      });
    }
  }, [isExportModalOpen, exportType]);

  if (!isExportModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-sm bg-bg-main border border-border rounded-xl shadow-2xl p-6 flex flex-col items-center text-center animate-in zoom-in-95 duration-200">
        
        {status === 'processing' ? (
          <>
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${exportType === 'EXCEL' ? 'bg-[#107c41]/10 text-[#107c41]' : 'bg-danger/10 text-danger'}`}>
              <Loader2 size={32} className="animate-spin" />
            </div>
            <h3 className="text-[18px] font-bold text-text-primary mb-2">Exporting Report</h3>
            <p className="text-[13px] text-text-secondary mb-6">
              Please wait while we generate your {exportType} file...
            </p>
            <div className="w-full h-2 bg-input rounded-full overflow-hidden">
               <div className="h-full bg-primary animate-pulse w-full"></div>
            </div>
          </>
        ) : (
          <>
            <div className="w-16 h-16 rounded-full bg-success/10 text-success flex items-center justify-center mb-4">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-[18px] font-bold text-text-primary mb-2">Export Complete!</h3>
            <p className="text-[13px] text-text-secondary mb-6">
              Your {exportType} file has been generated and downloaded successfully.
            </p>
            <button 
              onClick={() => setIsExportModalOpen(false)}
              className="w-full px-6 py-2 bg-page hover:bg-white/5 border border-border rounded-md text-text-primary font-bold text-[13px] transition-colors"
            >
              Close
            </button>
          </>
        )}

      </div>
    </div>
  );
}
