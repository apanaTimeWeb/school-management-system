import React from 'react';

import SuperAdminSupportHelpdeskConfig from './support_helpdesk_components/SuperAdminSupportHelpdeskConfig';
import MissingFeaturesUI from './MissingFeaturesUI';

export default function supporthelpdeskPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">20-SUPPORT-HELPDESK</h1>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">SupportHelpdesk</h2>
        <SuperAdminSupportHelpdeskConfig />
      </section>
          <MissingFeaturesUI />
    </div>
  );
}
