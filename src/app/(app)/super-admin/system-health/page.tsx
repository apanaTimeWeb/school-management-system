import SuperAdminSystemHealthConfig from "./super_admin_system_health_components/SuperAdminSystemHealthConfig";

export default function SuperAdminSystemHealthPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            36. 🖥️ System Health
          </h1>
        </div>
      </div>

      <SuperAdminSystemHealthConfig />
    </div>
  );
}
