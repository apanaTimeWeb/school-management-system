"use client";
import React from "react";
import { Eye, Paperclip, CheckCircle2 } from "lucide-react";
import { MOCK_EXPENSES, formatCurrency } from "../accountant_expenses_utils/AccountantExpensesConstants";
import { useAccountantExpensesStore } from "../accountant_expenses_store/useAccountantExpensesStore";
import clsx from "clsx";

export default function AccountantExpensesTable() {
  const { 
    searchQuery, statusFilter, categoryFilter,
    setSelectedExpense, setDetailsModalOpen
  } = useAccountantExpensesStore();

  const filteredData = MOCK_EXPENSES.filter(exp => {
    const matchesSearch = exp.vendor.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          exp.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All" || exp.status === statusFilter;
    const matchesCategory = categoryFilter === "All" || exp.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Paid': return 'text-success bg-success/10 border-success/20';
      case 'Approved': return 'text-info bg-info/10 border-info/20';
      case 'Pending Approval': return 'text-warning bg-warning/10 border-warning/20';
      case 'Rejected': return 'text-danger bg-danger/10 border-danger/20';
      default: return 'text-text-secondary bg-bg-page';
    }
  };

  const openDetails = (exp: any) => {
    setSelectedExpense(exp);
    setDetailsModalOpen(true);
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col flex-1 h-full">
      <div className="overflow-x-auto w-full flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] uppercase text-text-secondary font-semibold">
              <th className="p-4 w-32">Expense ID</th>
              <th className="p-4">Vendor & Category</th>
              <th className="p-4 w-32">Date</th>
              <th className="p-4 w-32 text-right">Amount</th>
              <th className="p-4 w-24 text-center">Attachment</th>
              <th className="p-4 w-36 text-center">Status</th>
              <th className="p-4 w-20 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((exp, index) => (
              <tr 
                key={exp.id} 
                className={clsx(
                  "border-b border-border/50 hover:bg-bg-input transition-colors group cursor-pointer",
                  index % 2 === 0 ? "bg-transparent" : "bg-bg-page/30"
                )}
                onClick={() => openDetails(exp)}
              >
                <td className="p-4 text-xs font-bold text-text-primary">{exp.id}</td>
                <td className="p-4">
                  <div className="text-sm font-semibold text-text-primary">{exp.vendor}</div>
                  <div className="text-[11px] text-text-secondary">{exp.category}</div>
                </td>
                <td className="p-4 text-xs font-semibold text-text-secondary">
                  {exp.expenseDate}
                </td>
                <td className="p-4 text-sm font-black text-text-primary text-right">
                  {formatCurrency(exp.amount)}
                </td>
                <td className="p-4 text-center">
                  {exp.hasAttachment ? (
                    <div className="flex justify-center text-primary" title="Invoice Attached">
                      <Paperclip size={16} />
                    </div>
                  ) : (
                    <span className="text-xs text-text-secondary">-</span>
                  )}
                </td>
                <td className="p-4 text-center">
                  <span className={clsx("px-2.5 py-0.5 rounded-full text-[11px] font-bold border block w-max mx-auto", getStatusBadge(exp.status))}>
                    {exp.status}
                  </span>
                </td>
                <td className="p-4 text-center" onClick={(e) => e.stopPropagation()}>
                  <button 
                    onClick={() => openDetails(exp)}
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
                  No expenses found matching criteria.
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
