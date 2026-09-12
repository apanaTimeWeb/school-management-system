"use client";

import { useState } from "react";
import { Plus, ShieldCheck } from "lucide-react";
import SuperAdminRolesTable from "./super_admin_role_management_components/SuperAdminRolesTable";
import SuperAdminRoleDrawer from "./super_admin_role_management_components/SuperAdminRoleDrawer";

export default function SuperAdminRoleManagementPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6 max-w-[1000px]">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            <ShieldCheck size={24} className="text-primary" /> Role Management
          </h1>
          <p className="text-sm text-text-secondary mt-1">Create and manage custom roles without needing separate login systems.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsDrawerOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary-hover transition-colors shadow-sm"
          >
            <Plus size={16} />
            Create Role
          </button>
        </div>
      </div>

      {/* Main Content Area - Table */}
      <div className="pt-2">
        <SuperAdminRolesTable onEdit={() => setIsDrawerOpen(true)} />
      </div>

      {/* Drawers */}
      <SuperAdminRoleDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
}
