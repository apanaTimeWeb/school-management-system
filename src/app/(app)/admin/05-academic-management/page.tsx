"use client";

import React, { useState } from "react";
import AcademicSetup from "./academic_management_components/AcademicSetup";
import SubjectMapping from "./academic_management_components/SubjectMapping";
import CurriculumSyllabus from "./academic_management_components/CurriculumSyllabus";
import AcademicCalendar from "./academic_management_components/AcademicCalendar";
import TimetableManagement from "./academic_management_components/TimetableManagement";
import { Building2, BookOpen, FileCode2, Calendar, Clock } from "lucide-react";
import clsx from "clsx";

const tabs = [
  { id: "setup", label: "Academic Setup", icon: Building2 },
  { id: "subjects", label: "Subjects & Mapping", icon: BookOpen },
  { id: "curriculum", label: "Curriculum & Syllabus", icon: FileCode2 },
  { id: "calendar", label: "Calendar & Holidays", icon: Calendar },
  { id: "timetable", label: "Timetable & Periods", icon: Clock },
];

export default function AcademicManagementPage() {
  const [activeTab, setActiveTab] = useState("setup");

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 fade-in h-[calc(100vh-100px)]">
      {/* Header & Tabs */}
      <div className="flex flex-col gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Academic Management</h1>
          <p className="text-sm text-text-secondary mt-1">Configure academic sessions, subjects, syllabi, timetables, and calendars.</p>
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
        {activeTab === "setup" && <AcademicSetup />}
        {activeTab === "subjects" && <SubjectMapping />}
        {activeTab === "curriculum" && <CurriculumSyllabus />}
        {activeTab === "calendar" && <AcademicCalendar />}
        {activeTab === "timetable" && <TimetableManagement />}
      </div>
    </div>
  );
}
