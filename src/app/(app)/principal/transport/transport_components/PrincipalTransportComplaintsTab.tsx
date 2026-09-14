"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalTransportComplaint } from '../transport_types/PrincipalTransport.types';
import { fetchPrincipalTransportComplaints } from '../transport_api/PrincipalTransportApi';
import { Search, Filter, AlertTriangle } from 'lucide-react';
import { usePrincipalTransportStore } from '../transport_store/usePrincipalTransportStore';
import clsx from 'clsx';

export default function PrincipalTransportComplaintsTab() {
  const [complaints, setComplaints] = useState<PrincipalTransportComplaint[]>([]);
  const [loading, setLoading] = useState(true);
  const { setSelectedComplaint } = usePrincipalTransportStore();

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalTransportComplaints().then(data => {
      if (isMounted) {
        setComplaints(data);
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
          <h2 className="text-[18px] font-bold text-text-primary">Transport Complaints</h2>
          <p className="text-[13px] text-text-secondary">Address issues regarding delays, drivers, or vehicle condition.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-2 bg-input border border-border rounded-md px-3 py-1.5 focus-within:border-primary transition-colors">
            <Search size={14} className="text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search complaints..." 
              className="bg-transparent border-none outline-none text-[13px] text-text-primary w-full sm:w-64 placeholder:text-text-secondary/50"
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
              <th className="p-4 w-48">Complaint Details</th>
              <th className="p-4 w-64">Route Details</th>
              <th className="p-4">Description</th>
              <th className="p-4 w-32 text-center">Status</th>
              <th className="p-4 w-32 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((comp) => (
              <tr key={comp.id} className="border-b border-border/50 hover:bg-white/5 transition-colors group">
                <td className="p-4">
                  <span className="text-[11px] font-bold bg-primary/20 text-primary border border-primary/30 px-2 py-0.5 rounded mb-2 inline-block">{comp.category}</span>
                  <p className="text-[13px] font-bold text-text-primary">{comp.raisedBy}</p>
                  <p className="text-[12px] text-text-secondary">{comp.date}</p>
                </td>
                <td className="p-4">
                  <p className="text-[14px] font-bold text-text-primary mb-1">{comp.routeName}</p>
                  <p className="text-[12px] font-mono text-text-secondary bg-black/20 inline-block px-1.5 rounded">{comp.routeId}</p>
                </td>
                <td className="p-4">
                  <p className="text-[13px] text-text-primary line-clamp-2">{comp.description}</p>
                </td>
                <td className="p-4 text-center">
                  <span className={clsx("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border", 
                    comp.status === 'Pending' ? 'bg-warning/10 text-warning border-warning/30' : 'bg-success/10 text-success border-success/30'
                  )}>
                    {comp.status === 'Pending' && <AlertTriangle size={12}/>}
                    {comp.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button 
                    onClick={() => setSelectedComplaint(comp)}
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
