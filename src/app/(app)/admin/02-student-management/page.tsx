"use client";

import React, { useState } from "react";
import StudentDirectory from "./student_management_components/StudentDirectory";
import StudentRegistrationForm from "./student_management_components/StudentRegistrationForm";
import StudentOperations from "./student_management_components/StudentOperations";
import StudentProfileView from "./student_management_components/StudentProfileView";
import { Users, UserPlus, Settings2, UserCircle } from "lucide-react";
import clsx from "clsx";

const tabs = [
  { id: "admission", label: "Student admission/enrollment", icon: UserPlus },
  { id: "history", label: "Student history", icon: UserCircle },
  { id: "promotion", label: "Student promotion", icon: Settings2 },
  { id: "demotion", label: "Student demotion", icon: Settings2 },
  { id: "section", label: "Section change", icon: Settings2 },
  { id: "class", label: "Class change", icon: Settings2 },
  { id: "transfer", label: "Student transfer", icon: Settings2 },
  { id: "withdrawal", label: "Student withdrawal", icon: Settings2 },
  { id: "readmission", label: "Re-admission", icon: Settings2 },
  { id: "roll", label: "Roll number", icon: Settings2 },
  { id: "house", label: "House allocation", icon: Settings2 }
];

export default function StudentManagementPage() {
  const [activeTab, setActiveTab] = useState("admission");

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 fade-in h-[calc(100vh-100px)]">
      {/* Header & Tabs */}
      <div className="flex flex-col gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Student Management</h1>
          <p className="text-sm text-text-secondary mt-1">Manage student records, admissions, transfers, and operations.</p>
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
        {(activeTab === "admission" || activeTab === "readmission") && <StudentRegistrationForm />}
        {activeTab === "history" && <StudentProfileView />}
        {["promotion", "demotion", "section", "class", "transfer", "withdrawal", "roll", "house"].includes(activeTab) && <StudentOperations />}
      </div>
    </div>
  );
}
