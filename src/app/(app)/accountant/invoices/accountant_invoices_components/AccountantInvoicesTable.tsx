"use client";
import React from "react";
import { Eye, Printer } from "lucide-react";
import { MOCK_INVOICES, formatCurrency } from "../accountant_invoices_utils/AccountantInvoicesConstants";
import { useAccountantInvoicesStore } from "../accountant_invoices_store/useAccountantInvoicesStore";
import clsx from "clsx";

export default function AccountantInvoicesTable() {
  const { 
    searchQuery, statusFilter,
    setSelectedInvoice, setViewModalOpen
  } = useAccountantInvoicesStore();

  const filteredData = MOCK_INVOICES.filter(inv => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = inv.invoiceNo.toLowerCase().includes(searchLower) || 
                          inv.studentName.toLowerCase().includes(searchLower) ||
                          inv.studentId.toLowerCase().includes(searchLower);
    const matchesStatus = statusFilter === 'All' || inv.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Paid': return 'text-success bg-success/10 border-success/20';
      case 'Unpaid': return 'text-warning bg-warning/10 border-warning/20';
      case 'Overdue': return 'text-danger bg-danger/10 border-danger/20';
      case 'Cancelled': return 'text-text-secondary bg-bg-page border-border';
      default: return 'text-text-secondary bg-bg-page border-border';
    }
  };

  const handleView = (invoice: any) => {
    setSelectedInvoice(invoice);
    setViewModalOpen(true);
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col flex-1 h-full">
      <div className="overflow-x-auto w-full flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] uppercase text-text-secondary font-semibold">
              <th className="p-4 w-32">Invoice No</th>
              <th className="p-4 w-48">Student Info</th>
              <th className="p-4 w-32">Issue Date</th>
              <th className="p-4 w-32">Due Date</th>
              <th className="p-4 w-32 text-right">Amount</th>
              <th className="p-4 w-28 text-center">Status</th>
              <th className="p-4 w-24 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((inv, index) => (
              <tr 
                key={inv.id} 
                className={clsx(
                  "border-b border-border/50 hover:bg-bg-input transition-colors group cursor-pointer",
                  index % 2 === 0 ? "bg-transparent" : "bg-bg-page/30"
                )}
                onClick={() => handleView(inv)}
              >
                <td className="p-4 text-xs font-bold text-text-primary">
                  {inv.invoiceNo}
                </td>
                <td className="p-4">
                  <div className="text-sm font-bold text-text-primary">{inv.studentName}</div>
                  <div className="text-[11px] text-text-secondary font-semibold mt-0.5">{inv.studentId} • {inv.className}</div>
                </td>
                <td className="p-4 text-sm font-semibold text-text-secondary">
                  {inv.issueDate}
                </td>
                <td className="p-4 text-sm font-semibold text-text-secondary">
                  {inv.dueDate}
                </td>
                <td className="p-4 text-sm font-black text-text-primary text-right">
                  {formatCurrency(inv.totalAmount)}
                </td>
                <td className="p-4 text-center">
                  <span className={clsx("px-2.5 py-1 rounded-full text-[11px] font-bold border block w-max mx-auto", getStatusBadge(inv.status))}>
                    {inv.status}
                  </span>
                </td>
                <td className="p-4 text-center" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center justify-center gap-2">
                    <button 
                      onClick={() => handleView(inv)}
                      className="text-text-secondary hover:text-primary transition-colors p-1"
                      title="View PDF"
                    >
                      <Eye size={16} />
                    </button>
                    <button 
                      className="text-text-secondary hover:text-primary transition-colors p-1"
                      title="Print"
                    >
                      <Printer size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={7} className="p-8 text-center text-text-secondary text-sm">
                  No invoices found matching criteria.
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
