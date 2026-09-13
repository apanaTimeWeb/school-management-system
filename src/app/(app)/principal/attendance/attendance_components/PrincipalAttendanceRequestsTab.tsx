"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalAttendanceCorrectionReq } from '../attendance_types/PrincipalAttendance.types';
import { fetchPrincipalCorrectionReqs } from '../attendance_api/PrincipalAttendanceApi';
import { usePrincipalAttendanceStore } from '../attendance_store/usePrincipalAttendanceStore';
import { FileSignature, ShieldAlert, CheckCircle, XCircle } from 'lucide-react';

export default function PrincipalAttendanceRequestsTab() {
  const [requests, setRequests] = useState<PrincipalAttendanceCorrectionReq[]>([]);
  const [loading, setLoading] = useState(true);
  const { setCorrectionModalOpen } = usePrincipalAttendanceStore();

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalCorrectionReqs().then(data => {
      if (isMounted) {
        setRequests(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => <div key={i} className="h-20 bg-skeleton-base animate-pulse rounded" />)}
        </div>
      </div>
    );
  }

  if (requests.length === 0) {
    return (
      <div className="bg-card border border-border rounded-xl p-12 flex flex-col items-center justify-center text-center shadow-sm">
        <FileSignature size={48} className="text-border mb-4" />
        <h3 className="text-[16px] font-bold text-text-primary mb-1">No Correction Requests</h3>
        <p className="text-[13px] text-text-secondary">All attendance logs are clear and no teacher has requested a correction.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-warning/10 border border-warning/30 rounded-xl p-4 flex items-start gap-3 shadow-sm">
        <ShieldAlert className="text-warning shrink-0 mt-0.5" size={18} />
        <div>
          <h4 className="text-[14px] font-bold text-warning">Action Required</h4>
          <p className="text-[12px] text-warning/80 mt-1">
            Teachers have submitted requests to alter attendance logs post-submission. Please review the reasons and approve or reject the changes to maintain audit trails.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {requests.map((req) => (
          <div key={req.id} className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-page border border-border uppercase text-text-secondary tracking-wider">
                  {req.dateOfRecord}
                </span>
                <span className="text-[12px] font-medium text-text-secondary">Requested by: <strong className="text-text-primary">{req.requestedBy}</strong></span>
              </div>
              <h3 className="text-[16px] font-bold text-text-primary mb-1">
                {req.studentName} <span className="text-[13px] text-text-secondary font-medium">({req.className})</span>
              </h3>
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-page border border-border/50 text-[12px] font-bold">
                  <span className="text-text-secondary line-through">{req.originalStatus}</span>
                  <span className="text-text-secondary">→</span>
                  <span className={req.requestedStatus === 'Present' ? 'text-success' : req.requestedStatus === 'Late' ? 'text-warning' : 'text-danger'}>
                    {req.requestedStatus}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-3 shrink-0 border-t md:border-t-0 md:border-l border-border/50 pt-4 md:pt-0 md:pl-6">
              <button 
                onClick={() => setCorrectionModalOpen(true, req.id)}
                className="w-full md:w-auto px-5 py-2.5 bg-primary/10 hover:bg-primary text-primary hover:text-black border border-primary/30 hover:border-primary rounded-md text-[13px] font-bold transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                Review Request
              </button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
