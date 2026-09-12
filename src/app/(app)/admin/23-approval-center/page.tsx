import React from "react";
import AdminAdmissionConfig from "./approval_center_components/AdminAdmissionConfig";
import AdminFeeConcessionConfig from "./approval_center_components/AdminFeeConcessionConfig";
import AdminRefundConfig from "./approval_center_components/AdminRefundConfig";
import AdminLeaveConfig from "./approval_center_components/AdminLeaveConfig";
import AdminPurchaseConfig from "./approval_center_components/AdminPurchaseConfig";
import AdminExpenseConfig from "./approval_center_components/AdminExpenseConfig";
import AdminStudentTransferConfig from "./approval_center_components/AdminStudentTransferConfig";
import AdminTCConfig from "./approval_center_components/AdminTCConfig";
import AdminCertificateConfig from "./approval_center_components/AdminCertificateConfig";
import AdminAttendanceCorrectionConfig from "./approval_center_components/AdminAttendanceCorrectionConfig";
import AdminMarksCorrectionConfig from "./approval_center_components/AdminMarksCorrectionConfig";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Approval Center Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Manage all features related to Approval Center</p>
        </div>
      </div>

      <AdminAdmissionConfig />
      <AdminFeeConcessionConfig />
      <AdminRefundConfig />
      <AdminLeaveConfig />
      <AdminPurchaseConfig />
      <AdminExpenseConfig />
      <AdminStudentTransferConfig />
      <AdminTCConfig />
      <AdminCertificateConfig />
      <AdminAttendanceCorrectionConfig />
      <AdminMarksCorrectionConfig />
    </div>
  );
}
