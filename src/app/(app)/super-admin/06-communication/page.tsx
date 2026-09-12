import React from 'react';

import SuperAdminEmailConfig from './communication_components/SuperAdminEmailConfig';
import SuperAdminNotificationConfig from './communication_components/SuperAdminNotificationConfig';
import SuperAdminSmsConfig from './communication_components/SuperAdminSmsConfig';
import SuperAdminWhatsappConfig from './communication_components/SuperAdminWhatsappConfig';

export default function communicationPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">06-COMMUNICATION</h1>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Email</h2>
        <SuperAdminEmailConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Notification</h2>
        <SuperAdminNotificationConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Sms</h2>
        <SuperAdminSmsConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Whatsapp</h2>
        <SuperAdminWhatsappConfig />
      </section>
    </div>
  );
}
