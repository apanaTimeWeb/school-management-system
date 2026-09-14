"use client";
import React from "react";
import { Eye } from "lucide-react";
import { MOCK_INCOME, formatCurrency } from "../accountant_income_utils/AccountantIncomeConstants";
import { useAccountantIncomeStore } from "../accountant_income_store/useAccountantIncomeStore";
import clsx from "clsx";

export default function AccountantIncomeTable() {
  const { 
    searchQuery, statusFilter, categoryFilter,
    setSelectedIncome, setDetailsModalOpen
  } = useAccountantIncomeStore();

  const filteredData = MOCK_INCOME.filter(inc => {
    const matchesSearch = inc.source.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          inc.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All" || inc.status === statusFilter;
    const matchesCategory = categoryFilter === "All" || inc.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Realized': return 'text-success bg-success/10 border-success/20';
      case 'Pending Clearance': return 'text-warning bg-warning/10 border-warning/20';
      case 'Bounced': return 'text-danger bg-danger/10 border-danger/20';
      case 'Refunded': return 'text-text-secondary bg-bg-page border-border';
      default: return 'text-text-secondary bg-bg-page';
    }
  };

  const openDetails = (inc: any) => {
    setSelectedIncome(inc);
    setDetailsModalOpen(true);
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col flex-1 h-full">
      <div className="overflow-x-auto w-full flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] uppercase text-text-secondary font-semibold">
              <th className="p-4 w-32">Receipt No</th>
              <th className="p-4">Source & Category</th>
              <th className="p-4 w-32">Date</th>
              <th className="p-4 w-32 text-right">Amount</th>
              <th className="p-4 w-32 text-center">Pay Method</th>
              <th className="p-4 w-36 text-center">Status</th>
              <th className="p-4 w-20 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((inc, index) => (
              <tr 
                key={inc.id} 
                className={clsx(
                  "border-b border-border/50 hover:bg-bg-input transition-colors group cursor-pointer",
                  index % 2 === 0 ? "bg-transparent" : "bg-bg-page/30"
                )}
                onClick={() => openDetails(inc)}
              >
                <td className="p-4 text-xs font-bold text-text-primary">{inc.id}</td>
                <td className="p-4">
                  <div className="text-sm font-semibold text-text-primary">{inc.source}</div>
                  <div className="text-[11px] text-text-secondary flex gap-2">
                    <span>{inc.category}</span>
                    {inc.referenceNo && <span className="border-l border-border pl-2">{inc.referenceNo}</span>}
                  </div>
                </td>
                <td className="p-4 text-xs font-semibold text-text-secondary">
                  {inc.incomeDate}
                </td>
                <td className="p-4 text-sm font-black text-text-primary text-right">
                  {formatCurrency(inc.amount)}
                </td>
                <td className="p-4 text-center">
                  <span className="text-xs text-text-secondary bg-bg-page px-2 py-0.5 rounded border border-border">
                    {inc.paymentMethod}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <span className={clsx("px-2.5 py-0.5 rounded-full text-[11px] font-bold border block w-max mx-auto", getStatusBadge(inc.status))}>
                    {inc.status}
                  </span>
                </td>
                <td className="p-4 text-center" onClick={(e) => e.stopPropagation()}>
                  <button 
                    onClick={() => openDetails(inc)}
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
