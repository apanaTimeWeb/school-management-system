"use client";

import React, { useState } from "react";
import AcademicReports from "./reports_components/AcademicReports";
import FinanceReports from "./reports_components/FinanceReports";
import StaffAdminReports from "./reports_components/StaffAdminReports";
import OperationsReports from "./reports_components/OperationsReports";
import { FileBarChart, IndianRupee, Users, PackageOpen } from "lucide-react";
import clsx from "clsx";

const tabs = [
  { id: "academic", label: "Academic Reports", icon: FileBarChart },
  { id: "finance", label: "Financial Reports", icon: IndianRupee },
  { id: "staff", label: "Staff & Admin", icon: Users },
  { id: "operations", label: "Operations (Lib/Inv/Trp)", icon: PackageOpen },
];

export default function ReportsAnalyticsPage() {
  const [activeTab, setActiveTab] = useState("academic");

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 fade-in h-[calc(100vh-100px)]">
      {/* Header & Tabs */}
      <div className="flex flex-col gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Reports & Analytics Engine</h1>
          <p className="text-sm text-text-secondary mt-1">Generate, view, and export comprehensive reports across all modules.</p>
        </div>
        
        <div className="flex bg-card border border-border rounded-lg p-1 w-fit shadow-sm overflow-x-auto max-w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all whitespace-nowrap",
                activeTab === tab.id 
                  ? "bg-primary text-black shadow-sm" 
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
        {activeTab === "academic" && <AcademicReports />}
        {activeTab === "finance" && <FinanceReports />}
        {activeTab === "staff" && <StaffAdminReports />}
        {activeTab === "operations" && <OperationsReports />}
      </div>
    </div>
  );
}
