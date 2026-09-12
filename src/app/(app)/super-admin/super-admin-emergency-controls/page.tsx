import { ShieldAlert } from "lucide-react";
import SuperAdminSuperAdminEmergencyControlsConfig from "./super_admin_super_admin_emergency_controls_components/SuperAdminSuperAdminEmergencyControlsConfig";

export default function SuperAdminSuperAdminEmergencyControlsPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            51. 🔐 Super Admin Emergency Controls
          </h1>
        </div>
      </div>

      <SuperAdminSuperAdminEmergencyControlsConfig />
    </div>
  );
}
