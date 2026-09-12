import { Smartphone } from "lucide-react";
import SuperAdminSmsConfig from "./super_admin_sms_configuration_components/SuperAdminSmsConfig";

export default function SuperAdminSmsConfigurationPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            <Smartphone size={24} className="text-primary" /> SMS Configuration
          </h1>
        </div>
      </div>

      <SuperAdminSmsConfig />
    </div>
  );
}
