"use client";
import React from "react";
import { Search, Download, FileCheck2 } from "lucide-react";
import { useAccountantBankStore } from "../accountant_bank_store/useAccountantBankStore";

export default function AccountantBankFilters() {
  const { 
    searchQuery, setSearchQuery, 
    statusFilter, setStatusFilter,
    typeFilter, setTypeFilter,
    setReconcileModalOpen
  } = useAccountantBankStore();

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-4 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
      
      <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto">
        <div className="relative w-full sm:w-80">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Payer, Ref No, or Bank..." 
            className="w-full bg-bg-input border border-border rounded-lg pl-9 pr-4 py-2 text-sm text-text-primary focus:border-primary outline-none transition-colors"
          />
        </div>

        <select 
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none cursor-pointer w-full sm:w-auto"
        >
          <option value="All">All Types</option>
          <option value="Cheque">Cheque</option>
          <option value="Bank Transfer (NEFT/RTGS)">Bank Transfer</option>
          <option value="UPI">UPI</option>
        </select>

        <select 
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none cursor-pointer w-full sm:w-auto"
        >
          <option value="All">All Statuses</option>
          <option value="Pending Clearance">Pending</option>
          <option value="Cleared">Cleared</option>
          <option value="Bounced">Bounced</option>
          <option value="Reconciled">Reconciled</option>
        </select>
      </div>

      <div className="flex gap-2 w-full xl:w-auto">
        <button className="flex-1 xl:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold bg-bg-input text-text-primary rounded-lg border border-border hover:bg-primary/10 hover:text-primary transition-colors">
          <Download size={16} /> Export
        </button>
        <button 
          onClick={() => setReconcileModalOpen(true)}
          className="flex-1 xl:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold bg-primary text-white rounded-lg hover:bg-primary-hover shadow-md transition-colors whitespace-nowrap"
        >
          <FileCheck2 size={16} /> Bank Reconciliation
        </button>
      </div>

    </div>
  );
}
