import { Palette } from "lucide-react";
import SuperAdminSchoolBrandingConfig from "./super_admin_school_branding_components/SuperAdminSchoolBrandingConfig";

export default function SuperAdminSchoolBrandingPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            49. 🏷️ School Branding
          </h1>
        </div>
      </div>

      <SuperAdminSchoolBrandingConfig />
    </div>
  );
}
