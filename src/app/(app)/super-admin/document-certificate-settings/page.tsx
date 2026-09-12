import { FileText } from "lucide-react";
import SuperAdminDocumentCertificateConfig from "./super_admin_document_certificate_components/SuperAdminDocumentCertificateConfig";

export default function SuperAdminDocumentCertificatePage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            <FileText size={24} className="text-primary" /> Document & Certificate Settings
          </h1>
        </div>
      </div>

      <SuperAdminDocumentCertificateConfig />
    </div>
  );
}
