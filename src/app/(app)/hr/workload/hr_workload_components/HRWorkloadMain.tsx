"use client";
import React from "react";
import HRWorkloadFilters from "./HRWorkloadFilters";
import HRWorkloadTable from "./HRWorkloadTable";
import HRWorkloadModals from "./HRWorkloadModals";
import { Network } from "lucide-react";

export default function HRWorkloadMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-6 fade-in pb-24">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-text-primary tracking-tight">
            Workload & Assignments
          </h1>
          <p className="text-sm font-semibold text-text-secondary mt-1">
            Manage teacher class assignments and track staff working hours.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-indigo-600 text-white font-bold text-sm rounded-lg hover:bg-indigo-700 transition-colors shadow-md flex items-center gap-2">
            <Network size={18} /> Auto Assign
          </button>
        </div>
      </div>

      <HRWorkloadFilters />
      <HRWorkloadTable />
      <HRWorkloadModals />
    </div>
  );
}
