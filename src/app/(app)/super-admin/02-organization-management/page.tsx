import React from 'react';

import SuperAdminBranchesTable from './organization_management_components/SuperAdminBranchesTable';
import SuperAdminSchoolForm from './organization_management_components/SuperAdminSchoolForm';
import SuperAdminSchoolsTable from './organization_management_components/SuperAdminSchoolsTable';

export default function organizationmanagementPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">02-ORGANIZATION-MANAGEMENT</h1>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">BranchesTable</h2>
        <SuperAdminBranchesTable />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">SchoolForm</h2>
        <SuperAdminSchoolForm />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">SchoolsTable</h2>
        <SuperAdminSchoolsTable />
      </section>
    </div>
  );
}
