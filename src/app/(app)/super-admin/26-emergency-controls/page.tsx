import React from 'react';

import SuperAdminSuperAdminEmergencyControlsConfig from './emergency_controls_components/SuperAdminSuperAdminEmergencyControlsConfig';
import SuperAdminSystemWideSearchConfig from './emergency_controls_components/SuperAdminSystemWideSearchConfig';

export default function emergencycontrolsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">26-EMERGENCY-CONTROLS</h1>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">SuperAdminEmergencyControls</h2>
        <SuperAdminSuperAdminEmergencyControlsConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">SystemWideSearch</h2>
        <SuperAdminSystemWideSearchConfig />
      </section>
    </div>
  );
}
