import React from 'react';

import SuperAdminDeviceSessionTable from './users_access_components/SuperAdminDeviceSessionTable';
import SuperAdminRolesTable from './users_access_components/SuperAdminRolesTable';
import SuperAdminUsersTable from './users_access_components/SuperAdminUsersTable';

export default function usersaccessPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">04-USERS-ACCESS</h1>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">UsersTable</h2>
        <SuperAdminUsersTable onEdit={() => {}} />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">RoleManagement</h2>
        <SuperAdminRoleManagementConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">RolesTable</h2>
        <SuperAdminRolesTable onEdit={() => {}} />
      </section>
    </div>
  );
}
