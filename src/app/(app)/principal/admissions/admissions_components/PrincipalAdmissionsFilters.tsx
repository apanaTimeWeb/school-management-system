"use client";
import React from 'react';
import { Search, Filter } from 'lucide-react';
import { usePrincipalAdmissionsStore } from '../admissions_store/usePrincipalAdmissionsStore';

export default function PrincipalAdmissionsFilters() {
  const { filters, setFilters } = usePrincipalAdmissionsStore();

  return (
    <div className="bg-card border border-border p-4 rounded-lg mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
      
      {/* Search */}
      <div className="relative w-full md:w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={16} />
        <input 
          type="text"
          placeholder="Search applicant name or app no..."
          value={filters.searchQuery}
          onChange={(e) => setFilters({ searchQuery: e.target.value })}
          className="w-full bg-input border border-border rounded-md pl-9 pr-4 py-2 text-[13px] text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary transition-all"
        />
      </div>

      {/* Stage Filter */}
      <div className="w-full md:w-auto flex items-center gap-3">
        <div className="flex items-center gap-2 text-text-secondary bg-page px-3 py-2 rounded-md border border-border">
          <Filter size={14} />
          <span className="text-[13px] font-medium">Stage:</span>
          <select 
            value={filters.stageFilter}
            onChange={(e) => setFilters({ stageFilter: e.target.value })}
            className="bg-transparent border-none text-[13px] font-bold text-text-primary focus:outline-none cursor-pointer"
          >
            <option value="All">All Applications</option>
            <option value="Enquiry">Enquiry</option>
            <option value="Applied">Applied</option>
            <option value="Review">Review Pending</option>
            <option value="Document Verification">Document Verification</option>
            <option value="Interview">Interview</option>
            <option value="Test">Admission Test</option>
            <option value="Selected">Selected</option>
            <option value="Waitlisted">Waitlisted</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>
      
    </div>
  );
}
