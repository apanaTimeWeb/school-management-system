import React from "react";
import AdminClassTimetableConfig from "./timetable_components/AdminClassTimetableConfig";
import AdminTeacherTimetableConfig from "./timetable_components/AdminTeacherTimetableConfig";
import AdminRoomTimetableConfig from "./timetable_components/AdminRoomTimetableConfig";
import AdminPeriodManagementConfig from "./timetable_components/AdminPeriodManagementConfig";
import AdminSubjectAllocationConfig from "./timetable_components/AdminSubjectAllocationConfig";
import AdminTeacherAllocationConfig from "./timetable_components/AdminTeacherAllocationConfig";
import AdminFreePeriodConfig from "./timetable_components/AdminFreePeriodConfig";
import AdminSubstituteTeacherConfig from "./timetable_components/AdminSubstituteTeacherConfig";
import AdminTimetableConflictDetectionConfig from "./timetable_components/AdminTimetableConflictDetectionConfig";
import AdminPublishUnpublishConfig from "./timetable_components/AdminPublishUnpublishConfig";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Timetable Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Manage all features related to Timetable</p>
        </div>
      </div>

      <AdminClassTimetableConfig />
      <AdminTeacherTimetableConfig />
      <AdminRoomTimetableConfig />
      <AdminPeriodManagementConfig />
      <AdminSubjectAllocationConfig />
      <AdminTeacherAllocationConfig />
      <AdminFreePeriodConfig />
      <AdminSubstituteTeacherConfig />
      <AdminTimetableConflictDetectionConfig />
      <AdminPublishUnpublishConfig />
    </div>
  );
}
