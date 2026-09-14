"use client";
import React from "react";
import { ArrowRight, Eye, CheckCircle, XCircle } from "lucide-react";
import { useHRTransfersStore } from "../hr_transfers_store/useHRTransfersStore";
import clsx from "clsx";

export default function HRTransfersTable() {
  const { transferData, searchQuery, typeFilter, statusFilter, setActionModalOpen, setSelectedRecord } = useHRTransfersStore();

  const filteredData = transferData.filter(record => {
    const matchesSearch = record.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          record.employeeId.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = typeFilter === "All" || record.type === typeFilter;
    const matchesStatus = statusFilter === "All" || record.status === statusFilter;
    
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

  const getTypeColor = (type: string) => {
    return type === 'Promotion' ? 'text-indigo-700 bg-indigo-50 border-indigo-200' : 'text-pink-700 bg-pink-50 border-pink-200';
  }

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
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Type</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Details</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredData.map((record) => (
              <tr key={record.id} className="hover:bg-bg-page/50 transition-colors group">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 font-bold shrink-0">
                      {record.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary group-hover:text-pink-600 transition-colors">{record.name}</p>
                      <p className="text-xs font-semibold text-text-secondary">{record.employeeId}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span className={clsx("px-2.5 py-1 rounded-md text-[11px] font-bold border inline-block", getTypeColor(record.type))}>
                    {record.type}
                  </span>
                  <p className="text-[11px] font-semibold text-text-secondary mt-1">Effective: {record.effectiveDate}</p>
                </td>
                <td className="p-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-text-secondary uppercase w-16">Role:</span>
                      <div className="flex items-center gap-2 text-xs font-semibold text-text-primary">
                        <span className="truncate max-w-[120px]" title={record.currentRole}>{record.currentRole}</span>
                        <ArrowRight size={12} className="text-text-secondary shrink-0" />
                        <span className="truncate max-w-[120px] font-bold text-pink-600" title={record.newRole}>{record.newRole}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-text-secondary uppercase w-16">Dept:</span>
                      <div className="flex items-center gap-2 text-xs font-semibold text-text-primary">
                        <span className="truncate max-w-[120px]" title={record.currentDepartment}>{record.currentDepartment}</span>
                        <ArrowRight size={12} className="text-text-secondary shrink-0" />
                        <span className="truncate max-w-[120px]" title={record.newDepartment}>{record.newDepartment}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span className={clsx("px-2.5 py-1 rounded-md text-[11px] font-bold border", getStatusColor(record.status))}>
                    {record.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button 
                    onClick={() => handleAction(record)}
                    className="px-3 py-1.5 text-xs font-bold text-pink-600 bg-pink-50 hover:bg-pink-100 rounded-lg transition-colors border border-pink-200"
                  >
                    Review
                  </button>
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
