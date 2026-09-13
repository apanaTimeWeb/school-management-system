"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalComplaint } from '../complaints_types/PrincipalComplaints.types';
import { fetchPrincipalComplaints } from '../complaints_api/PrincipalComplaintsApi';
import { Search, Filter, CheckCircle, FileText } from 'lucide-react';
import { usePrincipalComplaintsStore } from '../complaints_store/usePrincipalComplaintsStore';
import clsx from 'clsx';

export default function PrincipalComplaintsHistoryTab() {
  const [complaints, setComplaints] = useState<PrincipalComplaint[]>([]);
  const [loading, setLoading] = useState(true);
  const { setSelectedComplaint } = usePrincipalComplaintsStore();

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalComplaints().then(data => {
      if (isMounted) {
        setComplaints(data.filter(c => c.status === 'Resolved' || c.status === 'Closed'));
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

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-[18px] font-bold text-text-primary">Resolved & Closed Complaints</h2>
          <p className="text-[13px] text-text-secondary">Historical log of grievance resolutions.</p>
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
          <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-coming-soon', { detail: 'This action is part of the next development phase.' })); }} className="flex items-center justify-center gap-2 px-4 py-1.5 bg-page hover:bg-white/5 border border-border rounded-md text-[13px] font-bold text-text-primary transition-colors">
            <Filter size={14} /> Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-64">Subject & Details</th>
              <th className="p-4">Resolution Note</th>
              <th className="p-4 w-32 text-center">Status</th>
              <th className="p-4 w-32 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((comp) => (
              <tr key={comp.id} className="border-b border-border/50 hover:bg-white/5 transition-colors group">
                <td className="p-4">
                  <p className="text-[14px] font-bold text-text-primary mb-1">{comp.subject}</p>
                  <p className="text-[12px] text-text-secondary mb-1">By: {comp.submittedBy} • {comp.dateSubmitted}</p>
                  <span className={clsx("inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold border", 
                    comp.source === 'Student' ? 'bg-primary/10 text-primary border-primary/20' :
                    comp.source === 'Parent' ? 'bg-info/10 text-info border-info/20' :
                    'bg-warning/10 text-warning border-warning/20'
                  )}>
                    {comp.source}
                  </span>
                </td>
                <td className="p-4">
                  <p className="text-[13px] text-text-secondary line-clamp-2" title={comp.resolution || 'No note provided'}>
                    {comp.resolution || <span className="italic">No resolution note recorded.</span>}
                  </p>
                </td>
                <td className="p-4 text-center">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border bg-success/10 text-success border-success/30">
                    <CheckCircle size={12}/> {comp.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button 
                    onClick={() => setSelectedComplaint(comp)}
                    className="px-4 py-1.5 rounded bg-page border border-border hover:bg-white/5 text-[12px] font-bold text-text-primary transition-colors flex items-center gap-2 ml-auto"
                  >
                    <FileText size={14}/> View Log
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
