"use client";
import React from "react";
import { Eye, FileCheck } from "lucide-react";
import { useHROnboardingStore } from "../hr_onboarding_store/useHROnboardingStore";
import clsx from "clsx";

export default function HROnboardingTable() {
  const { onboardingData, searchQuery, statusFilter, setActionModalOpen, setSelectedRecord } = useHROnboardingStore();

  const filteredData = onboardingData.filter(record => {
    const matchesSearch = record.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          record.position.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "All" || record.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Completed': return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'Delayed': return 'text-rose-700 bg-rose-50 border-rose-200';
      case 'In Progress': return 'text-sky-700 bg-sky-50 border-sky-200';
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
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">New Hire</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Position & Dept</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider hidden md:table-cell">Joining Date</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Progress</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredData.map((record) => (
              <tr key={record.id} className="hover:bg-bg-page/50 transition-colors group">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 font-bold shrink-0">
                      {record.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary group-hover:text-sky-600 transition-colors">{record.name}</p>
                      <span className={clsx("mt-0.5 inline-block px-1.5 py-0.5 rounded text-[10px] font-bold border", getStatusColor(record.status))}>
                        {record.status}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <p className="text-sm font-bold text-text-primary">{record.position}</p>
                  <p className="text-xs font-semibold text-text-secondary">{record.department}</p>
                </td>
                <td className="p-4 hidden md:table-cell">
                  <p className="text-sm font-semibold text-text-primary">{record.joiningDate}</p>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-border rounded-full overflow-hidden w-24 sm:w-32">
                      <div 
                        className={clsx(
                          "h-full transition-all",
                          record.progress === 100 ? "bg-emerald-500" : "bg-sky-500"
                        )}
                        style={{ width: `${record.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-bold text-text-secondary min-w-[3ch]">{record.progress}%</span>
                  </div>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button 
                      onClick={() => handleAction(record)}
                      className="px-3 py-1.5 text-xs font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors border border-sky-200 flex items-center gap-1.5"
                    >
                      <FileCheck size={14} /> Tasks
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
