"use client";
import React from "react";
import HRAttendanceFilters from "./HRAttendanceFilters";
import HRAttendanceTable from "./HRAttendanceTable";
import { Download, Upload } from "lucide-react";

export default function HRAttendanceMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-6 fade-in pb-24">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-text-primary tracking-tight">
            Staff Attendance
          </h1>
          <p className="text-sm font-semibold text-text-secondary mt-1">
            Monitor daily check-ins, check-outs, and biometric logs for all staff.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-bg-page border border-border text-text-secondary font-bold text-sm rounded-lg hover:bg-border transition-colors shadow-sm flex items-center gap-2">
            <Upload size={18} /> Import Biometrics
          </button>
          <button className="px-4 py-2 bg-emerald-600 text-white font-bold text-sm rounded-lg hover:bg-emerald-700 transition-colors shadow-md flex items-center gap-2">
            <Download size={18} /> Export Log
          </button>
        </div>
      </div>

      <HRAttendanceFilters />
      <HRAttendanceTable />
    </div>
  );
}
