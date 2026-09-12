import { Bus } from "lucide-react";
import SuperAdminTransportMasterConfig from "./super_admin_transport_master_components/SuperAdminTransportMasterConfig";

export default function SuperAdminTransportMasterPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            <Bus size={24} className="text-primary" /> Transport Master Settings
          </h1>
        </div>
      </div>

      <SuperAdminTransportMasterConfig />
    </div>
  );
}
