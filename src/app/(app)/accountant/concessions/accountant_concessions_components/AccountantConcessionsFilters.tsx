"use client";
import React from "react";
import { Search, PlusCircle, Download } from "lucide-react";
import { useAccountantConcessionsStore } from "../accountant_concessions_store/useAccountantConcessionsStore";

export default function AccountantConcessionsFilters() {
  const { 
    searchQuery, setSearchQuery, 
    typeFilter, setTypeFilter, 
    statusFilter, setStatusFilter,
    setNewRequestModalOpen
  } = useAccountantConcessionsStore();

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-4 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
      
      <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto">
        <div className="relative w-full sm:w-64">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search request ID or student..." 
            className="w-full bg-bg-input border border-border rounded-lg pl-9 pr-4 py-2 text-sm text-text-primary focus:border-primary outline-none transition-colors"
          />
        </div>

        <select 
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none cursor-pointer w-full sm:w-auto"
        >
          <option value="All">All Types</option>
          <option value="Scholarship">Scholarship</option>
          <option value="Discount">Discount</option>
          <option value="Staff Concession">Staff Concession</option>
          <option value="Other">Other</option>
        </select>

        <select 
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none cursor-pointer w-full sm:w-auto"
        >
          <option value="All">All Status</option>
          <option value="Pending Approval">Pending Approval</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      <div className="flex gap-2 w-full xl:w-auto">
        <button className="flex-1 xl:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold bg-bg-input text-text-primary rounded-lg border border-border hover:bg-primary/10 hover:text-primary transition-colors">
          <Download size={16} /> Export
        </button>
        <button 
          onClick={() => setNewRequestModalOpen(true)}
          className="flex-1 xl:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold bg-primary text-black rounded-lg hover:bg-primary-hover shadow-md transition-colors"
        >
          <PlusCircle size={16} /> New Request
        </button>
      </div>

    </div>
  );
}
