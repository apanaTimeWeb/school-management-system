"use client";
import React from "react";
import { Eye, CreditCard } from "lucide-react";
import { MOCK_REFUNDS, formatCurrency } from "../accountant_refunds_utils/AccountantRefundsConstants";
import { useAccountantRefundsStore } from "../accountant_refunds_store/useAccountantRefundsStore";
import clsx from "clsx";

export default function AccountantRefundsTable() {
  const { 
    searchQuery, statusFilter, 
    setSelectedRefund, setDetailsModalOpen, setProcessModalOpen
  } = useAccountantRefundsStore();

  const filteredData = MOCK_REFUNDS.filter(r => {
    const matchesSearch = r.studentName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          r.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          r.reason.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All" || r.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Processed': return 'text-success bg-success/10 border-success/20';
      case 'Approved': return 'text-info bg-info/10 border-info/20'; // Needs processing
      case 'Pending Approval': return 'text-warning bg-warning/10 border-warning/20';
      case 'Rejected': return 'text-danger bg-danger/10 border-danger/20';
      default: return 'text-text-secondary bg-bg-page';
    }
  };

  const getEligibilityColor = (eligibility: string) => {
    switch (eligibility) {
      case 'Eligible': return 'text-success';
      case 'Under Review': return 'text-warning';
      case 'Not Eligible': return 'text-danger';
      default: return 'text-text-secondary';
    }
  };

  const handleAction = (req: any, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedRefund(req);
    if (req.status === 'Approved') {
      setProcessModalOpen(true);
    } else {
      setDetailsModalOpen(true);
    }
  };

  const openDetails = (req: any) => {
    setSelectedRefund(req);
    setDetailsModalOpen(true);
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col flex-1 h-full">
      <div className="overflow-x-auto w-full flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] uppercase text-text-secondary font-semibold">
              <th className="p-4 w-32">Req ID</th>
              <th className="p-4 w-48">Student Info</th>
              <th className="p-4">Reason & Eligibility</th>
              <th className="p-4 w-32 text-right">Amount</th>
              <th className="p-4 w-36 text-center">Status</th>
              <th className="p-4 w-32 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((req, index) => (
              <tr 
                key={req.id} 
                className={clsx(
                  "border-b border-border/50 hover:bg-bg-input transition-colors group cursor-pointer",
                  index % 2 === 0 ? "bg-transparent" : "bg-bg-page/30"
                )}
                onClick={() => openDetails(req)}
              >
                <td className="p-4 text-xs font-bold text-text-primary">{req.id}</td>
                <td className="p-4">
                  <div className="text-sm font-semibold text-text-primary">{req.studentName}</div>
                  <div className="text-[11px] text-text-secondary">{req.className} | {req.admissionNo}</div>
                </td>
                <td className="p-4">
                  <div className="text-xs font-semibold text-text-primary mb-1 truncate max-w-[200px]" title={req.reason}>
                    {req.reason}
                  </div>
                  <div className={clsx("text-[10px] font-bold uppercase tracking-wider", getEligibilityColor(req.eligibility))}>
                    • {req.eligibility}
                  </div>
                </td>
                <td className="p-4 text-sm font-black text-text-primary text-right">
                  {formatCurrency(req.amount)}
                </td>
                <td className="p-4 text-center">
                  <span className={clsx("px-2.5 py-0.5 rounded-full text-[11px] font-bold border block w-max mx-auto", getStatusBadge(req.status))}>
                    {req.status === 'Approved' ? 'Pending Proc.' : req.status}
                  </span>
                  <div className="text-[9px] text-text-secondary mt-1">{req.requestedDate}</div>
                </td>
                <td className="p-4 text-center" onClick={(e) => e.stopPropagation()}>
                  {req.status === 'Approved' ? (
                    <button 
                      onClick={(e) => handleAction(req, e)}
                      className="flex items-center gap-1.5 px-3 py-1.5 mx-auto bg-info text-white text-xs font-bold rounded-lg hover:bg-info/80 transition-colors shadow-sm"
                    >
                      <CreditCard size={14} /> Process
                    </button>
                  ) : (
                    <button 
                      onClick={(e) => handleAction(req, e)}
                      className="text-text-secondary hover:text-primary transition-colors p-1"
                    >
                      <Eye size={18} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={6} className="p-8 text-center text-text-secondary text-sm">
                  No refunds found matching criteria.
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
