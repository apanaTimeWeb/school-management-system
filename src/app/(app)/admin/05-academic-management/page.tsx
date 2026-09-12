import React from "react";
import AdminAcademicSessionConfig from "./academic_management_components/AdminAcademicSessionConfig";
import AdminClassesConfig from "./academic_management_components/AdminClassesConfig";
import AdminSectionsConfig from "./academic_management_components/AdminSectionsConfig";
import AdminSubjectsConfig from "./academic_management_components/AdminSubjectsConfig";
import AdminClassSubjectMappingConfig from "./academic_management_components/AdminClassSubjectMappingConfig";
import AdminTeacherSubjectMappingConfig from "./academic_management_components/AdminTeacherSubjectMappingConfig";
import AdminClassTeacherAssignmentConfig from "./academic_management_components/AdminClassTeacherAssignmentConfig";
import AdminHODAssignmentConfig from "./academic_management_components/AdminHODAssignmentConfig";
import AdminCurriculumConfig from "./academic_management_components/AdminCurriculumConfig";
import AdminSyllabusConfig from "./academic_management_components/AdminSyllabusConfig";
import AdminAcademicCalendarConfig from "./academic_management_components/AdminAcademicCalendarConfig";
import AdminTimetableConfig from "./academic_management_components/AdminTimetableConfig";
import AdminPeriodsConfig from "./academic_management_components/AdminPeriodsConfig";
import AdminWorkingDaysConfig from "./academic_management_components/AdminWorkingDaysConfig";
import AdminHolidaysConfig from "./academic_management_components/AdminHolidaysConfig";
import AdminHousesConfig from "./academic_management_components/AdminHousesConfig";
import AdminStreamsConfig from "./academic_management_components/AdminStreamsConfig";
import AdminDepartmentsConfig from "./academic_management_components/AdminDepartmentsConfig";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">academic_management Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Manage all features related to academic_management</p>
        </div>
      </div>

      <AdminAcademicSessionConfig />
      <AdminClassesConfig />
      <AdminSectionsConfig />
      <AdminSubjectsConfig />
      <AdminClassSubjectMappingConfig />
      <AdminTeacherSubjectMappingConfig />
      <AdminClassTeacherAssignmentConfig />
      <AdminHODAssignmentConfig />
      <AdminCurriculumConfig />
      <AdminSyllabusConfig />
      <AdminAcademicCalendarConfig />
      <AdminTimetableConfig />
      <AdminPeriodsConfig />
      <AdminWorkingDaysConfig />
      <AdminHolidaysConfig />
      <AdminHousesConfig />
      <AdminStreamsConfig />
      <AdminDepartmentsConfig />
    </div>
  );
}
