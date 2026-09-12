"use client";

import React from "react";
import MetricCard from "./dashboard_components/MetricCard";
import { FeeCollectionChart, AttendanceAnalyticsChart, AcademicPerformanceChart } from "./dashboard_components/DashboardCharts";
import { AlertsAndNotifications, UpcomingEventsList, ExamsAndGrievancesList } from "./dashboard_components/DashboardLists";
import { 
  Users, UserCheck, GraduationCap, IndianRupee, ClipboardList, TrendingUp,
  UserPlus, UserMinus, FileText, AlertCircle, Plus, BookOpen, User
} from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 fade-in">
      {/* Header & Quick Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Admin Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Overview of school performance, attendance, and finances.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 bg-bg-page border border-border text-text-primary px-4 py-2 rounded-md text-sm font-semibold hover:bg-border/50 transition">
            <Plus size={16} /> Quick Actions
          </button>
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-primary/90 transition shadow-sm">
            <UserPlus size={16} /> Admit Student
          </button>
          <button className="flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-secondary-hover transition shadow-sm">
            <IndianRupee size={16} /> Collect Fee
          </button>
        </div>
      </div>

      {/* Primary Metrics Grid (Top 4) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          title="Total Students" 
          value="2,450" 
          icon={Users} 
          trend="up" trendValue="1.2%" 
          colorClass="text-info" bgColorClass="bg-info-bg"
        />
        <MetricCard 
          title="Total Teachers" 
          value="142" 
          icon={GraduationCap} 
          trend="up" trendValue="2.1%" 
          colorClass="text-primary" bgColorClass="bg-primary/10"
        />
        <MetricCard 
          title="Total Staff (Non-Teaching)" 
          value="42" 
          icon={User} 
          trend="neutral" trendValue="0%" 
          colorClass="text-purple" bgColorClass="bg-purple-bg"
        />
        <MetricCard 
          title="Today's Attendance" 
          value="94.5%" 
          icon={UserCheck} 
          trend="down" trendValue="0.5%" 
          colorClass="text-success" bgColorClass="bg-success-bg"
        />
      </div>

      {/* Secondary Metrics Grid (Next 4) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-2">
        <MetricCard 
          title="New Admissions (This Month)" 
          value="128" 
          icon={UserPlus} 
          colorClass="text-success" bgColorClass="bg-success-bg"
        />
        <MetricCard 
          title="Fee Collection (Today)" 
          value="₹1,45,000" 
          icon={IndianRupee} 
          colorClass="text-warning" bgColorClass="bg-warning-bg"
        />
        <MetricCard 
          title="Absent Students (Today)" 
          value="135" 
          icon={UserMinus} 
          colorClass="text-danger" bgColorClass="bg-danger-bg"
        />
        <MetricCard 
          title="Absent Staff (Today)" 
          value="12" 
          icon={UserMinus} 
          colorClass="text-danger" bgColorClass="bg-danger-bg"
        />
      </div>

      {/* Charts Section 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-2">
        <div className="lg:col-span-2">
          <FeeCollectionChart />
        </div>
        <div className="lg:col-span-1">
          <AttendanceAnalyticsChart />
        </div>
      </div>

      {/* Charts Section 2 & Action Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-2">
        <div className="lg:col-span-2">
          <AcademicPerformanceChart />
        </div>
        
        {/* Special Action Cards Stack */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="bg-primary border border-border rounded-xl p-6 shadow-md flex items-center justify-between relative overflow-hidden group flex-1">
            <div className="absolute -right-6 -top-6 text-primary-hover opacity-50 group-hover:scale-110 transition-transform duration-500">
              <ClipboardList size={120} />
            </div>
            <div className="relative z-10">
              <h3 className="text-white/80 font-bold mb-1 text-sm uppercase tracking-wider">Pending Admissions</h3>
              <p className="text-3xl font-extrabold text-white">42</p>
              <button className="mt-4 text-xs font-bold text-secondary hover:text-white transition flex items-center gap-1">
                Review Applications <TrendingUp size={14} />
              </button>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex items-center justify-between flex-1">
            <div>
              <h3 className="text-text-secondary font-bold mb-1 text-sm uppercase tracking-wider">Pending Fees</h3>
              <p className="text-3xl font-extrabold text-danger">₹8.5L</p>
              <p className="text-xs font-semibold text-text-disabled mt-2">Across 240 students</p>
            </div>
            <div className="p-4 bg-danger-bg text-danger rounded-full">
              <AlertCircle size={32} />
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex items-center justify-between flex-1">
            <div>
              <h3 className="text-text-secondary font-bold mb-1 text-sm uppercase tracking-wider">Leave Requests</h3>
              <p className="text-3xl font-extrabold text-text-primary">12</p>
              <p className="text-xs font-semibold text-text-disabled mt-2">5 Staff, 7 Students</p>
            </div>
            <div className="p-4 bg-warning-bg text-warning rounded-full">
              <FileText size={32} />
            </div>
          </div>
        </div>
      </div>

      {/* Lists Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
        <AlertsAndNotifications />
        <UpcomingEventsList />
        <ExamsAndGrievancesList />
      </div>

    </div>
  );
}
