import React from "react";
import AdminParentListHub from "./parent_management_components/AdminParentListHub";
import AdminParentEngagement from "./parent_management_components/AdminParentEngagement";

export default function AdminParentManagementPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Parent / Guardian Management</h1>
          <p className="text-sm text-text-secondary mt-1">Manage parent profiles, multiple wards mapping, and communications.</p>
        </div>
      </div>

      {/* Premium UI Components covering all 10 features */}
      <AdminParentListHub />
      <AdminParentEngagement />

    </div>
  );
}
