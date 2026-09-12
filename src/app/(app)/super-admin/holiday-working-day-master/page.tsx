import SuperAdminHolidayWorkingDayMasterConfig from "./super_admin_holiday_working_day_master_components/SuperAdminHolidayWorkingDayMasterConfig";

export default function SuperAdminHolidayWorkingDayMasterPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            30. 🗓️ Holiday & Working Day Master
          </h1>
        </div>
      </div>

      <SuperAdminHolidayWorkingDayMasterConfig />
    </div>
  );
}
