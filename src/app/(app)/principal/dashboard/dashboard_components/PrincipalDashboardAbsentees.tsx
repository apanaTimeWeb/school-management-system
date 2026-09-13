"use client";
// RESPONSIBILITY: Renders the Student and Staff Absentees lists with status indicators.
import React from 'react';
import { AbsenteeRecord } from '../dashboard_types/PrincipalDashboard.types';

interface PrincipalDashboardAbsenteesProps {
  data: AbsenteeRecord[];
  isLoading: boolean;
}

export default function PrincipalDashboardAbsentees({ data, isLoading }: PrincipalDashboardAbsenteesProps) {
  if (isLoading) {
    return (
      <div className="bg-card border border-border rounded-lg p-5 h-full min-h-[300px] flex flex-col">
        <div className="h-6 w-32 bg-skeleton-base animate-pulse rounded mb-4" />
        <div className="flex-1 space-y-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-12 w-full bg-skeleton-base animate-pulse rounded" />
          ))}
        </div>
      </div>
    );
  }

  const getStatusBadge = (status: AbsenteeRecord['status']) => {
    switch (status) {
      case 'approved':
        return <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-success/20 text-success border border-success/30">Approved</span>;
      case 'pending':
        return <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-warning/20 text-warning border border-warning/30">Pending</span>;
      case 'unexcused':
        return <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-danger/20 text-danger border border-danger/30">Unexcused</span>;
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg flex flex-col h-full overflow-hidden">
      <div className="p-4 border-b border-border bg-black/20 flex justify-between items-center">
        <h2 className="text-[16px] font-semibold text-text-primary">Today's Absentees</h2>
        <span className="text-[12px] text-text-secondary bg-black/40 px-2 py-1 rounded-md">{data.length} Total</span>
      </div>
      
      <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
        {data.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-text-secondary min-h-[200px]">
            <p className="text-[14px]">No absentees reported today.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {data.map((record) => (
              <div 
                key={record.id} 
                className="flex items-center justify-between p-3 rounded-md bg-page border border-border/50 hover:bg-white/5 transition-colors duration-200"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[14px] font-medium text-text-primary">{record.name}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-sm bg-white/10 text-text-secondary uppercase">
                      {record.role}
                    </span>
                  </div>
                  <div className="text-[12px] text-text-secondary">
                    {record.departmentOrClass} &bull; {record.reason}
                  </div>
                </div>
                <div>
                  {getStatusBadge(record.status)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
