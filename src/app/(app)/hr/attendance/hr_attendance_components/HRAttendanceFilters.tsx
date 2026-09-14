"use client";
import React from "react";
import { Search } from "lucide-react";
import { useHRAttendanceStore } from "../hr_attendance_store/useHRAttendanceStore";

export default function HRAttendanceFilters() {
  const { 
    searchQuery, setSearchQuery, 
    roleFilter, setRoleFilter,
    statusFilter, setStatusFilter,
    dateFilter, setDateFilter
  } = useHRAttendanceStore();

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="relative w-full md:max-w-md">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name or ID..." 
          className="w-full bg-bg-input border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm font-semibold text-text-primary focus:border-emerald-500 outline-none transition-colors"
        />
      </div>

      <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto custom-scrollbar pb-1 md:pb-0">
        <input 
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className="bg-bg-input border border-border rounded-lg text-sm font-bold text-text-primary px-3 py-2.5 outline-none focus:border-emerald-500 shrink-0"
        />
        
        <select 
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="bg-bg-input border border-border rounded-lg text-sm font-bold text-text-secondary px-3 py-2.5 outline-none focus:border-emerald-500 shrink-0"
        >
          <option value="All">All Roles</option>
          <option value="Teacher">Teacher</option>
          <option value="Admin">Admin</option>
          <option value="Support">Support</option>
        </select>

        <select 
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-bg-input border border-border rounded-lg text-sm font-bold text-text-secondary px-3 py-2.5 outline-none focus:border-emerald-500 shrink-0"
        >
          <option value="All">All Status</option>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
          <option value="Half Day">Half Day</option>
          <option value="Late">Late</option>
        </select>
      </div>
    </div>
  );
}
