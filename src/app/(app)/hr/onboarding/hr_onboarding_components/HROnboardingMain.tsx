"use client";
import React from "react";
import HROnboardingFilters from "./HROnboardingFilters";
import HROnboardingTable from "./HROnboardingTable";
import HROnboardingModals from "./HROnboardingModals";
import { ListChecks } from "lucide-react";

export default function HROnboardingMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-6 fade-in pb-24">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-text-primary tracking-tight">
            Employee Onboarding
          </h1>
          <p className="text-sm font-semibold text-text-secondary mt-1">
            Track induction tasks, documentation, and asset assignment for new hires.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-sky-600 text-white font-bold text-sm rounded-lg hover:bg-sky-700 transition-colors shadow-md flex items-center gap-2">
            <ListChecks size={18} /> Manage Checklists
          </button>
        </div>
      </div>

      <HROnboardingFilters />
      <HROnboardingTable />
      <HROnboardingModals />
    </div>
  );
}
