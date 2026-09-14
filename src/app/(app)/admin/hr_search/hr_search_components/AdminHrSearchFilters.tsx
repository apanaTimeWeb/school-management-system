"use client";

import { Search, SlidersHorizontal, XCircle } from "lucide-react";
import type { SearchFiltersState } from "../hr_search_types/AdminHrSearchTypes";

interface AdminHrSearchFiltersProps {
  filters: SearchFiltersState;
  setFilters: React.Dispatch<React.SetStateAction<SearchFiltersState>>;
  clearFilters: () => void;
}

export default function AdminHrSearchFilters({ filters, setFilters, clearFilters }: AdminHrSearchFiltersProps) {

  const handleTextChange = (field: keyof SearchFiltersState, val: string) => {
    setFilters(prev => ({ ...prev, [field]: val }));
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-5 mb-6 motion-safe:animate-in motion-safe:fade-in duration-300">
      
      <div className="flex justify-between items-center mb-4 border-b border-border pb-3">
        <h2 className="text-sm font-bold text-foreground flex items-center gap-2">
          <SlidersHorizontal size={16} className="text-primary"/> Advanced Search Filters
        </h2>
        <button onClick={clearFilters} className="text-xs font-bold text-muted-foreground hover:text-danger flex items-center gap-1 transition-colors">
          <XCircle size={14}/> Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Main Keyword */}
        <div className="lg:col-span-2">
          <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">Search Name or ID</label>
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input type="text" placeholder="e.g. Amit Sharma or EMP-001" value={filters.keyword} onChange={(e) => handleTextChange('keyword', e.target.value)} className="w-full pl-9 pr-3 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary" />
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">Department</label>
          <select value={filters.department} onChange={(e) => handleTextChange('department', e.target.value)} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary">
            <option value="All">All Departments</option>
            <option value="Science">Science</option>
            <option value="Administration">Administration</option>
            <option value="Sports">Sports</option>
            <option value="Library">Library</option>
            <option value="Security">Security</option>
            <option value="Mathematics">Mathematics</option>
          </select>
        </div>

        <div>
          <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">Designation</label>
          <select value={filters.designation} onChange={(e) => handleTextChange('designation', e.target.value)} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary">
            <option value="All">All Roles</option>
            <option value="Teacher">Teacher</option>
            <option value="Senior Teacher">Senior Teacher</option>
            <option value="HR Manager">HR Manager</option>
            <option value="PTI">PTI</option>
            <option value="Librarian">Librarian</option>
            <option value="Chief Guard">Chief Guard</option>
          </select>
        </div>

        <div>
          <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">Employment Type</label>
          <select value={filters.employmentType} onChange={(e) => handleTextChange('employmentType', e.target.value)} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary">
            <option value="All">All Types</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>

        <div>
          <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">Status</label>
          <select value={filters.status} onChange={(e) => handleTextChange('status', e.target.value)} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary">
            <option value="All">All Statuses</option>
            <option value="Active">Active</option>
            <option value="On Leave">On Leave</option>
            <option value="Resigned">Resigned</option>
            <option value="Terminated">Terminated</option>
          </select>
        </div>

        <div className="flex gap-2">
          <div className="w-1/2">
            <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">Join From</label>
            <input type="date" value={filters.joiningDateFrom} onChange={(e) => handleTextChange('joiningDateFrom', e.target.value)} className="w-full px-2 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary" />
          </div>
          <div className="w-1/2">
             <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">Join To</label>
             <input type="date" value={filters.joiningDateTo} onChange={(e) => handleTextChange('joiningDateTo', e.target.value)} className="w-full px-2 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary" />
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">Document Status</label>
          <select value={filters.documentStatus} onChange={(e) => handleTextChange('documentStatus', e.target.value)} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary">
            <option value="All">All Statuses</option>
            <option value="Verified">Verified</option>
            <option value="Pending">Pending</option>
            <option value="Expired">Expired</option>
          </select>
        </div>

        <div>
          <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase tracking-wider">Location / Branch</label>
          <select value={filters.location} onChange={(e) => handleTextChange('location', e.target.value)} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary">
            <option value="All">All Branches</option>
            <option value="Main Campus">Main Campus</option>
            <option value="North Branch">North Branch</option>
            <option value="South Branch">South Branch</option>
          </select>
        </div>

      </div>
    </div>
  );
}
