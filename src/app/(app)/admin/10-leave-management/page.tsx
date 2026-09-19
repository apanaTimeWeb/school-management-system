"use client";

import React, { useState } from "react";
import LeaveConfiguration from "./leave_management_components/LeaveConfiguration";
import StudentLeave from "./leave_management_components/StudentLeave";
import StaffLeave from "./leave_management_components/StaffLeave";
import LeaveHistoryBalance from "./leave_management_components/LeaveHistoryBalance";
import LeaveReports from "./leave_management_components/LeaveReports";
import { Calendar, User, Users, History, BarChart2 } from "lucide-react";
import clsx from "clsx";
import MissingFeaturesUI from './MissingFeaturesUI';

const tabs = [
  { id: "config", label: "Leave Configuration", icon: Calendar },
  { id: "student", label: "Student Leaves", icon: User },
  { id: "staff", label: "Staff Leaves", icon: Users },
  { id: "history", label: "History & Balance", icon: History },
  { id: "reports", label: "Leave Reports", icon: BarChart2 },
];

export default function LeaveManagementPage() {
  const [activeTab, setActiveTab] = useState("config");

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 fade-in h-[calc(100vh-100px)]">
      {/* Header & Tabs */}
      <div className="flex flex-col gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Leave Management</h1>
          <p className="text-sm text-text-secondary mt-1">Configure holidays, track balances, and manage student/staff leave requests.</p>
        </div>
        
        <div className="flex bg-card border border-border rounded-lg p-1 w-fit shadow-sm overflow-x-auto max-w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all whitespace-nowrap",
                activeTab === tab.id 
                  ? "bg-primary text-white shadow-sm" 
                  : "text-text-secondary hover:text-text-primary hover:bg-bg-page"
              )}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto hide-scrollbar pb-6">
        {activeTab === "config" && <LeaveConfiguration />}
        {activeTab === "student" && <StudentLeave />}
        {activeTab === "staff" && <StaffLeave />}
        {activeTab === "history" && <LeaveHistoryBalance />}
        {activeTab === "reports" && <LeaveReports />}
      </div>
          <MissingFeaturesUI />
    </div>
  );
}
