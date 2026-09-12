import React from 'react';
import clsx from 'clsx';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  colorClass?: string;
  bgColorClass?: string;
}

export default function MetricCard({
  title,
  value,
  icon: Icon,
  trend,
  trendValue,
  colorClass = "text-primary",
  bgColorClass = "bg-primary/10"
}: MetricCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm font-semibold text-text-secondary mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-text-primary">{value}</h3>
        </div>
        <div className={clsx("p-3 rounded-lg flex items-center justify-center", bgColorClass, colorClass)}>
          <Icon size={24} />
        </div>
      </div>
      
      {trend && trendValue && (
        <div className="flex items-center gap-2 text-sm mt-auto">
          <span 
            className={clsx(
              "font-semibold px-1.5 py-0.5 rounded-md text-xs",
              trend === 'up' ? 'text-success bg-success-bg' : 
              trend === 'down' ? 'text-danger bg-danger-bg' : 
              'text-warning bg-warning-bg'
            )}
          >
            {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'} {trendValue}
          </span>
          <span className="text-text-disabled text-xs font-medium">vs last month</span>
        </div>
      )}
    </div>
  );
}
