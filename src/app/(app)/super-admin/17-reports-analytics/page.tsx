import React from 'react';

import SuperAdminReportsAnalyticsConfig from './reports_analytics_components/SuperAdminReportsAnalyticsConfig';
import SuperAdminSuperAdminExportCenterConfig from './reports_analytics_components/SuperAdminSuperAdminExportCenterConfig';

export default function reportsanalyticsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">17-REPORTS-ANALYTICS</h1>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">ReportsAnalytics</h2>
        <SuperAdminReportsAnalyticsConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">SuperAdminExportCenter</h2>
        <SuperAdminSuperAdminExportCenterConfig />
      </section>
    </div>
  );
}
