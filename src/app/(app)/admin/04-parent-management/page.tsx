"use client";

import React, { useState } from "react";
import ParentDirectory from "./parent_management_components/ParentDirectory";
import ParentProfileView from "./parent_management_components/ParentProfileView";
import ParentOperations from "./parent_management_components/ParentOperations";
import { Users, UserCircle, Settings2 } from "lucide-react";
import clsx from "clsx";

const tabs = [
  { id: "directory", label: "Parent Directory", icon: Users },
  { id: "profile", label: "Parent Profile View", icon: UserCircle },
  { id: "operations", label: "Operations & Comms", icon: Settings2 },
];

export default function ParentManagementPage() {
  const [activeTab, setActiveTab] = useState("directory");

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 fade-in h-[calc(100vh-100px)]">
      {/* Header & Tabs */}
      <div className="flex flex-col gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Parent / Guardian Management</h1>
          <p className="text-sm text-text-secondary mt-1">Manage parent records, logins, communications, and complaints.</p>
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
        {activeTab === "directory" && <ParentDirectory />}
        {activeTab === "profile" && <ParentProfileView />}
        {activeTab === "operations" && <ParentOperations />}
      </div>
    </div>
  );
}
