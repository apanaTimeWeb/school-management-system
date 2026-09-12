import { HardDriveDownload } from "lucide-react";
import SuperAdminSuperAdminExportCenterConfig from "./super_admin_super_admin_export_center_components/SuperAdminSuperAdminExportCenterConfig";

export default function SuperAdminSuperAdminExportCenterPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            50. 📊 Super Admin Export Center
          </h1>
        </div>
      </div>

      <SuperAdminSuperAdminExportCenterConfig />
    </div>
  );
}
