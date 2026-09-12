import React from "react";
import AdminStudentAttendanceConfig from "./attendance_management_components/AdminStudentAttendanceConfig";
import AdminStaffAttendanceConfig from "./attendance_management_components/AdminStaffAttendanceConfig";
import AdminDailyAttendanceConfig from "./attendance_management_components/AdminDailyAttendanceConfig";
import AdminMonthlyAttendanceConfig from "./attendance_management_components/AdminMonthlyAttendanceConfig";
import AdminClasswiseAttendanceConfig from "./attendance_management_components/AdminClasswiseAttendanceConfig";
import AdminSectionwiseAttendanceConfig from "./attendance_management_components/AdminSectionwiseAttendanceConfig";
import AdminManualAttendanceConfig from "./attendance_management_components/AdminManualAttendanceConfig";
import AdminBiometricAttendanceConfig from "./attendance_management_components/AdminBiometricAttendanceConfig";
import AdminLeaveadjustedAttendanceConfig from "./attendance_management_components/AdminLeaveadjustedAttendanceConfig";
import AdminLateAbsentTrackingConfig from "./attendance_management_components/AdminLateAbsentTrackingConfig";
import AdminAttendanceCorrectionConfig from "./attendance_management_components/AdminAttendanceCorrectionConfig";
import AdminAttendanceApprovalConfig from "./attendance_management_components/AdminAttendanceApprovalConfig";
import AdminAttendanceReportsConfig from "./attendance_management_components/AdminAttendanceReportsConfig";
import AdminParentAttendanceNotificationConfig from "./attendance_management_components/AdminParentAttendanceNotificationConfig";
import AdminLowAttendanceAlertsConfig from "./attendance_management_components/AdminLowAttendanceAlertsConfig";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Attendance Management Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Manage all features related to Attendance Management</p>
        </div>
      </div>

      <AdminStudentAttendanceConfig />
      <AdminStaffAttendanceConfig />
      <AdminDailyAttendanceConfig />
      <AdminMonthlyAttendanceConfig />
      <AdminClasswiseAttendanceConfig />
      <AdminSectionwiseAttendanceConfig />
      <AdminManualAttendanceConfig />
      <AdminBiometricAttendanceConfig />
      <AdminLeaveadjustedAttendanceConfig />
      <AdminLateAbsentTrackingConfig />
      <AdminAttendanceCorrectionConfig />
      <AdminAttendanceApprovalConfig />
      <AdminAttendanceReportsConfig />
      <AdminParentAttendanceNotificationConfig />
      <AdminLowAttendanceAlertsConfig />
    </div>
  );
}
