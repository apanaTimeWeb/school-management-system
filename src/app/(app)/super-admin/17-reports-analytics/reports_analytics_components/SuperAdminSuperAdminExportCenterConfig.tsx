"use client";

import { useState } from "react";
import { DownloadCloud, FileText, FileSpreadsheet, FileArchive, Trash2, Calendar, User, Clock, AlertTriangle } from "lucide-react";

export default function SuperAdminSuperAdminExportCenterConfig() {
  
  const [exports, setExports] = useState([
    { id: 1, type: 'CSV', name: 'All_Active_Students_2024.csv', exportedBy: 'Super Admin', module: 'Student Management', size: '2.4 MB', date: 'Today, 10:30 AM', expires: 'In 2 days' },
    { id: 2, type: 'PDF', name: 'Annual_Fee_Collection_Report.pdf', exportedBy: 'Finance Head', module: 'Fee Management', size: '1.1 MB', date: 'Yesterday, 04:15 PM', expires: 'In 1 day' },
    { id: 3, type: 'Excel', name: 'Staff_Attendance_August.xlsx', exportedBy: 'HR Admin', module: 'HR & Payroll', size: '450 KB', date: '01 Sep 2024, 09:00 AM', expires: 'Expired' },
    { id: 4, type: 'ZIP', name: 'System_Audit_Logs_Q3.zip', exportedBy: 'System Admin', module: 'Audit & Security', size: '12.8 MB', date: '15 Aug 2024, 11:00 PM', expires: 'Expired' },
  ]);

  const deleteExport = (id: number) => {
    setExports(exports.filter(exp => exp.id !== id));
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'CSV': return <FileText size={20} className="text-info" />;
      case 'Excel': return <FileSpreadsheet size={20} className="text-success" />;
      case 'ZIP': return <FileArchive size={20} className="text-warning" />;
      default: return <FileText size={20} className="text-danger" />; // PDF
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-sm flex flex-col">
      
      <div className="p-3 bg-info-bg border-b border-info/30 text-info text-sm font-bold flex justify-between items-center">
        <div className="flex items-center gap-2">
          <DownloadCloud size={16} /> Super Admin Export Center (Centralized Hub)
        </div>
        <span className="text-xs bg-white/50 px-2 py-0.5 rounded text-info border border-info/20">Retention Policy: 7 Days</span>
      </div>

      <div className="p-6">
        
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-bold text-text-primary uppercase">Recent Exports & Downloads</h3>
          <button className="flex items-center gap-2 text-xs font-bold text-danger hover:bg-danger-bg hover:border-danger/30 px-3 py-1.5 border border-border rounded-md transition-colors">
            <Trash2 size={14} /> Clear All Expired
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {exports.map((exp) => (
            <div key={exp.id} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border border-border rounded-lg bg-bg-page hover:border-primary transition-colors group">
              
              <div className="flex items-start gap-4">
                <div className={`p-2.5 rounded-lg border bg-card ${
                  exp.type === 'CSV' ? 'border-info/30' : exp.type === 'Excel' ? 'border-success/30' : exp.type === 'ZIP' ? 'border-warning/30' : 'border-danger/30'
                }`}>
                  {getFileIcon(exp.type)}
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-bold text-text-primary flex items-center gap-2">
                    {exp.name}
                    {exp.expires === 'Expired' && <span className="text-[9px] bg-danger-bg text-danger px-1.5 py-0.5 rounded border border-danger/20">EXPIRED</span>}
                  </h4>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-secondary mt-1">
                    <span className="flex items-center gap-1"><User size={12} /> {exp.exportedBy}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} /> {exp.module}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {exp.date}</span>
                    <span className="font-mono bg-border/50 px-1.5 rounded">{exp.size}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 md:ml-auto border-t md:border-none border-border pt-3 md:pt-0 mt-2 md:mt-0">
                {exp.expires !== 'Expired' ? (
                  <div className="flex flex-col items-end mr-2">
                    <button className="text-xs font-bold bg-primary text-white px-4 py-1.5 rounded hover:bg-primary-hover shadow-sm transition-colors flex items-center gap-1.5">
                      <DownloadCloud size={14} /> Download File
                    </button>
                    <span className="text-[10px] text-text-secondary mt-1 flex items-center gap-1"><AlertTriangle size={10} className="text-warning"/> {exp.expires}</span>
                  </div>
                ) : (
                  <span className="text-xs font-bold text-text-secondary mr-4">File deleted from server</span>
                )}
                
                <button 
                  onClick={() => deleteExport(exp.id)}
                  className="p-2 text-text-secondary hover:text-danger hover:bg-danger-bg rounded-md transition-colors border border-transparent hover:border-danger/30"
                  title="Delete Record"
                >
                  <Trash2 size={16} />
                </button>
              </div>

            </div>
          ))}

          {exports.length === 0 && (
            <div className="p-8 text-center text-text-secondary border border-dashed border-border rounded-lg bg-bg-page flex flex-col items-center justify-center gap-2">
              <DownloadCloud size={32} className="opacity-30" />
              <p className="text-sm font-bold">No active exports</p>
              <p className="text-xs">Generated reports and data exports will appear here.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
