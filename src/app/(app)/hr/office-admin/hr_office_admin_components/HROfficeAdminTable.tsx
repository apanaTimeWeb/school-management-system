"use client";
import React from "react";
import { Settings, Package, Hammer, Trash2, Edit } from "lucide-react";
import { useHROfficeAdminStore } from "../hr_office_admin_store/useHROfficeAdminStore";
import clsx from "clsx";

export default function HROfficeAdminTable() {
  const { adminData, searchQuery, categoryFilter, statusFilter, setActionModalOpen, setSelectedRecord } = useHROfficeAdminStore();

  const filteredData = adminData.filter(record => {
    const matchesSearch = record.item.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          record.requestedBy.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = categoryFilter === "All" || record.category === categoryFilter;
    const matchesStatus = statusFilter === "All" || record.status === statusFilter;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Procured': return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'Approved': return 'text-indigo-700 bg-indigo-50 border-indigo-200';
      case 'Pending': return 'text-amber-700 bg-amber-50 border-amber-200';
      case 'Rejected': return 'text-rose-700 bg-rose-50 border-rose-200';
      default: return 'text-slate-700 bg-slate-50 border-slate-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'High': return 'text-rose-600 bg-rose-50';
      case 'Medium': return 'text-amber-600 bg-amber-50';
      case 'Low': return 'text-emerald-600 bg-emerald-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  }

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'Stationery': return <Package size={16} className="text-orange-500" />;
      case 'Maintenance': return <Hammer size={16} className="text-orange-500" />;
      case 'Housekeeping': return <Trash2 size={16} className="text-orange-500" />;
      default: return <Settings size={16} className="text-orange-500" />;
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
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Item / Request</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Requested By</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider hidden md:table-cell">Priority & Date</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredData.map((record) => (
              <tr key={record.id} className="hover:bg-bg-page/50 transition-colors group">
                <td className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-orange-50 border border-orange-100 mt-1 shrink-0">
                      {getCategoryIcon(record.category)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary group-hover:text-orange-600 transition-colors">{record.item}</p>
                      <p className="text-[11px] font-semibold text-text-secondary mt-0.5">{record.category} • {record.id}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <p className="text-sm font-bold text-text-primary">{record.requestedBy}</p>
                  <p className="text-xs font-semibold text-text-secondary">{record.department}</p>
                </td>
                <td className="p-4 hidden md:table-cell">
                  <div className="flex flex-col gap-1.5 items-start">
                    <span className={clsx("px-2 py-0.5 rounded text-[10px] font-bold border border-transparent", getPriorityColor(record.priority))}>
                      {record.priority}
                    </span>
                    <span className="text-[11px] font-bold text-text-secondary">{record.requestDate}</span>
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
                      className="px-3 py-1.5 text-xs font-bold text-orange-700 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors border border-orange-200 flex items-center gap-1.5"
                    >
                      <Edit size={14} /> Update
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-text-secondary font-semibold">
                  No requests found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
