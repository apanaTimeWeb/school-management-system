import { ShieldAlert } from "lucide-react";
import SuperAdminSensitiveDataProtectionConfig from "./super_admin_sensitive_data_protection_components/SuperAdminSensitiveDataProtectionConfig";

export default function SuperAdminSensitiveDataProtectionPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            45. 🔐 Sensitive Data Protection
          </h1>
        </div>
      </div>

      <SuperAdminSensitiveDataProtectionConfig />
    </div>
  );
}
