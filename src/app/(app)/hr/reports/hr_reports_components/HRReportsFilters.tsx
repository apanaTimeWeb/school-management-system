"use client";
import React from "react";
import { Search } from "lucide-react";
import { useHRReportsStore } from "../hr_reports_store/useHRReportsStore";

export default function HRReportsFilters() {
  const { 
    searchQuery, setSearchQuery, 
    categoryFilter, setCategoryFilter,
    statusFilter, setStatusFilter 
  } = useHRReportsStore();

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="relative w-full md:max-w-md">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search reports by name..." 
          className="w-full bg-bg-input border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm font-semibold text-text-primary focus:border-purple-500 outline-none transition-colors"
        />
      </div>

      <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto custom-scrollbar pb-1 md:pb-0">
        <select 
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="bg-bg-input border border-border rounded-lg text-sm font-bold text-text-secondary px-3 py-2.5 outline-none focus:border-purple-500 shrink-0"
        >
          <option value="All">All Categories</option>
          <option value="Attendance">Attendance</option>
          <option value="Payroll">Payroll</option>
          <option value="Performance">Performance</option>
          <option value="Recruitment">Recruitment</option>
          <option value="General">General</option>
        </select>

        <select 
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-bg-input border border-border rounded-lg text-sm font-bold text-text-secondary px-3 py-2.5 outline-none focus:border-purple-500 shrink-0"
        >
          <option value="All">All Status</option>
          <option value="Ready">Ready</option>
          <option value="Generating">Generating</option>
          <option value="Failed">Failed</option>
        </select>
      </div>
    </div>
  );
}
