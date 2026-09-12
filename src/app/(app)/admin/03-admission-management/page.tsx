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

export default function AdminAdmissionManagementPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Admission Management</h1>
          <p className="text-sm text-text-secondary mt-1">Manage new admissions, enquiries, applications and fee collections.</p>
        </div>
      </div>
      
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Admission Enquiry</h2>
        <AdminAdmissionEnquiryConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Application Form</h2>
        <AdminApplicationFormConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Online Admission</h2>
        <AdminOnlineAdmissionConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Offline Admission</h2>
        <AdminOfflineAdmissionConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Application Verification</h2>
        <AdminApplicationVerificationConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Document Verification</h2>
        <AdminDocumentVerificationConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Admission Test</h2>
        <AdminAdmissionTestConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Interview</h2>
        <AdminInterviewConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Selection</h2>
        <AdminSelectionConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Rejection</h2>
        <AdminRejectionConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Waitlist</h2>
        <AdminWaitlistConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Admission Approval</h2>
        <AdminAdmissionApprovalConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Admission Fee</h2>
        <AdminAdmissionFeeConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Admission Number Generation</h2>
        <AdminAdmissionNumberGenerationConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Enrollment</h2>
        <AdminEnrollmentConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Admission Reports</h2>
        <AdminAdmissionReportsConfig />
      </section>
    </div>
  );
}
