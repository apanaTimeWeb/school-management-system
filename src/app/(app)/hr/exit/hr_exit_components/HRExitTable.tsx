"use client";
import React from "react";
import { UserMinus, CheckCircle } from "lucide-react";
import { useHRExitStore } from "../hr_exit_store/useHRExitStore";
import clsx from "clsx";

export default function HRExitTable() {
  const { exitData, searchQuery, statusFilter, setActionModalOpen, setSelectedRecord } = useHRExitStore();

  const filteredData = exitData.filter(record => {
    const matchesSearch = record.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          record.employeeId.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "All" || record.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Relieved': return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'Terminated': return 'text-rose-700 bg-rose-50 border-rose-200';
      case 'Notice Period': return 'text-amber-700 bg-amber-50 border-amber-200';
      case 'Clearance Pending': return 'text-blue-700 bg-blue-50 border-blue-200';
      case 'Resigned': return 'text-slate-700 bg-slate-50 border-slate-200';
      default: return 'text-slate-700 bg-slate-50 border-slate-200';
    }
  };

  const handleAction = (record: any) => {
    setSelectedRecord(record);
    setActionModalOpen(true);
  };

  return (
    <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-bg-input border-b border-border">
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Employee</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Department & Role</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider hidden md:table-cell">Key Dates</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredData.map((record) => (
              <tr key={record.id} className="hover:bg-bg-page/50 transition-colors group">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 font-bold shrink-0">
                      {record.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary group-hover:text-rose-600 transition-colors">{record.name}</p>
                      <p className="text-xs font-semibold text-text-secondary">{record.employeeId}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <p className="text-sm font-bold text-text-primary">{record.role}</p>
                  <p className="text-xs font-semibold text-text-secondary">{record.department}</p>
                </td>
                <td className="p-4 hidden md:table-cell">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-text-primary">LWD: {record.lastWorkingDay}</span>
                    <span className="text-[10px] font-semibold text-text-secondary">Resigned: {record.resignationDate}</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className={clsx("px-2.5 py-1 rounded-md text-[11px] font-bold border", getStatusColor(record.status))}>
                    {record.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button 
                      onClick={() => handleAction(record)}
                      className="px-3 py-1.5 text-xs font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-lg transition-colors border border-rose-200 flex items-center gap-1.5"
                    >
                      <CheckCircle size={14} /> Process Exit
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-text-secondary font-semibold">
                  No records found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
