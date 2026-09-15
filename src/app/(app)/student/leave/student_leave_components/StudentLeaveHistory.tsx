"use client";

import React from 'react';
import type { LeaveRequest } from '../student_leave_types/student_leave_types';
import { Calendar, CheckCircle2, XCircle, Clock, FileText, Paperclip, Workflow, MessageSquareText } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  history: LeaveRequest[];
}

export default function StudentLeaveHistory({ history }: Props) {
  
  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'Approved': return { color: 'text-success bg-success/10 border-success/20', icon: <CheckCircle2 size={16} className="text-success" /> };
      case 'Rejected': return { color: 'text-danger bg-danger/10 border-danger/20', icon: <XCircle size={16} className="text-danger" /> };
      case 'Pending': return { color: 'text-amber-500 bg-amber-500/10 border-amber-500/20', icon: <Clock size={16} className="text-amber-500" /> };
      default: return { color: 'text-text-secondary bg-page border-border', icon: <Clock size={16} /> };
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {history.length === 0 ? (
        <div className="bg-card border border-border rounded-xl p-10 flex flex-col items-center justify-center text-center">
          <FileText size={48} className="text-text-secondary/30 mb-4" />
          <h3 className="text-lg font-bold text-text-primary">No Leave History</h3>
          <p className="text-sm text-text-secondary mt-1">You haven't applied for any leaves yet.</p>
        </div>
      ) : (
        history.map((leave) => {
          const statusCfg = getStatusConfig(leave.status);
          
          return (
            <div key={leave.id} className="bg-card border border-border rounded-xl p-5 shadow-sm hover:border-primary/30 transition-colors group">
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <FileText size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-bold text-text-primary group-hover:text-primary transition-colors">{leave.leaveType}</h3>
                      <span className={clsx("flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border", statusCfg.color)}>
                        {statusCfg.icon} {leave.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-text-secondary">
                      <span className="flex items-center gap-1.5"><Calendar size={14} /> {leave.startDate} to {leave.endDate}</span>
                      <span className="flex items-center gap-1.5 border-l border-border pl-4">Applied On: {leave.appliedOn}</span>
                      {leave.hasAttachment && (
                        <span className="flex items-center gap-1.5 border-l border-border pl-4 text-info"><Paperclip size={14} /> Document Attached</span>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Workflow Badge */}
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-text-secondary uppercase tracking-wider bg-page border border-border px-3 py-1.5 rounded-md">
                  <Workflow size={12} className="text-primary" /> Pending With: {leave.workflowStep}
                </div>
              </div>

              {/* Reason Box */}
              <div className="bg-page border border-border rounded-lg p-4 mb-4 text-sm text-text-secondary leading-relaxed">
                <strong className="text-text-primary block mb-1">Reason for Leave:</strong>
                {leave.reason}
              </div>

              {/* Approver Remarks */}
              {leave.approverRemarks && (
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3">
                  <MessageSquareText size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary block mb-1 text-xs uppercase tracking-wider">Approver Remarks</strong>
                    <p className="text-sm text-text-secondary font-medium italic">"{leave.approverRemarks}"</p>
                  </div>
                </div>
              )}

            </div>
          );
        })
      )}
    </div>
  );
}
