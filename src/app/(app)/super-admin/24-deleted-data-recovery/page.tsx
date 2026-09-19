import React from 'react';

import SuperAdminRecycleBinConfig from './deleted_data_recovery_components/SuperAdminRecycleBinConfig';
import MissingFeaturesUI from './MissingFeaturesUI';

export default function deleteddatarecoveryPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">24-DELETED-DATA-RECOVERY</h1>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">RecycleBin</h2>
        <SuperAdminRecycleBinConfig />
      </section>
          <MissingFeaturesUI />
    </div>
  );
}
