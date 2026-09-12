import { BellRing } from "lucide-react";
import SuperAdminNotificationConfig from "./super_admin_notification_configuration_components/SuperAdminNotificationConfig";

export default function SuperAdminNotificationConfigurationPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            <BellRing size={24} className="text-primary" /> Notification Configuration
          </h1>
        </div>
      </div>

      <SuperAdminNotificationConfig />
    </div>
  );
}
