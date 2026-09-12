import React from "react";
import AdminAdmissionForms from "./admission_management_components/AdminAdmissionForms";
import AdminAdmissionProcess from "./admission_management_components/AdminAdmissionProcess";
import AdminAdmissionFinanceReports from "./admission_management_components/AdminAdmissionFinanceReports";

export default function AdminAdmissionManagementPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Admission Management</h1>
          <p className="text-sm text-text-secondary mt-1">Manage new admissions, enquiries, applications and fee collections.</p>
        </div>
      </div>
      
      {/* Premium UI Components covering all 16 features */}
      <AdminAdmissionForms />
      <AdminAdmissionProcess />
      <AdminAdmissionFinanceReports />

    </div>
  );
}
