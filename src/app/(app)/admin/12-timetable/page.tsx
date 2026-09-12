"use client";

import React, { useState } from "react";
import TimetableViewer from "./timetable_components/TimetableViewer";
import TimetableBuilder from "./timetable_components/TimetableBuilder";
import SubstituteManagement from "./timetable_components/SubstituteManagement";
import TimetableSettings from "./timetable_components/TimetableSettings";
import { CalendarDays, LayoutGrid, UserMinus, Clock } from "lucide-react";
import clsx from "clsx";

const tabs = [
  { id: "viewer", label: "Timetable Viewer", icon: CalendarDays },
  { id: "builder", label: "Timetable Builder", icon: LayoutGrid },
  { id: "substitute", label: "Substitute Management", icon: UserMinus },
  { id: "settings", label: "Period Settings", icon: Clock },
];

export default function TimetablePage() {
  const [activeTab, setActiveTab] = useState("viewer");

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 fade-in h-[calc(100vh-100px)]">
      {/* Header & Tabs */}
      <div className="flex flex-col gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Timetable Management</h1>
          <p className="text-sm text-text-secondary mt-1">Manage class/teacher timetables, periods, and substitute allocations.</p>
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
        {activeTab === "viewer" && <TimetableViewer />}
        {activeTab === "builder" && <TimetableBuilder />}
        {activeTab === "substitute" && <SubstituteManagement />}
        {activeTab === "settings" && <TimetableSettings />}
      </div>
    </div>
  );
}
