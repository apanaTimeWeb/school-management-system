import React from 'react';

import SuperAdminIntegrationManagementConfig from './integrations_components/SuperAdminIntegrationManagementConfig';

export default function integrationsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">13-INTEGRATIONS</h1>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">IntegrationManagement</h2>
        <SuperAdminIntegrationManagementConfig />
      </section>
    </div>
  );
}
