"use client";

import React, { useState } from "react";
import StaffDirectory from "./staff_management_components/StaffDirectory";
import StaffOnboarding from "./staff_management_components/StaffOnboarding";
import StaffOperations from "./staff_management_components/StaffOperations";
import AttendanceLeave from "./staff_management_components/AttendanceLeave";
import StaffReports from "./staff_management_components/StaffReports";
import { Users, UserPlus, Settings, Calendar, BarChart2 } from "lucide-react";
import clsx from "clsx";

const tabs = [
  { id: "directory", label: "Directory & Profiles", icon: Users },
  { id: "onboarding", label: "Staff Onboarding", icon: UserPlus },
  { id: "operations", label: "Operations & ID Cards", icon: Settings },
  { id: "attendance", label: "Attendance & Leave", icon: Calendar },
  { id: "reports", label: "Staff Analytics", icon: BarChart2 },
];

export default function StaffManagementPage() {
  const [activeTab, setActiveTab] = useState("directory");

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 fade-in h-[calc(100vh-100px)]">
      {/* Header & Tabs */}
      <div className="flex flex-col gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Staff Management</h1>
          <p className="text-sm text-text-secondary mt-1">Manage staff profiles, onboarding, assignments, leaves, and overall HR operations.</p>
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
        {activeTab === "directory" && <StaffDirectory />}
        {activeTab === "onboarding" && <StaffOnboarding />}
        {activeTab === "operations" && <StaffOperations />}
        {activeTab === "attendance" && <AttendanceLeave />}
        {activeTab === "reports" && <StaffReports />}
      </div>
    </div>
  );
}
