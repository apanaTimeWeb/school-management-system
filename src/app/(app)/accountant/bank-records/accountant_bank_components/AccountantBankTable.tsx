"use client";
import React from "react";
import { Eye, Edit3 } from "lucide-react";
import { MOCK_BANK_TRANSACTIONS, formatCurrency } from "../accountant_bank_utils/AccountantBankConstants";
import { useAccountantBankStore } from "../accountant_bank_store/useAccountantBankStore";
import clsx from "clsx";

export default function AccountantBankTable() {
  const { 
    searchQuery, statusFilter, typeFilter,
    setSelectedTxn, setDetailsModalOpen, setUpdateStatusModalOpen
  } = useAccountantBankStore();

  const filteredData = MOCK_BANK_TRANSACTIONS.filter(txn => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = txn.payer.toLowerCase().includes(searchLower) || 
                          txn.referenceNo.toLowerCase().includes(searchLower) ||
                          txn.bankName.toLowerCase().includes(searchLower);
    const matchesStatus = statusFilter === "All" || txn.status === statusFilter;
    const matchesType = typeFilter === "All" || txn.type === typeFilter;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Cleared': 
      case 'Reconciled': return 'text-success bg-success/10 border-success/20';
      case 'Pending Clearance': return 'text-warning bg-warning/10 border-warning/20';
      case 'Bounced': return 'text-danger bg-danger/10 border-danger/20';
      default: return 'text-text-secondary bg-bg-page border-border';
    }
  };

  const openDetails = (txn: any) => {
    setSelectedTxn(txn);
    setDetailsModalOpen(true);
  };

  const openUpdateStatus = (txn: any, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedTxn(txn);
    setUpdateStatusModalOpen(true);
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col flex-1 h-full">
      <div className="overflow-x-auto w-full flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] uppercase text-text-secondary font-semibold">
              <th className="p-4 w-32">Txn ID & Date</th>
              <th className="p-4">Bank & Type</th>
              <th className="p-4 w-40">Payer Name</th>
              <th className="p-4 w-36">Ref No (Cheque/UTR)</th>
              <th className="p-4 w-32 text-right">Amount</th>
              <th className="p-4 w-36 text-center">Status</th>
              <th className="p-4 w-24 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((txn, index) => (
              <tr 
                key={txn.id} 
                className={clsx(
                  "border-b border-border/50 hover:bg-bg-input transition-colors group cursor-pointer",
                  index % 2 === 0 ? "bg-transparent" : "bg-bg-page/30"
                )}
                onClick={() => openDetails(txn)}
              >
                <td className="p-4 text-xs font-semibold text-text-secondary">
                  <div className="font-bold text-text-primary">{txn.id}</div>
                  <div className="mt-0.5">{txn.date}</div>
                </td>
                <td className="p-4">
                  <div className="text-sm font-semibold text-text-primary">{txn.bankName}</div>
                  <div className="text-[11px] text-text-secondary">{txn.type}</div>
                </td>
                <td className="p-4 text-sm font-semibold text-text-primary">
                  {txn.payer}
                </td>
                <td className="p-4 text-xs font-mono font-semibold text-text-secondary">
                  {txn.referenceNo}
                </td>
                <td className="p-4 text-sm font-black text-text-primary text-right">
                  {formatCurrency(txn.amount)}
                </td>
                <td className="p-4 text-center">
                  <span className={clsx("px-2.5 py-0.5 rounded-full text-[11px] font-bold border block w-max mx-auto", getStatusBadge(txn.status))}>
                    {txn.status}
                  </span>
                </td>
                <td className="p-4 text-center" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center justify-center gap-2">
                    <button 
                      onClick={() => openDetails(txn)}
                      className="text-text-secondary hover:text-primary transition-colors p-1"
                      title="View Details"
                    >
                      <Eye size={16} />
                    </button>
                    {txn.status === "Pending Clearance" && (
                      <button 
                        onClick={(e) => openUpdateStatus(txn, e)}
                        className="text-text-secondary hover:text-warning transition-colors p-1"
                        title="Update Status"
                      >
                        <Edit3 size={16} />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={7} className="p-8 text-center text-text-secondary text-sm">
                  No records found matching criteria.
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
