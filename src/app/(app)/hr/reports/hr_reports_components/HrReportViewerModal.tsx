"use client";

import { X, Play, Download, Printer, Loader2, BarChart2 } from "lucide-react";
import type { ReportDefinition, ReportFilterState, GeneratedReportRow } from "../hr_reports_types/HrReportsTypes";

interface HrReportViewerModalProps {
  report: ReportDefinition | null;
  isOpen: boolean;
  close: () => void;
  
  filters: ReportFilterState;
  setFilters: React.Dispatch<React.SetStateAction<ReportFilterState>>;
  
  isGenerating: boolean;
  reportData: GeneratedReportRow[] | null;
  reportColumns: string[];
  handleGenerate: () => void;
}

export default function HrReportViewerModal({ 
  report, isOpen, close, filters, setFilters, isGenerating, reportData, reportColumns, handleGenerate 
}: HrReportViewerModalProps) {
  
  if (!isOpen || !report) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div className="bg-card border border-border rounded-xl w-full max-w-6xl shadow-2xl overflow-hidden motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 flex flex-col h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-overlay flex-shrink-0">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{report.title}</h2>
            <p className="text-sm font-medium text-muted-foreground mt-1">{report.description}</p>
          </div>
          <div className="flex items-center gap-3">
             {reportData && (
               <>
                 <button className="p-2 bg-input hover:bg-border rounded-md text-foreground transition-colors flex items-center gap-2 text-sm font-bold border border-border">
                   <Download size={16}/> Excel
                 </button>
                 <button className="p-2 bg-input hover:bg-border rounded-md text-foreground transition-colors flex items-center gap-2 text-sm font-bold border border-border">
                   <Printer size={16}/> Print
                 </button>
               </>
             )}
            <button onClick={close} className="p-2 hover:bg-input rounded-full text-muted-foreground transition-colors ml-2">
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden flex flex-col">
          
          {/* Filters Bar */}
          <div className="p-4 bg-input/30 border-b border-border flex flex-wrap gap-4 items-end flex-shrink-0">
            <div>
              <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">From Date</label>
              <input type="date" value={filters.fromDate} onChange={e => setFilters(p => ({...p, fromDate: e.target.value}))} className="px-3 py-1.5 bg-card border border-border rounded-md text-sm font-bold outline-none focus:border-primary" />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">To Date</label>
              <input type="date" value={filters.toDate} onChange={e => setFilters(p => ({...p, toDate: e.target.value}))} className="px-3 py-1.5 bg-card border border-border rounded-md text-sm font-bold outline-none focus:border-primary" />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">Department</label>
              <select value={filters.department} onChange={e => setFilters(p => ({...p, department: e.target.value}))} className="px-3 py-1.5 bg-card border border-border rounded-md text-sm font-bold outline-none focus:border-primary min-w-[150px]">
                <option value="All">All Departments</option>
                <option value="Science">Science</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">Status</label>
              <select value={filters.status} onChange={e => setFilters(p => ({...p, status: e.target.value}))} className="px-3 py-1.5 bg-card border border-border rounded-md text-sm font-bold outline-none focus:border-primary min-w-[150px]">
                <option value="All">All Statuses</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <button onClick={handleGenerate} disabled={isGenerating} className="px-6 py-1.5 bg-primary text-card font-bold text-sm rounded-md hover:bg-yellow-500 shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center gap-2 disabled:opacity-50 h-[34px]">
              {isGenerating ? <Loader2 size={16} className="animate-spin"/> : <Play size={16}/>} 
              {isGenerating ? 'Generating...' : 'Run Report'}
            </button>
          </div>

          {/* Table Area */}
          <div className="flex-1 overflow-auto bg-card relative">
            {!reportData && !isGenerating && (
               <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                 <div className="w-16 h-16 rounded-full bg-input/50 flex items-center justify-center text-muted-foreground mb-4">
                   <BarChart2 size={32}/>
                 </div>
                 <h3 className="text-lg font-bold text-foreground">Ready to Generate</h3>
                 <p className="text-sm text-muted-foreground mt-1 max-w-sm">Adjust the filters above and click "Run Report" to fetch the data from the server.</p>
               </div>
            )}

            {isGenerating && (
               <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-card/80 backdrop-blur-sm z-10">
                 <Loader2 size={40} className="animate-spin text-primary mb-4"/>
                 <h3 className="text-sm font-bold text-foreground">Compiling Data...</h3>
               </div>
            )}

            {reportData && !isGenerating && (
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead className="sticky top-0 bg-input/90 backdrop-blur-sm shadow-sm z-10">
                  <tr>
                    {reportColumns.map((col, idx) => (
                      <th key={idx} className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider border-b border-border">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {reportData.map((row) => (
                    <tr key={row.id} className="border-b border-border hover:bg-primary/5 transition-colors">
                      <td className="p-4 text-sm font-bold text-foreground">{row.col1}</td>
                      <td className="p-4 text-sm font-medium text-foreground">{row.col2}</td>
                      <td className="p-4 text-sm text-muted-foreground">{row.col3}</td>
                      <td className="p-4 text-sm text-muted-foreground">{row.col4}</td>
                      <td className="p-4">
                        <span className="text-[10px] font-bold bg-input px-2 py-1 rounded-md text-foreground">{row.col5}</span>
                      </td>
                    </tr>
                  ))}
                  {reportData.length === 0 && (
                    <tr>
                      <td colSpan={reportColumns.length} className="p-8 text-center text-sm font-bold text-muted-foreground">No records found for the selected filters.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

