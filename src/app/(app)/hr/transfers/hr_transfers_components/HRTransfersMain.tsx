"use client";
import React from "react";
import HRTransfersFilters from "./HRTransfersFilters";
import HRTransfersTable from "./HRTransfersTable";
import HRTransfersModals from "./HRTransfersModals";
import { Plus } from "lucide-react";

export default function HRTransfersMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-6 fade-in pb-24">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-text-primary tracking-tight">
            Transfers & Promotions
          </h1>
          <p className="text-sm font-semibold text-text-secondary mt-1">
            Manage role changes, branch transfers, and internal promotions.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-pink-600 text-white font-bold text-sm rounded-lg hover:bg-pink-700 transition-colors shadow-md flex items-center gap-2">
            <Plus size={18} /> Initiate Transfer/Promotion
          </button>
        </div>
      </div>

      <HRTransfersFilters />
      <HRTransfersTable />
      <HRTransfersModals />
    </div>
  );
}
