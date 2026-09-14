"use client";
import React from "react";
import { Check, X } from "lucide-react";
import { useAccountantDashboardStore } from "../accountant_dashboard_store/useAccountantDashboardStore";
import { MOCK_PENDING_REFUNDS, MOCK_PENDING_CONCESSIONS, formatCurrency } from "../accountant_dashboard_utils/AccountantDashboardConstants";
import clsx from "clsx";

// RESPONSIBILITY: Actionable list of pending refunds and concessions requiring accountant approval.

export default function AccountantDashboardPending() {
  const { activePendingTab, setActivePendingTab } = useAccountantDashboardStore();

  const data = activePendingTab === 'refunds' ? MOCK_PENDING_REFUNDS : MOCK_PENDING_CONCESSIONS;

  const handleApprove = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    alert(`Approved ${id}`);
  };

  const handleReject = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    alert(`Rejected ${id}`);
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm flex flex-col h-fit">
      
      {/* Tabs */}
      <div className="flex border-b border-border">
        <button
          onClick={() => setActivePendingTab('refunds')}
          className={clsx(
            "flex-1 py-3 text-xs font-bold uppercase tracking-wider text-center transition-colors relative",
            activePendingTab === 'refunds' ? "text-primary bg-primary/5" : "text-text-secondary hover:bg-bg-page"
          )}
        >
          Pending Refunds
          {activePendingTab === 'refunds' && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"></div>}
        </button>
        <button
          onClick={() => setActivePendingTab('concessions')}
          className={clsx(
            "flex-1 py-3 text-xs font-bold uppercase tracking-wider text-center transition-colors relative border-l border-border",
            activePendingTab === 'concessions' ? "text-primary bg-primary/5" : "text-text-secondary hover:bg-bg-page"
          )}
        >
          Concessions
          {activePendingTab === 'concessions' && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"></div>}
        </button>
      </div>

      {/* List Area */}
      <div className="flex flex-col max-h-[320px] overflow-y-auto custom-scrollbar p-2 gap-2">
        {data.map((item) => (
          <div key={item.id} className="p-3 border border-border rounded-lg bg-bg-page hover:border-primary/50 transition-colors group cursor-pointer">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-sm font-semibold text-text-primary">{item.studentName}</h4>
                <p className="text-[11px] text-text-secondary mt-0.5">Req: {item.requestedDate}</p>
              </div>
              <span className="text-sm font-bold text-text-primary">{formatCurrency(item.amount)}</span>
            </div>
            
            <div className="flex justify-between items-end mt-2">
              <span className="text-xs bg-bg-input px-2 py-1 rounded-md text-text-secondary border border-border truncate max-w-[150px]">
                {item.reason}
              </span>
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={(e) => handleReject(item.id, e)}
                  className="w-7 h-7 flex items-center justify-center rounded-md border border-border text-text-secondary hover:text-danger hover:bg-danger/10 hover:border-danger transition-colors"
                  title="Reject"
                >
                  <X size={14} />
                </button>
                <button 
                  onClick={(e) => handleApprove(item.id, e)}
                  className="w-7 h-7 flex items-center justify-center rounded-md bg-primary text-white hover:bg-primary-hover transition-colors"
                  title="Approve"
                >
                  <Check size={14} strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        ))}
        {(!data || data.length === 0) && (
          <div className="p-6 text-center text-text-secondary text-sm">
            No pending requests.
          </div>
        )}
      </div>

    </div>
  );
}
