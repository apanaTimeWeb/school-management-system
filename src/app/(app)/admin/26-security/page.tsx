"use client";

import React, { useState } from "react";
import AccessControl from "./security_components/AccessControl";
import SessionManagement from "./security_components/SessionManagement";
import AccountSecurity from "./security_components/AccountSecurity";
import AuditLogs from "./security_components/AuditLogs";
import { ShieldAlert, Users, LockKeyhole, List } from "lucide-react";
import clsx from "clsx";

const tabs = [
  { id: "access", label: "Access Control (RBAC)", icon: Users },
  { id: "session", label: "Session Management", icon: ShieldAlert },
  { id: "account", label: "Account Security (2FA)", icon: LockKeyhole },
  { id: "audit", label: "System Audit Logs", icon: List },
];

export default function SecurityPage() {
  const [activeTab, setActiveTab] = useState("access");

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 fade-in h-[calc(100vh-100px)]">
      {/* Header & Tabs */}
      <div className="flex flex-col gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Security & Privacy</h1>
          <p className="text-sm text-text-secondary mt-1">Manage role permissions, active sessions, 2FA, and monitor the audit trail.</p>
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
        {activeTab === "access" && <AccessControl />}
        {activeTab === "session" && <SessionManagement />}
        {activeTab === "account" && <AccountSecurity />}
        {activeTab === "audit" && <AuditLogs />}
      </div>
    </div>
  );
}
