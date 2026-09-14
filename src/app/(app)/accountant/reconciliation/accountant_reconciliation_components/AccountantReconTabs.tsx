"use client";
import React from "react";
import { Search, Globe, Landmark, Banknote, List } from "lucide-react";
import { useAccountantReconStore } from "../accountant_reconciliation_store/useAccountantReconStore";
import clsx from "clsx";
import { ReconCategory } from "../accountant_reconciliation_types/AccountantReconTypes";

export default function AccountantReconTabs() {
  const { 
    searchQuery, setSearchQuery, 
    activeTab, setActiveTab,
    statusFilter, setStatusFilter
  } = useAccountantReconStore();

  const TABS: { id: ReconCategory | 'All', label: string, icon: React.ReactNode }[] = [
    { id: 'All', label: 'All Records', icon: <List size={16} /> },
    { id: 'Gateway', label: 'Payment Gateway', icon: <Globe size={16} /> },
    { id: 'Bank', label: 'Bank Statement', icon: <Landmark size={16} /> },
    { id: 'Cash', label: 'Physical Cash', icon: <Banknote size={16} /> },
  ];

  return (
    <div className="flex flex-col gap-4">
      
      {/* Tabs */}
      <div className="flex overflow-x-auto gap-2 pb-2 hide-scrollbar border-b border-border">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={clsx(
              "flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-t-lg transition-colors whitespace-nowrap border-b-2",
              activeTab === tab.id 
                ? "bg-primary/10 text-primary border-primary" 
                : "text-text-secondary border-transparent hover:text-text-primary hover:bg-bg-input"
            )}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-card border border-border rounded-xl shadow-sm p-4 flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Txn ID, Ref, or Payer..." 
            className="w-full bg-bg-input border border-border rounded-lg pl-9 pr-4 py-2 text-sm text-text-primary focus:border-primary outline-none transition-colors"
          />
        </div>

        <select 
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none cursor-pointer w-full sm:w-auto"
        >
          <option value="All">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Matched">Matched</option>
          <option value="Unmatched">Unmatched</option>
          <option value="Duplicate">Duplicate</option>
        </select>
      </div>
    </div>
  );
}
