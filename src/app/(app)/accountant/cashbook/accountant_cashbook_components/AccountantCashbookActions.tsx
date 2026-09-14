"use client";
import React from "react";
import { Search, Send, Lock, FileText, Calendar } from "lucide-react";
import { useAccountantCashbookStore } from "../accountant_cashbook_store/useAccountantCashbookStore";

export default function AccountantCashbookActions() {
  const { 
    searchQuery, setSearchQuery, 
    selectedDate, setSelectedDate,
    setHandoverModalOpen, setClosingModalOpen, setSummaryModalOpen
  } = useAccountantCashbookStore();

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-4 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
      
      <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto">
        <div className="relative w-full sm:w-80">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search particulars or Ref No..." 
            className="w-full bg-bg-input border border-border rounded-lg pl-9 pr-4 py-2 text-sm text-text-primary focus:border-primary outline-none transition-colors"
          />
        </div>

        <div className="relative w-full sm:w-auto">
          <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
          <input 
            type="date" 
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full bg-bg-input border border-border rounded-lg pl-9 pr-4 py-2 text-sm text-text-primary focus:border-primary outline-none transition-colors cursor-pointer"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 w-full xl:w-auto">
        <button 
          onClick={() => setSummaryModalOpen(true)}
          className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold bg-bg-input text-text-primary border border-border rounded-lg hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-colors whitespace-nowrap"
        >
          <FileText size={16} /> Daily Summary
        </button>
        <button 
          onClick={() => setHandoverModalOpen(true)}
          className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold bg-info/10 text-info border border-info/20 rounded-lg hover:bg-info/20 transition-colors whitespace-nowrap"
        >
          <Send size={16} /> Handover Cash
        </button>
        <button 
          onClick={() => setClosingModalOpen(true)}
          className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold bg-primary text-white rounded-lg hover:bg-primary-hover shadow-md transition-colors whitespace-nowrap"
        >
          <Lock size={16} /> Close Register
        </button>
      </div>

    </div>
  );
}
