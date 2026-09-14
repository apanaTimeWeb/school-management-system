"use client";

import { Search, ChevronRight } from "lucide-react";
import type { EmployeePayrollRecord } from "../hr_payroll_types/HrPayrollTypes";

interface HrPayrollListProps {
  records: EmployeePayrollRecord[];
  periodFilter: string; setPeriodFilter: (s: string) => void;
  statusFilter: string; setStatusFilter: (s: string) => void;
  searchFilter: string; setSearchFilter: (s: string) => void;
  openRecord: (r: EmployeePayrollRecord) => void;
}

export default function HrPayrollList({
  records, periodFilter, setPeriodFilter, statusFilter, setStatusFilter, searchFilter, setSearchFilter, openRecord
}: HrPayrollListProps) {

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Pending': return <span className="bg-warning/10 text-warning border border-warning/20 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">{status}</span>;
      case 'On Hold': return <span className="bg-danger/10 text-danger border border-danger/20 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">{status}</span>;
      case 'Processed': return <span className="bg-success/10 text-success border border-success/20 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">{status}</span>;
      default: return <span>{status}</span>;
    }
  };

  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
      
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6 p-4 bg-card border border-border rounded-lg shadow-sm">
        <div className="relative w-full sm:w-64">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input type="text" placeholder="Search employee..." value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)} className="pl-9 pr-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none w-full" />
        </div>
        <select value={periodFilter} onChange={(e) => setPeriodFilter(e.target.value)} className="px-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none">
          <option value="August 2024">August 2024</option>
          <option value="July 2024">July 2024</option>
          <option value="June 2024">June 2024</option>
        </select>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="px-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none">
          <option value="All">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Processed">Processed</option>
          <option value="On Hold">On Hold</option>
        </select>
      </div>

      {/* Table */}
      {records.length === 0 ? (
         <div className="w-full p-12 flex flex-col items-center justify-center bg-card border border-border rounded-lg border-dashed">
           <span className="text-muted-foreground text-sm font-bold">No payroll records found.</span>
         </div>
      ) : (
        <div className="w-full overflow-x-auto bg-card border border-border rounded-lg shadow-sm">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="border-b border-border bg-input/50">
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Employee</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Role & Dept</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider text-right">Gross Salary</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider text-right">Net Payout</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {records.map(rec => (
                <tr key={rec.id} className="border-b border-border hover:bg-primary/5 transition-colors group cursor-pointer" onClick={() => openRecord(rec)}>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{rec.employeeName}</span>
                      <span className="text-xs font-medium text-muted-foreground">{rec.employeeId}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-foreground">{rec.designation}</span>
                      <span className="text-xs font-medium text-muted-foreground">{rec.department}</span>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <span className="text-sm font-bold text-foreground">₹{rec.grossSalary.toLocaleString()}</span>
                  </td>
                  <td className="p-4 text-right">
                    <span className="text-sm font-bold text-success">₹{rec.netSalary.toLocaleString()}</span>
                  </td>
                  <td className="p-4">{getStatusBadge(rec.status)}</td>
                  <td className="p-4 text-right">
                    <button className="p-2 bg-input text-foreground hover:bg-primary hover:text-white rounded-full transition-colors inline-flex items-center justify-center">
                      <ChevronRight size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

