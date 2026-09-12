import React from 'react';

import SuperAdminDocumentCertificateConfig from './documents_certificates_components/SuperAdminDocumentCertificateConfig';

export default function documentscertificatesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">12-DOCUMENTS-CERTIFICATES</h1>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">DocumentCertificate</h2>
        <SuperAdminDocumentCertificateConfig />
      </section>
    </div>
  );
}
