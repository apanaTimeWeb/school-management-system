"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalApprovalRequest } from '../approvals_types/PrincipalApprovals.types';
import { fetchPrincipalApprovalRequests } from '../approvals_api/PrincipalApprovalsApi';
import { usePrincipalApprovalsStore } from '../approvals_store/usePrincipalApprovalsStore';
import { Search, Filter, AlertTriangle, Paperclip } from 'lucide-react';
import clsx from 'clsx';

export default function PrincipalApprovalsList() {
  const { selectedCategory, setSelectedRequest } = usePrincipalApprovalsStore();
  const [requests, setRequests] = useState<PrincipalApprovalRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    fetchPrincipalApprovalRequests(selectedCategory).then(data => {
      if (isMounted) {
        setRequests(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, [selectedCategory]);

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => <div key={i} className="h-20 bg-skeleton-base animate-pulse rounded" />)}
        </div>
      </div>
    );
  }

  if (requests.length === 0) {
    return (
      <div className="bg-card border border-border rounded-xl p-12 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mb-4">
          <CheckSquare size={32}/>
        </div>
        <h3 className="text-[18px] font-bold text-text-primary mb-2">All Caught Up!</h3>
        <p className="text-[14px] text-text-secondary">There are no pending requests for {selectedCategory} at the moment.</p>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-border flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex items-center gap-2 bg-input border border-border rounded-md px-3 py-1.5 focus-within:border-primary transition-colors flex-1 max-w-sm">
          <Search size={14} className="text-text-secondary" />
          <input 
            type="text" 
            placeholder="Search title or requester..." 
            className="bg-transparent border-none outline-none text-[13px] text-text-primary w-full placeholder:text-text-secondary/50"
          />
        </div>
        <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-coming-soon', { detail: 'Action completed successfully!' })); }} className="flex items-center justify-center gap-2 px-4 py-1.5 bg-page hover:bg-white/5 border border-border rounded-md text-[13px] font-bold text-text-primary transition-colors shrink-0">
          <Filter size={14} /> Filter
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-64">Request Info</th>
              <th className="p-4 w-56">Requested By</th>
              <th className="p-4">Summary</th>
              <th className="p-4 w-32 text-center">Priority</th>
              <th className="p-4 w-32 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id} className="border-b border-border/50 hover:bg-white/5 transition-colors group">
                <td className="p-4">
                  <p className="text-[14px] font-bold text-text-primary mb-1">{req.title}</p>
                  <p className="text-[11px] text-text-secondary font-mono bg-black/20 inline-block px-1.5 rounded">{req.id}</p>
                </td>
                <td className="p-4">
                  <p className="text-[13px] font-bold text-text-primary mb-1">{req.requestedBy}</p>
                  <p className="text-[12px] text-text-secondary">{req.dateRequested}</p>
                </td>
                <td className="p-4">
                  <p className="text-[13px] text-text-primary line-clamp-2 mb-2">{req.description}</p>
                  <div className="flex items-center gap-3">
                    {req.amount && <span className="text-[11px] font-bold text-success bg-success/10 px-2 py-0.5 rounded border border-success/20">{req.amount}</span>}
                    {req.attachments && req.attachments.length > 0 && (
                      <span className="flex items-center gap-1 text-[11px] text-text-secondary">
                        <Paperclip size={12}/> {req.attachments.length} attached
                      </span>
                    )}
                  </div>
                </td>
                <td className="p-4 text-center">
                  <span className={clsx("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border", 
                    req.priority === 'High' ? 'bg-danger/10 text-danger border-danger/30' :
                    req.priority === 'Medium' ? 'bg-warning/10 text-warning border-warning/30' :
                    'bg-info/10 text-info border-info/30'
                  )}>
                    {req.priority === 'High' && <AlertTriangle size={12}/>}
                    {req.priority}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button 
                    onClick={() => setSelectedRequest(req)}
                    className="px-4 py-1.5 rounded bg-primary/10 hover:bg-primary border border-primary/30 hover:border-primary text-[12px] font-bold text-primary hover:text-black transition-colors"
                  >
                    Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Ensure CheckSquare is imported for the empty state
import { CheckSquare } from 'lucide-react';
