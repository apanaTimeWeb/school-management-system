"use client";
import React from "react";
import { Search } from "lucide-react";
import { useAccountantSearchStore } from "../accountant_search_store/useAccountantSearchStore";
import { SEARCH_ENTITY_TYPES } from "../accountant_search_utils/AccountantSearchConstants";
import { GlobalSearchEntityType } from "../accountant_search_types/AccountantSearchTypes";
import clsx from "clsx";

export default function AccountantSearchBox() {
  const { 
    searchQuery, setSearchQuery, 
    entityFilter, setEntityFilter
  } = useAccountantSearchStore();

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-6 flex flex-col items-center gap-6">
      
      <div className="text-center">
        <h2 className="text-2xl font-black text-text-primary">Omni-Search</h2>
        <p className="text-sm text-text-secondary mt-1">Search across students, receipts, invoices, and transactions globally.</p>
      </div>

      <div className="relative w-full max-w-3xl">
        <Search size={24} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter ID, Name, Reference, Date or Amount..." 
          className="w-full bg-bg-input border-2 border-primary/20 rounded-xl pl-12 pr-4 py-4 text-lg font-semibold text-text-primary focus:border-primary outline-none transition-colors shadow-inner"
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => setEntityFilter('All')}
          className={clsx(
            "px-4 py-2 rounded-full text-xs font-bold transition-all border",
            entityFilter === 'All' 
              ? "bg-primary text-white border-primary shadow-md" 
              : "bg-bg-input text-text-secondary border-border hover:border-primary/50"
          )}
        >
          All Entities
        </button>
        {SEARCH_ENTITY_TYPES.map(type => (
          <button
            key={type}
            onClick={() => setEntityFilter(type)}
            className={clsx(
              "px-4 py-2 rounded-full text-xs font-bold transition-all border",
              entityFilter === type 
                ? "bg-primary text-white border-primary shadow-md" 
                : "bg-bg-input text-text-secondary border-border hover:border-primary/50"
            )}
          >
            {type}s
          </button>
        ))}
      </div>

    </div>
  );
}
