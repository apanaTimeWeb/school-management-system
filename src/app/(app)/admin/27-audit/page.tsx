import React from "react";
import AdminStudentChangesConfig from "./audit_components/AdminStudentChangesConfig";
import AdminFeeChangesConfig from "./audit_components/AdminFeeChangesConfig";
import AdminMarksChangesConfig from "./audit_components/AdminMarksChangesConfig";
import AdminAttendanceChangesConfig from "./audit_components/AdminAttendanceChangesConfig";
import AdminAdmissionChangesConfig from "./audit_components/AdminAdmissionChangesConfig";
import AdminApprovalActionsConfig from "./audit_components/AdminApprovalActionsConfig";
import AdminDocumentChangesConfig from "./audit_components/AdminDocumentChangesConfig";
import AdminSettingsChangesConfig from "./audit_components/AdminSettingsChangesConfig";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Audit Log Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Track all important actions (Who → What → When → Old Value → New Value → IP/Device)</p>
        </div>
      </div>

      <AdminStudentChangesConfig />
      <AdminFeeChangesConfig />
      <AdminMarksChangesConfig />
      <AdminAttendanceChangesConfig />
      <AdminAdmissionChangesConfig />
      <AdminApprovalActionsConfig />
      <AdminDocumentChangesConfig />
      <AdminSettingsChangesConfig />
    </div>
  );
}
