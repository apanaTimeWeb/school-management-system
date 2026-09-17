"use client";

import React, { useState } from "react";
import AdmissionEnquiries from "./admission_management_components/AdmissionEnquiries";
import AdmissionProcessing from "./admission_management_components/AdmissionProcessing";
import AdmissionDecisions from "./admission_management_components/AdmissionDecisions";
import EnrollmentFinance from "./admission_management_components/EnrollmentFinance";
import AdmissionReports from "./admission_management_components/AdmissionReports";
import { UserPlus, Settings2, FileCheck, CreditCard, BarChart2 } from "lucide-react";
import clsx from "clsx";

const tabs = [
  { id: "enquiry", label: "Enquiry", icon: UserPlus },
  { id: "application", label: "Application", icon: Settings2 },
  { id: "registration", label: "Registration", icon: Settings2 },
  { id: "verification", label: "Document verification", icon: FileCheck },
  { id: "approval", label: "Admission approval", icon: FileCheck },
  { id: "waiting", label: "Waiting/rejected applications", icon: FileCheck },
  { id: "enrollment", label: "Enrollment", icon: CreditCard },
  { id: "reports", label: "Admission reports", icon: BarChart2 }
];

export default function AdmissionManagementPage() {
  const [activeTab, setActiveTab] = useState("enquiry");

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 fade-in h-[calc(100vh-100px)]">
      {/* Header & Tabs */}
      <div className="flex flex-col gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Admission Management</h1>
          <p className="text-sm text-text-secondary mt-1">End-to-end pipeline from initial enquiry to final enrollment.</p>
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
        {activeTab === "enquiry" && <AdmissionEnquiries />}
        {["application", "registration", "verification"].includes(activeTab) && <AdmissionProcessing />}
        {["approval", "waiting"].includes(activeTab) && <AdmissionDecisions />}
        {activeTab === "enrollment" && <EnrollmentFinance />}
        {activeTab === "reports" && <AdmissionReports />}
      </div>
    </div>
  );
}
