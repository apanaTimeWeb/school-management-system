"use client";
import React from "react";
import { HandCoins, ShieldOff, History } from "lucide-react";
import { MOCK_FINES, formatCurrency } from "../accountant_fines_utils/AccountantFinesConstants";
import { useAccountantFinesStore } from "../accountant_fines_store/useAccountantFinesStore";
import clsx from "clsx";

export default function AccountantFinesTable() {
  const { 
    searchQuery, statusFilter, 
    setSelectedFine, setCollectModalOpen, setWaiverModalOpen, setHistoryModalOpen
  } = useAccountantFinesStore();

  const filteredData = MOCK_FINES.filter(f => {
    const matchesSearch = f.studentName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          f.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All" || f.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Paid': return 'text-success bg-success/10 border-success/20';
      case 'Waived': return 'text-info bg-info/10 border-info/20';
      case 'Waiver Pending': return 'text-warning bg-warning/10 border-warning/20';
      case 'Unpaid': return 'text-danger bg-danger/10 border-danger/20';
      default: return 'text-text-secondary bg-bg-page';
    }
  };

  const handleCollect = (fine: any, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFine(fine);
    setCollectModalOpen(true);
  };

  const handleWaiver = (fine: any, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFine(fine);
    setWaiverModalOpen(true);
  };

  const openHistory = (fine: any) => {
    setSelectedFine(fine);
    setHistoryModalOpen(true);
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col flex-1 h-full">
      <div className="overflow-x-auto w-full flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] uppercase text-text-secondary font-semibold">
              <th className="p-4 w-32">Fine ID</th>
              <th className="p-4 w-48">Student Info</th>
              <th className="p-4">Late Period</th>
              <th className="p-4 w-28 text-center">Calc Type</th>
              <th className="p-4 w-32 text-right">Fine Amt</th>
              <th className="p-4 w-32 text-center">Status</th>
              <th className="p-4 w-28 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((fine, index) => (
              <tr 
                key={fine.id} 
                className={clsx(
                  "border-b border-border/50 hover:bg-bg-input transition-colors group cursor-pointer",
                  index % 2 === 0 ? "bg-transparent" : "bg-bg-page/30"
                )}
                onClick={() => openHistory(fine)}
              >
                <td className="p-4 text-xs font-bold text-text-primary">{fine.id}</td>
                <td className="p-4">
                  <div className="text-sm font-semibold text-text-primary">{fine.studentName}</div>
                  <div className="text-[11px] text-text-secondary">{fine.className} | {fine.admissionNo}</div>
                </td>
                <td className="p-4">
                  <div className="text-xs font-semibold text-text-primary">{fine.relatedFeePeriod}</div>
                  <div className="text-[10px] text-danger font-bold uppercase tracking-wider mt-0.5">
                    {fine.daysLate} Days Late
                  </div>
                </td>
                <td className="p-4 text-center">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold border text-text-secondary bg-bg-page border-border">
                    {fine.calcType}
                  </span>
                </td>
                <td className="p-4 text-sm font-black text-danger text-right">
                  {formatCurrency(fine.fineAmount)}
                </td>
                <td className="p-4 text-center">
                  <span className={clsx("px-2.5 py-0.5 rounded-full text-[11px] font-bold border block w-max mx-auto", getStatusBadge(fine.status))}>
                    {fine.status}
                  </span>
                </td>
                <td className="p-4 text-center" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center justify-center gap-2">
                    {fine.status === 'Unpaid' ? (
                      <>
                        <button 
                          onClick={(e) => handleCollect(fine, e)}
                          title="Collect Fine"
                          className="text-success hover:bg-success/10 p-1.5 rounded transition-colors"
                        >
                          <HandCoins size={16} />
                        </button>
                        <button 
                          onClick={(e) => handleWaiver(fine, e)}
                          title="Request Waiver"
                          className="text-warning hover:bg-warning/10 p-1.5 rounded transition-colors"
                        >
                          <ShieldOff size={16} />
                        </button>
                      </>
                    ) : (
                      <button 
                        onClick={() => openHistory(fine)}
                        title="View Details"
                        className="text-text-secondary hover:text-primary transition-colors p-1.5 rounded"
                      >
                        <History size={16} />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={7} className="p-8 text-center text-text-secondary text-sm">
                  No fines found matching criteria.
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
