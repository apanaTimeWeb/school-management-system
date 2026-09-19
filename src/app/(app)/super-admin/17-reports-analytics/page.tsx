"use client";

import React, { useState } from 'react';
import clsx from 'clsx';
import { BarChart3, DownloadCloud } from 'lucide-react';

import SuperAdminReportsAnalyticsConfig from './reports_analytics_components/SuperAdminReportsAnalyticsConfig';
import SuperAdminSuperAdminExportCenterConfig from './reports_analytics_components/SuperAdminSuperAdminExportCenterConfig';
import MissingFeaturesUI from './MissingFeaturesUI';

const TABS = [
  { id: 'reports', label: 'Reports & Analytics', icon: BarChart3 },
  { id: 'export', label: 'Export Center', icon: DownloadCloud },
];

export default function ReportsAnalyticsPage() {
  const [activeTab, setActiveTab] = useState('reports');

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      
      {/* Header Area */}
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Reports & Analytics</h1>
          <p className="text-sm text-text-secondary mt-1">System-wide data analysis, user reports, and data exports.</p>
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
        {activeTab === 'reports' && (
          <div className="flex flex-col gap-6">
            <SuperAdminReportsAnalyticsConfig />
          </div>
        )}
        {activeTab === 'export' && (
          <div className="flex flex-col gap-6">
            <SuperAdminSuperAdminExportCenterConfig />
          </div>
        )}
      </div>
          <MissingFeaturesUI />
    </div>
  );
}
