import { Trash2 } from "lucide-react";
import SuperAdminRecycleBinConfig from "./super_admin_recycle_bin_components/SuperAdminRecycleBinConfig";

export default function SuperAdminRecycleBinPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            40. 🗑️ Deleted Data / Recycle Bin
          </h1>
        </div>
      </div>

      <SuperAdminRecycleBinConfig />
    </div>
  );
}
