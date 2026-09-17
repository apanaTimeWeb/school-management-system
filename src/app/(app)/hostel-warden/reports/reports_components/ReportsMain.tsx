"use client";

import React, { useState } from 'react';
import { 
  BarChart3, Search, Filter, Download, 
  CalendarDays, Users, IndianRupee, Wrench, 
  AlertTriangle, FileText, ChevronRight, CheckCircle2
} from 'lucide-react';
import { MOCK_REPORTS } from '../reports_constants/reports.constants';
import type { ReportSummary, ReportType } from '../reports_types/reports.types';

export default function ReportsMain() {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('ALL');

  const filteredReports = MOCK_REPORTS.filter(report => {
    const matchesSearch = report.period.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (typeFilter === 'ALL') return matchesSearch;
    return matchesSearch && report.type === typeFilter;
  });

  const getReportIcon = (type: ReportType) => {
    switch(type) {
      case 'Daily Attendance': return <Users size={20} className="text-blue-600" />;
      case 'Monthly Mess Bill': return <IndianRupee size={20} className="text-emerald-600" />;
      case 'Damage & Fine': return <AlertTriangle size={20} className="text-rose-600" />;
      case 'Maintenance Summary': return <Wrench size={20} className="text-amber-600" />;
      case 'Visitor Log': return <FileText size={20} className="text-purple-600" />;
      default: return <BarChart3 size={20} className="text-gray-600" />;
    }
  };

  const getReportColor = (type: ReportType) => {
    switch(type) {
      case 'Daily Attendance': return 'bg-blue-500/10 border-blue-500/20 hover:border-blue-500/50';
      case 'Monthly Mess Bill': return 'bg-emerald-500/10 border-emerald-500/20 hover:border-emerald-500/50';
      case 'Damage & Fine': return 'bg-rose-500/10 border-rose-500/20 hover:border-rose-500/50';
      case 'Maintenance Summary': return 'bg-amber-500/10 border-amber-500/20 hover:border-amber-500/50';
      case 'Visitor Log': return 'bg-purple-500/10 border-purple-500/20 hover:border-purple-500/50';
      default: return 'bg-gray-500/10 border-gray-500/20 hover:border-gray-500/50';
    }
  };

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0 shadow-sm">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <BarChart3 className="text-indigo-500" size={24} /> Reports & Analytics
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Generate and view high-level summaries for attendance, mess, fines, and maintenance.
          </p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shadow-sm">
         <select 
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="bg-[var(--bg-input)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:border-indigo-500 outline-none w-full sm:w-48"
         >
            <option value="ALL">All Reports</option>
            <option value="Daily Attendance">Attendance</option>
            <option value="Monthly Mess Bill">Mess Bill</option>
            <option value="Damage & Fine">Damages & Fines</option>
            <option value="Maintenance Summary">Maintenance</option>
            <option value="Visitor Log">Visitor Log</option>
         </select>
         
         <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={16} />
            <input 
               type="text" 
               placeholder="Search by period (e.g. Nov 2023)..." 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-lg pl-9 pr-4 py-2 text-sm focus:border-indigo-500 outline-none transition-colors"
            />
         </div>
      </div>

      {/* Grid of Reports */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-6">
         {filteredReports.map(report => (
            <div key={report.id} className={`bg-[var(--bg-card)] border rounded-xl overflow-hidden shadow-sm flex flex-col transition-all cursor-default ${getReportColor(report.type)}`}>
               
               {/* Report Header */}
               <div className="p-5 border-b border-[var(--border)] flex justify-between items-start bg-[var(--bg-card)]">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-xl bg-[var(--bg-input)] border border-[var(--border)] flex items-center justify-center shrink-0">
                        {getReportIcon(report.type)}
                     </div>
                     <div>
                        <h3 className="font-bold text-[16px] text-[var(--text-primary)] leading-tight">{report.type}</h3>
                        <p className="text-xs font-semibold flex items-center gap-1 text-[var(--text-secondary)] mt-0.5">
                           <CalendarDays size={12}/> {report.period}
                        </p>
                     </div>
                  </div>
               </div>

               {/* Summary Stats */}
               <div className="p-5 bg-[var(--bg-card)] flex-1">
                  <div className="grid grid-cols-2 gap-4">
                     {report.summaryStats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col">
                           <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] mb-1">{stat.label}</span>
                           <span className="text-lg font-black text-[var(--text-primary)]">{stat.value}</span>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Actions */}
               <div className="px-5 py-3 border-t border-[var(--border)] bg-[var(--bg-input)] flex justify-between items-center">
                  <span className="text-[10px] text-[var(--text-secondary)]">Generated: {new Date(report.generatedDate).toLocaleDateString('en-GB')}</span>
                  
                  {report.isDownloadable && (
                     <button className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 bg-indigo-500/10 px-3 py-1.5 rounded-lg border border-indigo-500/20 transition-colors">
                        <Download size={14} /> Download PDF
                     </button>
                  )}
               </div>

            </div>
         ))}

         {filteredReports.length === 0 && (
            <div className="col-span-full py-16 flex flex-col items-center justify-center text-[var(--text-secondary)] border-2 border-dashed border-[var(--border)] rounded-xl bg-[var(--bg-card)]">
               <BarChart3 size={48} className="opacity-20 mb-4" />
               <p className="font-medium text-lg">No reports found for this period</p>
            </div>
         )}
      </div>

    </div>
  );
}
