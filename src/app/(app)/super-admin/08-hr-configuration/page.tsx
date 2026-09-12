"use client";

import React, { useState } from 'react';
import clsx from 'clsx';
import { Users } from 'lucide-react';

import SuperAdminHRMasterConfig from './hr_configuration_components/SuperAdminHRMasterConfig';

const TABS = [
  { id: 'hr-master', label: 'HR Master Settings', icon: Users },
];

export default function HRConfigurationPage() {
  const [activeTab, setActiveTab] = useState('hr-master');

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      
      {/* Header Area */}
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">HR Configuration</h1>
          <p className="text-sm text-text-secondary mt-1">Configure global organization structures, leave policies, and payroll components.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-border">
        <div className="flex gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap",
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-text-secondary hover:text-primary hover:bg-page"
              )}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="mt-4">
        {activeTab === 'hr-master' && (
          <div className="flex flex-col gap-6">
            <SuperAdminHRMasterConfig />
          </div>
        )}
      </div>
    </div>
  );
}
