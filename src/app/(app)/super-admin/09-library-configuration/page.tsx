import React from 'react';

import SuperAdminLibraryMasterConfig from './library_configuration_components/SuperAdminLibraryMasterConfig';

export default function libraryconfigurationPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">09-LIBRARY-CONFIGURATION</h1>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">LibraryMaster</h2>
        <SuperAdminLibraryMasterConfig />
      </section>
    </div>
  );
}
