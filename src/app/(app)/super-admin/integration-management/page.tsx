import { Blocks } from "lucide-react";
import SuperAdminIntegrationManagementConfig from "./super_admin_integration_management_components/SuperAdminIntegrationManagementConfig";

export default function SuperAdminIntegrationManagementPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            34. 🧩 Integration Management
          </h1>
        </div>
      </div>

      <SuperAdminIntegrationManagementConfig />
    </div>
  );
}
