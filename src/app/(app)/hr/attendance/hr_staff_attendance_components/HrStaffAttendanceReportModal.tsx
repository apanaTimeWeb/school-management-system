"use client";

import { Download, FileText, X } from "lucide-react";

interface HrStaffAttendanceReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  date: string;
  month: number;
  year: number;
  activeTab: 'Daily' | 'Monthly';
}

export default function HrStaffAttendanceReportModal({ isOpen, onClose, date, month, year, activeTab }: HrStaffAttendanceReportModalProps) {
  if (!isOpen) return null;

  const handleDownload = (format: 'PDF' | 'CSV' | 'Excel') => {
    alert(`Mock Download: ${format} Report generated for ${activeTab} attendance.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div className="bg-card border border-border rounded-xl w-full max-w-md shadow-2xl overflow-hidden motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95">
        
        <div className="flex items-center justify-between p-5 border-b border-border bg-input/30">
          <h3 className="text-lg font-bold flex items-center gap-2 text-foreground">
            <Download size={20} className="text-primary"/> Download Report
          </h3>
          <button onClick={onClose} className="p-1 hover:bg-input rounded-full text-muted-foreground transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6 bg-primary/10 border border-primary/20 p-4 rounded-md">
            <h4 className="text-sm font-bold text-foreground mb-1">Report Details</h4>
            <p className="text-xs text-muted-foreground">Type: {activeTab} Attendance</p>
            {activeTab === 'Daily' ? (
               <p className="text-xs text-muted-foreground">Date: {date}</p>
            ) : (
               <p className="text-xs text-muted-foreground">Month: {month}/{year}</p>
            )}
          </div>

          <p className="text-sm text-foreground font-semibold mb-4">Select Format:</p>

          <div className="grid grid-cols-1 gap-3">
            <button onClick={() => handleDownload('PDF')} className="flex items-center gap-3 w-full p-3 bg-input border border-border rounded-md hover:border-primary transition-all active:scale-95 group text-left">
               <div className="w-8 h-8 rounded-full bg-danger/10 flex items-center justify-center text-danger group-hover:scale-110 transition-transform">
                  <FileText size={16} />
               </div>
               <div>
                  <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">PDF Document</div>
                  <div className="text-xs text-muted-foreground">Best for printing and sharing</div>
               </div>
            </button>

            <button onClick={() => handleDownload('Excel')} className="flex items-center gap-3 w-full p-3 bg-input border border-border rounded-md hover:border-primary transition-all active:scale-95 group text-left">
               <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center text-success group-hover:scale-110 transition-transform">
                  <FileText size={16} />
               </div>
               <div>
                  <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Excel Spreadsheet</div>
                  <div className="text-xs text-muted-foreground">Best for data analysis</div>
               </div>
            </button>

            <button onClick={() => handleDownload('CSV')} className="flex items-center gap-3 w-full p-3 bg-input border border-border rounded-md hover:border-primary transition-all active:scale-95 group text-left">
               <div className="w-8 h-8 rounded-full bg-warning/10 flex items-center justify-center text-warning group-hover:scale-110 transition-transform">
                  <FileText size={16} />
               </div>
               <div>
                  <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">CSV File</div>
                  <div className="text-xs text-muted-foreground">Raw data format</div>
               </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

