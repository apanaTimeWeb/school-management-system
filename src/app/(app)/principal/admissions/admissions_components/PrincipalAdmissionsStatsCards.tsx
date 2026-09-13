import React from 'react';
import { Users, FileText, CheckCircle, Clock, Calendar, Bookmark } from 'lucide-react';
import { PrincipalAdmissionsStats } from '../admissions_types/PrincipalAdmissions.types';

interface PrincipalAdmissionsStatsProps {
  stats: PrincipalAdmissionsStats | null;
  loading: boolean;
}

export default function PrincipalAdmissionsStatsCards({ stats, loading }: PrincipalAdmissionsStatsProps) {
  const statCards = [
    { label: "Total Enquiries", value: stats?.totalEnquiries, icon: <Users size={20} />, color: "text-primary", bg: "bg-primary/10" },
    { label: "Active Applications", value: stats?.activeApplications, icon: <FileText size={20} />, color: "text-info", bg: "bg-info/10" },
    { label: "Pending Reviews", value: stats?.pendingReviews, icon: <Clock size={20} />, color: "text-warning", bg: "bg-warning/10" },
    { label: "Scheduled Interviews", value: stats?.interviewsScheduled, icon: <Calendar size={20} />, color: "text-purple-500", bg: "bg-purple-500/10" },
    { label: "Selected (Pending Approval)", value: stats?.selectedCandidates, icon: <CheckCircle size={20} />, color: "text-success", bg: "bg-success/10" },
    { label: "Waitlisted", value: stats?.waitlistedCandidates, icon: <Bookmark size={20} />, color: "text-danger", bg: "bg-danger/10" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
      {statCards.map((card, idx) => (
        <div key={idx} className="bg-card border border-border p-4 rounded-lg flex flex-col justify-center transition-all hover:border-primary/30">
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${card.bg} ${card.color}`}>
              {card.icon}
            </div>
            <p className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider leading-tight">
              {card.label}
            </p>
          </div>
          {loading ? (
            <div className="h-7 w-16 bg-skeleton-base animate-pulse rounded mt-1" />
          ) : (
            <p className="text-[24px] font-bold text-text-primary ml-1">
              {card.value ?? '-'}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
