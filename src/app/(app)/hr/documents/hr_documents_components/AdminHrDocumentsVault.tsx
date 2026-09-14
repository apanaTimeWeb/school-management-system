"use client";

import { Search, FolderOpen } from "lucide-react";
import type { EmployeeVault } from "../hr_documents_types/AdminHrDocumentsTypes";

interface AdminHrDocumentsVaultProps {
  vaultList: EmployeeVault[];
  deptFilter: string; setDeptFilter: (s: string) => void;
  searchFilter: string; setSearchFilter: (s: string) => void;
  openEmployee: (emp: EmployeeVault) => void;
}

export default function AdminHrDocumentsVault({
  vaultList, deptFilter, setDeptFilter, searchFilter, setSearchFilter, openEmployee
}: AdminHrDocumentsVaultProps) {

  const getStats = (emp: EmployeeVault) => {
    const total = emp.documents.length;
    const uploaded = emp.documents.filter(d => d.isUploaded).length;
    const verified = emp.documents.filter(d => d.status === 'Verified').length;
    const isComplete = total > 0 && verified === total;
    return { total, uploaded, verified, isComplete };
  };

  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 mb-6 p-4 bg-card border border-border rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input type="text" placeholder="Search employee..." value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)} className="pl-9 pr-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none w-full" />
          </div>
          <select value={deptFilter} onChange={(e) => setDeptFilter(e.target.value)} className="px-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none">
            <option value="All">All Departments</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Science">Science</option>
            <option value="Administration">Administration</option>
            <option value="Support">Support</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vaultList.map(emp => {
          const stats = getStats(emp);
          return (
            <div key={emp.employeeId} className="bg-card border border-border rounded-xl p-5 shadow-sm hover:border-primary/50 transition-colors group cursor-pointer" onClick={() => openEmployee(emp)}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{emp.firstName} {emp.lastName}</span>
                  <span className="text-xs font-bold text-muted-foreground">{emp.employeeId} • {emp.department}</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-input flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <FolderOpen size={18} />
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-muted-foreground">Uploaded</span>
                  <span className="font-bold text-foreground">{stats.uploaded} / {stats.total}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-muted-foreground">Verified</span>
                  <span className={`font-bold ${stats.verified === stats.total ? 'text-success' : 'text-warning'}`}>{stats.verified} / {stats.total}</span>
                </div>
              </div>

              <div className="w-full h-2 bg-input rounded-full overflow-hidden mb-2">
                <div className={`h-full transition-all duration-500 ${stats.isComplete ? 'bg-success' : 'bg-primary'}`} style={{width: `${stats.total > 0 ? (stats.verified/stats.total)*100 : 0}%`}}></div>
              </div>
              
              <div className="flex justify-end mt-4">
                <button className="text-xs font-bold text-primary hover:underline flex items-center gap-1">View Vault <FolderOpen size={12}/></button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
