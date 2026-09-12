import React from "react";
import AdminAdmissionEnquiryConfig from "./admission_management_components/AdminAdmissionEnquiryConfig";
import AdminApplicationFormConfig from "./admission_management_components/AdminApplicationFormConfig";
import AdminOnlineAdmissionConfig from "./admission_management_components/AdminOnlineAdmissionConfig";
import AdminOfflineAdmissionConfig from "./admission_management_components/AdminOfflineAdmissionConfig";
import AdminApplicationVerificationConfig from "./admission_management_components/AdminApplicationVerificationConfig";
import AdminDocumentVerificationConfig from "./admission_management_components/AdminDocumentVerificationConfig";
import AdminAdmissionTestConfig from "./admission_management_components/AdminAdmissionTestConfig";
import AdminInterviewConfig from "./admission_management_components/AdminInterviewConfig";
import AdminSelectionConfig from "./admission_management_components/AdminSelectionConfig";
import AdminRejectionConfig from "./admission_management_components/AdminRejectionConfig";
import AdminWaitlistConfig from "./admission_management_components/AdminWaitlistConfig";
import AdminAdmissionApprovalConfig from "./admission_management_components/AdminAdmissionApprovalConfig";
import AdminAdmissionFeeConfig from "./admission_management_components/AdminAdmissionFeeConfig";
import AdminAdmissionNumberGenerationConfig from "./admission_management_components/AdminAdmissionNumberGenerationConfig";
import AdminEnrollmentConfig from "./admission_management_components/AdminEnrollmentConfig";
import AdminAdmissionReportsConfig from "./admission_management_components/AdminAdmissionReportsConfig";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">ADMISSION MANAGEMENT</h1>
          <p className="text-sm text-text-secondary mt-1">Manage all features related to admission_management</p>
        </div>
      </div>

      <AdminAdmissionEnquiryConfig />
      <AdminApplicationFormConfig />
      <AdminOnlineAdmissionConfig />
      <AdminOfflineAdmissionConfig />
      <AdminApplicationVerificationConfig />
      <AdminDocumentVerificationConfig />
      <AdminAdmissionTestConfig />
      <AdminInterviewConfig />
      <AdminSelectionConfig />
      <AdminRejectionConfig />
      <AdminWaitlistConfig />
      <AdminAdmissionApprovalConfig />
      <AdminAdmissionFeeConfig />
      <AdminAdmissionNumberGenerationConfig />
      <AdminEnrollmentConfig />
      <AdminAdmissionReportsConfig />
    </div>
  );
}
