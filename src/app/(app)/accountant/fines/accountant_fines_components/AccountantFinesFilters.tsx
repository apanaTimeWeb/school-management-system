"use client";
import React from "react";
import { Search, PlusCircle, Download } from "lucide-react";
import { useAccountantFinesStore } from "../accountant_fines_store/useAccountantFinesStore";

export default function AccountantFinesFilters() {
  const { 
    searchQuery, setSearchQuery, 
    statusFilter, setStatusFilter
  } = useAccountantFinesStore();

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-4 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
      
      <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto">
        <div className="relative w-full sm:w-80">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search student or fine ID..." 
            className="w-full bg-bg-input border border-border rounded-lg pl-9 pr-4 py-2 text-sm text-text-primary focus:border-primary outline-none transition-colors"
          />
        </div>

        <select 
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none cursor-pointer w-full sm:w-auto"
        >
          <option value="All">All Statuses</option>
          <option value="Unpaid">Unpaid</option>
          <option value="Paid">Paid</option>
          <option value="Waived">Waived</option>
          <option value="Waiver Pending">Waiver Pending</option>
        </select>
      </div>

      <div className="flex gap-2 w-full xl:w-auto">
        <button className="flex-1 xl:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold bg-bg-input text-text-primary rounded-lg border border-border hover:bg-primary/10 hover:text-primary transition-colors">
          <Download size={16} /> Export
        </button>
        <button 
          onClick={() => alert("Apply Custom Fine workflow will go here.")}
          className="flex-1 xl:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold bg-primary text-white rounded-lg hover:bg-primary-hover shadow-md transition-colors"
        >
          <PlusCircle size={16} /> Apply Custom Fine
        </button>
      </div>

    </div>
  );
}
