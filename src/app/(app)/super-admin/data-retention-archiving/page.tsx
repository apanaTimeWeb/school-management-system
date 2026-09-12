import { Archive } from "lucide-react";
import SuperAdminDataRetentionArchivingConfig from "./super_admin_data_retention_archiving_components/SuperAdminDataRetentionArchivingConfig";

export default function SuperAdminDataRetentionArchivingPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            1. 🔒 Data Retention & Archiving
          </h1>
        </div>
      </div>

      <SuperAdminDataRetentionArchivingConfig />
    </div>
  );
}
