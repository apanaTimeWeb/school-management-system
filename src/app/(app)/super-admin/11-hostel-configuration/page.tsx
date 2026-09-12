import React from 'react';

import SuperAdminHostelMasterConfig from './hostel_configuration_components/SuperAdminHostelMasterConfig';

export default function hostelconfigurationPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">11-HOSTEL-CONFIGURATION</h1>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">HostelMaster</h2>
        <SuperAdminHostelMasterConfig />
      </section>
    </div>
  );
}
