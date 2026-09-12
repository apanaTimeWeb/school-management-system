import React from 'react';

import SuperAdminModuleEnableDisableConfig from './module_management_components/SuperAdminModuleEnableDisableConfig';

export default function modulemanagementPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">23-MODULE-MANAGEMENT</h1>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">ModuleEnableDisable</h2>
        <SuperAdminModuleEnableDisableConfig />
      </section>
    </div>
  );
}
