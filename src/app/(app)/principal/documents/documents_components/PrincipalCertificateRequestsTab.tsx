"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalCertificateRequest } from '../documents_types/PrincipalDocuments.types';
import { fetchPrincipalCertRequests } from '../documents_api/PrincipalDocumentsApi';
import { Search, Filter, AlertCircle, CalendarClock, UserSquare } from 'lucide-react';
import { usePrincipalDocumentsStore } from '../documents_store/usePrincipalDocumentsStore';
import clsx from 'clsx';

export default function PrincipalCertificateRequestsTab() {
  const [requests, setRequests] = useState<PrincipalCertificateRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const { setSelectedRequest } = usePrincipalDocumentsStore();

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalCertRequests().then(data => {
      if (isMounted) {
        setRequests(data.filter(r => r.status === 'Pending'));
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => <div key={i} className="h-24 bg-skeleton-base animate-pulse rounded" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-[18px] font-bold text-text-primary">Pending Requests</h2>
          <p className="text-[13px] text-text-secondary">Approve or reject TC, Bonafide, and other certificates.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-2 bg-input border border-border rounded-md px-3 py-1.5 focus-within:border-primary transition-colors">
            <Search size={14} className="text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search requests..." 
              className="bg-transparent border-none outline-none text-[13px] text-text-primary w-full sm:w-48 placeholder:text-text-secondary/50"
            />
          </div>
          <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-coming-soon', { detail: 'Action completed successfully!' })); }} className="flex items-center justify-center gap-2 px-4 py-1.5 bg-page hover:bg-white/5 border border-border rounded-md text-[13px] font-bold text-text-primary transition-colors">
            <Filter size={14} /> Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-40">Request ID</th>
              <th className="p-4 w-64">Student Info</th>
              <th className="p-4 w-64">Certificate Details</th>
              <th className="p-4 w-32 text-center">Urgency</th>
              <th className="p-4 w-32 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id} className="border-b border-border/50 hover:bg-white/5 transition-colors group">
                <td className="p-4">
                  <span className="font-mono text-[13px] font-bold text-text-primary bg-black/20 px-2 py-1 rounded">{req.id}</span>
                </td>
                <td className="p-4">
                  <p className="text-[14px] font-bold text-text-primary flex items-center gap-2 mb-1">
                    <UserSquare size={14} className="text-info"/> {req.studentName}
                  </p>
                  <p className="text-[12px] text-text-secondary">Class: {req.classAndSection} | ID: {req.studentId}</p>
                </td>
                <td className="p-4">
                  <p className="text-[14px] font-bold text-text-primary mb-1">{req.type}</p>
                  <p className="text-[12px] text-text-secondary flex items-center gap-1.5">
                    <CalendarClock size={12}/> Req Date: {req.requestDate}
                  </p>
                </td>
                <td className="p-4 text-center">
                  <span className={clsx("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border", 
                    req.urgency === 'Urgent' ? 'bg-danger/10 text-danger border-danger/30' : 'bg-success/10 text-success border-success/30'
                  )}>
                    {req.urgency === 'Urgent' && <AlertCircle size={12}/>}
                    {req.urgency}
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
