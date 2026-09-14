"use client";
import React from "react";
import HRDashboardKPIs from "./HRDashboardKPIs";
import HRDashboardCharts from "./HRDashboardCharts";
import HRDashboardTasks from "./HRDashboardTasks";

export default function HRDashboardMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-6 fade-in pb-24">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-text-primary tracking-tight">
            HR Overview
          </h1>
          <p className="text-sm font-semibold text-text-secondary mt-1">
            Welcome back, Neha! Here's the staff and administrative summary for today.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-indigo-50 text-indigo-700 font-bold text-sm rounded-lg hover:bg-indigo-100 transition-colors shadow-sm">
            Generate Payroll
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white font-bold text-sm rounded-lg hover:bg-indigo-700 transition-colors shadow-md">
            + New Employee
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <HRDashboardKPIs />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Charts & Graphs (Takes up 2 columns on large screens) */}
        <div className="lg:col-span-2 space-y-6">
          <HRDashboardCharts />
        </div>

        {/* Tasks & Notifications (Takes up 1 column on large screens) */}
        <div className="space-y-6">
          <HRDashboardTasks />
        </div>

      </div>

    </div>
  );
}
