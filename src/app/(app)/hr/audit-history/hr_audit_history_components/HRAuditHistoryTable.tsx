"use client";
import React from "react";
import { History, ShieldAlert, CheckCircle2, AlertTriangle, MonitorSmartphone } from "lucide-react";
import { useHRAuditHistoryStore } from "../hr_audit_history_store/useHRAuditHistoryStore";
import clsx from "clsx";

export default function HRAuditHistoryTable() {
  const { auditData, searchQuery, moduleFilter, statusFilter } = useHRAuditHistoryStore();

  const filteredData = auditData.filter(record => {
    const matchesSearch = record.action.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          record.performedBy.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesModule = moduleFilter === "All" || record.module === moduleFilter;
    const matchesStatus = statusFilter === "All" || record.status === statusFilter;
    
    return matchesSearch && matchesModule && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Success': return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'Failed': return 'text-rose-700 bg-rose-50 border-rose-200';
      case 'Warning': return 'text-amber-700 bg-amber-50 border-amber-200';
      default: return 'text-slate-700 bg-slate-50 border-slate-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'Success': return <CheckCircle2 size={16} className="text-emerald-500" />;
      case 'Failed': return <ShieldAlert size={16} className="text-rose-500" />;
      case 'Warning': return <AlertTriangle size={16} className="text-amber-500" />;
      default: return <History size={16} className="text-slate-500" />;
    }
  }

  return (
    <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-bg-input border-b border-border">
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Log ID & Action</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider hidden md:table-cell">Module & User</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Timestamp & IP</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredData.map((record) => (
              <tr key={record.id} className="hover:bg-bg-page/50 transition-colors group">
                <td className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-bg-input border border-border mt-1 shrink-0">
                      {getStatusIcon(record.status)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary group-hover:text-slate-700 transition-colors">{record.action}</p>
                      <p className="text-[11px] font-semibold text-text-secondary mt-0.5">{record.id}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 hidden md:table-cell">
                  <p className="text-sm font-bold text-text-primary">{record.performedBy}</p>
                  <p className="text-[11px] font-semibold text-text-secondary uppercase tracking-wide mt-0.5">{record.module}</p>
                </td>
                <td className="p-4">
                  <div className="flex flex-col gap-1.5 items-start">
                    <span className="text-[11px] font-bold text-text-primary">{record.timestamp}</span>
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-bg-page border border-border text-text-secondary">
                      <MonitorSmartphone size={10} /> {record.ipAddress}
                    </span>
                  </div>
                </td>
                <td className="p-4">
                  <span className={clsx("px-2.5 py-1 rounded-md text-[11px] font-bold border flex items-center gap-1.5 w-max", getStatusColor(record.status))}>
                    {record.status}
                  </span>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={4} className="p-8 text-center text-text-secondary font-semibold">
                  No audit logs found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
