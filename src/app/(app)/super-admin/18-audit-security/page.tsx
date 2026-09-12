import React from 'react';

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

export default function auditsecurityPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">18-AUDIT-SECURITY</h1>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">2FACard</h2>
        <SuperAdmin2FACard />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">AccessControlCard</h2>
        <SuperAdminAccessControlCard />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">AuditLogsTable</h2>
        <SuperAdminAuditLogsTable />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">urationChangeHistoryConfig</h2>
        <SuperAdminConfigurationChangeHistoryConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">DataRetentionArchiving</h2>
        <SuperAdminDataRetentionArchivingConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">LoginIdentitySettings</h2>
        <SuperAdminLoginIdentitySettingsConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">LoginSecurityCard</h2>
        <SuperAdminLoginSecurityCard />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">SensitiveDataProtection</h2>
        <SuperAdminSensitiveDataProtectionConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">SystemActivityLogsTable</h2>
        <SuperAdminSystemActivityLogsTable />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">SystemAlerts</h2>
        <SuperAdminSystemAlertsConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">TermsPrivacyConsent</h2>
        <SuperAdminTermsPrivacyConsentConfig />
      </section>
    </div>
  );
}
