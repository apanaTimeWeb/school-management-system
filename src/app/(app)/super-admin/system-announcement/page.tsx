import SuperAdminSystemAnnouncementConfig from "./super_admin_system_announcement_components/SuperAdminSystemAnnouncementConfig";

export default function SuperAdminSystemAnnouncementPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            38. 📢 System Announcement
          </h1>
        </div>
      </div>

      <SuperAdminSystemAnnouncementConfig />
    </div>
  );
}
