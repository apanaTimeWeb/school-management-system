import React from 'react';

import SuperAdminTransportMasterConfig from './transport_configuration_components/SuperAdminTransportMasterConfig';

export default function transportconfigurationPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">10-TRANSPORT-CONFIGURATION</h1>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">TransportMaster</h2>
        <SuperAdminTransportMasterConfig />
      </section>
    </div>
  );
}
