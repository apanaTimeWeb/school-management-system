"use client";
import React from "react";
import { Eye, ShieldAlert, FileEdit, XCircle, Undo2, Gift, Wallet } from "lucide-react";
import { MOCK_AUDIT_LOGS } from "../accountant_audit_utils/AccountantAuditConstants";
import { useAccountantAuditStore } from "../accountant_audit_store/useAccountantAuditStore";
import clsx from "clsx";

export default function AccountantAuditTable() {
  const { searchQuery, eventTypeFilter, setSelectedLog, setViewModalOpen } = useAccountantAuditStore();

  const filteredData = MOCK_AUDIT_LOGS.filter(log => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = log.what.toLowerCase().includes(searchLower) || 
                          log.who.toLowerCase().includes(searchLower) ||
                          log.ipDevice.toLowerCase().includes(searchLower);
    const matchesFilter = eventTypeFilter === 'All' || log.eventType === eventTypeFilter;
    
    return matchesSearch && matchesFilter;
  });

  const getEventIcon = (type: string) => {
    switch(type) {
      case 'Fee Edit': return <FileEdit size={16} className="text-info" />;
      case 'Payment Cancellation': return <XCircle size={16} className="text-danger" />;
      case 'Receipt Cancellation': return <XCircle size={16} className="text-danger" />;
      case 'Refund': return <Undo2 size={16} className="text-primary" />;
      case 'Concession': return <Gift size={16} className="text-success" />;
      case 'Fine Waiver': return <ShieldAlert size={16} className="text-warning" />;
      case 'Expense Edit': return <Wallet size={16} className="text-info" />;
      default: return <FileEdit size={16} className="text-text-secondary" />;
    }
  };

  const handleView = (log: any) => {
    setSelectedLog(log);
    setViewModalOpen(true);
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col flex-1 h-full">
      <div className="overflow-x-auto w-full flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] uppercase text-text-secondary font-semibold">
              <th className="p-4 w-40">Timestamp</th>
              <th className="p-4 w-48">Actor (Who)</th>
              <th className="p-4">Action (What)</th>
              <th className="p-4 w-40 text-center">Event Type</th>
              <th className="p-4 w-32 text-right">Amount</th>
              <th className="p-4 w-20 text-center">Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((log, index) => (
              <tr 
                key={log.id} 
                className={clsx(
                  "border-b border-border/50 hover:bg-bg-input transition-colors group",
                  index % 2 === 0 ? "bg-transparent" : "bg-bg-page/30"
                )}
              >
                <td className="p-4 text-xs font-semibold text-text-secondary whitespace-nowrap">
                  {log.when}
                </td>
                <td className="p-4 text-sm font-bold text-text-primary">
                  {log.who}
                  <div className="text-[10px] text-text-secondary font-normal mt-0.5">{log.ipDevice}</div>
                </td>
                <td className="p-4 text-sm font-semibold text-text-secondary truncate max-w-[200px]" title={log.what}>
                  {log.what}
                </td>
                <td className="p-4 text-center">
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-bg-page border border-border rounded text-[11px] font-bold text-text-primary whitespace-nowrap">
                    {getEventIcon(log.eventType)} {log.eventType}
                  </span>
                </td>
                <td className="p-4 text-sm font-bold text-text-primary text-right whitespace-nowrap">
                  {log.amount !== null ? `₹${log.amount.toLocaleString()}` : '-'}
                </td>
                <td className="p-4 text-center">
                  <button 
                    onClick={() => handleView(log)}
                    className="p-1.5 text-text-secondary hover:text-primary bg-bg-page rounded-md hover:bg-primary/10 transition-colors"
                  >
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={6} className="p-8 text-center text-text-secondary text-sm">
                  No audit logs found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      <div className="p-4 border-t border-border flex justify-between items-center text-xs text-text-secondary bg-bg-page shrink-0">
        <span>Showing {filteredData.length} records</span>
      </div>
    </div>
  );
}
