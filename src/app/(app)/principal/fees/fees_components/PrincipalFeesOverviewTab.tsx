"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalFeeSummary, PrincipalClassFeeCollection, PrincipalFeeDefaulter } from '../fees_types/PrincipalFees.types';
import { fetchPrincipalFeeSummary, fetchPrincipalClassCollections, fetchPrincipalDefaulters } from '../fees_api/PrincipalFeesApi';
import { IndianRupee, TrendingUp, AlertTriangle, Users, BookOpen } from 'lucide-react';

export default function PrincipalFeesOverviewTab() {
  const [summary, setSummary] = useState<PrincipalFeeSummary | null>(null);
  const [classCollections, setClassCollections] = useState<PrincipalClassFeeCollection[]>([]);
  const [defaulters, setDefaulters] = useState<PrincipalFeeDefaulter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    Promise.all([
      fetchPrincipalFeeSummary(),
      fetchPrincipalClassCollections(),
      fetchPrincipalDefaulters()
    ]).then(([sumData, clsData, defData]) => {
      if (isMounted) {
        setSummary(sumData);
        setClassCollections(clsData);
        setDefaulters(defData);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading || !summary) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => <div key={i} className="h-28 bg-skeleton-base animate-pulse rounded-xl" />)}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="h-96 bg-skeleton-base animate-pulse rounded-xl" />
          <div className="h-96 bg-skeleton-base animate-pulse rounded-xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card border border-border p-5 rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-info"><IndianRupee size={48}/></div>
          <p className="text-[13px] text-text-secondary font-bold mb-1">Expected Revenue</p>
          <h3 className="text-[24px] font-bold text-text-primary">₹{(summary.totalExpected / 1000000).toFixed(2)} Cr</h3>
          <p className="text-[11px] text-text-secondary mt-2 flex items-center gap-1"><TrendingUp size={12}/> Total projected for year</p>
        </div>

        <div className="bg-card border border-success/30 p-5 rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-success"><IndianRupee size={48}/></div>
          <p className="text-[13px] text-success font-bold mb-1">Total Collected</p>
          <h3 className="text-[24px] font-bold text-success">₹{(summary.totalCollected / 1000000).toFixed(2)} Cr</h3>
          <p className="text-[11px] text-text-secondary mt-2">({summary.collectionPercentage}% of target)</p>
        </div>

        <div className="bg-card border border-danger/30 p-5 rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-danger"><AlertTriangle size={48}/></div>
          <p className="text-[13px] text-danger font-bold mb-1">Outstanding Due</p>
          <h3 className="text-[24px] font-bold text-danger">₹{(summary.totalOutstanding / 100000).toFixed(2)} L</h3>
          <p className="text-[11px] text-text-secondary mt-2">Across all classes</p>
        </div>

        <div className="bg-card border border-warning/30 p-5 rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-warning"><Users size={48}/></div>
          <p className="text-[13px] text-warning font-bold mb-1">Total Defaulters</p>
          <h3 className="text-[24px] font-bold text-warning">{defaulters.length}</h3>
          <p className="text-[11px] text-text-secondary mt-2">Needs intervention</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Class-wise Collection */}
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <h3 className="text-[16px] font-bold text-text-primary mb-4 flex items-center gap-2"><BookOpen size={16} className="text-primary"/> Class-wise Collection Status</h3>
          <div className="space-y-4">
            {classCollections.map((cls) => (
              <div key={cls.classId} className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-[13px] font-bold text-text-primary">
                  <span>{cls.className}</span>
                  <span>{cls.percentage}% Collected</span>
                </div>
                <div className="w-full bg-input rounded-full h-2 overflow-hidden flex">
                  <div className="bg-success h-full transition-all" style={{ width: `${cls.percentage}%` }} />
                  <div className="bg-danger/20 h-full transition-all" style={{ width: `${100 - cls.percentage}%` }} />
                </div>
                <div className="flex justify-between text-[11px] text-text-secondary">
                  <span>Collected: ₹{(cls.collected / 100000).toFixed(1)}L</span>
                  <span>Due: ₹{(cls.outstanding / 100000).toFixed(1)}L</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Defaulters List */}
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm flex flex-col max-h-[400px]">
          <h3 className="text-[16px] font-bold text-danger mb-4 flex items-center gap-2"><AlertTriangle size={16}/> Top Defaulters</h3>
          <div className="overflow-y-auto custom-scrollbar pr-2 flex-1 space-y-3">
            {defaulters.map((def) => (
              <div key={def.id} className="flex items-center justify-between p-3 rounded-lg border border-danger/20 bg-danger/5 hover:bg-danger/10 transition-colors">
                <div>
                  <p className="text-[14px] font-bold text-text-primary">{def.studentName}</p>
                  <p className="text-[12px] text-text-secondary">{def.classAndSection} | Due Date: {def.dueDate}</p>
                </div>
                <div className="text-right">
                  <p className="text-[14px] font-bold text-danger">₹{def.amountDue.toLocaleString()}</p>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-danger text-white rounded text-[10px] font-bold">
                    {def.monthsPending} Months Pending
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
