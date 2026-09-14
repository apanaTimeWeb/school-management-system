"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalApprovalSummary } from '../approvals_types/PrincipalApprovals.types';
import { fetchPrincipalApprovalSummary } from '../approvals_api/PrincipalApprovalsApi';
import { usePrincipalApprovalsStore } from '../approvals_store/usePrincipalApprovalsStore';
import * as Icons from 'lucide-react';
import clsx from 'clsx';

export default function PrincipalApprovalsDashboard() {
  const [summary, setSummary] = useState<PrincipalApprovalSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const { setSelectedCategory } = usePrincipalApprovalsStore();

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalApprovalSummary().then(data => {
      if (isMounted) {
        setSummary(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {[...Array(12)].map((_, i) => <div key={i} className="h-32 bg-skeleton-base animate-pulse rounded-xl" />)}
      </div>
    );
  }

  const totalPending = summary.reduce((acc, curr) => acc + curr.pendingCount, 0);

  return (
    <div className="space-y-6">
      
      <div className="bg-gradient-to-r from-warning/20 to-transparent border border-warning/30 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-[20px] font-bold text-text-primary mb-1">Attention Required</h2>
          <p className="text-[14px] text-text-secondary">You have <span className="font-bold text-warning">{totalPending} pending requests</span> across all departments awaiting your approval.</p>
        </div>
      </div>

      <h3 className="text-[16px] font-bold text-text-primary mb-4">Approval Categories</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {summary.map((item) => {
          const IconComponent = (Icons as any)[item.iconName] || Icons.CheckSquare;
          return (
            <button
              key={item.category}
              onClick={() => setSelectedCategory(item.category)}
              className="bg-card border border-border p-5 rounded-xl shadow-sm hover:border-primary/50 hover:bg-white/5 transition-all text-center flex flex-col items-center group relative overflow-hidden h-full"
            >
              {item.pendingCount > 0 && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-danger text-white text-[11px] font-bold rounded-full flex items-center justify-center">
                  {item.pendingCount}
                </div>
              )}
              
              <div className={clsx("w-12 h-12 rounded-full flex items-center justify-center mb-3 bg-page border border-border group-hover:scale-110 transition-transform", item.colorClass)}>
                <IconComponent size={24} />
              </div>
              <h3 className="text-[13px] font-bold text-text-primary">{item.category}</h3>
            </button>
          )
        })}
      </div>
    </div>
  );
}
