"use client";
import React from "react";
import { Eye } from "lucide-react";
import { MOCK_ONLINE_PAYMENTS, formatCurrency } from "../accountant_online_payments_utils/AccountantOnlinePaymentsConstants";
import { useAccountantOnlinePaymentsStore } from "../accountant_online_payments_store/useAccountantOnlinePaymentsStore";
import clsx from "clsx";

export default function AccountantOnlinePaymentsTable() {
  const { searchQuery, statusFilter, reconFilter, setSelectedTransaction, setTransactionModalOpen } = useAccountantOnlinePaymentsStore();

  const filteredData = MOCK_ONLINE_PAYMENTS.filter(t => {
    const matchesSearch = t.gatewayTransactionId.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.paymentReference.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.studentName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All" || t.status === statusFilter;
    const matchesRecon = reconFilter === "All" || t.reconciliationStatus === reconFilter;
    
    return matchesSearch && matchesStatus && matchesRecon;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Successful': return 'text-success bg-success/10 border-success/20';
      case 'Failed': 
      case 'Cancelled': return 'text-danger bg-danger/10 border-danger/20';
      case 'Refunded': return 'text-info bg-info/10 border-info/20';
      case 'Pending': return 'text-warning bg-warning/10 border-warning/20';
      default: return 'text-text-secondary bg-bg-page';
    }
  };

  const getReconBadge = (status: string) => {
    switch (status) {
      case 'Reconciled': return 'text-success';
      case 'Mismatch': return 'text-danger';
      case 'Pending': return 'text-warning';
      default: return 'text-text-secondary';
    }
  };

  const openDetails = (txn: any) => {
    setSelectedTransaction(txn);
    setTransactionModalOpen(true);
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col flex-1 h-full">
      <div className="overflow-x-auto w-full flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] uppercase text-text-secondary font-semibold">
              <th className="p-4 w-40">Gateway ID</th>
              <th className="p-4 w-32">Pay Ref</th>
              <th className="p-4">Student Info</th>
              <th className="p-4 w-32 text-right">Amount</th>
              <th className="p-4 w-28 text-center">Status</th>
              <th className="p-4 w-32 text-center">Recon Status</th>
              <th className="p-4 w-20 text-center">Action</th>
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
                <td className="p-4 text-xs font-mono font-semibold text-text-primary">
                  {txn.gatewayTransactionId}
                  <div className="text-[10px] text-text-secondary mt-1 font-sans">{txn.date}</div>
                </td>
                <td className="p-4 text-xs font-semibold text-text-primary">{txn.paymentReference}</td>
                <td className="p-4">
                  <div className="text-sm font-semibold text-text-primary">{txn.studentName}</div>
                  <div className="text-xs text-text-secondary">{txn.method}</div>
                </td>
                <td className="p-4 text-sm font-bold text-text-primary text-right">
                  {formatCurrency(txn.amount)}
                </td>
                <td className="p-4 text-center">
                  <span className={clsx("px-2.5 py-0.5 rounded-full text-[11px] font-bold border", getStatusBadge(txn.status))}>
                    {txn.status}
                  </span>
                </td>
                <td className="p-4 text-center text-xs font-bold">
                  <span className={getReconBadge(txn.reconciliationStatus)}>
                    {txn.reconciliationStatus}
                  </span>
                </td>
                <td className="p-4 text-center" onClick={(e) => e.stopPropagation()}>
                  <button 
                    onClick={() => openDetails(txn)}
                    className="text-text-secondary hover:text-primary transition-colors p-1"
                  >
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={7} className="p-8 text-center text-text-secondary text-sm">
                  No transactions found matching criteria.
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
