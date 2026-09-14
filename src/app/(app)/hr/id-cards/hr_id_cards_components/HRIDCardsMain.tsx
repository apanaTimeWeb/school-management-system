"use client";
import React from "react";
import HRIDCardsFilters from "./HRIDCardsFilters";
import HRIDCardsTable from "./HRIDCardsTable";
import HRIDCardsModals from "./HRIDCardsModals";
import { BadgeCheck } from "lucide-react";

export default function HRIDCardsMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-6 fade-in pb-24">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-text-primary tracking-tight">
            Employee ID Cards
          </h1>
          <p className="text-sm font-semibold text-text-secondary mt-1">
            Generate, print, and manage physical & digital ID cards for staff.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-indigo-600 text-white font-bold text-sm rounded-lg hover:bg-indigo-700 transition-colors shadow-md flex items-center gap-2">
            <BadgeCheck size={18} /> Generate New IDs
          </button>
        </div>
      </div>

      <HRIDCardsFilters />
      <HRIDCardsTable />
      <HRIDCardsModals />
    </div>
  );
}
