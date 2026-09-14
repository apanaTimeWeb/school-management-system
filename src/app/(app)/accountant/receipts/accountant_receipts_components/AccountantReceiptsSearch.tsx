"use client";
import React from "react";
import { Search, ShieldCheck } from "lucide-react";
import { useAccountantReceiptsStore } from "../accountant_receipts_store/useAccountantReceiptsStore";

// RESPONSIBILITY: Renders the top search bar, filters, and the "Verify Receipt" action button.

export default function AccountantReceiptsSearch() {
  const { searchQuery, setSearchQuery, setVerifyModalOpen } = useAccountantReceiptsStore();

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      
      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        <div className="relative w-full sm:w-80">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by Receipt No, Student Name..." 
            className="w-full bg-bg-input border border-border rounded-lg pl-9 pr-4 py-2 text-sm text-text-primary focus:border-primary outline-none transition-colors"
          />
        </div>

        <select className="bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none cursor-pointer w-full sm:w-auto">
          <option>All Dates</option>
          <option>Today</option>
          <option>This Week</option>
          <option>This Month</option>
        </select>

        <select className="bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none cursor-pointer w-full sm:w-auto">
          <option>All Status</option>
          <option>Valid</option>
          <option>Voided</option>
        </select>
      </div>

      <button 
        onClick={() => setVerifyModalOpen(true)}
        className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold bg-info/10 text-info border border-info/20 rounded-lg hover:bg-info hover:text-white transition-all w-full sm:w-auto shadow-sm"
      >
        <ShieldCheck size={16} /> Verify Receipt
      </button>

    </div>
  );
}
