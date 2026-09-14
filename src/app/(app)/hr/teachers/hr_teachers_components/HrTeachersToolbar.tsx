"use client";

import { Search, Filter, Plus, FileDown } from "lucide-react";

interface HrTeachersToolbarProps {
  search: string;
  setSearch: (s: string) => void;
  status: string;
  setStatus: (s: string) => void;
  department: string;
  setDepartment: (s: string) => void;
}

export default function HrTeachersToolbar({
  search, setSearch, status, setStatus, department, setDepartment
}: HrTeachersToolbarProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 p-4 bg-card border border-border rounded-lg shadow-sm">
      <div className="flex flex-col md:flex-row gap-3 w-full lg:w-auto">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search teacher..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 pr-4 py-2 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary focus:outline-none w-full md:w-64"
          />
        </div>
        
        <select 
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="px-4 py-2 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary focus:outline-none"
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="On Leave">On Leave</option>
          <option value="Inactive">Inactive</option>
        </select>
        
        <select 
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="px-4 py-2 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary focus:outline-none"
        >
          <option value="All">All Departments</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Science">Science</option>
          <option value="Humanities">Humanities</option>
        </select>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-input border border-border text-foreground font-semibold rounded-md hover:border-primary hover:text-primary transition-all active:scale-95 text-sm w-full sm:w-auto">
          <FileDown size={16} /> Export
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-card font-bold rounded-md hover:bg-yellow-500 shadow-lg shadow-primary/20 transition-all active:scale-95 text-sm w-full sm:w-auto">
          <Plus size={16} /> Add Teacher
        </button>
      </div>
    </div>
  );
}

