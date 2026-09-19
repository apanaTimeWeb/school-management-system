"use client";

import React, { useState } from 'react';
import clsx from 'clsx';
import { ShieldCheck, Activity, Database, Bell } from 'lucide-react';
import { FormProvider, useForm } from 'react-hook-form';

import SuperAdmin2FACard from './audit_security_components/SuperAdmin2FACard';
import SuperAdminAccessControlCard from './audit_security_components/SuperAdminAccessControlCard';
import SuperAdminAuditLogsTable from './audit_security_components/SuperAdminAuditLogsTable';
import SuperAdminConfigurationChangeHistoryConfig from './audit_security_components/SuperAdminConfigurationChangeHistoryConfig';
import SuperAdminDataRetentionArchivingConfig from './audit_security_components/SuperAdminDataRetentionArchivingConfig';
import SuperAdminLoginIdentitySettingsConfig from './audit_security_components/SuperAdminLoginIdentitySettingsConfig';
import SuperAdminLoginSecurityCard from './audit_security_components/SuperAdminLoginSecurityCard';
import SuperAdminSensitiveDataProtectionConfig from './audit_security_components/SuperAdminSensitiveDataProtectionConfig';
import SuperAdminSystemActivityLogsTable from './audit_security_components/SuperAdminSystemActivityLogsTable';
import SuperAdminSystemAlertsConfig from './audit_security_components/SuperAdminSystemAlertsConfig';
import SuperAdminTermsPrivacyConsentConfig from './audit_security_components/SuperAdminTermsPrivacyConsentConfig';
import MissingFeaturesUI from './MissingFeaturesUI';

const TABS = [
  { id: 'security', label: 'Security Settings', icon: ShieldCheck },
  { id: 'login', label: 'Login/Identity Settings', icon: ShieldCheck },
  { id: 'audit', label: 'Audit Logs', icon: Activity },
  { id: 'retention', label: 'Data Retention', icon: Database },
  { id: 'history', label: 'Configuration History', icon: Activity },
];

export default function AuditSecurityPage() {
  const [activeTab, setActiveTab] = useState('security');
  
  // Dummy Form Provider just for the cards that need useFormContext
  const methods = useForm({
    defaultValues: {
      twoFactorEnabled: false,
      ipRestrictionEnabled: false,
    }
  });

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      
      {/* Header Area */}
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Audit & Security Management</h1>
          <p className="text-sm text-text-secondary mt-1">Configure global security policies, 2FA, access controls, and monitor system audits.</p>
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
        {activeTab === 'security' && (
          <FormProvider {...methods}>
            <form className="flex flex-col gap-6">
              <SuperAdminLoginSecurityCard />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <SuperAdmin2FACard />
                <SuperAdminAccessControlCard />
              </div>
            </form>
          </FormProvider>
        )}

        {activeTab === 'login' && (
          <div className="flex flex-col gap-6">
            <SuperAdminLoginIdentitySettingsConfig />
          </div>
        )}

        {activeTab === 'audit' && (
          <div className="flex flex-col gap-6">
            <SuperAdminSystemActivityLogsTable />
            <SuperAdminAuditLogsTable />
          </div>
        )}

        {activeTab === 'retention' && (
          <div className="flex flex-col gap-6">
            <SuperAdminDataRetentionArchivingConfig />
            <SuperAdminSensitiveDataProtectionConfig />
            <SuperAdminTermsPrivacyConsentConfig />
          </div>
        )}

        {activeTab === 'history' && (
          <div className="flex flex-col gap-6">
            <SuperAdminConfigurationChangeHistoryConfig />
            <SuperAdminSystemAlertsConfig />
          </div>
        )}
      </div>
          <MissingFeaturesUI />
    </div>
  );
}
