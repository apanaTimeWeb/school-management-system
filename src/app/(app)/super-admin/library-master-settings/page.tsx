import { Library } from "lucide-react";
import SuperAdminLibraryMasterConfig from "./super_admin_library_master_components/SuperAdminLibraryMasterConfig";

export default function SuperAdminLibraryMasterPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            <Library size={24} className="text-primary" /> Library Master Settings
          </h1>
        </div>
      </div>

      <SuperAdminLibraryMasterConfig />
    </div>
  );
}
