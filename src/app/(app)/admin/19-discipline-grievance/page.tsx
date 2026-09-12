"use client";

import React, { useState } from "react";
import DisciplineManager from "./discipline_components/DisciplineManager";
import GrievancePortal from "./discipline_components/GrievancePortal";
import ComplaintResolution from "./discipline_components/ComplaintResolution";
import HistoryReports from "./discipline_components/HistoryReports";
import { ShieldAlert, Mail, CheckSquare, History } from "lucide-react";
import clsx from "clsx";

const tabs = [
  { id: "discipline", label: "Discipline Manager", icon: ShieldAlert },
  { id: "grievance", label: "Grievance Portal", icon: Mail },
  { id: "resolution", label: "Complaint Resolution", icon: CheckSquare },
  { id: "history", label: "History & Reports", icon: History },
];

export default function DisciplineGrievancePage() {
  const [activeTab, setActiveTab] = useState("discipline");

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 fade-in h-[calc(100vh-100px)]">
      {/* Header & Tabs */}
      <div className="flex flex-col gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Discipline & Grievance</h1>
          <p className="text-sm text-text-secondary mt-1">Manage student discipline records, handle grievances, and resolve complaints.</p>
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
        {activeTab === "discipline" && <DisciplineManager />}
        {activeTab === "grievance" && <GrievancePortal />}
        {activeTab === "resolution" && <ComplaintResolution />}
        {activeTab === "history" && <HistoryReports />}
      </div>
    </div>
  );
}
