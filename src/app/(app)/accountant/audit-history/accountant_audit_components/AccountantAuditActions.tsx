"use client";
import React from "react";
import { Search, Download } from "lucide-react";
import { useAccountantAuditStore } from "../accountant_audit_store/useAccountantAuditStore";
import { AUDIT_EVENT_TYPES } from "../accountant_audit_utils/AccountantAuditConstants";
import { AuditEventType } from "../accountant_audit_types/AccountantAuditTypes";

export default function AccountantAuditActions() {
  const { 
    searchQuery, setSearchQuery, 
    eventTypeFilter, setEventTypeFilter
  } = useAccountantAuditStore();

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      
      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        <div className="relative w-full sm:w-80">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search action, user, or IP..." 
            className="w-full bg-bg-input border border-border rounded-lg pl-9 pr-4 py-2 text-sm text-text-primary focus:border-primary outline-none transition-colors"
          />
        </div>

        <select 
          value={eventTypeFilter}
          onChange={(e) => setEventTypeFilter(e.target.value as AuditEventType | 'All')}
          className="bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none cursor-pointer w-full sm:w-auto"
        >
          <option value="All">All Event Types</option>
          {AUDIT_EVENT_TYPES.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <button 
        className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold bg-bg-input text-text-primary border border-border rounded-lg hover:text-primary hover:border-primary transition-colors"
      >
        <Download size={18} /> Export Log
      </button>

    </div>
  );
}
