"use client";
import React from "react";
import { CheckCircle, AlertTriangle, ShieldAlert, GitMerge } from "lucide-react";
import { MOCK_RECON_RECORDS, formatCurrency } from "../accountant_reconciliation_utils/AccountantReconConstants";
import { useAccountantReconStore } from "../accountant_reconciliation_store/useAccountantReconStore";
import clsx from "clsx";

export default function AccountantReconTable() {
  const { 
    searchQuery, activeTab, statusFilter,
    setSelectedRecord, setMatchModalOpen, setResolveModalOpen
  } = useAccountantReconStore();

  const filteredData = MOCK_RECON_RECORDS.filter(record => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = record.id.toLowerCase().includes(searchLower) || 
                          record.sourceReference.toLowerCase().includes(searchLower) ||
                          record.payer.toLowerCase().includes(searchLower);
    const matchesTab = activeTab === 'All' || record.category === activeTab;
    const matchesStatus = statusFilter === 'All' || record.status === statusFilter;
    
    return matchesSearch && matchesTab && matchesStatus;
  });

  const getStatusStyle = (status: string) => {
    switch(status) {
      case 'Matched': return { badge: 'bg-success/10 text-success border-success/20', icon: <CheckCircle size={14} /> };
      case 'Unmatched': return { badge: 'bg-danger/10 text-danger border-danger/20', icon: <ShieldAlert size={14} /> };
      case 'Duplicate': return { badge: 'bg-warning/10 text-warning border-warning/20', icon: <AlertTriangle size={14} /> };
      default: return { badge: 'bg-bg-page text-text-secondary border-border', icon: <CheckCircle size={14} /> };
    }
  };

  const handleAction = (record: any) => {
    setSelectedRecord(record);
    if (record.status === 'Unmatched' || record.status === 'Duplicate') {
      setResolveModalOpen(true);
    } else {
      setMatchModalOpen(true);
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col flex-1 h-full">
      <div className="overflow-x-auto w-full flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] uppercase text-text-secondary font-semibold">
              <th className="p-4 w-40">ERP Txn / Date</th>
              <th className="p-4 w-40">Source Ref</th>
              <th className="p-4 w-32 text-right">ERP Amount</th>
              <th className="p-4 w-32 text-right">Source Amount</th>
              <th className="p-4 w-28 text-right">Variance</th>
              <th className="p-4 w-32 text-center">Status</th>
              <th className="p-4 w-28 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((record, index) => {
              const statusStyle = getStatusStyle(record.status);
              
              return (
                <tr 
                  key={record.id} 
                  className={clsx(
                    "border-b border-border/50 hover:bg-bg-input transition-colors",
                    index % 2 === 0 ? "bg-transparent" : "bg-bg-page/30"
                  )}
                >
                  <td className="p-4 text-xs font-semibold text-text-secondary">
                    <div className="font-bold text-text-primary">{record.id}</div>
                    <div className="mt-0.5">{record.date} • {record.category}</div>
                  </td>
                  <td className="p-4 text-xs font-mono font-semibold text-text-secondary">
                    <div className="text-text-primary">{record.sourceReference}</div>
                    <div className="mt-0.5 text-[11px] font-sans truncate w-32" title={record.payer}>{record.payer}</div>
                  </td>
                  <td className="p-4 text-sm font-bold text-text-primary text-right">
                    {formatCurrency(record.erpAmount)}
                  </td>
                  <td className="p-4 text-sm font-bold text-text-primary text-right">
                    {formatCurrency(record.sourceAmount)}
                  </td>
                  <td className={clsx("p-4 text-sm font-black text-right", record.variance === 0 ? "text-success" : "text-danger")}>
                    {record.variance === 0 ? "-" : formatCurrency(record.variance)}
                  </td>
                  <td className="p-4 text-center">
                    <span className={clsx("px-2.5 py-1 rounded-full text-[11px] font-bold border flex items-center justify-center gap-1.5 w-max mx-auto", statusStyle.badge)}>
                      {statusStyle.icon} {record.status}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    {record.status !== 'Matched' ? (
                      <button 
                        onClick={() => handleAction(record)}
                        className="px-3 py-1.5 bg-primary/10 text-primary hover:bg-primary hover:text-black rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 mx-auto"
                      >
                        <GitMerge size={14} /> Resolve
                      </button>
                    ) : (
                      <button 
                        onClick={() => handleAction(record)}
                        className="px-3 py-1.5 text-text-secondary hover:text-primary rounded-lg text-xs font-bold transition-colors mx-auto"
                      >
                        View
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={7} className="p-8 text-center text-text-secondary text-sm">
                  No records found matching filters.
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
