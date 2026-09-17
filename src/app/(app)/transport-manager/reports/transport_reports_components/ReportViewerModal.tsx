"use client";

import React, { useState, useEffect } from 'react';
import { X, Loader2, Download, Printer, Filter, ChevronDown, BarChart3, Search } from 'lucide-react';
import type { ReportDefinition } from '../transport_reports_types/transport_reports.types';
import { REPORT_CATEGORIES } from '../transport_reports_constants/transport_reports.constants';

// RESPONSIBILITY: Renders the report generation UI and mock data view

interface ReportViewerModalProps {
  report: ReportDefinition | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ReportViewerModal({ report, isOpen, onClose }: ReportViewerModalProps) {
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [reportData, setReportData] = useState<any>(null);

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setReportData(null);
      setIsGenerating(false);
    }
  }, [isOpen, report]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !report) return null;

  const categoryDef = REPORT_CATEGORIES.find(c => c.id === report.categoryId);
  const themeColor = categoryDef ? categoryDef.color : 'var(--primary)';

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate API delay for report generation
    setTimeout(() => {
      setReportData({ generatedAt: new Date().toISOString() });
      setIsGenerating(false);
    }, 1200);
  };

  const renderMockData = () => {
    if (!reportData) return null;
    
    // Generic mock table to represent a generated report
    return (
      <div className="w-full h-full flex flex-col animate-in fade-in duration-300">
        <div className="flex items-center justify-between p-4 border-b border-[var(--border)] bg-[var(--bg-card)]">
           <div>
             <h3 className="text-base font-bold text-[var(--text-primary)]">{report.name} Data</h3>
             <p className="text-[10px] text-[var(--text-secondary)]">Generated on {new Date(reportData.generatedAt).toLocaleString()}</p>
           </div>
           <div className="flex gap-2">
             <div className="relative">
               <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
               <input type="text" placeholder="Search in report..." className="bg-[var(--bg-input)] border border-[var(--border)] rounded text-xs pl-8 pr-3 py-1.5 focus:outline-none focus:border-[var(--primary)]" />
             </div>
             <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded border border-[var(--border)] hover:bg-[var(--bg-input)] transition-colors">
               <Filter size={14} /> Filter Data
             </button>
           </div>
        </div>
        
        <div className="flex-1 overflow-auto p-4 bg-[var(--bg-page)]">
           {/* Mock Table Structure */}
           <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg overflow-hidden">
             <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="bg-[rgba(250,204,21,0.05)] border-b border-[var(--border)]">
                   {['ID', 'Reference Name', 'Category / Type', 'Date / Timestamp', 'Metric Value', 'Status'].map(h => (
                     <th key={h} className="py-2.5 px-4 text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-wider">{h}</th>
                   ))}
                 </tr>
               </thead>
               <tbody>
                 {[1,2,3,4,5,6,7,8].map((row) => (
                   <tr key={row} className="border-b border-[var(--border)] hover:bg-[var(--bg-input)] transition-colors">
                     <td className="py-2.5 px-4 text-xs font-mono text-[var(--text-secondary)]">REF-0{row}9{row}</td>
                     <td className="py-2.5 px-4 text-xs font-bold text-[var(--text-primary)]">Mock Data Entry {row}</td>
                     <td className="py-2.5 px-4 text-xs text-[var(--text-secondary)]">{report.categoryId.replace('_', ' ')}</td>
                     <td className="py-2.5 px-4 text-xs text-[var(--text-secondary)]">2023-10-{10+row}</td>
                     <td className="py-2.5 px-4 text-xs font-bold text-[var(--text-primary)]">{(Math.random() * 1000).toFixed(0)} Units</td>
                     <td className="py-2.5 px-4">
                       <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border border-emerald-500/30 text-emerald-500 bg-emerald-500/10">Active</span>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
           
           {/* Visual Chart Placeholder */}
           <div className="mt-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-6 flex flex-col items-center justify-center h-48 opacity-50">
             <BarChart3 size={32} className="text-[var(--text-secondary)] mb-2" />
             <span className="text-xs text-[var(--text-secondary)]">Data Visualization Rendered Here</span>
           </div>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div 
        className="relative w-full max-w-5xl bg-[var(--bg-overlay)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col max-h-[90vh] h-[800px] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[var(--border)] bg-[var(--bg-card)] shrink-0">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-lg flex items-center justify-center border" style={{ backgroundColor: `${themeColor}20`, borderColor: `${themeColor}40`, color: themeColor }}>
                <BarChart3 size={20} />
             </div>
             <div>
                <h2 className="text-lg font-bold text-[var(--text-primary)] leading-tight">{report.name}</h2>
                <span className="text-[10px] uppercase font-bold tracking-wider" style={{ color: themeColor }}>{categoryDef?.title}</span>
             </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-input)] rounded-md transition-colors" title="Print Report" disabled={!reportData}>
              <Printer size={18} />
            </button>
            <div className="relative group/export">
               <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--bg-input)] border border-[var(--border)] text-[var(--text-primary)] text-xs font-semibold rounded-md hover:border-[var(--primary)] transition-colors disabled:opacity-50" disabled={!reportData}>
                 <Download size={14} /> Export <ChevronDown size={14} />
               </button>
               {/* Hidden Dropdown */}
               <div className="absolute right-0 top-full mt-1 w-32 bg-[var(--bg-card)] border border-[var(--border)] rounded-md shadow-lg opacity-0 pointer-events-none group-hover/export:opacity-100 group-hover/export:pointer-events-auto transition-opacity z-10 flex flex-col p-1">
                 <button className="text-left px-3 py-1.5 text-xs hover:bg-[var(--bg-input)] rounded">Download PDF</button>
                 <button className="text-left px-3 py-1.5 text-xs hover:bg-[var(--bg-input)] rounded">Download CSV</button>
                 <button className="text-left px-3 py-1.5 text-xs hover:bg-[var(--bg-input)] rounded">Download Excel</button>
               </div>
            </div>
            <div className="w-px h-5 bg-[var(--border)] mx-1"></div>
            <button 
              onClick={onClose}
              className="p-1.5 text-[var(--text-secondary)] hover:text-red-500 hover:bg-[rgba(239,68,68,0.1)] rounded-md transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-[var(--bg-page)]">
           
           {/* Parameters Sidebar */}
           <div className="w-full md:w-64 bg-[var(--bg-card)] border-r border-b md:border-b-0 border-[var(--border)] flex flex-col shrink-0">
             <div className="p-4 border-b border-[var(--border)]">
               <h3 className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-3">Report Parameters</h3>
               
               <div className="space-y-4">
                 <div className="flex flex-col gap-1.5">
                   <label className="text-xs font-semibold text-[var(--text-primary)]">Date Range</label>
                   <select className="bg-[var(--bg-input)] border border-[var(--border)] text-xs rounded p-2 focus:outline-none focus:border-[var(--primary)]">
                     <option>This Month</option>
                     <option>Last Month</option>
                     <option>This Term / Quarter</option>
                     <option>Current Academic Year</option>
                     <option>Custom Range...</option>
                   </select>
                 </div>
                 
                 <div className="flex flex-col gap-1.5">
                   <label className="text-xs font-semibold text-[var(--text-primary)]">Specific Route (Optional)</label>
                   <select className="bg-[var(--bg-input)] border border-[var(--border)] text-xs rounded p-2 focus:outline-none focus:border-[var(--primary)]">
                     <option>All Routes</option>
                     <option>Route R-01</option>
                     <option>Route R-02</option>
                   </select>
                 </div>

                 <div className="flex flex-col gap-1.5">
                   <label className="text-xs font-semibold text-[var(--text-primary)]">Specific Vehicle (Optional)</label>
                   <select className="bg-[var(--bg-input)] border border-[var(--border)] text-xs rounded p-2 focus:outline-none focus:border-[var(--primary)]">
                     <option>All Vehicles</option>
                     <option>VEH-001</option>
                     <option>VEH-002</option>
                   </select>
                 </div>
               </div>
             </div>
             
             <div className="p-4 mt-auto">
               <button 
                 onClick={handleGenerate}
                 disabled={isGenerating}
                 className="w-full flex items-center justify-center gap-2 py-2 bg-[var(--primary)] text-white text-sm font-bold rounded-lg hover:bg-[var(--primary-hover)] transition-colors shadow-[var(--primary-subtle)] shadow-lg disabled:opacity-50"
                 style={{ backgroundColor: themeColor, boxShadow: `0 4px 14px 0 ${themeColor}40` }}
               >
                 {isGenerating ? <><Loader2 size={16} className="animate-spin" /> Compiling...</> : 'Generate Report'}
               </button>
             </div>
           </div>

           {/* Data View Area */}
           <div className="flex-1 overflow-hidden flex flex-col relative bg-[var(--bg-page)]">
             {!reportData && !isGenerating ? (
               <div className="flex-1 flex flex-col items-center justify-center p-8 text-center animate-in fade-in">
                 <div className="w-20 h-20 rounded-full border-2 border-dashed border-[var(--border)] flex items-center justify-center mb-4">
                    <Filter size={32} className="text-[var(--text-secondary)] opacity-30" />
                 </div>
                 <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">Ready to Generate</h3>
                 <p className="text-sm text-[var(--text-secondary)] max-w-sm">
                   Set your desired parameters in the sidebar and click generate to compile the <span className="font-bold text-[var(--text-primary)]">"{report.name}"</span> data.
                 </p>
               </div>
             ) : isGenerating ? (
               <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                 <Loader2 size={48} className="animate-spin text-[var(--primary)] mb-4" style={{ color: themeColor }} />
                 <h3 className="text-base font-bold text-[var(--text-primary)]">Compiling Report Data...</h3>
                 <p className="text-xs text-[var(--text-secondary)] mt-2">Fetching records, applying filters, and calculating metrics.</p>
               </div>
             ) : (
               renderMockData()
             )}
           </div>

        </div>
      </div>
    </div>
  );
}
