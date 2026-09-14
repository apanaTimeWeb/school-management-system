"use client";
import React from "react";
import { Eye, CheckCircle, XCircle } from "lucide-react";
import { useHRLeavesStore } from "../hr_leaves_store/useHRLeavesStore";
import clsx from "clsx";

export default function HRLeavesTable() {
  const { leaves, searchQuery, typeFilter, statusFilter, setActionModalOpen, setSelectedLeave } = useHRLeavesStore();

  const filteredLeaves = leaves.filter(leave => {
    const matchesSearch = leave.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          leave.employeeId.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = typeFilter === "All" || leave.leaveType === typeFilter;
    const matchesStatus = statusFilter === "All" || leave.status === statusFilter;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Approved': return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'Rejected': return 'text-rose-700 bg-rose-50 border-rose-200';
      case 'Pending': return 'text-amber-700 bg-amber-50 border-amber-200';
      default: return 'text-slate-700 bg-slate-50 border-slate-200';
    }
  };

  const handleAction = (leave: any) => {
    setSelectedLeave(leave);
    setActionModalOpen(true);
  };

  return (
    <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-bg-input border-b border-border">
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Employee</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Leave Details</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider hidden md:table-cell">Duration</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredLeaves.map((leave) => (
              <tr key={leave.id} className="hover:bg-bg-page/50 transition-colors group">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold shrink-0">
                      {leave.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary group-hover:text-amber-600 transition-colors">{leave.name}</p>
                      <p className="text-xs font-semibold text-text-secondary">{leave.role} ({leave.employeeId})</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <p className="text-sm font-bold text-text-primary">{leave.leaveType} Leave</p>
                  <p className="text-xs font-semibold text-text-secondary truncate max-w-[200px]" title={leave.reason}>{leave.reason}</p>
                </td>
                <td className="p-4 hidden md:table-cell">
                  <p className="text-sm font-semibold text-text-primary">{leave.startDate} to {leave.endDate}</p>
                  <p className="text-[11px] font-bold text-text-secondary mt-0.5">{leave.days} Day(s)</p>
                </td>
                <td className="p-4">
                  <span className={clsx("px-2.5 py-1 rounded-md text-[11px] font-bold border", getStatusColor(leave.status))}>
                    {leave.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button 
                    onClick={() => handleAction(leave)}
                    className="px-3 py-1.5 text-xs font-bold text-amber-600 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors border border-amber-200"
                  >
                    Review
                  </button>
                </td>
              </tr>
            ))}
            {filteredLeaves.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-text-secondary font-semibold">
                  No leave requests found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
