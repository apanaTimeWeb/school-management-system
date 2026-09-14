"use client";
import React from "react";
import { Search, Download, RefreshCw } from "lucide-react";
import { useAccountantOnlinePaymentsStore } from "../accountant_online_payments_store/useAccountantOnlinePaymentsStore";

export default function AccountantOnlinePaymentsFilters() {
  const { searchQuery, setSearchQuery, statusFilter, setStatusFilter, reconFilter, setReconFilter } = useAccountantOnlinePaymentsStore();

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-4 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
      
      <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
        <div className="relative w-full sm:w-80">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by Gateway ID, Ref or Name..." 
            className="w-full bg-bg-input border border-border rounded-lg pl-9 pr-4 py-2.5 text-sm text-text-primary focus:border-primary outline-none transition-colors"
          />
        </div>

        <select 
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-bg-input border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary focus:border-primary outline-none cursor-pointer w-full sm:w-auto"
        >
          <option value="All">All Status</option>
          <option value="Successful">Successful</option>
          <option value="Failed">Failed</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
          <option value="Refunded">Refunded</option>
        </select>

        <select 
          value={reconFilter}
          onChange={(e) => setReconFilter(e.target.value)}
          className="bg-bg-input border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary focus:border-primary outline-none cursor-pointer w-full sm:w-auto"
        >
          <option value="All">All Reconciliation</option>
          <option value="Reconciled">Reconciled</option>
          <option value="Mismatch">Mismatch</option>
          <option value="Pending">Pending Recon</option>
        </select>
      </div>

      <div className="flex gap-2 w-full lg:w-auto">
        <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold bg-bg-input text-text-primary rounded-lg border border-border hover:bg-primary/10 hover:text-primary transition-colors">
          <RefreshCw size={16} /> Sync Gateway
        </button>
        <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold bg-bg-input text-text-primary rounded-lg border border-border hover:bg-primary/10 hover:text-primary transition-colors">
          <Download size={16} /> Export CSV
        </button>
      </div>

    </div>
  );
}
