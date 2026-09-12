"use client";

import React, { useState } from "react";
import StudentAttendance from "./attendance_management_components/StudentAttendance";
import StaffAttendance from "./attendance_management_components/StaffAttendance";
import AttendanceOperations from "./attendance_management_components/AttendanceOperations";
import AttendanceReports from "./attendance_management_components/AttendanceReports";
import { Users, Fingerprint, Settings2, BarChart2 } from "lucide-react";
import clsx from "clsx";

const tabs = [
  { id: "student", label: "Student Attendance", icon: Users },
  { id: "staff", label: "Staff Attendance", icon: Fingerprint },
  { id: "operations", label: "Correction & Approval", icon: Settings2 },
  { id: "reports", label: "Attendance Reports", icon: BarChart2 },
];

export default function AttendanceManagementPage() {
  const [activeTab, setActiveTab] = useState("student");

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 fade-in h-[calc(100vh-100px)]">
      {/* Header & Tabs */}
      <div className="flex flex-col gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Attendance Management</h1>
          <p className="text-sm text-text-secondary mt-1">Manage daily attendance, biometrics, leave adjustments, and analytics.</p>
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
        {activeTab === "student" && <StudentAttendance />}
        {activeTab === "staff" && <StaffAttendance />}
        {activeTab === "operations" && <AttendanceOperations />}
        {activeTab === "reports" && <AttendanceReports />}
      </div>
    </div>
  );
}
