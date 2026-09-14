"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalLeaveBalance } from '../leaves_types/PrincipalLeaves.types';
import { fetchPrincipalLeaveBalances } from '../leaves_api/PrincipalLeavesApi';
import { FileText, Search, Filter } from 'lucide-react';

export default function PrincipalLeavesBalanceTab() {
  const [balances, setBalances] = useState<PrincipalLeaveBalance[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalLeaveBalances().then(data => {
      if (isMounted) {
        setBalances(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => <div key={i} className="h-16 bg-skeleton-base animate-pulse rounded" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-[18px] font-bold text-text-primary flex items-center gap-2">
            <FileText className="text-info" size={20} />
            Leave Balances
          </h2>
          <p className="text-[13px] text-text-secondary mt-1">Track leave quotas for all teachers and staff members.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-2 bg-input border border-border rounded-md px-3 py-1.5 focus-within:border-primary transition-colors">
            <Search size={14} className="text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search staff..." 
              className="bg-transparent border-none outline-none text-[13px] text-text-primary w-full sm:w-48 placeholder:text-text-secondary/50"
            />
          </div>
          <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-coming-soon', { detail: 'Action completed successfully!' })); }} className="flex items-center justify-center gap-2 px-4 py-1.5 bg-page hover:bg-white/5 border border-border rounded-md text-[13px] font-bold text-text-primary transition-colors">
            <Filter size={14} /> Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-64">Staff Details</th>
              <th className="p-4 w-32">Role</th>
              <th className="p-4 w-32 text-center">Total Leaves</th>
              <th className="p-4 w-32 text-center text-warning">Leaves Taken</th>
              <th className="p-4 w-32 text-center text-success">Leaves Remaining</th>
            </tr>
          </thead>
          <tbody>
            {balances.map((bal) => (
              <tr key={bal.id} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                <td className="p-4">
                  <p className="text-[14px] font-bold text-text-primary">{bal.staffName}</p>
                  <p className="text-[12px] text-text-secondary">ID: {bal.staffId}</p>
                </td>
                <td className="p-4 text-[13px] font-medium text-text-secondary">{bal.role}</td>
                <td className="p-4 text-center text-[15px] font-bold text-text-primary">{bal.totalLeaves}</td>
                <td className="p-4 text-center text-[15px] font-bold text-warning">{bal.leavesTaken}</td>
                <td className="p-4 text-center text-[15px] font-bold text-success">{bal.leavesRemaining}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
