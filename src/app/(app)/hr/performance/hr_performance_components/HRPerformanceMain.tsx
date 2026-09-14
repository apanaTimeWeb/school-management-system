"use client";
import React from "react";
import HRPerformanceFilters from "./HRPerformanceFilters";
import HRPerformanceTable from "./HRPerformanceTable";
import HRPerformanceModals from "./HRPerformanceModals";
import { Star } from "lucide-react";

export default function HRPerformanceMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-6 fade-in pb-24">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-text-primary tracking-tight">
            Performance Appraisals
          </h1>
          <p className="text-sm font-semibold text-text-secondary mt-1">
            Track employee performance reviews, feedback, and ratings.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-yellow-500 text-white font-bold text-sm rounded-lg hover:bg-yellow-600 transition-colors shadow-md flex items-center gap-2">
            <Star size={18} /> Initiate Cycle
          </button>
        </div>
      </div>

      <HRPerformanceFilters />
      <HRPerformanceTable />
      <HRPerformanceModals />
    </div>
  );
}
