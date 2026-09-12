import { RefreshCw } from "lucide-react";
import SuperAdminAutomationRulesConfig from "./super_admin_automation_rules_components/SuperAdminAutomationRulesConfig";

export default function SuperAdminAutomationRulesPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            43. 🔄 Automation Rules
          </h1>
        </div>
      </div>

      <SuperAdminAutomationRulesConfig />
    </div>
  );
}
