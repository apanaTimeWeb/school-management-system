"use client";
import React, { useState } from 'react';
import { usePrincipalReportsStore } from '../reports_store/usePrincipalReportsStore';
import { fetchGeneratedReport } from '../reports_api/PrincipalReportsApi';
import { Filter, Play, Download, FileSpreadsheet, FileText, Loader2 } from 'lucide-react';
import clsx from 'clsx';

export default function PrincipalReportGenerator() {
  const { selectedReport, generatedData, setGeneratedData, setExportType, setIsExportModalOpen } = usePrincipalReportsStore();
  const [loading, setLoading] = useState(false);
  const [dateRange, setDateRange] = useState('Last 30 Days');

  if (!selectedReport) return null;

  const handleGenerate = async () => {
    setLoading(true);
    setGeneratedData(null);
    const data = await fetchGeneratedReport(selectedReport.category, dateRange);
    setGeneratedData(data);
    setLoading(false);
  };

  const handleExport = (type: 'PDF' | 'EXCEL') => {
    setExportType(type);
    setIsExportModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
        <h3 className="text-[16px] font-bold text-text-primary mb-4 flex items-center gap-2"><Filter size={18}/> Report Parameters</h3>
        <div className="flex flex-col sm:flex-row items-end gap-4">
           <div className="w-full sm:w-1/3">
             <label className="block text-[12px] font-bold text-text-secondary mb-1">Date Range</label>
             <select 
               className="w-full bg-input border border-border rounded-md px-3 py-2 text-[13px] text-text-primary focus:outline-none focus:border-primary"
               value={dateRange}
               onChange={(e) => setDateRange(e.target.value)}
             >
               <option>Today</option>
               <option>Last 7 Days</option>
               <option>Last 30 Days</option>
               <option>This Academic Year</option>
               <option>Custom Range</option>
             </select>
           </div>
           <div className="w-full sm:w-1/3">
             <label className="block text-[12px] font-bold text-text-secondary mb-1">Additional Filters</label>
             <select className="w-full bg-input border border-border rounded-md px-3 py-2 text-[13px] text-text-primary focus:outline-none focus:border-primary">
               <option>All Data</option>
               <option>Specific Class/Section</option>
               <option>Status: Pending/Defaulter</option>
             </select>
           </div>
           <button 
             onClick={handleGenerate}
             disabled={loading}
             className="w-full sm:w-auto px-6 py-2 bg-primary hover:bg-primary-hover text-black font-bold text-[13px] rounded-md transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
           >
             {loading ? <Loader2 size={16} className="animate-spin" /> : <Play size={16} />}
             {loading ? 'Generating...' : 'Generate Report'}
           </button>
        </div>
      </div>

      {generatedData && (
        <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden animate-in fade-in duration-500">
           <div className="p-5 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-page">
              <div>
                <h3 className="text-[18px] font-bold text-text-primary">{generatedData.title}</h3>
                <p className="text-[12px] text-text-secondary">Generated on: {generatedData.generatedAt}</p>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => handleExport('EXCEL')}
                  className="px-4 py-1.5 flex items-center gap-2 bg-[#107c41]/10 hover:bg-[#107c41]/20 text-[#107c41] border border-[#107c41]/30 rounded text-[13px] font-bold transition-colors"
                >
                  <FileSpreadsheet size={14}/> Excel
                </button>
                <button 
                  onClick={() => handleExport('PDF')}
                  className="px-4 py-1.5 flex items-center gap-2 bg-danger/10 hover:bg-danger/20 text-danger border border-danger/30 rounded text-[13px] font-bold transition-colors"
                >
                  <FileText size={14}/> PDF
                </button>
              </div>
           </div>
           
           <div className="overflow-x-auto">
             <table className="w-full text-left border-collapse min-w-[800px]">
               <thead>
                 <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
                   {generatedData.columns.map((col) => (
                     <th key={col.key} className="p-4">{col.label}</th>
                   ))}
                 </tr>
               </thead>
               <tbody>
                 {generatedData.data.map((row) => (
                   <tr key={row.id} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                     {generatedData.columns.map((col) => (
                       <td key={col.key} className="p-4 text-[13px] text-text-primary">
                         {col.key === 'col4' ? (
                            <span className={clsx("inline-block px-2 py-0.5 rounded text-[11px] font-bold", 
                              row[col.key] === 'Completed' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
                            )}>
                              {row[col.key]}
                            </span>
                         ) : row[col.key]}
                       </td>
                     ))}
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </div>
      )}
    </div>
  );
}
