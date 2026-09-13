"use client";
import React, { useEffect, useState } from 'react';
import { PieChart, TrendingUp, AlertTriangle } from 'lucide-react';
import { usePrincipalAnalyticsStore } from '../analytics_store/usePrincipalAnalyticsStore';
import { fetchPrincipalAnalytics } from '../analytics_api/PrincipalAnalyticsApi';
import { PrincipalAnalyticsData } from '../analytics_types/PrincipalAnalytics.types';

import PrincipalAnalyticsTrendsTab from './PrincipalAnalyticsTrendsTab';
import PrincipalAnalyticsRiskTab from './PrincipalAnalyticsRiskTab';
import PrincipalAnalyticsDetailModal from './PrincipalAnalyticsDetailModal';

export default function PrincipalAnalyticsMain() {
  const { activeTab, setActiveTab } = usePrincipalAnalyticsStore();
  const [data, setData] = useState<PrincipalAnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalAnalytics().then(res => {
      if (isMounted) {
        setData(res);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  return (
    <div className="w-full h-full flex flex-col min-h-screen">
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-text-primary flex items-center gap-2">
            <PieChart className="text-primary" size={24} />
            Principal Analytics
          </h1>
          <p className="text-[14px] text-text-secondary mt-1">
            Data-driven insights covering strength, attendance, academics, fees, and at-risk students.
          </p>
        </div>
      </div>

      <div className="flex border-b border-border bg-card rounded-t-lg overflow-x-auto custom-scrollbar">
        <button
          onClick={() => setActiveTab('trends')}
          className={`flex items-center gap-2 px-6 py-4 text-[14px] font-bold whitespace-nowrap transition-all border-b-2 ${
            activeTab === 'trends'
              ? 'text-primary border-primary bg-primary/10'
              : 'text-text-secondary border-transparent hover:text-text-primary hover:bg-white/5'
          }`}
        >
          <TrendingUp size={16} className={activeTab === 'trends' ? 'text-primary' : 'text-text-secondary'}/>
          School Trends & Performance
        </button>
        <button
          onClick={() => setActiveTab('risks')}
          className={`flex items-center gap-2 px-6 py-4 text-[14px] font-bold whitespace-nowrap transition-all border-b-2 ${
            activeTab === 'risks'
              ? 'text-danger border-danger bg-danger/10'
              : 'text-text-secondary border-transparent hover:text-text-primary hover:bg-white/5'
          }`}
        >
          <AlertTriangle size={16} className={activeTab === 'risks' ? 'text-danger' : 'text-text-secondary'}/>
          Risk Analysis & Alerts
        </button>
      </div>

      <div className="flex-1 bg-bg-main pt-6 overflow-x-hidden">
        {loading || !data ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => <div key={i} className="h-32 bg-skeleton-base animate-pulse rounded-xl" />)}
          </div>
        ) : (
          <>
            {activeTab === 'trends' && <PrincipalAnalyticsTrendsTab data={data.trends} />}
            {activeTab === 'risks' && <PrincipalAnalyticsRiskTab data={data.atRiskStudents} />}
          </>
        )}
      </div>

      <PrincipalAnalyticsDetailModal />
    </div>
  );
}
