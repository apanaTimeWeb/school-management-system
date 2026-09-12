import React from "react";
import AdminStudentListHub from "./student_management_components/AdminStudentListHub";
import AdminStudentRegistrationProfile from "./student_management_components/AdminStudentRegistrationProfile";
import AdminStudentDetailedInfo from "./student_management_components/AdminStudentDetailedInfo";
import AdminStudentLifecycle from "./student_management_components/AdminStudentLifecycle";

export default function AdminStudentManagementPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Student Management</h1>
          <p className="text-sm text-text-secondary mt-1">Manage complete student lifecycle, profiles, and administration.</p>
        </div>
      </div>

      {/* Premium UI Components covering all 24 features */}
      <AdminStudentListHub />
      <AdminStudentRegistrationProfile />
      <AdminStudentDetailedInfo />
      <AdminStudentLifecycle />

    </div>
  );
}
