"use client";

import { useState } from "react";
import { Plus, Users } from "lucide-react";
import SuperAdminUsersTable from "./super_admin_user_management_components/SuperAdminUsersTable";
import SuperAdminUserDrawer from "./super_admin_user_management_components/SuperAdminUserDrawer";

export default function SuperAdminUserManagementPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6 max-w-[1400px]">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary">User Management</h1>
          <p className="text-sm text-text-secondary mt-1">Master control for all user accounts, roles, and security actions across the ERP.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsDrawerOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary-hover transition-colors shadow-sm"
          >
            <Plus size={16} />
            Create User
          </button>
        </div>
      </div>

      {/* Main Content Area - Table */}
      <div className="pt-2">
        <SuperAdminUsersTable onEdit={(user) => setIsDrawerOpen(true)} />
      </div>

      {/* Drawers */}
      <SuperAdminUserDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
}
