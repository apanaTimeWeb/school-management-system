"use client";

import React, { useState, useMemo } from 'react';
import { Search, BarChart4, Filter } from 'lucide-react';
import ReportCategoryCard from './ReportCategoryCard';
import ReportViewerModal from './ReportViewerModal';
import { REPORT_CATEGORIES } from '../transport_reports_constants/transport_reports.constants';
import type { ReportDefinition } from '../transport_reports_types/transport_reports.types';

// RESPONSIBILITY: Main orchestrator for Transport Reports & Analytics module

export default function TransportReportsMain() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modals state
  const [selectedReport, setSelectedReport] = useState<ReportDefinition | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  // Handlers
  const handleSelectReport = (report: ReportDefinition) => {
    setSelectedReport(report);
    setIsViewerOpen(true);
  };

  // Filter Categories and Reports based on search
  const filteredCategories = useMemo(() => {
    if (!searchTerm) return REPORT_CATEGORIES;
    
    const term = searchTerm.toLowerCase();
    
    return REPORT_CATEGORIES.map(category => {
      // Check if category title matches
      if (category.title.toLowerCase().includes(term)) {
        return category; // Return all reports if category matches
      }
      
      // Filter reports within category
      const matchedReports = category.reports.filter(r => 
        r.name.toLowerCase().includes(term) || 
        r.description.toLowerCase().includes(term)
      );
      
      if (matchedReports.length > 0) {
        return { ...category, reports: matchedReports };
      }
      
      return null;
    }).filter(Boolean) as typeof REPORT_CATEGORIES;
    
  }, [searchTerm]);

  const totalReports = REPORT_CATEGORIES.reduce((acc, cat) => acc + cat.reports.length, 0);

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header & Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-2xl">📈</span> Transport Reports & Analytics
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Generate and export comprehensive data regarding vehicles, routes, students, and finances.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--primary-subtle)] border border-[var(--primary)]/20">
            <BarChart4 size={16} className="text-[var(--primary)]" />
            <div className="flex flex-col">
               <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] leading-none mb-0.5">Library</span>
               <span className="text-sm font-bold text-[var(--primary)] leading-none">{totalReports} Reports Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-80">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
            <input
              type="text"
              placeholder="Search reports by name or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-md py-2 pl-9 pr-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
            />
          </div>
          
          <button className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-card)] border border-[var(--border)] rounded-md text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--primary)] transition-colors">
            <Filter size={16} /> Filter by Module
          </button>
        </div>
      </div>

      {/* Report Categories Grid */}
      <div className="flex-1 min-h-0 overflow-y-auto pb-6">
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredCategories.map(category => (
              <ReportCategoryCard 
                key={category.id} 
                category={category} 
                onSelectReport={handleSelectReport} 
              />
            ))}
          </div>
        ) : (
          <div className="w-full py-20 flex flex-col items-center justify-center text-center bg-[var(--bg-card)] border border-[var(--border)] rounded-xl">
             <Search size={48} className="text-[var(--text-secondary)] opacity-20 mb-4" />
             <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">No Reports Found</h3>
             <p className="text-sm text-[var(--text-secondary)] max-w-md">
               We couldn't find any reports matching "{searchTerm}". Try using different keywords like "Vehicle", "Fee", or "Attendance".
             </p>
          </div>
        )}
      </div>

      {/* Report Viewer/Generator Modal */}
      <ReportViewerModal 
        isOpen={isViewerOpen}
        report={selectedReport}
        onClose={() => setIsViewerOpen(false)}
      />
      
    </div>
  );
}
