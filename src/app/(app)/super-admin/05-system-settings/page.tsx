"use client";

import React, { useState } from 'react';
import clsx from 'clsx';
import { Settings, Globe, Hash, AlertCircle } from 'lucide-react';

import SuperAdminCategoryMasterDataConfig from './system_settings_components/SuperAdminCategoryMasterDataConfig';
import SuperAdminGeneralSettingsForm from './system_settings_components/SuperAdminGeneralSettingsForm';
import SuperAdminLanguageTable from './system_settings_components/SuperAdminLanguageTable';
import SuperAdminNumberingSequenceConfig from './system_settings_components/SuperAdminNumberingSequenceConfig';
import SuperAdminSchoolBrandingConfig from './system_settings_components/SuperAdminSchoolBrandingConfig';
import SuperAdminTranslationTools from './system_settings_components/SuperAdminTranslationTools';
import SuperAdminWebsiteGlobalSettingsConfig from './system_settings_components/SuperAdminWebsiteGlobalSettingsConfig';
import MissingFeaturesUI from './MissingFeaturesUI';

const TABS = [
  { id: 'general', label: 'System Settings', icon: Settings },
  { id: 'website', label: 'Website Global Settings', icon: Globe },
  { id: 'language', label: 'Language Management', icon: Globe },
  { id: 'numbering', label: 'Numbering / Sequence', icon: Hash },
  { id: 'master', label: 'Category / Master Data', icon: Hash },
];

export default function SystemSettingsPage() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      
      {/* Header Area */}
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">System Settings</h1>
          <p className="text-sm text-text-secondary mt-1">Configure global ERP settings, regional formats, language translations, and branding.</p>
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
        {activeTab === 'general' && (
          <div className="flex flex-col gap-6">
            <SuperAdminSchoolBrandingConfig />
            <SuperAdminGeneralSettingsForm />
          </div>
        )}

        {activeTab === 'website' && (
          <div className="flex flex-col gap-6">
            <SuperAdminWebsiteGlobalSettingsConfig />
          </div>
        )}

        {activeTab === 'language' && (
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-3 p-3 bg-info-bg/50 border border-info/30 rounded-md text-info">
              <AlertCircle size={18} className="shrink-0 mt-0.5" />
              <p className="text-xs font-bold leading-relaxed">
                Note: Translations affect the Public and User-facing ERP interfaces. The Super Admin/Admin panel is maintained strictly in English for consistency and support purposes.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SuperAdminLanguageTable />
              <SuperAdminTranslationTools />
            </div>
          </div>
        )}

        {activeTab === 'numbering' && (
          <div className="flex flex-col gap-6">
            <SuperAdminNumberingSequenceConfig />
          </div>
        )}

        {activeTab === 'master' && (
          <div className="flex flex-col gap-6">
            <SuperAdminCategoryMasterDataConfig />
          </div>
        )}
      </div>
          <MissingFeaturesUI />
    </div>
  );
}
