"use client";
import React from "react";
import HRReportsFilters from "./HRReportsFilters";
import HRReportsTable from "./HRReportsTable";
import HRReportsModals from "./HRReportsModals";
import { DownloadCloud, FileBarChart } from "lucide-react";

export default function HRReportsMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-6 fade-in pb-24">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-text-primary tracking-tight">
            HR Reports
          </h1>
          <p className="text-sm font-semibold text-text-secondary mt-1">
            Generate and download analytical reports for HR operations.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-purple-600 text-white font-bold text-sm rounded-lg hover:bg-purple-700 transition-colors shadow-md flex items-center gap-2">
            <FileBarChart size={18} /> Generate New Report
          </button>
        </div>
      </div>

      <HRReportsFilters />
      <HRReportsTable />
      <HRReportsModals />
    </div>
  );
}
