"use client";
import React from "react";
import HRLeavesFilters from "./HRLeavesFilters";
import HRLeavesTable from "./HRLeavesTable";
import HRLeavesModals from "./HRLeavesModals";
import { Plus } from "lucide-react";

export default function HRLeavesMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-6 fade-in pb-24">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-text-primary tracking-tight">
            Leave Management
          </h1>
          <p className="text-sm font-semibold text-text-secondary mt-1">
            Review and approve staff leave requests.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-amber-600 text-white font-bold text-sm rounded-lg hover:bg-amber-700 transition-colors shadow-md flex items-center gap-2">
            <Plus size={18} /> Apply Leave (On Behalf)
          </button>
        </div>
      </div>

      <HRLeavesFilters />
      <HRLeavesTable />
      <HRLeavesModals />
    </div>
  );
}
