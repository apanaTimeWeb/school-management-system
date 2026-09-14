"use client";
import React from "react";
import { Search } from "lucide-react";
import { useHRLeavesStore } from "../hr_leaves_store/useHRLeavesStore";

export default function HRLeavesFilters() {
  const { 
    searchQuery, setSearchQuery, 
    typeFilter, setTypeFilter,
    statusFilter, setStatusFilter 
  } = useHRLeavesStore();

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="relative w-full md:max-w-md">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by employee name or ID..." 
          className="w-full bg-bg-input border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm font-semibold text-text-primary focus:border-amber-500 outline-none transition-colors"
        />
      </div>

      <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto custom-scrollbar pb-1 md:pb-0">
        <select 
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="bg-bg-input border border-border rounded-lg text-sm font-bold text-text-secondary px-3 py-2.5 outline-none focus:border-amber-500 shrink-0"
        >
          <option value="All">All Types</option>
          <option value="Sick">Sick</option>
          <option value="Casual">Casual</option>
          <option value="Earned">Earned</option>
          <option value="Maternity">Maternity</option>
          <option value="Unpaid">Unpaid</option>
        </select>

        <select 
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-bg-input border border-border rounded-lg text-sm font-bold text-text-secondary px-3 py-2.5 outline-none focus:border-amber-500 shrink-0"
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
    </div>
  );
}
