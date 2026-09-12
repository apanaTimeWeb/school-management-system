import React from 'react';

import SuperAdminSuperAdminProfileConfig from './my_profile_components/SuperAdminSuperAdminProfileConfig';

export default function myprofilePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">25-MY-PROFILE</h1>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">SuperAdminProfile</h2>
        <SuperAdminSuperAdminProfileConfig />
      </section>
    </div>
  );
}
