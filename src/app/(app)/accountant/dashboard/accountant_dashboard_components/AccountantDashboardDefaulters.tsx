"use client";
import React from "react";
import { AlertCircle, MessageSquare } from "lucide-react";
import { MOCK_DEFAULTERS, formatCurrency } from "../accountant_dashboard_utils/AccountantDashboardConstants";

// RESPONSIBILITY: Renders the list of fee defaulters with quick actions to send reminders.

export default function AccountantDashboardDefaulters() {
  const handleRemind = (phone: string, e: React.MouseEvent) => {
    e.stopPropagation();
    alert(`Opening WhatsApp/SMS gateway for ${phone}`);
  };

  return (
    <div className="bg-card border border-danger/30 rounded-xl shadow-sm flex flex-col h-fit overflow-hidden">
      
      {/* Header */}
      <div className="bg-danger/10 border-b border-danger/20 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertCircle size={18} className="text-danger" />
          <h3 className="text-sm font-bold text-danger uppercase tracking-wider">Top Defaulters</h3>
        </div>
        <span className="bg-danger text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Action Needed</span>
      </div>

      {/* List Area */}
      <div className="flex flex-col p-3 gap-2">
        {MOCK_DEFAULTERS.map((defaulter) => (
          <div key={defaulter.id} className="flex justify-between items-center p-3 border border-border rounded-lg bg-bg-page hover:bg-bg-input transition-colors group">
            
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-text-primary">{defaulter.studentName}</h4>
              <p className="text-[11px] text-text-secondary mt-0.5">{defaulter.className} • Due: {defaulter.dueDate}</p>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-danger">{formatCurrency(defaulter.pendingAmount)}</span>
              
              <button 
                onClick={(e) => handleRemind(defaulter.guardianPhone, e)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-success/10 text-success hover:bg-success hover:text-white transition-all shadow-sm"
                title="Send WhatsApp Reminder"
              >
                <MessageSquare size={14} />
              </button>
            </div>
            
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-border bg-bg-page text-center mt-auto">
        <button className="text-xs font-bold text-danger hover:underline">View All Defaulters</button>
      </div>
    </div>
  );
}
