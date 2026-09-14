"use client";
import React from "react";
import HRAppointmentsFilters from "./HRAppointmentsFilters";
import HRAppointmentsTable from "./HRAppointmentsTable";
import HRAppointmentsModals from "./HRAppointmentsModals";
import { PenTool } from "lucide-react";

export default function HRAppointmentsMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-6 fade-in pb-24">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-text-primary tracking-tight">
            Appointment & Letters
          </h1>
          <p className="text-sm font-semibold text-text-secondary mt-1">
            Generate and manage official letters for employees.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-indigo-600 text-white font-bold text-sm rounded-lg hover:bg-indigo-700 transition-colors shadow-md flex items-center gap-2">
            <PenTool size={18} /> Generate Letter
          </button>
        </div>
      </div>

      <HRAppointmentsFilters />
      <HRAppointmentsTable />
      <HRAppointmentsModals />
    </div>
  );
}
