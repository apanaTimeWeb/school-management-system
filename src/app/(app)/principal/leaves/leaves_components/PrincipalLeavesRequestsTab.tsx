"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalLeaveRequest } from '../leaves_types/PrincipalLeaves.types';
import { fetchPrincipalLeaveRequests } from '../leaves_api/PrincipalLeavesApi';
import { Search, Filter, CheckCircle, XCircle, Clock, CalendarDays, UserSquare2 } from 'lucide-react';
import { usePrincipalLeavesStore } from '../leaves_store/usePrincipalLeavesStore';

interface Props {
  showOnlyPending: boolean;
}

export default function PrincipalLeavesRequestsTab({ showOnlyPending }: Props) {
  const [requests, setRequests] = useState<PrincipalLeaveRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const { setSelectedRequest } = usePrincipalLeavesStore();

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    fetchPrincipalLeaveRequests().then(data => {
      if (isMounted) {
        const filtered = showOnlyPending ? data.filter(r => r.status === 'Pending') : data.filter(r => r.status !== 'Pending');
        setRequests(filtered);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, [showOnlyPending]);

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => <div key={i} className="h-20 bg-skeleton-base animate-pulse rounded" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-[18px] font-bold text-text-primary">
            {showOnlyPending ? "Pending Leave Requests" : "Leave History"}
          </h2>
          <p className="text-[13px] text-text-secondary">
            {showOnlyPending ? "Review and take action on new leave applications." : "View previously approved or rejected leaves."}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-2 bg-input border border-border rounded-md px-3 py-1.5 focus-within:border-primary transition-colors">
            <Search size={14} className="text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search by name..." 
              className="bg-transparent border-none outline-none text-[13px] text-text-primary w-full sm:w-48 placeholder:text-text-secondary/50"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-1.5 bg-page hover:bg-white/5 border border-border rounded-md text-[13px] font-bold text-text-primary transition-colors">
            <Filter size={14} /> Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1100px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-64">Applicant Info</th>
              <th className="p-4 w-40">Leave Type</th>
              <th className="p-4 w-48">Date & Duration</th>
              <th className="p-4">Reason</th>
              <th className="p-4 w-32">Status</th>
              <th className="p-4 w-32 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-8 text-center text-text-secondary text-[14px]">
                  No requests found.
                </td>
              </tr>
            ) : requests.map((req) => (
              <tr key={req.id} className="border-b border-border/50 hover:bg-white/5 transition-colors group">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30 shrink-0">
                      <UserSquare2 size={20} />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-text-primary">{req.applicantName}</p>
                      <p className="text-[12px] text-text-secondary">{req.applicantType} • {req.departmentOrClass}</p>
                      <p className="text-[11px] text-text-secondary/70">ID: {req.applicantId}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold border bg-info/20 text-info border-info/30">
                    {req.leaveType}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex flex-col gap-1 text-[13px] text-text-secondary font-medium">
                    <span className="flex items-center gap-1.5"><CalendarDays size={14} className="text-primary"/> {req.startDate} to {req.endDate}</span>
                    <span className="text-text-primary ml-5">{req.totalDays} Day(s)</span>
                  </div>
                </td>
                <td className="p-4">
                  <p className="text-[13px] text-text-secondary line-clamp-2" title={req.reason}>{req.reason}</p>
                </td>
                <td className="p-4">
                  {req.status === 'Pending' && <span className="flex items-center gap-1.5 text-warning font-bold text-[12px]"><Clock size={14}/> Pending</span>}
                  {req.status === 'Approved' && <span className="flex items-center gap-1.5 text-success font-bold text-[12px]"><CheckCircle size={14}/> Approved</span>}
                  {req.status === 'Rejected' && <span className="flex items-center gap-1.5 text-danger font-bold text-[12px]"><XCircle size={14}/> Rejected</span>}
                </td>
                <td className="p-4 text-right">
                  {req.status === 'Pending' ? (
                    <button 
                      onClick={() => setSelectedRequest(req)}
                      className="px-4 py-1.5 rounded bg-primary hover:bg-primary-hover text-black font-bold text-[12px] transition-colors"
                    >
                      Review
                    </button>
                  ) : (
                    <button 
                      onClick={() => setSelectedRequest(req)}
                      className="px-4 py-1.5 rounded bg-page border border-border hover:bg-white/5 text-text-primary font-bold text-[12px] transition-colors"
                    >
                      View
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
