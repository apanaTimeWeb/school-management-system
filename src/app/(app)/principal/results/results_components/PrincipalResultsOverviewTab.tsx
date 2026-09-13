"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalResultOverview } from '../results_types/PrincipalResults.types';
import { fetchPrincipalResultOverview } from '../results_api/PrincipalResultsApi';
import { Trophy, TrendingUp, AlertTriangle, Users } from 'lucide-react';

export default function PrincipalResultsOverviewTab() {
  const [overview, setOverview] = useState<PrincipalResultOverview | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalResultOverview().then(data => {
      if (isMounted) {
        setOverview(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading || !overview) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => <div key={i} className="h-32 bg-card border border-border rounded-xl animate-pulse" />)}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-success/20 rounded-lg text-success">
              <TrendingUp size={20} />
            </div>
            <p className="text-[13px] font-bold text-text-secondary uppercase">Pass Percentage</p>
          </div>
          <p className="text-[28px] font-bold text-text-primary mt-2">{overview.overallPassPercentage}%</p>
          <p className="text-[12px] text-success font-medium mt-1">+2.4% from last term</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/20 rounded-lg text-primary">
              <Users size={20} />
            </div>
            <p className="text-[13px] font-bold text-text-secondary uppercase">Students Evaluated</p>
          </div>
          <p className="text-[28px] font-bold text-text-primary mt-2">{overview.totalStudentsEvaluated}</p>
          <p className="text-[12px] text-text-secondary font-medium mt-1">Across 45 sections</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-info/20 rounded-lg text-info">
              <Trophy size={20} />
            </div>
            <p className="text-[13px] font-bold text-text-secondary uppercase">Top Class</p>
          </div>
          <p className="text-[24px] font-bold text-text-primary mt-2">{overview.topPerformingClass}</p>
          <p className="text-[12px] text-info font-medium mt-1">Average GPA: {overview.overallAverageGPA}</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-danger/20 rounded-lg text-danger">
              <AlertTriangle size={20} />
            </div>
            <p className="text-[13px] font-bold text-text-secondary uppercase">Needs Attention</p>
          </div>
          <p className="text-[24px] font-bold text-text-primary mt-2">{overview.lowestPerformingClass}</p>
          <p className="text-[12px] text-danger font-medium mt-1">Lowest performance this term</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
        <h3 className="text-[16px] font-bold text-text-primary mb-4">Pass/Fail Analysis</h3>
        <div className="h-64 flex items-center justify-center bg-bg-main border border-border/50 rounded-lg">
          <p className="text-[13px] text-text-secondary font-medium">Chart Visualization Placeholder (Pass vs Fail Trend)</p>
        </div>
      </div>
    </div>
  );
}
