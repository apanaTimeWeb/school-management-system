"use client";

import { Settings } from "lucide-react";
import SuperAdminGeneralSettingsForm from "./super_admin_general_settings_components/SuperAdminGeneralSettingsForm";

export default function SuperAdminGeneralSettingsPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1200px] mx-auto">
      
      {/* Explicit Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            <Settings size={24} className="text-primary" /> General System Settings
          </h1>
          <p className="text-sm text-text-secondary mt-1">Configure global ERP parameters, localization defaults, and organization branding.</p>
        </div>
      </div>

      <SuperAdminGeneralSettingsForm />

    </div>
  );
}
