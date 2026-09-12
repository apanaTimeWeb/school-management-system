import { Mail } from "lucide-react";
import SuperAdminEmailConfig from "./super_admin_email_configuration_components/SuperAdminEmailConfig";

export default function SuperAdminEmailConfigurationPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            <Mail size={24} className="text-primary" /> Email Configuration
          </h1>
        </div>
      </div>

      <SuperAdminEmailConfig />
    </div>
  );
}
