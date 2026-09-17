"use client";

import React, { useState } from 'react';
import clsx from 'clsx';
import { Users, ShieldCheck, MonitorSmartphone, Plus, ArrowLeft } from 'lucide-react';

import SuperAdminUsersTable from './users_access_components/SuperAdminUsersTable';
import SuperAdminRolesTable from './users_access_components/SuperAdminRolesTable';
import SuperAdminDeviceSessionTable from './users_access_components/SuperAdminDeviceSessionTable';

import SuperAdminUserDrawer from './users_access_components/SuperAdminUserDrawer';
import SuperAdminRoleDrawer from './users_access_components/SuperAdminRoleDrawer';
import SuperAdminPermissionEditor from './users_access_components/SuperAdminPermissionEditor';

import type { RoleType } from './users_access_types/super_admin_role_management.types';

const TABS = [
  { id: 'users', label: 'User Management', icon: Users },
  { id: 'roles', label: 'Role & Permission Management', icon: ShieldCheck },
  { id: 'sessions', label: 'Device/Session Management', icon: MonitorSmartphone },
];

export default function UsersAccessPage() {
  const [activeTab, setActiveTab] = useState('users');
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [editingRole, setEditingRole] = useState<RoleType | null>(null);

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      
      {/* Header Area */}
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">User & Role Management</h1>
          <p className="text-sm text-text-secondary mt-1">Manage users, define roles, and monitor active sessions.</p>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Conditional Back Button if editing a role */}
          {activeTab === 'roles' && editingRole && (
            <button 
              onClick={() => setEditingRole(null)}
              className="flex items-center gap-2 px-4 py-2 border border-border text-text-secondary text-sm font-semibold rounded-md hover:bg-bg-page transition-colors shadow-sm"
            >
              <ArrowLeft size={16} /> Back to Roles
            </button>
          )}

          {/* Add New Buttons */}
          {activeTab !== 'sessions' && !editingRole && (
            <button 
              onClick={() => setIsAddingNew(true)}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-md hover:bg-primary-hover transition-colors shadow-sm"
            >
              <Plus size={16} /> Add New {activeTab === 'users' ? 'User' : 'Role'}
            </button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-border">
        <div className="flex gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setEditingRole(null); // Reset sub-views
              }}
              className={clsx(
                "flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap",
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-text-secondary hover:text-primary hover:bg-page"
              )}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="mt-4">
        {/* Users Tab */}
        {activeTab === 'users' && (
          <>
            <SuperAdminUsersTable onEdit={() => {}} />
            <SuperAdminUserDrawer isOpen={isAddingNew} onClose={() => setIsAddingNew(false)} />
          </>
        )}
        
        {/* Roles Tab */}
        {activeTab === 'roles' && (
          <>
            {!editingRole ? (
              <SuperAdminRolesTable onEdit={(role) => setEditingRole(role)} />
            ) : (
              <div className="bg-card border border-border rounded-lg h-[600px] overflow-hidden">
                <SuperAdminPermissionEditor role={editingRole.roleName} />
              </div>
            )}
            <SuperAdminRoleDrawer isOpen={isAddingNew} onClose={() => setIsAddingNew(false)} />
          </>
        )}

        {/* Sessions Tab */}
        {activeTab === 'sessions' && (
          <SuperAdminDeviceSessionTable />
        )}
      </div>
    </div>
  );
}
