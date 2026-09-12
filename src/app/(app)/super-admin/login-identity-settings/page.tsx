import { KeyRound } from "lucide-react";
import SuperAdminLoginIdentitySettingsConfig from "./super_admin_login_identity_settings_components/SuperAdminLoginIdentitySettingsConfig";

export default function SuperAdminLoginIdentitySettingsPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            46. 🪪 Login / Identity Settings
          </h1>
        </div>
      </div>

      <SuperAdminLoginIdentitySettingsConfig />
    </div>
  );
}
