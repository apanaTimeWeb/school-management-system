import { History } from "lucide-react";
import SuperAdminConfigurationChangeHistoryConfig from "./super_admin_configuration_change_history_components/SuperAdminConfigurationChangeHistoryConfig";

export default function SuperAdminConfigurationChangeHistoryPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            52. 🧾 Configuration Change History
          </h1>
        </div>
      </div>

      <SuperAdminConfigurationChangeHistoryConfig />
    </div>
  );
}
