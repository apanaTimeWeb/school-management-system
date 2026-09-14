"use client";
import React from "react";
import { Search } from "lucide-react";
import { useHROfficeAdminStore } from "../hr_office_admin_store/useHROfficeAdminStore";

export default function HROfficeAdminFilters() {
  const { 
    searchQuery, setSearchQuery, 
    categoryFilter, setCategoryFilter,
    statusFilter, setStatusFilter 
  } = useHROfficeAdminStore();

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="relative w-full md:max-w-md">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by item or requested by..." 
          className="w-full bg-bg-input border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm font-semibold text-text-primary focus:border-orange-500 outline-none transition-colors"
        />
      </div>

      <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto custom-scrollbar pb-1 md:pb-0">
        <select 
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="bg-bg-input border border-border rounded-lg text-sm font-bold text-text-secondary px-3 py-2.5 outline-none focus:border-orange-500 shrink-0"
        >
          <option value="All">All Categories</option>
          <option value="Stationery">Stationery</option>
          <option value="Pantry">Pantry</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Housekeeping">Housekeeping</option>
          <option value="Other">Other</option>
        </select>

        <select 
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-bg-input border border-border rounded-lg text-sm font-bold text-text-secondary px-3 py-2.5 outline-none focus:border-orange-500 shrink-0"
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Procured">Procured</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
    </div>
  );
}
