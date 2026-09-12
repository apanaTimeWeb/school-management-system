"use client";

import { useState } from "react";
import { Plus, Users, Layout, Building2, Flag, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import SuperAdminClassesSectionsTab from "./super_admin_school_structure_components/SuperAdminClassesSectionsTab";
import SuperAdminWingsTab from "./super_admin_school_structure_components/SuperAdminWingsTab";
import SuperAdminDepartmentsTab from "./super_admin_school_structure_components/SuperAdminDepartmentsTab";
import SuperAdminHousesTab from "./super_admin_school_structure_components/SuperAdminHousesTab";

type TabType = 'Classes' | 'Wings' | 'Departments' | 'Houses';

export default function SuperAdminSchoolStructurePage() {
  const [activeTab, setActiveTab] = useState<TabType>('Classes');

  const tabs = [
    { id: 'Classes', label: 'Classes & Sections', icon: Users },
    { id: 'Wings', label: 'School Wings', icon: Layout },
    { id: 'Departments', label: 'Departments', icon: Building2 },
    { id: 'Houses', label: 'Houses', icon: Flag },
  ] as const;

  return (
    <div className="flex flex-col gap-6 max-w-[1400px]">
      
      {/* Header */}
      <div>
        <h1 className="text-[22px] font-bold text-text-primary">School Structure Management</h1>
        <p className="text-sm text-text-secondary mt-1">Configure classes, wings, departments, and houses for the organization.</p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-border">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={cn(
                "flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors",
                isActive 
                  ? "border-primary text-primary bg-primary-subtle/30" 
                  : "border-transparent text-text-secondary hover:text-text-primary hover:bg-bg-page"
              )}
            >
              <Icon size={16} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content Area */}
      <div className="pt-2">
        {activeTab === 'Classes' && <SuperAdminClassesSectionsTab />}
        {activeTab === 'Wings' && <SuperAdminWingsTab />}
        {activeTab === 'Departments' && <SuperAdminDepartmentsTab />}
        {activeTab === 'Houses' && <SuperAdminHousesTab />}
      </div>
      
    </div>
  );
}
