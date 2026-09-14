"use client";

import React, { useState } from "react";
import ExamSetup from "./examination_management_components/ExamSetup";
import MarksManagement from "./examination_management_components/MarksManagement";
import ResultProcessing from "./examination_management_components/ResultProcessing";
import ReportCards from "./examination_management_components/ReportCards";
import { Settings, PenTool, Cpu, FileText } from "lucide-react";
import clsx from "clsx";

const tabs = [
  { id: "setup", label: "Exam Setup", icon: Settings },
  { id: "marks", label: "Marks Management", icon: PenTool },
  { id: "processing", label: "Result Engine", icon: Cpu },
  { id: "reports", label: "Report Cards", icon: FileText },
];

export default function ExaminationManagementPage() {
  const [activeTab, setActiveTab] = useState("setup");

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 fade-in h-[calc(100vh-100px)]">
      {/* Header & Tabs */}
      <div className="flex flex-col gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Examination Management</h1>
          <p className="text-sm text-text-secondary mt-1">Configure exams, manage marks, process results, and generate report cards.</p>
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
        {activeTab === "setup" && <ExamSetup />}
        {activeTab === "marks" && <MarksManagement />}
        {activeTab === "processing" && <ResultProcessing />}
        {activeTab === "reports" && <ReportCards />}
      </div>
    </div>
  );
}
