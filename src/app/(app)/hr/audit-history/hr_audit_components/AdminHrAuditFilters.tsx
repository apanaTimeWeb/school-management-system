"use client";

import { Search, Filter, XCircle } from "lucide-react";
import type { AuditFiltersState } from "../hr_audit_types/AdminHrAuditTypes";

interface AdminHrAuditFiltersProps {
  filters: AuditFiltersState;
  setFilters: React.Dispatch<React.SetStateAction<AuditFiltersState>>;
  clearFilters: () => void;
}

export default function AdminHrAuditFilters({ filters, setFilters, clearFilters }: AdminHrAuditFiltersProps) {

  const handleTextChange = (field: keyof AuditFiltersState, val: string) => {
    setFilters(prev => ({ ...prev, [field]: val }));
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-5 mb-6 motion-safe:animate-in motion-safe:fade-in duration-300">
      
      <div className="flex justify-between items-center mb-4 border-b border-border pb-3">
        <h2 className="text-sm font-bold text-foreground flex items-center gap-2">
          <Filter size={16} className="text-primary"/> Audit Log Filters
        </h2>
        <button onClick={clearFilters} className="text-xs font-bold text-muted-foreground hover:text-danger flex items-center gap-1 transition-colors">
          <XCircle size={14}/> Reset
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="lg:col-span-2">
          <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">Search Target or Performer</label>
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input type="text" placeholder="e.g. Amit Sharma or Admin" value={filters.searchStr} onChange={(e) => handleTextChange('searchStr', e.target.value)} className="w-full pl-9 pr-3 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary" />
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">Action Type</label>
          <select value={filters.actionType} onChange={(e) => handleTextChange('actionType', e.target.value)} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary">
            <option value="All">All Actions</option>
            <option value="Employee Created">Employee Created</option>
            <option value="Employee Updated">Employee Updated</option>
            <option value="Salary Data Changed">Salary Data Changed</option>
            <option value="Leave Approved">Leave Approved</option>
            <option value="Document Updated">Document Updated</option>
            <option value="Designation Changed">Designation Changed</option>
            <option value="Transfer">Transfer</option>
            <option value="Promotion">Promotion</option>
            <option value="Exit">Exit</option>
            <option value="Access Request">Access Request</option>
          </select>
        </div>

        <div className="flex gap-2">
          <div className="w-1/2">
            <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">From Date</label>
            <input type="date" value={filters.dateFrom} onChange={(e) => handleTextChange('dateFrom', e.target.value)} className="w-full px-2 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary" />
          </div>
          <div className="w-1/2">
             <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">To Date</label>
             <input type="date" value={filters.dateTo} onChange={(e) => handleTextChange('dateTo', e.target.value)} className="w-full px-2 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary" />
          </div>
        </div>

      </div>
    </div>
  );
}
