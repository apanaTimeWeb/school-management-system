"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalCertificateRequest } from '../documents_types/PrincipalDocuments.types';
import { fetchPrincipalCertRequests } from '../documents_api/PrincipalDocumentsApi';
import { Search, Filter, CheckCircle, Download } from 'lucide-react';
import clsx from 'clsx';

export default function PrincipalCertificateHistoryTab() {
  const [history, setHistory] = useState<PrincipalCertificateRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalCertRequests().then(data => {
      if (isMounted) {
        setHistory(data.filter(r => r.status === 'Approved' || r.status === 'Issued' || r.status === 'Rejected'));
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => <div key={i} className="h-16 bg-skeleton-base animate-pulse rounded" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-[18px] font-bold text-text-primary">History & Issued Certificates</h2>
          <p className="text-[13px] text-text-secondary">Log of all approved, rejected, and issued certificates.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-2 bg-input border border-border rounded-md px-3 py-1.5 focus-within:border-primary transition-colors">
            <Search size={14} className="text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search history..." 
              className="bg-transparent border-none outline-none text-[13px] text-text-primary w-full sm:w-48 placeholder:text-text-secondary/50"
            />
          </div>
          <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-coming-soon', { detail: 'Action completed successfully!' })); }} className="flex items-center justify-center gap-2 px-4 py-1.5 bg-page hover:bg-white/5 border border-border rounded-md text-[13px] font-bold text-text-primary transition-colors">
            <Filter size={14} /> Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-40">Request ID</th>
              <th className="p-4 w-48">Student Name</th>
              <th className="p-4">Certificate Type</th>
              <th className="p-4 w-32 text-center">Status</th>
              <th className="p-4 w-48 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {history.map((req) => (
              <tr key={req.id} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                <td className="p-4">
                  <span className="font-mono text-[13px] font-bold text-text-primary bg-black/20 px-2 py-1 rounded">{req.id}</span>
                </td>
                <td className="p-4">
                  <p className="text-[14px] font-bold text-text-primary">{req.studentName}</p>
                  <p className="text-[11px] text-text-secondary">{req.classAndSection} • {req.studentId}</p>
                </td>
                <td className="p-4">
                  <p className="text-[13px] font-bold text-text-primary mb-0.5">{req.type}</p>
                  <p className="text-[11px] text-text-secondary">Action Date: {req.actionDate}</p>
                </td>
                <td className="p-4 text-center">
                  <span className={clsx("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border", 
                    (req.status === 'Approved' || req.status === 'Issued') ? 'bg-success/10 text-success border-success/30' : 'bg-danger/10 text-danger border-danger/30'
                  )}>
                    {req.status === 'Issued' && <CheckCircle size={12}/>}
                    {req.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-coming-soon', { detail: 'Action completed successfully!' })); }} className="px-3 py-1.5 rounded bg-page hover:bg-white/10 border border-border text-[12px] font-bold text-text-primary transition-colors flex items-center gap-1.5">
                      Log
                    </button>
                    {(req.status === 'Approved' || req.status === 'Issued') && (
                      <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-coming-soon', { detail: 'Action completed successfully!' })); }} className="px-3 py-1.5 rounded bg-primary/10 hover:bg-primary border border-primary/30 hover:border-primary text-primary hover:text-black text-[12px] font-bold transition-colors flex items-center gap-1.5">
                        <Download size={14}/> PDF
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
