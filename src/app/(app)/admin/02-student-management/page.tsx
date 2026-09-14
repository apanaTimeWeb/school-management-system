"use client";

import React, { useState } from "react";
import StudentDirectory from "./student_management_components/StudentDirectory";
import StudentRegistrationForm from "./student_management_components/StudentRegistrationForm";
import StudentOperations from "./student_management_components/StudentOperations";
import StudentProfileView from "./student_management_components/StudentProfileView";
import { Users, UserPlus, Settings2, UserCircle } from "lucide-react";
import clsx from "clsx";

const tabs = [
  { id: "directory", label: "Student Directory", icon: Users },
  { id: "registration", label: "New Registration", icon: UserPlus },
  { id: "profile", label: "Student Profile", icon: UserCircle },
  { id: "operations", label: "Operations & Actions", icon: Settings2 },
];

export default function StudentManagementPage() {
  const [activeTab, setActiveTab] = useState("directory");

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
        {activeTab === "directory" && <StudentDirectory />}
        {activeTab === "registration" && <StudentRegistrationForm />}
        {activeTab === "profile" && <StudentProfileView />}
        {activeTab === "operations" && <StudentOperations />}
      </div>
    </div>
  );
}
