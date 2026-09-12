import React from "react";
import AdminStudentConfig from "./search_filters_components/AdminStudentConfig";
import AdminParentConfig from "./search_filters_components/AdminParentConfig";
import AdminTeacherConfig from "./search_filters_components/AdminTeacherConfig";
import AdminStaffConfig from "./search_filters_components/AdminStaffConfig";
import AdminAdmissionConfig from "./search_filters_components/AdminAdmissionConfig";
import AdminFeeConfig from "./search_filters_components/AdminFeeConfig";
import AdminReceiptConfig from "./search_filters_components/AdminReceiptConfig";
import AdminAttendanceConfig from "./search_filters_components/AdminAttendanceConfig";
import AdminExamConfig from "./search_filters_components/AdminExamConfig";
import AdminCertificateConfig from "./search_filters_components/AdminCertificateConfig";
import AdminDocumentsConfig from "./search_filters_components/AdminDocumentsConfig";
import AdminAdvancedFiltersConfig from "./search_filters_components/AdminAdvancedFiltersConfig";
import AdminSavedFiltersConfig from "./search_filters_components/AdminSavedFiltersConfig";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Search & Filters Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Manage all features related to Search & Filters</p>
        </div>
      </div>

      <AdminStudentConfig />
      <AdminParentConfig />
      <AdminTeacherConfig />
      <AdminStaffConfig />
      <AdminAdmissionConfig />
      <AdminFeeConfig />
      <AdminReceiptConfig />
      <AdminAttendanceConfig />
      <AdminExamConfig />
      <AdminCertificateConfig />
      <AdminDocumentsConfig />
      <AdminAdvancedFiltersConfig />
      <AdminSavedFiltersConfig />
    </div>
  );
}
