"use client";

import React, { useState } from "react";
import GeneralSettings from "./settings_components/GeneralSettings";
import AcademicConfig from "./settings_components/AcademicConfig";
import FinanceConfig from "./settings_components/FinanceConfig";
import CommsConfig from "./settings_components/CommsConfig";
import { Settings2, BookOpen, IndianRupee, Link } from "lucide-react";
import clsx from "clsx";

const tabs = [
  { id: "general", label: "General & Branding", icon: Settings2 },
  { id: "academic", label: "Academic & Exam Config", icon: BookOpen },
  { id: "finance", label: "Finance & Fee Rules", icon: IndianRupee },
  { id: "comms", label: "APIs & Prefixes", icon: Link },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 fade-in h-[calc(100vh-100px)]">
      {/* Header & Tabs */}
      <div className="flex flex-col gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Settings & Configurations</h1>
          <p className="text-sm text-text-secondary mt-1">Manage school profile, branding, academic rules, and system integrations.</p>
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
        {activeTab === "general" && <GeneralSettings />}
        {activeTab === "academic" && <AcademicConfig />}
        {activeTab === "finance" && <FinanceConfig />}
        {activeTab === "comms" && <CommsConfig />}
      </div>
    </div>
  );
}
