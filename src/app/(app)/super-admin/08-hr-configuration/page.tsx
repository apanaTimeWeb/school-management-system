import React from 'react';

import SuperAdminHRMasterConfig from './hr_configuration_components/SuperAdminHRMasterConfig';

export default function hrconfigurationPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">08-HR-CONFIGURATION</h1>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">HRMaster</h2>
        <SuperAdminHRMasterConfig />
      </section>
    </div>
  );
}
