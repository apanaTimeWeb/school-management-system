"use client";
import React from "react";
import { Search, PlusCircle } from "lucide-react";
import { useAccountantMethodsStore } from "../accountant_methods_store/useAccountantMethodsStore";

export default function AccountantMethodsHeader() {
  const { searchQuery, setSearchQuery } = useAccountantMethodsStore();

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      
      <div className="relative w-full sm:w-80">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search payment methods..." 
          className="w-full bg-bg-input border border-border rounded-lg pl-9 pr-4 py-2 text-sm text-text-primary focus:border-primary outline-none transition-colors"
        />
      </div>

      <button 
        onClick={() => alert("Add Custom Method Flow")}
        className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold bg-primary text-black rounded-lg hover:bg-primary-hover shadow-md transition-colors"
      >
        <PlusCircle size={16} /> Add Custom Method
      </button>

    </div>
  );
}
