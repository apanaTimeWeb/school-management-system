import React from "react";
import AdminSchoolEventsConfig from "./events_activities_components/AdminSchoolEventsConfig";
import AdminAnnualFunctionConfig from "./events_activities_components/AdminAnnualFunctionConfig";
import AdminSportsConfig from "./events_activities_components/AdminSportsConfig";
import AdminCulturalActivitiesConfig from "./events_activities_components/AdminCulturalActivitiesConfig";
import AdminCompetitionsConfig from "./events_activities_components/AdminCompetitionsConfig";
import AdminEventsCalendarConfig from "./events_activities_components/AdminEventsCalendarConfig";
import AdminEventRegistrationConfig from "./events_activities_components/AdminEventRegistrationConfig";
import AdminParticipantsConfig from "./events_activities_components/AdminParticipantsConfig";
import AdminResultsConfig from "./events_activities_components/AdminResultsConfig";
import AdminCertificatesConfig from "./events_activities_components/AdminCertificatesConfig";
import AdminEventNotificationsConfig from "./events_activities_components/AdminEventNotificationsConfig";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Events & Activities Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Manage all features related to Events & Activities</p>
        </div>
      </div>

      <AdminSchoolEventsConfig />
      <AdminAnnualFunctionConfig />
      <AdminSportsConfig />
      <AdminCulturalActivitiesConfig />
      <AdminCompetitionsConfig />
      <AdminEventsCalendarConfig />
      <AdminEventRegistrationConfig />
      <AdminParticipantsConfig />
      <AdminResultsConfig />
      <AdminCertificatesConfig />
      <AdminEventNotificationsConfig />
    </div>
  );
}
