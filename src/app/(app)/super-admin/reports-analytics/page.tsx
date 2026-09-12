import SuperAdminReportsAnalyticsConfig from "./super_admin_reports_analytics_components/SuperAdminReportsAnalyticsConfig";

export default function SuperAdminReportsAnalyticsPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            32. 📈 Reports & Analytics Access
          </h1>
        </div>
      </div>

      <SuperAdminReportsAnalyticsConfig />
    </div>
  );
}
