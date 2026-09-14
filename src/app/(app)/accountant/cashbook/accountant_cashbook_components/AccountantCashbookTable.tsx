"use client";
import React from "react";
import { formatCurrency, MOCK_CASH_TRANSACTIONS } from "../accountant_cashbook_utils/AccountantCashbookConstants";
import { useAccountantCashbookStore } from "../accountant_cashbook_store/useAccountantCashbookStore";
import clsx from "clsx";
import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";

export default function AccountantCashbookTable() {
  const { searchQuery } = useAccountantCashbookStore();

  const filteredData = MOCK_CASH_TRANSACTIONS.filter(txn => 
    txn.particulars.toLowerCase().includes(searchQuery.toLowerCase()) || 
    (txn.referenceNo && txn.referenceNo.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getTxnIcon = (type: string) => {
    switch (type) {
      case 'Collection':
      case 'Opening Balance': 
        return <ArrowDownRight size={16} className="text-success" />;
      case 'Expense':
      case 'Handover': 
        return <ArrowUpRight size={16} className="text-danger" />;
      default: 
        return <Minus size={16} className="text-text-secondary" />;
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col flex-1 h-full">
      <div className="overflow-x-auto w-full flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] uppercase text-text-secondary font-semibold">
              <th className="p-4 w-28">Time / ID</th>
              <th className="p-4">Particulars</th>
              <th className="p-4 w-28 text-right">Inflow (In)</th>
              <th className="p-4 w-28 text-right">Outflow (Out)</th>
              <th className="p-4 w-32 text-right">Balance</th>
              <th className="p-4 w-32 text-center">Handler</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((txn, index) => (
              <tr 
                key={txn.id} 
                className={clsx(
                  "border-b border-border/50 hover:bg-bg-input transition-colors",
                  index % 2 === 0 ? "bg-transparent" : "bg-bg-page/30"
                )}
              >
                <td className="p-4 text-xs font-semibold text-text-secondary">
                  <div>{txn.time}</div>
                  <div className="font-mono text-[10px] mt-0.5 opacity-70">{txn.id}</div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    {getTxnIcon(txn.type)}
                    <span className="text-sm font-bold text-text-primary">{txn.particulars}</span>
                  </div>
                  <div className="text-[11px] text-text-secondary mt-0.5 ml-6">
                    {txn.type} {txn.referenceNo ? `• Ref: ${txn.referenceNo}` : ''}
                  </div>
                </td>
                <td className="p-4 text-sm font-black text-success text-right">
                  {txn.inflow > 0 ? formatCurrency(txn.inflow) : '-'}
                </td>
                <td className="p-4 text-sm font-black text-danger text-right">
                  {txn.outflow > 0 ? formatCurrency(txn.outflow) : '-'}
                </td>
                <td className="p-4 text-sm font-bold text-info text-right bg-info/5">
                  {formatCurrency(txn.balance)}
                </td>
                <td className="p-4 text-center">
                  <span className="text-xs font-semibold text-text-secondary bg-bg-page px-2 py-0.5 rounded border border-border">
                    {txn.handledBy}
                  </span>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={6} className="p-8 text-center text-text-secondary text-sm">
                  No transactions found for today.
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
