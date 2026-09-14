"use client";
import React from "react";
import { Star, Edit } from "lucide-react";
import { useHRPerformanceStore } from "../hr_performance_store/useHRPerformanceStore";
import clsx from "clsx";

export default function HRPerformanceTable() {
  const { performanceData, searchQuery, departmentFilter, statusFilter, setActionModalOpen, setSelectedRecord } = useHRPerformanceStore();

  const filteredData = performanceData.filter(record => {
    const matchesSearch = record.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          record.employeeId.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDept = departmentFilter === "All" || record.department === departmentFilter;
    const matchesStatus = statusFilter === "All" || record.status === statusFilter;
    
    return matchesSearch && matchesDept && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Reviewed': return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'Pending': return 'text-rose-700 bg-rose-50 border-rose-200';
      case 'In Progress': return 'text-amber-700 bg-amber-50 border-amber-200';
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
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider hidden md:table-cell">Department & Role</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Rating</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredData.map((record) => (
              <tr key={record.id} className="hover:bg-bg-page/50 transition-colors group">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold shrink-0">
                      {record.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary group-hover:text-yellow-600 transition-colors">{record.name}</p>
                      <p className="text-xs font-semibold text-text-secondary">{record.employeeId}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 hidden md:table-cell">
                  <p className="text-sm font-bold text-text-primary">{record.role}</p>
                  <p className="text-[11px] font-semibold text-text-secondary uppercase tracking-wide">{record.department}</p>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1.5">
                    {record.status === 'Reviewed' ? (
                      <>
                        <Star size={16} className="text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-black text-text-primary">{record.rating} <span className="text-xs font-semibold text-text-secondary">/ 5</span></span>
                      </>
                    ) : (
                      <span className="text-xs font-semibold text-text-secondary">Not Rated</span>
                    )}
                  </div>
                  <p className="text-[10px] font-bold text-text-secondary mt-1">{record.appraisalCycle}</p>
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
                      className="px-3 py-1.5 text-xs font-bold text-yellow-700 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors border border-yellow-200 flex items-center gap-1.5"
                    >
                      <Edit size={14} /> Review
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-text-secondary font-semibold">
                  No performance records found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
