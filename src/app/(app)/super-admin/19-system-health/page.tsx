import React from 'react';

import SuperAdminSystemHealthConfig from './system_health_components/SuperAdminSystemHealthConfig';

export default function systemhealthPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">19-SYSTEM-HEALTH</h1>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">SystemHealth</h2>
        <SuperAdminSystemHealthConfig />
      </section>
    </div>
  );
}
