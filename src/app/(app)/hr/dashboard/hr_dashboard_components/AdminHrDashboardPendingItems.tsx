"use client";

// RESPONSIBILITY: Renders the action-required pending items and handles review modals.

import { useState } from "react";
import { FileWarning, FileClock, ClipboardList, Eye, X, CheckCircle, XCircle } from "lucide-react";
import type { HrDashboardStats, PendingItem } from "../hr_dashboard_types/AdminHrDashboardTypes";

interface AdminHrDashboardPendingItemsProps {
  stats: HrDashboardStats;
}

export default function AdminHrDashboardPendingItems({ stats }: AdminHrDashboardPendingItemsProps) {
  const [selectedItem, setSelectedItem] = useState<PendingItem | null>(null);

  const openReviewModal = (item: PendingItem) => {
    setSelectedItem(item);
  };

  const closeReviewModal = () => {
    setSelectedItem(null);
  };

  const renderList = (items: PendingItem[], emptyMsg: string) => {
    if (items.length === 0) {
      return (
        <div className="py-8 text-center flex flex-col items-center justify-center border border-dashed border-border rounded-md">
          <CheckCircle size={24} className="text-success mb-2" />
          <span className="text-sm text-muted-foreground font-medium">{emptyMsg}</span>
        </div>
      );
    }
    
    return (
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg bg-input border border-border hover:border-primary/50 hover:shadow-md motion-safe:transition-all motion-safe:duration-200 group">
            <div className="flex flex-col mb-3 sm:mb-0">
              <span className="text-sm font-bold text-foreground">{item.staffName}</span>
              <span className="text-sm font-medium text-muted-foreground mt-1">{item.description}</span>
              <span className="text-xs text-muted-foreground mt-1">{item.date}</span>
            </div>
            
            <div className="flex items-center justify-between sm:justify-end sm:flex-col gap-2">
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                item.status === 'expiring' 
                  ? 'bg-danger/10 text-danger border-danger/20' 
                  : 'bg-warning/10 text-warning border-warning/20'
              }`}>
                {item.status.toUpperCase()}
              </span>
              
              <button 
                onClick={() => openReviewModal(item)}
                className="flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded hover:bg-primary hover:text-white transition-colors"
              >
                <Eye size={14} /> Review
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Pending Documents */}
        <div className="bg-card border border-border rounded-lg p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-5 border-b border-border pb-3">
            <div className="p-2 rounded-md bg-warning/10">
              <FileWarning size={20} className="text-warning" />
            </div>
            <h2 className="text-base font-bold text-foreground uppercase tracking-wide">Pending Docs</h2>
          </div>
          {renderList(stats.pendingDocuments, "All documents verified.")}
        </div>

        {/* Expiring Documents */}
        <div className="bg-card border border-border rounded-lg p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-5 border-b border-border pb-3">
             <div className="p-2 rounded-md bg-danger/10">
                <FileClock size={20} className="text-danger" />
             </div>
            <h2 className="text-base font-bold text-foreground uppercase tracking-wide">Expiring Docs</h2>
          </div>
          {renderList(stats.expiringDocuments, "No documents expiring.")}
        </div>

        {/* Leave Requests */}
        <div className="bg-card border border-border rounded-lg p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-5 border-b border-border pb-3">
             <div className="p-2 rounded-md bg-info/10">
              <ClipboardList size={20} className="text-info" />
             </div>
            <h2 className="text-base font-bold text-foreground uppercase tracking-wide">Leave Requests</h2>
          </div>
          {renderList(stats.pendingLeaveRequests, "No pending leave requests.")}
        </div>
      </div>

      {/* Review Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
          <div className="bg-overlay border border-border rounded-xl w-full max-w-md shadow-2xl overflow-hidden motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border bg-card">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                {selectedItem.status === 'expiring' ? <FileClock className="text-danger" /> : <ClipboardList className="text-info" />}
                Review Details
              </h3>
              <button onClick={closeReviewModal} className="p-1 hover:bg-input rounded-full text-muted-foreground transition-colors">
                <X size={20} />
              </button>
            </div>
            
            {/* Body */}
            <div className="p-6">
              <div className="mb-4">
                <p className="text-xs text-muted-foreground uppercase font-semibold">Staff Name</p>
                <p className="text-base font-medium text-foreground mt-1">{selectedItem.staffName}</p>
              </div>
              <div className="mb-4">
                <p className="text-xs text-muted-foreground uppercase font-semibold">Description</p>
                <p className="text-base font-medium text-foreground mt-1">{selectedItem.description}</p>
              </div>
              <div className="mb-6">
                <p className="text-xs text-muted-foreground uppercase font-semibold">Timeline / Date</p>
                <p className="text-base font-medium text-foreground mt-1">{selectedItem.date}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-border">
                <button 
                  onClick={closeReviewModal}
                  className="flex-1 flex justify-center items-center gap-2 py-2.5 rounded-lg border border-danger text-danger font-semibold hover:bg-danger hover:text-white transition-colors"
                >
                  <XCircle size={18} /> Reject / Close
                </button>
                <button 
                  onClick={closeReviewModal}
                  className="flex-1 flex justify-center items-center gap-2 py-2.5 rounded-lg bg-success text-white font-semibold hover:bg-green-600 shadow-lg shadow-green-900/20 active:scale-95 transition-all"
                >
                  <CheckCircle size={18} /> Approve / Verify
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
