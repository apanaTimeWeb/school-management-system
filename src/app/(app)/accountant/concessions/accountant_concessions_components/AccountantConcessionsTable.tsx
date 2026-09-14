"use client";
import React from "react";
import { Eye, FileText } from "lucide-react";
import { MOCK_CONCESSIONS, formatCurrency } from "../accountant_concessions_utils/AccountantConcessionsConstants";
import { useAccountantConcessionsStore } from "../accountant_concessions_store/useAccountantConcessionsStore";
import clsx from "clsx";

export default function AccountantConcessionsTable() {
  const { 
    searchQuery, typeFilter, statusFilter, 
    setSelectedRequest, setDetailsModalOpen 
  } = useAccountantConcessionsStore();

  const filteredData = MOCK_CONCESSIONS.filter(r => {
    const matchesSearch = r.studentName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          r.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === "All" || r.concessionType === typeFilter;
    const matchesStatus = statusFilter === "All" || r.status === statusFilter;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Approved': return 'text-success bg-success/10 border-success/20';
      case 'Pending Approval': return 'text-warning bg-warning/10 border-warning/20';
      case 'Rejected': return 'text-danger bg-danger/10 border-danger/20';
      default: return 'text-text-secondary bg-bg-page';
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'Scholarship': return 'text-[#38BDF8] bg-[#0C4A6E] border-[#0C4A6E]';
      case 'Discount': return 'text-[#A78BFA] bg-[#4C1D95] border-[#4C1D95]';
      case 'Staff Concession': return 'text-[#F472B6] bg-[#831843] border-[#831843]';
      default: return 'text-text-secondary bg-bg-page';
    }
  };

  const openDetails = (request: any) => {
    setSelectedRequest(request);
    setDetailsModalOpen(true);
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col flex-1 h-full">
      <div className="overflow-x-auto w-full flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] uppercase text-text-secondary font-semibold">
              <th className="p-4 w-32">Req ID</th>
              <th className="p-4">Student Info</th>
              <th className="p-4 w-36 text-center">Type</th>
              <th className="p-4 w-32 text-right">Amount</th>
              <th className="p-4 w-36 text-center">Status</th>
              <th className="p-4 w-32 text-center">Req Date</th>
              <th className="p-4 w-20 text-center">View</th>
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
                <td className="p-4 text-center">
                  <span className={clsx("px-2 py-0.5 rounded-md text-[10px] font-bold border", getTypeBadge(req.concessionType))}>
                    {req.concessionType}
                  </span>
                </td>
                <td className="p-4 text-sm font-bold text-text-primary text-right">
                  {formatCurrency(req.amount)}
                </td>
                <td className="p-4 text-center">
                  <span className={clsx("px-2.5 py-0.5 rounded-full text-[11px] font-bold border block w-max mx-auto", getStatusBadge(req.status))}>
                    {req.status}
                  </span>
                </td>
                <td className="p-4 text-xs font-semibold text-text-secondary text-center">
                  {req.requestedDate}
                </td>
                <td className="p-4 text-center" onClick={(e) => e.stopPropagation()}>
                  <button 
                    onClick={() => openDetails(req)}
                    title="Concession History / Details"
                    className="text-text-secondary hover:text-primary transition-colors p-1"
                  >
                    <FileText size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={7} className="p-8 text-center text-text-secondary text-sm">
                  No requests found matching criteria.
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
