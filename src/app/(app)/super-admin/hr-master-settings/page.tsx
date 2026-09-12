import { Briefcase } from "lucide-react";
import SuperAdminHRMasterConfig from "./super_admin_hr_master_components/SuperAdminHRMasterConfig";

export default function SuperAdminHRMasterPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            <Briefcase size={24} className="text-primary" /> HR Master Settings
          </h1>
        </div>
      </div>

      <SuperAdminHRMasterConfig />
    </div>
  );
}
