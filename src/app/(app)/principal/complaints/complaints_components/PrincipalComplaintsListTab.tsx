"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalComplaint } from '../complaints_types/PrincipalComplaints.types';
import { fetchPrincipalComplaints } from '../complaints_api/PrincipalComplaintsApi';
import { Search, Filter, AlertTriangle, Clock, Target } from 'lucide-react';
import { usePrincipalComplaintsStore } from '../complaints_store/usePrincipalComplaintsStore';
import clsx from 'clsx';

export default function PrincipalComplaintsListTab() {
  const [complaints, setComplaints] = useState<PrincipalComplaint[]>([]);
  const [loading, setLoading] = useState(true);
  const { setSelectedComplaint } = usePrincipalComplaintsStore();

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalComplaints().then(data => {
      if (isMounted) {
        setComplaints(data.filter(c => c.status !== 'Resolved' && c.status !== 'Closed'));
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
          <h2 className="text-[18px] font-bold text-text-primary">Active Complaints</h2>
          <p className="text-[13px] text-text-secondary">Needs attention or currently in progress.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-2 bg-input border border-border rounded-md px-3 py-1.5 focus-within:border-primary transition-colors">
            <Search size={14} className="text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search complaints..." 
              className="bg-transparent border-none outline-none text-[13px] text-text-primary w-full sm:w-48 placeholder:text-text-secondary/50"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-1.5 bg-page hover:bg-white/5 border border-border rounded-md text-[13px] font-bold text-text-primary transition-colors">
            <Filter size={14} /> Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-64">Subject & Source</th>
              <th className="p-4 w-48">Submitted By & Date</th>
              <th className="p-4 w-40 text-center">Priority</th>
              <th className="p-4 w-40 text-center">Status</th>
              <th className="p-4 w-40">Assigned To</th>
              <th className="p-4 w-32 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((comp) => (
              <tr key={comp.id} className="border-b border-border/50 hover:bg-white/5 transition-colors group">
                <td className="p-4">
                  <p className="text-[14px] font-bold text-text-primary mb-1 cursor-pointer hover:text-primary transition-colors" onClick={() => setSelectedComplaint(comp)}>{comp.subject}</p>
                  <span className={clsx("inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold border", 
                    comp.source === 'Student' ? 'bg-primary/10 text-primary border-primary/20' :
                    comp.source === 'Parent' ? 'bg-info/10 text-info border-info/20' :
                    'bg-warning/10 text-warning border-warning/20'
                  )}>
                    {comp.source}
                  </span>
                </td>
                <td className="p-4">
                  <p className="text-[13px] font-bold text-text-primary mb-1">{comp.submittedBy}</p>
                  <p className="text-[12px] text-text-secondary flex items-center gap-1.5"><Clock size={12}/> {comp.dateSubmitted}</p>
                </td>
                <td className="p-4 text-center">
                  <span className={clsx("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border", 
                    comp.priority === 'Critical' ? 'bg-danger/10 text-danger border-danger/30' :
                    comp.priority === 'High' ? 'bg-warning/10 text-warning border-warning/30' :
                    comp.priority === 'Medium' ? 'bg-info/10 text-info border-info/30' :
                    'bg-success/10 text-success border-success/30'
                  )}>
                    {comp.priority === 'Critical' && <AlertTriangle size={12}/>}
                    {comp.priority}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <span className={clsx("inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold border", 
                    comp.status === 'New' ? 'bg-primary/10 text-primary border-primary/30' :
                    comp.status === 'In Progress' ? 'bg-info/10 text-info border-info/30' :
                    'bg-danger/10 text-danger border-danger/30'
                  )}>
                    {comp.status}
                  </span>
                </td>
                <td className="p-4">
                  {comp.assignedTo ? (
                    <p className="text-[13px] text-text-primary flex items-center gap-2"><Target size={14} className="text-warning"/> {comp.assignedTo}</p>
                  ) : (
                    <span className="text-[12px] text-text-secondary italic">Unassigned</span>
                  )}
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
