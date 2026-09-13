"use client";
import React from 'react';
import { PrincipalAnalyticsTrendMetric } from '../analytics_types/PrincipalAnalytics.types';
import { usePrincipalAnalyticsStore } from '../analytics_store/usePrincipalAnalyticsStore';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import clsx from 'clsx';

export default function PrincipalAnalyticsTrendsTab({ data }: { data: PrincipalAnalyticsTrendMetric[] }) {
  const { setSelectedTrend } = usePrincipalAnalyticsStore();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((metric) => (
        <button
          key={metric.id}
          onClick={() => setSelectedTrend(metric)}
          className="bg-card border border-border p-5 rounded-xl shadow-sm hover:border-primary/50 hover:bg-white/5 transition-all text-left flex flex-col relative overflow-hidden group"
        >
          <div className="flex justify-between items-start mb-4">
            <span className="text-[12px] font-bold text-text-secondary bg-black/20 px-2 py-0.5 rounded">{metric.category}</span>
            <div className={clsx("flex items-center gap-1 text-[12px] font-bold px-2 py-0.5 rounded",
              metric.trend === 'up' ? 'bg-success/10 text-success' :
              metric.trend === 'down' ? 'bg-danger/10 text-danger' :
              'bg-info/10 text-info'
            )}>
              {metric.trend === 'up' && <TrendingUp size={14}/>}
              {metric.trend === 'down' && <TrendingDown size={14}/>}
              {metric.trend === 'stable' && <Minus size={14}/>}
              {metric.percentage}
            </div>
          </div>
          
          <h3 className="text-[24px] font-bold text-text-primary mb-1">{metric.value}</h3>
          <p className="text-[14px] font-bold text-primary mb-1">{metric.title}</p>
          <p className="text-[12px] text-text-secondary line-clamp-1">{metric.description}</p>
        </button>
      ))}
    </div>
  );
}
