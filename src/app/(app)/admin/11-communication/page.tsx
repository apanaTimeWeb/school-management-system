import React from "react";
import AdminNoticeBoardConfig from "./communication_components/AdminNoticeBoardConfig";
import AdminAnnouncementsConfig from "./communication_components/AdminAnnouncementsConfig";
import AdminSMSConfig from "./communication_components/AdminSMSConfig";
import AdminEmailConfig from "./communication_components/AdminEmailConfig";
import AdminWhatsAppConfig from "./communication_components/AdminWhatsAppConfig";
import AdminPushNotificationConfig from "./communication_components/AdminPushNotificationConfig";
import AdminClasswiseNotificationConfig from "./communication_components/AdminClasswiseNotificationConfig";
import AdminSectionwiseNotificationConfig from "./communication_components/AdminSectionwiseNotificationConfig";
import AdminStudentwiseNotificationConfig from "./communication_components/AdminStudentwiseNotificationConfig";
import AdminParentNotificationConfig from "./communication_components/AdminParentNotificationConfig";
import AdminStaffNotificationConfig from "./communication_components/AdminStaffNotificationConfig";
import AdminNotificationTemplatesConfig from "./communication_components/AdminNotificationTemplatesConfig";
import AdminCommunicationHistoryConfig from "./communication_components/AdminCommunicationHistoryConfig";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Communication Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Manage all features related to Communication</p>
        </div>
      </div>

      <AdminNoticeBoardConfig />
      <AdminAnnouncementsConfig />
      <AdminSMSConfig />
      <AdminEmailConfig />
      <AdminWhatsAppConfig />
      <AdminPushNotificationConfig />
      <AdminClasswiseNotificationConfig />
      <AdminSectionwiseNotificationConfig />
      <AdminStudentwiseNotificationConfig />
      <AdminParentNotificationConfig />
      <AdminStaffNotificationConfig />
      <AdminNotificationTemplatesConfig />
      <AdminCommunicationHistoryConfig />
    </div>
  );
}
