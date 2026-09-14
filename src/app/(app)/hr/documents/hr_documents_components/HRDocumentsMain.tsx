"use client";
import React from "react";
import HRDocumentsFilters from "./HRDocumentsFilters";
import HRDocumentsTable from "./HRDocumentsTable";
import { Upload } from "lucide-react";

export default function HRDocumentsMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-6 fade-in pb-24">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-text-primary tracking-tight">
            Employee Documents
          </h1>
          <p className="text-sm font-semibold text-text-secondary mt-1">
            Manage KYC, resumes, certificates, and contracts for all staff.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-rose-600 text-white font-bold text-sm rounded-lg hover:bg-rose-700 transition-colors shadow-md flex items-center gap-2">
            <Upload size={18} /> Upload Document
          </button>
        </div>
      </div>

      <HRDocumentsFilters />
      <HRDocumentsTable />
    </div>
  );
}
