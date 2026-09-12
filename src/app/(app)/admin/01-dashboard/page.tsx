"use client";

import React from "react";
import MetricCard from "./dashboard_components/MetricCard";
import { FeeCollectionChart, AttendanceAnalyticsChart } from "./dashboard_components/DashboardCharts";
import { AlertsAndNotifications, UpcomingEventsList } from "./dashboard_components/DashboardLists";
import { Users, UserCheck, GraduationCap, IndianRupee, ClipboardList, TrendingUp, AlertCircle } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 fade-in">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Admin Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Overview of school performance, attendance, and finances.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-bg-page border border-border text-text-primary px-4 py-2 rounded-md text-sm font-semibold hover:bg-border/50 transition">
            Generate Report
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-primary/90 transition shadow-sm">
            Quick Action
          </button>
        </div>
      </div>

      {/* Top Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          title="Total Students" 
          value="2,450" 
          icon={Users} 
          trend="up" 
          trendValue="1.2%" 
          colorClass="text-info" 
          bgColorClass="bg-info-bg"
        />
        <MetricCard 
          title="Today's Attendance" 
          value="94.5%" 
          icon={UserCheck} 
          trend="down" 
          trendValue="0.5%" 
          colorClass="text-success" 
          bgColorClass="bg-success-bg"
        />
        <MetricCard 
          title="Total Staff" 
          value="184" 
          icon={GraduationCap} 
          trend="neutral" 
          trendValue="0%" 
          colorClass="text-purple" 
          bgColorClass="bg-purple-bg"
        />
        <MetricCard 
          title="Fee Collection (Today)" 
          value="₹1,45,000" 
          icon={IndianRupee} 
          trend="up" 
          trendValue="12.5%" 
          colorClass="text-warning" 
          bgColorClass="bg-warning-bg"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2">
        <FeeCollectionChart />
        <AttendanceAnalyticsChart />
      </div>

      {/* Additional Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
        <div className="bg-primary border border-border rounded-xl p-6 shadow-md flex items-center justify-between relative overflow-hidden group">
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
        
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex items-center justify-between">
          <div>
            <h3 className="text-text-secondary font-bold mb-1 text-sm uppercase tracking-wider">Leave Requests</h3>
            <p className="text-3xl font-extrabold text-text-primary">12</p>
            <p className="text-xs font-semibold text-text-disabled mt-2">5 Staff, 7 Students</p>
          </div>
          <div className="p-4 bg-danger-bg text-danger rounded-full">
            <AlertCircle size={32} />
          </div>
        </div>
      </div>

      {/* Lists Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2">
        <AlertsAndNotifications />
        <UpcomingEventsList />
      </div>

    </div>
  );
}
