"use client";
import React from 'react';
import { BarChart3, ChevronLeft } from 'lucide-react';
import { usePrincipalReportsStore } from '../reports_store/usePrincipalReportsStore';

import PrincipalReportCategories from './PrincipalReportCategories';
import PrincipalReportGenerator from './PrincipalReportGenerator';
import PrincipalExportModal from './PrincipalExportModal';

export default function PrincipalReportsMain() {
  const { selectedReport, setSelectedReport } = usePrincipalReportsStore();

  return (
    <div className="w-full h-full flex flex-col min-h-screen">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          {selectedReport ? (
            <button 
              onClick={() => setSelectedReport(null)}
              className="flex items-center gap-1 text-[14px] font-bold text-text-secondary hover:text-primary transition-colors mb-2"
            >
              <ChevronLeft size={16}/> Back to Categories
            </button>
          ) : null}
          <h1 className="text-[24px] font-bold text-text-primary flex items-center gap-2">
            <BarChart3 className="text-primary" size={24} />
            {selectedReport ? selectedReport.title : 'Reports & Analytics'}
          </h1>
          <p className="text-[14px] text-text-secondary mt-1">
            {selectedReport ? selectedReport.description : 'Generate and export comprehensive reports across all school modules.'}
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-x-hidden">
        {!selectedReport ? (
          <PrincipalReportCategories />
        ) : (
          <PrincipalReportGenerator />
        )}
      </div>

      <PrincipalExportModal />
    </div>
  );
}
