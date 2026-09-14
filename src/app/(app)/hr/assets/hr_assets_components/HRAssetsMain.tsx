"use client";
import React from "react";
import HRAssetsFilters from "./HRAssetsFilters";
import HRAssetsTable from "./HRAssetsTable";
import HRAssetsModals from "./HRAssetsModals";
import { Monitor } from "lucide-react";

export default function HRAssetsMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-6 fade-in pb-24">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-text-primary tracking-tight">
            Employee Assets
          </h1>
          <p className="text-sm font-semibold text-text-secondary mt-1">
            Track and manage laptops, devices, and other assets assigned to staff.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-indigo-600 text-white font-bold text-sm rounded-lg hover:bg-indigo-700 transition-colors shadow-md flex items-center gap-2">
            <Monitor size={18} /> Assign Asset
          </button>
        </div>
      </div>

      <HRAssetsFilters />
      <HRAssetsTable />
      <HRAssetsModals />
    </div>
  );
}
