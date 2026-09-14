"use client";
import React from "react";
import { Search, Megaphone } from "lucide-react";
import { useAccountantCommunicationStore } from "../accountant_communication_store/useAccountantCommunicationStore";

export default function AccountantCommunicationActions() {
  const { 
    searchQuery, setSearchQuery, 
    statusFilter, setStatusFilter,
    setComposeModalOpen
  } = useAccountantCommunicationStore();

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      
      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        <div className="relative w-full sm:w-80">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search recipient or type..." 
            className="w-full bg-bg-input border border-border rounded-lg pl-9 pr-4 py-2 text-sm text-text-primary focus:border-primary outline-none transition-colors"
          />
        </div>

        <select 
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none cursor-pointer w-full sm:w-auto"
        >
          <option value="All">All Channels</option>
          <option value="SMS">SMS</option>
          <option value="Email">Email</option>
          <option value="WhatsApp">WhatsApp</option>
        </select>
      </div>

      <button 
        onClick={() => setComposeModalOpen(true)}
        className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold bg-primary text-black rounded-lg hover:bg-primary-hover shadow-md transition-colors"
      >
        <Megaphone size={18} /> Send Notification
      </button>

    </div>
  );
}
