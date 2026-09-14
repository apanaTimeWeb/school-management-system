"use client";
import React from "react";
import HROfficeAdminFilters from "./HROfficeAdminFilters";
import HROfficeAdminTable from "./HROfficeAdminTable";
import HROfficeAdminModals from "./HROfficeAdminModals";
import { PlusCircle } from "lucide-react";

export default function HROfficeAdminMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-6 fade-in pb-24">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-text-primary tracking-tight">
            Office Administration
          </h1>
          <p className="text-sm font-semibold text-text-secondary mt-1">
            Manage stationery, maintenance requests, and general office needs.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-orange-600 text-white font-bold text-sm rounded-lg hover:bg-orange-700 transition-colors shadow-md flex items-center gap-2">
            <PlusCircle size={18} /> New Request
          </button>
        </div>
      </div>

      <HROfficeAdminFilters />
      <HROfficeAdminTable />
      <HROfficeAdminModals />
    </div>
  );
}
