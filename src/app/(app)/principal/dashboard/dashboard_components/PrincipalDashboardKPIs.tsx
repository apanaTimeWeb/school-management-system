"use client";
// RESPONSIBILITY: Renders the top row of KPI cards for the Principal Dashboard.
import React from 'react';
import Link from 'next/link';
import { Users, UserCheck, TrendingUp, CheckCircle, GraduationCap } from 'lucide-react';
import type { PrincipalDashboardKPIs } from '../dashboard_types/PrincipalDashboard.types';

interface PrincipalDashboardKPIsProps {
  data: PrincipalDashboardKPIs | null;
  isLoading: boolean;
}

export default function PrincipalDashboardKPIs({ data, isLoading }: PrincipalDashboardKPIsProps) {
  if (isLoading || !data) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-[120px] rounded-lg bg-skeleton-base animate-pulse border border-border" />
        ))}
      </div>
    );
  }

  const kpiCards = [
    {
      title: "TOTAL STUDENTS",
      value: data.totalStudents.toLocaleString('en-IN'),
      trend: data.totalStudentsTrend,
      icon: <Users size={18} className="text-info group-hover:text-info/80 transition-colors duration-200" />,
      trendPositive: data.totalStudentsTrend.includes('+'),
      href: "/principal/students",
    },
    {
      title: "TOTAL STAFF",
      value: data.totalStaff.toLocaleString('en-IN'),
      trend: data.totalStaffTrend,
      icon: <UserCheck size={18} className="text-primary group-hover:text-primary/80 transition-colors duration-200" />,
      trendPositive: data.totalStaffTrend.includes('+'),
      href: "/principal/staff",
    },
    {
      title: "TODAY'S ATTENDANCE",
      value: `${data.todaysAttendance}%`,
      trend: data.attendanceTrend,
      icon: <CheckCircle size={18} className="text-success group-hover:text-success/80 transition-colors duration-200" />,
      trendPositive: !data.attendanceTrend.includes('-'),
      href: "/principal/attendance",
    },
    {
      title: "NEW ADMISSIONS",
      value: data.newAdmissions.toString(),
      trend: data.newAdmissionsTrend,
      icon: <GraduationCap size={18} className="text-purple-400 group-hover:text-purple-300 transition-colors duration-200" />,
      trendPositive: data.newAdmissionsTrend.includes('+'),
      href: "/principal/admissions",
    },
    {
      title: "PENDING APPROVALS",
      value: data.pendingApprovals.toString(),
      trend: "Requires action",
      icon: <TrendingUp size={18} className="text-warning group-hover:text-warning/80 transition-colors duration-200" />,
      trendPositive: false,
      href: "/principal/admissions",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {kpiCards.map((card, index) => (
        <Link
          href={card.href}
          key={index}
          className="group relative flex flex-col p-4 rounded-lg bg-card border border-border hover:-translate-y-1 hover:shadow-lg transition-all duration-200 cursor-pointer"
          style={{
            background: 'linear-gradient(180deg, rgba(250,204,21,0.08) 0%, rgba(255,255,255,0.02) 100%), var(--bg-card)',
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center border border-white/5">
              {card.icon}
            </div>
            <span className="text-[11px] font-medium text-text-secondary uppercase tracking-wider">
              {card.title}
            </span>
          </div>
          <div className="text-[28px] font-bold text-text-primary mb-1">
            {card.value}
          </div>
          <div
            className={`text-[12px] font-medium ${
              card.trendPositive ? 'text-success' : 'text-danger'
            }`}
          >
            {card.trend}
          </div>
        </Link>
      ))}
    </div>
  );
}
