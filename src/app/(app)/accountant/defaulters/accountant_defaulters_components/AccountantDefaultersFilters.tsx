"use client";
import React from "react";
import { Search, Download, MessageSquare } from "lucide-react";
import { useAccountantDefaultersStore } from "../accountant_defaulters_store/useAccountantDefaultersStore";

export default function AccountantDefaultersFilters() {
  const { 
    searchQuery, setSearchQuery, 
    classFilter, setClassFilter, 
    sectionFilter, setSectionFilter 
  } = useAccountantDefaultersStore();

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-4 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
      
      <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto">
        <div className="relative w-full sm:w-64">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search student or ID..." 
            className="w-full bg-bg-input border border-border rounded-lg pl-9 pr-4 py-2.5 text-sm text-text-primary focus:border-primary outline-none transition-colors"
          />
        </div>

        <select 
          value={classFilter}
          onChange={(e) => setClassFilter(e.target.value)}
          className="bg-bg-input border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary focus:border-primary outline-none cursor-pointer w-full sm:w-32"
        >
          <option value="All">All Classes</option>
          <option value="8th">8th</option>
          <option value="9th">9th</option>
          <option value="10th">10th</option>
          <option value="11th">11th</option>
          <option value="12th">12th</option>
        </select>

        <select 
          value={sectionFilter}
          onChange={(e) => setSectionFilter(e.target.value)}
          className="bg-bg-input border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary focus:border-primary outline-none cursor-pointer w-full sm:w-32"
        >
          <option value="All">All Sections</option>
          <option value="A">Section A</option>
          <option value="B">Section B</option>
          <option value="Com">Commerce</option>
          <option value="Sci">Science</option>
        </select>
      </div>

      <div className="flex gap-2 w-full xl:w-auto">
        <button 
          onClick={() => alert("Bulk reminder emails initiated.")}
          className="flex-1 xl:flex-none flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold bg-primary text-black rounded-lg hover:bg-primary-hover shadow-md transition-colors"
        >
          <MessageSquare size={16} /> Remind All Pending
        </button>
        <button className="flex-1 xl:flex-none flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold bg-bg-input text-text-primary rounded-lg border border-border hover:bg-primary/10 hover:text-primary transition-colors">
          <Download size={16} /> Export List
        </button>
      </div>

    </div>
  );
}
