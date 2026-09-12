import React from "react";
import AdminNoticesConfig from "./website_public_content_components/AdminNoticesConfig";
import AdminEventsConfig from "./website_public_content_components/AdminEventsConfig";
import AdminNewsConfig from "./website_public_content_components/AdminNewsConfig";
import AdminGalleryConfig from "./website_public_content_components/AdminGalleryConfig";
import AdminVideosConfig from "./website_public_content_components/AdminVideosConfig";
import AdminAchievementsConfig from "./website_public_content_components/AdminAchievementsConfig";
import AdminSchoolInformationConfig from "./website_public_content_components/AdminSchoolInformationConfig";
import AdminContactInformationConfig from "./website_public_content_components/AdminContactInformationConfig";
import AdminHomepageContentConfig from "./website_public_content_components/AdminHomepageContentConfig";
import AdminPublicAnnouncementsConfig from "./website_public_content_components/AdminPublicAnnouncementsConfig";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Website / Public Content Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Manage all features related to Website & Public Content</p>
        </div>
      </div>

      <AdminNoticesConfig />
      <AdminEventsConfig />
      <AdminNewsConfig />
      <AdminGalleryConfig />
      <AdminVideosConfig />
      <AdminAchievementsConfig />
      <AdminSchoolInformationConfig />
      <AdminContactInformationConfig />
      <AdminHomepageContentConfig />
      <AdminPublicAnnouncementsConfig />
    </div>
  );
}
