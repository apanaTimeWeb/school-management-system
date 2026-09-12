import React from "react";
import AdminStaffDirectoryConfig from "./staff_management_components/AdminStaffDirectoryConfig";
import AdminTeacherProfilesConfig from "./staff_management_components/AdminTeacherProfilesConfig";
import AdminEmployeeProfilesConfig from "./staff_management_components/AdminEmployeeProfilesConfig";
import AdminDepartmentConfig from "./staff_management_components/AdminDepartmentConfig";
import AdminDesignationConfig from "./staff_management_components/AdminDesignationConfig";
import AdminJoiningDetailsConfig from "./staff_management_components/AdminJoiningDetailsConfig";
import AdminQualificationConfig from "./staff_management_components/AdminQualificationConfig";
import AdminExperienceConfig from "./staff_management_components/AdminExperienceConfig";
import AdminDocumentsConfig from "./staff_management_components/AdminDocumentsConfig";
import AdminIDCardsConfig from "./staff_management_components/AdminIDCardsConfig";
import AdminStaffStatusConfig from "./staff_management_components/AdminStaffStatusConfig";
import AdminTeacherAssignmentConfig from "./staff_management_components/AdminTeacherAssignmentConfig";
import AdminStaffTransferConfig from "./staff_management_components/AdminStaffTransferConfig";
import AdminStaffExitConfig from "./staff_management_components/AdminStaffExitConfig";
import AdminStaffAttendanceConfig from "./staff_management_components/AdminStaffAttendanceConfig";
import AdminStaffLeaveConfig from "./staff_management_components/AdminStaffLeaveConfig";
import AdminStaffReportsConfig from "./staff_management_components/AdminStaffReportsConfig";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Staff Management Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Manage all features related to Staff Management</p>
        </div>
      </div>

      <AdminStaffDirectoryConfig />
      <AdminTeacherProfilesConfig />
      <AdminEmployeeProfilesConfig />
      <AdminDepartmentConfig />
      <AdminDesignationConfig />
      <AdminJoiningDetailsConfig />
      <AdminQualificationConfig />
      <AdminExperienceConfig />
      <AdminDocumentsConfig />
      <AdminIDCardsConfig />
      <AdminStaffStatusConfig />
      <AdminTeacherAssignmentConfig />
      <AdminStaffTransferConfig />
      <AdminStaffExitConfig />
      <AdminStaffAttendanceConfig />
      <AdminStaffLeaveConfig />
      <AdminStaffReportsConfig />
    </div>
  );
}
