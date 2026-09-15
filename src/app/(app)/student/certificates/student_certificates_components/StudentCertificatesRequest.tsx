"use client";

import React, { useState } from 'react';
import type { CertificateRequest, CertificateType } from '../student_certificates_types/student_certificates_types';
import { FilePlus2, Loader2, CheckCircle2, Clock, FileWarning } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  requests: CertificateRequest[];
  onSubmit: (payload: Partial<CertificateRequest>) => Promise<{success: boolean, message: string}>;
}

export default function StudentCertificatesRequest({ requests, onSubmit }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [type, setType] = useState<CertificateType>('Bonafide Certificate');
  const [reason, setReason] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reason.trim()) return;
    
    setIsSubmitting(true);
    const res = await onSubmit({ type, reason });
    setIsSubmitting(false);
    
    if (res.success) {
      setReason('');
      alert(res.message);
    }
  };

  const getStatusBadge = (status: string) => {
    if (status === 'Generated') return <span className="flex items-center gap-1 text-[10px] font-bold bg-success/10 text-success border border-success/20 px-2 py-0.5 rounded uppercase"><CheckCircle2 size={10} /> Generated</span>;
    if (status === 'Rejected') return <span className="flex items-center gap-1 text-[10px] font-bold bg-danger/10 text-danger border border-danger/20 px-2 py-0.5 rounded uppercase"><FileWarning size={10} /> Rejected</span>;
    if (status === 'In Process') return <span className="flex items-center gap-1 text-[10px] font-bold bg-info/10 text-info border border-info/20 px-2 py-0.5 rounded uppercase"><Loader2 size={10} className="animate-spin" /> In Process</span>;
    return <span className="flex items-center gap-1 text-[10px] font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20 px-2 py-0.5 rounded uppercase"><Clock size={10} /> Pending</span>;
  };

  return (
    <div className="flex flex-col gap-6 motion-safe:animate-[fadeIn_0.3s_ease-out]">
      
      {/* Request Form */}
      <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-5 shadow-sm">
        <h2 className="text-base font-bold text-text-primary mb-4 flex items-center gap-2 border-b border-border pb-3">
          <FilePlus2 size={18} className="text-primary" /> Apply for New Certificate
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase mb-1">Certificate Type</label>
            <select 
              value={type} onChange={(e) => setType(e.target.value as CertificateType)}
              className="w-full bg-page border border-border text-text-primary text-sm rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary px-3 py-2.5 outline-none font-semibold"
            >
              <option value="Bonafide Certificate">Bonafide Certificate</option>
              <option value="Character Certificate">Character Certificate</option>
              <option value="Study Certificate">Study Certificate</option>
              <option value="Transfer Certificate">Transfer Certificate (TC)</option>
              <option value="Migration Certificate">Migration Certificate</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase mb-1">Reason for Request</label>
            <input 
              type="text" required value={reason} onChange={(e) => setReason(e.target.value)}
              placeholder="e.g. For Passport application, Bank Account..."
              className="w-full bg-page border border-border text-text-primary text-sm rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary px-3 py-2.5 outline-none font-semibold"
            />
          </div>
        </div>
        
        <div className="flex justify-end">
          <button 
            type="submit" disabled={isSubmitting || !reason.trim()}
            className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white text-sm font-bold rounded-lg shadow-sm hover:bg-primary-hover transition-colors disabled:opacity-50"
          >
            {isSubmitting ? <><Loader2 size={16} className="animate-spin" /> Submitting...</> : "Submit Request"}
          </button>
        </div>
      </form>

      {/* History Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-border bg-page">
          <h3 className="text-sm font-bold text-text-primary">Past Requests Status</h3>
        </div>
        {requests.length === 0 ? (
          <div className="p-6 text-center text-text-secondary text-sm">No requests found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-page border-b border-border">
                  <th className="p-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Type</th>
                  <th className="p-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Date</th>
                  <th className="p-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Reason</th>
                  <th className="p-4 text-xs font-bold text-text-secondary uppercase tracking-wider text-right">Status & Remarks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {requests.map((req) => (
                  <tr key={req.id} className="hover:bg-page/50 transition-colors">
                    <td className="p-4 text-sm font-bold text-text-primary">{req.type}</td>
                    <td className="p-4 text-sm font-semibold text-text-secondary whitespace-nowrap">{req.requestDate}</td>
                    <td className="p-4 text-sm font-medium text-text-secondary truncate max-w-[200px]">{req.reason}</td>
                    <td className="p-4 text-right">
                      <div className="flex flex-col items-end gap-1">
                        {getStatusBadge(req.status)}
                        {req.remarks && <span className="text-[10px] text-text-secondary">{req.remarks}</span>}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
}
