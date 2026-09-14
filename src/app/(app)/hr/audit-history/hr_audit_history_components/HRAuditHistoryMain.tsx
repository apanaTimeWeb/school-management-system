"use client";
import React from "react";
import HRAuditHistoryFilters from "./HRAuditHistoryFilters";
import HRAuditHistoryTable from "./HRAuditHistoryTable";
import { DownloadCloud } from "lucide-react";

export default function HRAuditHistoryMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-6 fade-in pb-24">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-text-primary tracking-tight">
            Audit & History Logs
          </h1>
          <p className="text-sm font-semibold text-text-secondary mt-1">
            Track user activities, system changes, and security events.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-slate-800 text-white font-bold text-sm rounded-lg hover:bg-slate-900 transition-colors shadow-md flex items-center gap-2">
            <DownloadCloud size={18} /> Export Logs
          </button>
        </div>
      </div>

      <HRAuditHistoryFilters />
      <HRAuditHistoryTable />
    </div>
  );
}
