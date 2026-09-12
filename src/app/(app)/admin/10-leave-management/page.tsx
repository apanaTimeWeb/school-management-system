import React from "react";
import AdminLeaveTypesConfig from "./leave_management_components/AdminLeaveTypesConfig";
import AdminLeaveApplicationConfig from "./leave_management_components/AdminLeaveApplicationConfig";
import AdminLeaveApprovalConfig from "./leave_management_components/AdminLeaveApprovalConfig";
import AdminLeaveRejectionConfig from "./leave_management_components/AdminLeaveRejectionConfig";
import AdminLeaveBalanceConfig from "./leave_management_components/AdminLeaveBalanceConfig";
import AdminLeaveHistoryConfig from "./leave_management_components/AdminLeaveHistoryConfig";
import AdminStudentLeaveConfig from "./leave_management_components/AdminStudentLeaveConfig";
import AdminStaffLeaveConfig from "./leave_management_components/AdminStaffLeaveConfig";
import AdminHolidayCalendarConfig from "./leave_management_components/AdminHolidayCalendarConfig";
import AdminLeaveReportsConfig from "./leave_management_components/AdminLeaveReportsConfig";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Leave Management Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Manage all features related to Leave Management</p>
        </div>
      </div>

      <AdminLeaveTypesConfig />
      <AdminLeaveApplicationConfig />
      <AdminLeaveApprovalConfig />
      <AdminLeaveRejectionConfig />
      <AdminLeaveBalanceConfig />
      <AdminLeaveHistoryConfig />
      <AdminStudentLeaveConfig />
      <AdminStaffLeaveConfig />
      <AdminHolidayCalendarConfig />
      <AdminLeaveReportsConfig />
    </div>
  );
}
