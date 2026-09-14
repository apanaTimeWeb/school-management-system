"use client";
import React from "react";
import { Search } from "lucide-react";
import { useHRCommunicationStore } from "../hr_communication_store/useHRCommunicationStore";

export default function HRCommunicationFilters() {
  const { 
    searchQuery, setSearchQuery, 
    typeFilter, setTypeFilter,
    statusFilter, setStatusFilter 
  } = useHRCommunicationStore();

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="relative w-full md:max-w-md">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by title or audience..." 
          className="w-full bg-bg-input border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm font-semibold text-text-primary focus:border-indigo-500 outline-none transition-colors"
        />
      </div>

      <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto custom-scrollbar pb-1 md:pb-0">
        <select 
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="bg-bg-input border border-border rounded-lg text-sm font-bold text-text-secondary px-3 py-2.5 outline-none focus:border-indigo-500 shrink-0"
        >
          <option value="All">All Types</option>
          <option value="Notice">Notice</option>
          <option value="Email">Email</option>
          <option value="SMS">SMS</option>
          <option value="Announcement">Announcement</option>
        </select>

        <select 
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-bg-input border border-border rounded-lg text-sm font-bold text-text-secondary px-3 py-2.5 outline-none focus:border-indigo-500 shrink-0"
        >
          <option value="All">All Status</option>
          <option value="Sent">Sent</option>
          <option value="Scheduled">Scheduled</option>
          <option value="Draft">Draft</option>
        </select>
      </div>
    </div>
  );
}
