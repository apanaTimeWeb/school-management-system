"use client";
import React from "react";
import { Search, Eye } from "lucide-react";
import { useAccountantClosingStore } from "../accountant_closing_store/useAccountantClosingStore";
import { formatCurrency, MOCK_CLOSING_HISTORY } from "../accountant_closing_utils/AccountantClosingConstants";
import clsx from "clsx";

export default function AccountantClosingHistory() {
  const { 
    searchQuery, setSearchQuery, 
    setSelectedHistory, setDetailsModalOpen 
  } = useAccountantClosingStore();

  const filteredData = MOCK_CLOSING_HISTORY.filter(hist => 
    hist.date.includes(searchQuery) || hist.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Verified': return 'text-success bg-success/10 border-success/20';
      case 'Closed': return 'text-warning bg-warning/10 border-warning/20';
      default: return 'text-text-secondary bg-bg-page border-border';
    }
  };

  const openDetails = (record: any) => {
    setSelectedHistory(record);
    setDetailsModalOpen(true);
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col flex-1 h-full">
      <div className="p-4 border-b border-border flex flex-col sm:flex-row justify-between items-center gap-4 bg-bg-page shrink-0">
        <h3 className="text-sm font-bold text-text-primary">EOD Closing History</h3>
        
        <div className="relative w-full sm:w-64">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by date (YYYY-MM-DD)..." 
            className="w-full bg-bg-input border border-border rounded-lg pl-9 pr-4 py-1.5 text-sm text-text-primary focus:border-primary outline-none transition-colors"
          />
        </div>
      </div>

      <div className="overflow-x-auto w-full flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] uppercase text-text-secondary font-semibold">
              <th className="p-4 w-32">Date / ID</th>
              <th className="p-4 w-32 text-right">Gross Col.</th>
              <th className="p-4 w-32 text-right">Deductions</th>
              <th className="p-4 w-32 text-right">Net Collection</th>
              <th className="p-4 w-32 text-right">Closing Bal.</th>
              <th className="p-4 w-32 text-center">Status</th>
              <th className="p-4 w-20 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((hist, index) => (
              <tr 
                key={hist.id} 
                className={clsx(
                  "border-b border-border/50 hover:bg-bg-input transition-colors group cursor-pointer",
                  index % 2 === 0 ? "bg-transparent" : "bg-bg-page/30"
                )}
                onClick={() => openDetails(hist)}
              >
                <td className="p-4 text-xs font-semibold text-text-secondary">
                  <div className="font-bold text-text-primary">{hist.date}</div>
                  <div className="mt-0.5">{hist.id}</div>
                </td>
                <td className="p-4 text-sm font-semibold text-success text-right">
                  {formatCurrency(hist.grossCollection)}
                </td>
                <td className="p-4 text-sm font-semibold text-danger text-right">
                  {formatCurrency(hist.refunds + hist.expenses)}
                </td>
                <td className="p-4 text-sm font-black text-text-primary text-right">
                  {formatCurrency(hist.netCollection)}
                </td>
                <td className="p-4 text-sm font-bold text-info text-right">
                  {formatCurrency(hist.closingBalance)}
                </td>
                <td className="p-4 text-center">
                  <span className={clsx("px-2.5 py-0.5 rounded-full text-[11px] font-bold border block w-max mx-auto", getStatusBadge(hist.status))}>
                    {hist.status}
                  </span>
                </td>
                <td className="p-4 text-center" onClick={(e) => e.stopPropagation()}>
                  <button 
                    onClick={() => openDetails(hist)}
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
                  No closing history found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
