"use client";

import { useState } from "react";
import { BookOpen, Layers, LibraryBig } from "lucide-react";
import { cn } from "@/lib/utils";
import SuperAdminSubjectsTab from "./super_admin_academic_master_components/SuperAdminSubjectsTab";
import SuperAdminGroupsTab from "./super_admin_academic_master_components/SuperAdminGroupsTab";

type TabType = 'Subjects' | 'Groups';

export default function SuperAdminAcademicMasterPage() {
  const [activeTab, setActiveTab] = useState<TabType>('Subjects');

  const tabs = [
    { id: 'Subjects', label: 'Subjects Configuration', icon: BookOpen },
    { id: 'Groups', label: 'Streams & Course Groups', icon: Layers },
  ] as const;

  return (
    <div className="flex flex-col gap-6 max-w-[1400px]">
      
      {/* Header */}
      <div>
        <h1 className="text-[22px] font-bold text-text-primary">Academic Master Configuration</h1>
        <p className="text-sm text-text-secondary mt-1">Configure subjects, marks distribution, streams, and curriculum types.</p>
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

      {/* Tab Content */}
      <div className="pt-2">
        {activeTab === 'Subjects' && <SuperAdminSubjectsTab />}
        {activeTab === 'Groups' && <SuperAdminGroupsTab />}
      </div>
      
    </div>
  );
}
