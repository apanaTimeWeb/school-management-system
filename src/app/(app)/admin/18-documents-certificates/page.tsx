import React from "react";
import AdminStudentDocumentsConfig from "./documents_certificates_components/AdminStudentDocumentsConfig";
import AdminStaffDocumentsConfig from "./documents_certificates_components/AdminStaffDocumentsConfig";
import AdminDocumentVerificationConfig from "./documents_certificates_components/AdminDocumentVerificationConfig";
import AdminBonafideCertificateConfig from "./documents_certificates_components/AdminBonafideCertificateConfig";
import AdminCharacterCertificateConfig from "./documents_certificates_components/AdminCharacterCertificateConfig";
import AdminTransferCertificateConfig from "./documents_certificates_components/AdminTransferCertificateConfig";
import AdminStudyCertificateConfig from "./documents_certificates_components/AdminStudyCertificateConfig";
import AdminLeavingCertificateConfig from "./documents_certificates_components/AdminLeavingCertificateConfig";
import AdminCustomCertificatesConfig from "./documents_certificates_components/AdminCustomCertificatesConfig";
import AdminCertificateTemplatesConfig from "./documents_certificates_components/AdminCertificateTemplatesConfig";
import AdminSerialNumberConfig from "./documents_certificates_components/AdminSerialNumberConfig";
import AdminQRVerificationConfig from "./documents_certificates_components/AdminQRVerificationConfig";
import AdminPDFGenerationConfig from "./documents_certificates_components/AdminPDFGenerationConfig";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Documents & Certificates Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Manage all features related to Documents & Certificates</p>
        </div>
      </div>

      <AdminStudentDocumentsConfig />
      <AdminStaffDocumentsConfig />
      <AdminDocumentVerificationConfig />
      <AdminBonafideCertificateConfig />
      <AdminCharacterCertificateConfig />
      <AdminTransferCertificateConfig />
      <AdminStudyCertificateConfig />
      <AdminLeavingCertificateConfig />
      <AdminCustomCertificatesConfig />
      <AdminCertificateTemplatesConfig />
      <AdminSerialNumberConfig />
      <AdminQRVerificationConfig />
      <AdminPDFGenerationConfig />
    </div>
  );
}
