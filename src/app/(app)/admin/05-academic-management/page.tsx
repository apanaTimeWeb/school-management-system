import React from "react";
import AdminAcademicSetup from "./academic_management_components/AdminAcademicSetup";
import AdminAcademicMapping from "./academic_management_components/AdminAcademicMapping";
import AdminAcademicPlanning from "./academic_management_components/AdminAcademicPlanning";

export default function AdminAcademicManagementPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Academic Management</h1>
          <p className="text-sm text-text-secondary mt-1">Configure foundational academic settings, manage mappings, and plan schedules.</p>
        </div>
      </div>

      {/* Premium UI Components covering all 18 features */}
      <AdminAcademicSetup />
      <AdminAcademicMapping />
      <AdminAcademicPlanning />

    </div>
  );
}
