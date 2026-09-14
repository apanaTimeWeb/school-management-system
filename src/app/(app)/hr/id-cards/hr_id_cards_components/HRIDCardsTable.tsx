"use client";
import React from "react";
import { Printer, Eye } from "lucide-react";
import { useHRIDCardsStore } from "../hr_id_cards_store/useHRIDCardsStore";
import clsx from "clsx";

export default function HRIDCardsTable() {
  const { idCardsData, searchQuery, statusFilter, setActionModalOpen, setSelectedRecord } = useHRIDCardsStore();

  const filteredData = idCardsData.filter(record => {
    const matchesSearch = record.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          record.employeeId.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "All" || record.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Printed': return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'Generated': return 'text-indigo-700 bg-indigo-50 border-indigo-200';
      case 'Pending': return 'text-amber-700 bg-amber-50 border-amber-200';
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
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider hidden md:table-cell">Role & Details</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Card Validity</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredData.map((record) => (
              <tr key={record.id} className="hover:bg-bg-page/50 transition-colors group">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold shrink-0">
                      {record.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary group-hover:text-indigo-600 transition-colors">{record.name}</p>
                      <p className="text-xs font-semibold text-text-secondary">{record.employeeId}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 hidden md:table-cell">
                  <p className="text-sm font-bold text-text-primary">{record.role}</p>
                  <p className="text-[11px] font-semibold text-text-secondary">Blood Grp: {record.bloodGroup} | Emg: {record.emergencyContact}</p>
                </td>
                <td className="p-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold text-text-primary">{record.validUntil}</span>
                    {record.issueDate && <span className="text-[10px] font-semibold text-text-secondary">Issued: {record.issueDate}</span>}
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
                      className="p-2 text-text-secondary hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors border border-transparent hover:border-indigo-200"
                      title="Preview ID Card"
                    >
                      <Eye size={16} />
                    </button>
                    {record.status !== 'Pending' && (
                      <button 
                        className="px-3 py-1.5 text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors border border-indigo-200 flex items-center gap-1.5"
                      >
                        <Printer size={14} /> Print
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-text-secondary font-semibold">
                  No ID card records found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
