"use client";
import React from "react";
import { Search } from "lucide-react";
import { useHRAppointmentsStore } from "../hr_appointments_store/useHRAppointmentsStore";

export default function HRAppointmentsFilters() {
  const { 
    searchQuery, setSearchQuery, 
    typeFilter, setTypeFilter,
    statusFilter, setStatusFilter 
  } = useHRAppointmentsStore();

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="relative w-full md:max-w-md">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by recipient name or role..." 
          className="w-full bg-bg-input border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm font-semibold text-text-primary focus:border-indigo-500 outline-none transition-colors"
        />
      </div>

      <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto custom-scrollbar pb-1 md:pb-0">
        <select 
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="bg-bg-input border border-border rounded-lg text-sm font-bold text-text-secondary px-3 py-2.5 outline-none focus:border-indigo-500 shrink-0"
        >
          <option value="All">All Letter Types</option>
          <option value="Offer Letter">Offer Letter</option>
          <option value="Appointment Letter">Appointment Letter</option>
          <option value="Experience Letter">Experience Letter</option>
          <option value="Relieving Letter">Relieving Letter</option>
          <option value="Warning Letter">Warning Letter</option>
        </select>

        <select 
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-bg-input border border-border rounded-lg text-sm font-bold text-text-secondary px-3 py-2.5 outline-none focus:border-indigo-500 shrink-0"
        >
          <option value="All">All Status</option>
          <option value="Draft">Draft</option>
          <option value="Sent">Sent</option>
          <option value="Signed">Signed</option>
        </select>
      </div>
    </div>
  );
}
