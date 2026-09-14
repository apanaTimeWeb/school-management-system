"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalInventoryIssue } from '../inventory_types/PrincipalInventory.types';
import { fetchPrincipalInventoryIssues } from '../inventory_api/PrincipalInventoryApi';
import { Search, Filter, AlertTriangle, CheckCircle } from 'lucide-react';
import { usePrincipalInventoryStore } from '../inventory_store/usePrincipalInventoryStore';
import clsx from 'clsx';

export default function PrincipalInventoryIssuesTab() {
  const [issues, setIssues] = useState<PrincipalInventoryIssue[]>([]);
  const [loading, setLoading] = useState(true);
  const { setSelectedIssue } = usePrincipalInventoryStore();

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalInventoryIssues().then(data => {
      if (isMounted) {
        setIssues(data);
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
          <h2 className="text-[18px] font-bold text-text-primary">Damaged / Lost Issues</h2>
          <p className="text-[13px] text-text-secondary">Monitor reports of damaged or lost school property.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-2 bg-input border border-border rounded-md px-3 py-1.5 focus-within:border-primary transition-colors">
            <Search size={14} className="text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search issues..." 
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
              <th className="p-4 w-64">Asset Info</th>
              <th className="p-4 w-48">Issue Details</th>
              <th className="p-4">Description</th>
              <th className="p-4 w-32 text-center">Status</th>
              <th className="p-4 w-32 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue) => (
              <tr key={issue.id} className="border-b border-border/50 hover:bg-white/5 transition-colors group">
                <td className="p-4">
                  <p className="text-[14px] font-bold text-text-primary mb-1">{issue.assetName}</p>
                  <p className="text-[12px] text-text-secondary font-mono bg-black/20 inline-block px-1.5 rounded">{issue.assetId}</p>
                </td>
                <td className="p-4">
                  <span className={clsx("text-[11px] font-bold px-2 py-0.5 rounded mb-1 inline-block border", 
                    issue.issueType === 'Lost' ? 'bg-danger/10 text-danger border-danger/30' :
                    issue.issueType === 'Damaged' ? 'bg-warning/10 text-warning border-warning/30' :
                    'bg-info/10 text-info border-info/30'
                  )}>
                    {issue.issueType}
                  </span>
                  <p className="text-[11px] text-text-secondary">Rep: {issue.reportedBy}</p>
                  <p className="text-[11px] text-text-secondary">Date: {issue.dateReported}</p>
                </td>
                <td className="p-4">
                  <p className="text-[13px] text-text-primary line-clamp-2">{issue.description}</p>
                </td>
                <td className="p-4 text-center">
                  <span className={clsx("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border", 
                    issue.status === 'Pending Review' ? 'bg-warning/10 text-warning border-warning/30' : 
                    issue.status === 'Action Taken' ? 'bg-info/10 text-info border-info/30' : 'bg-success/10 text-success border-success/30'
                  )}>
                    {issue.status === 'Pending Review' && <AlertTriangle size={12}/>}
                    {issue.status === 'Resolved' && <CheckCircle size={12}/>}
                    {issue.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button 
                    onClick={() => setSelectedIssue(issue)}
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
