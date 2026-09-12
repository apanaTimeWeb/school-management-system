import React from 'react';

import SuperAdminMaintenanceModeConfig from './maintenance_mode_components/SuperAdminMaintenanceModeConfig';

export default function maintenancemodePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">22-MAINTENANCE-MODE</h1>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">MaintenanceMode</h2>
        <SuperAdminMaintenanceModeConfig />
      </section>
    </div>
  );
}
