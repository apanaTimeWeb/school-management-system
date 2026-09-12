import { ToggleLeft } from "lucide-react";
import SuperAdminModuleEnableDisableConfig from "./super_admin_module_enable_disable_components/SuperAdminModuleEnableDisableConfig";

export default function SuperAdminModuleEnableDisablePage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            48. 📦 Module Enable / Disable
          </h1>
        </div>
      </div>

      <SuperAdminModuleEnableDisableConfig />
    </div>
  );
}
