"use client";
// RESPONSIBILITY: Renders the Recent Activities timeline.
import React from 'react';
import { RecentActivity } from '../dashboard_types/PrincipalDashboard.types';
import { UserPlus, IndianRupee, Clock, Info } from 'lucide-react';

interface PrincipalDashboardActivitiesProps {
  data: RecentActivity[];
  isLoading: boolean;
}

export default function PrincipalDashboardActivities({ data, isLoading }: PrincipalDashboardActivitiesProps) {
  if (isLoading) {
    return (
      <div className="bg-card border border-border rounded-lg p-5">
        <div className="h-5 w-32 bg-skeleton-base animate-pulse rounded mb-6" />
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-skeleton-base animate-pulse shrink-0" />
              <div className="flex-1 space-y-2 py-1">
                <div className="h-4 w-full bg-skeleton-base animate-pulse rounded" />
                <div className="h-3 w-16 bg-skeleton-base animate-pulse rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const getIconForType = (type: RecentActivity['type']) => {
    switch (type) {
      case 'admission':
        return <UserPlus size={14} className="text-info" />;
      case 'fee':
        return <IndianRupee size={14} className="text-success" />;
      case 'attendance':
        return <Clock size={14} className="text-warning" />;
      default:
        return <Info size={14} className="text-primary" />;
    }
  };

  const getBgForType = (type: RecentActivity['type']) => {
    switch (type) {
      case 'admission': return 'bg-info/10 border-info/20';
      case 'fee': return 'bg-success/10 border-success/20';
      case 'attendance': return 'bg-warning/10 border-warning/20';
      default: return 'bg-primary/10 border-primary/20';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-5">
      <h2 className="text-[16px] font-semibold text-text-primary mb-6">Recent Activities</h2>
      
      <div className="relative border-l-2 border-border ml-4 space-y-6">
        {data.length === 0 ? (
          <p className="text-[13px] text-text-secondary pl-6">No recent activities.</p>
        ) : (
          data.map((activity, index) => (
            <div key={activity.id} className="relative pl-6 hover:opacity-80 transition-opacity duration-200">
              <div className={`absolute -left-[17px] top-0 w-8 h-8 rounded-full flex items-center justify-center border ${getBgForType(activity.type)}`}>
                {getIconForType(activity.type)}
              </div>
              <div className="pt-1.5">
                <p className="text-[13px] text-text-primary">{activity.description}</p>
                <p className="text-[11px] text-text-secondary mt-1">{activity.time}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
