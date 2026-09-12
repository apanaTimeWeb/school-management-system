import React from "react";
import AdminSchoolProfileConfig from "./settings_components/AdminSchoolProfileConfig";
import AdminAcademicSettingsConfig from "./settings_components/AdminAcademicSettingsConfig";
import AdminFeeSettingsConfig from "./settings_components/AdminFeeSettingsConfig";
import AdminAttendanceSettingsConfig from "./settings_components/AdminAttendanceSettingsConfig";
import AdminExamSettingsConfig from "./settings_components/AdminExamSettingsConfig";
import AdminNotificationSettingsConfig from "./settings_components/AdminNotificationSettingsConfig";
import AdminDocumentSettingsConfig from "./settings_components/AdminDocumentSettingsConfig";
import AdminBrandingConfig from "./settings_components/AdminBrandingConfig";
import AdminCommunicationSettingsConfig from "./settings_components/AdminCommunicationSettingsConfig";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Settings Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Manage all features related to Settings</p>
        </div>
      </div>

      <AdminSchoolProfileConfig />
      <AdminAcademicSettingsConfig />
      <AdminFeeSettingsConfig />
      <AdminAttendanceSettingsConfig />
      <AdminExamSettingsConfig />
      <AdminNotificationSettingsConfig />
      <AdminDocumentSettingsConfig />
      <AdminBrandingConfig />
      <AdminCommunicationSettingsConfig />
    </div>
  );
}
