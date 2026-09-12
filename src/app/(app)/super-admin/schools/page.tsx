"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { useState } from "react";
import SuperAdminSchoolsTable from "./super_admin_schools_components/SuperAdminSchoolsTable";
import SuperAdminBranchesTable from "./super_admin_schools_components/SuperAdminBranchesTable";
import SuperAdminAddBranchDrawer from "./super_admin_schools_components/SuperAdminAddBranchDrawer";
import SuperAdminOrgStructureTree from "./super_admin_schools_components/SuperAdminOrgStructureTree";

export default function SuperAdminSchoolsPage() {
  const [isBranchDrawerOpen, setIsBranchDrawerOpen] = useState(false);

  return (
    <div className="flex flex-col gap-8 max-w-[1400px]">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary">School & Organization Management</h1>
          <p className="text-sm text-text-secondary mt-1">Manage multiple schools, branches, and organizational structures.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Left Column: Tables (Takes 2/3 space on XL) */}
        <div className="xl:col-span-2 flex flex-col gap-8">
          
          {/* Schools Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-text-primary">Registered Schools</h2>
              <Link 
                href="/super-admin/schools/add"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary-hover transition-colors shadow-sm"
              >
                <Plus size={16} />
                Add School
              </Link>
            </div>
            <SuperAdminSchoolsTable />
          </div>

          {/* Branches Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-text-primary">Branches</h2>
              <button 
                onClick={() => setIsBranchDrawerOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-bg-page border border-border text-text-primary text-sm font-medium rounded-md hover:border-primary hover:text-primary transition-colors"
              >
                <Plus size={16} />
                Add Branch
              </button>
            </div>
            <SuperAdminBranchesTable />
          </div>

        </div>

        {/* Right Column: Organization Structure (Takes 1/3 space on XL) */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-text-primary">Organization Structure</h2>
          </div>
          <SuperAdminOrgStructureTree />
        </div>

      </div>

      <SuperAdminAddBranchDrawer 
        isOpen={isBranchDrawerOpen} 
        onClose={() => setIsBranchDrawerOpen(false)} 
      />

    </div>
  );
}
