import React from "react";
import AdminDisciplineRecordsConfig from "./discipline_grievance_components/AdminDisciplineRecordsConfig";
import AdminIncidentsConfig from "./discipline_grievance_components/AdminIncidentsConfig";
import AdminWarningsConfig from "./discipline_grievance_components/AdminWarningsConfig";
import AdminActionsTakenConfig from "./discipline_grievance_components/AdminActionsTakenConfig";
import AdminStudentComplaintsConfig from "./discipline_grievance_components/AdminStudentComplaintsConfig";
import AdminParentComplaintsConfig from "./discipline_grievance_components/AdminParentComplaintsConfig";
import AdminStaffComplaintsConfig from "./discipline_grievance_components/AdminStaffComplaintsConfig";
import AdminComplaintAssignmentConfig from "./discipline_grievance_components/AdminComplaintAssignmentConfig";
import AdminResolutionConfig from "./discipline_grievance_components/AdminResolutionConfig";
import AdminComplaintHistoryConfig from "./discipline_grievance_components/AdminComplaintHistoryConfig";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Discipline & Grievance Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Manage all features related to Discipline & Grievance</p>
        </div>
      </div>

      <AdminDisciplineRecordsConfig />
      <AdminIncidentsConfig />
      <AdminWarningsConfig />
      <AdminActionsTakenConfig />
      <AdminStudentComplaintsConfig />
      <AdminParentComplaintsConfig />
      <AdminStaffComplaintsConfig />
      <AdminComplaintAssignmentConfig />
      <AdminResolutionConfig />
      <AdminComplaintHistoryConfig />
    </div>
  );
}
