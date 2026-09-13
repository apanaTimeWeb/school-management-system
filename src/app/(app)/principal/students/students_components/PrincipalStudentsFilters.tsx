"use client";
// RESPONSIBILITY: Renders the search bar and filter dropdowns for the Student List. Updates the Zustand store.
import React from 'react';
import { Search, Filter, X } from 'lucide-react';
import { usePrincipalStudentsStore } from '../students_store/usePrincipalStudentsStore';

export default function PrincipalStudentsFilters() {
  const { filters, setFilters, resetFilters } = usePrincipalStudentsStore();

  const activeFilterCount = (filters.classFilter ? 1 : 0) + (filters.sectionFilter ? 1 : 0) + (filters.statusFilter ? 1 : 0);

  return (
    <div className="bg-card border border-border rounded-lg p-4 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
      <div className="relative w-full md:w-96">
        <Search className="absolute left-3 top-2.5 text-text-secondary" size={18} />
        <input
          type="text"
          placeholder="Search by name, roll no, admission no..."
          value={filters.searchQuery}
          onChange={(e) => setFilters({ searchQuery: e.target.value })}
          className="w-full bg-input border border-border rounded-md pl-10 pr-4 py-2 text-[14px] text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent transition-all"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
        <div className="flex items-center gap-2 px-3 py-2 bg-page border border-border rounded-md text-[13px] text-text-secondary">
          <Filter size={16} /> Filters
          {activeFilterCount > 0 && (
            <span className="bg-primary text-black px-1.5 rounded-full text-[11px] font-bold">
              {activeFilterCount}
            </span>
          )}
        </div>

        <select
          value={filters.classFilter}
          onChange={(e) => setFilters({ classFilter: e.target.value })}
          className="bg-input border border-border rounded-md px-3 py-2 text-[13px] text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
        >
          <option value="">All Classes</option>
          <option value="10">Class 10</option>
          <option value="11">Class 11</option>
          <option value="12">Class 12</option>
        </select>

        <select
          value={filters.sectionFilter}
          onChange={(e) => setFilters({ sectionFilter: e.target.value })}
          className="bg-input border border-border rounded-md px-3 py-2 text-[13px] text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
        >
          <option value="">All Sections</option>
          <option value="A">Section A</option>
          <option value="B">Section B</option>
          <option value="C">Section C</option>
        </select>

        <select
          value={filters.statusFilter}
          onChange={(e) => setFilters({ statusFilter: e.target.value })}
          className="bg-input border border-border rounded-md px-3 py-2 text-[13px] text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
        >
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Transferred">Transferred</option>
          <option value="Suspended">Suspended</option>
        </select>

        {activeFilterCount > 0 && (
          <button
            onClick={resetFilters}
            className="flex items-center gap-1 text-[13px] text-danger hover:text-danger/80 transition-colors px-2 py-2"
          >
            <X size={14} /> Clear
          </button>
        )}
      </div>
    </div>
  );
}
