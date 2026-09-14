"use client";

import React, { useState } from "react";
import AcademicAudit from "./audit_components/AcademicAudit";
import FinanceAudit from "./audit_components/FinanceAudit";
import ClassroomAudit from "./audit_components/ClassroomAudit";
import SystemAudit from "./audit_components/SystemAudit";
import { ScrollText, UserCog, IndianRupee, ClipboardList, Settings } from "lucide-react";
import clsx from "clsx";

const tabs = [
  { id: "academic", label: "Academic & Documents", icon: UserCog },
  { id: "finance", label: "Financial Changes", icon: IndianRupee },
  { id: "classroom", label: "Marks & Attendance", icon: ClipboardList },
  { id: "system", label: "Settings & Approvals", icon: Settings },
];

export default function AuditPage() {
  const [activeTab, setActiveTab] = useState("academic");

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 fade-in h-[calc(100vh-100px)]">
      {/* Header & Tabs */}
      <div className="flex flex-col gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary flex items-center gap-2"><ScrollText className="text-primary"/> Master Audit Ledger</h1>
          <p className="text-sm text-text-secondary mt-1">Immutable tracking of "Who did What and When" across the entire ERP system.</p>
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
        {activeTab === "academic" && <AcademicAudit />}
        {activeTab === "finance" && <FinanceAudit />}
        {activeTab === "classroom" && <ClassroomAudit />}
        {activeTab === "system" && <SystemAudit />}
      </div>
    </div>
  );
}
