import React from 'react';

import SuperAdminSystemAnnouncementConfig from './system_announcements_components/SuperAdminSystemAnnouncementConfig';

export default function systemannouncementsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">21-SYSTEM-ANNOUNCEMENTS</h1>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">SystemAnnouncement</h2>
        <SuperAdminSystemAnnouncementConfig />
      </section>
    </div>
  );
}
