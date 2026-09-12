import React from "react";
import AdminStudentReportsConfig from "./reports_components/AdminStudentReportsConfig";
import AdminAdmissionReportsConfig from "./reports_components/AdminAdmissionReportsConfig";
import AdminAttendanceReportsConfig from "./reports_components/AdminAttendanceReportsConfig";
import AdminFeeReportsConfig from "./reports_components/AdminFeeReportsConfig";
import AdminExamReportsConfig from "./reports_components/AdminExamReportsConfig";
import AdminStaffReportsConfig from "./reports_components/AdminStaffReportsConfig";
import AdminLeaveReportsConfig from "./reports_components/AdminLeaveReportsConfig";
import AdminLibraryReportsConfig from "./reports_components/AdminLibraryReportsConfig";
import AdminTransportReportsConfig from "./reports_components/AdminTransportReportsConfig";
import AdminInventoryReportsConfig from "./reports_components/AdminInventoryReportsConfig";
import AdminExpenseReportsConfig from "./reports_components/AdminExpenseReportsConfig";
import AdminEventReportsConfig from "./reports_components/AdminEventReportsConfig";
import AdminCertificateReportsConfig from "./reports_components/AdminCertificateReportsConfig";
import AdminCustomReportsConfig from "./reports_components/AdminCustomReportsConfig";
import AdminExportExcelPDFConfig from "./reports_components/AdminExportExcelPDFConfig";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Reports Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Manage all features related to Reports</p>
        </div>
      </div>

      <AdminStudentReportsConfig />
      <AdminAdmissionReportsConfig />
      <AdminAttendanceReportsConfig />
      <AdminFeeReportsConfig />
      <AdminExamReportsConfig />
      <AdminStaffReportsConfig />
      <AdminLeaveReportsConfig />
      <AdminLibraryReportsConfig />
      <AdminTransportReportsConfig />
      <AdminInventoryReportsConfig />
      <AdminExpenseReportsConfig />
      <AdminEventReportsConfig />
      <AdminCertificateReportsConfig />
      <AdminCustomReportsConfig />
      <AdminExportExcelPDFConfig />
    </div>
  );
}
