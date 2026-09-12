import React from "react";
import AdminStudentListConfig from "./student_management_components/AdminStudentListConfig";
import AdminStudentProfileConfig from "./student_management_components/AdminStudentProfileConfig";
import AdminStudentRegistrationConfig from "./student_management_components/AdminStudentRegistrationConfig";
import AdminAdmissionNumberConfig from "./student_management_components/AdminAdmissionNumberConfig";
import AdminStudentIDConfig from "./student_management_components/AdminStudentIDConfig";
import AdminAcademicDetailsConfig from "./student_management_components/AdminAcademicDetailsConfig";
import AdminParentGuardianDetailsConfig from "./student_management_components/AdminParentGuardianDetailsConfig";
import AdminContactDetailsConfig from "./student_management_components/AdminContactDetailsConfig";
import AdminAddressConfig from "./student_management_components/AdminAddressConfig";
import AdminDocumentsConfig from "./student_management_components/AdminDocumentsConfig";
import AdminPreviousSchoolDetailsConfig from "./student_management_components/AdminPreviousSchoolDetailsConfig";
import AdminMedicalInformationConfig from "./student_management_components/AdminMedicalInformationConfig";
import AdminCategoryReservationDetailsConfig from "./student_management_components/AdminCategoryReservationDetailsConfig";
import AdminSiblingInformationConfig from "./student_management_components/AdminSiblingInformationConfig";
import AdminHouseConfig from "./student_management_components/AdminHouseConfig";
import AdminStudentStatusConfig from "./student_management_components/AdminStudentStatusConfig";
import AdminClassSectionTransferConfig from "./student_management_components/AdminClassSectionTransferConfig";
import AdminStudentPromotionConfig from "./student_management_components/AdminStudentPromotionConfig";
import AdminStudentTCConfig from "./student_management_components/AdminStudentTCConfig";
import AdminStudentWithdrawalConfig from "./student_management_components/AdminStudentWithdrawalConfig";
import AdminStudentReadmissionConfig from "./student_management_components/AdminStudentReadmissionConfig";
import AdminStudentArchiveConfig from "./student_management_components/AdminStudentArchiveConfig";
import AdminStudentSearchFiltersConfig from "./student_management_components/AdminStudentSearchFiltersConfig";
import AdminBulkImportExportConfig from "./student_management_components/AdminBulkImportExportConfig";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">STUDENT MANAGEMENT</h1>
          <p className="text-sm text-text-secondary mt-1">Manage all features related to student_management</p>
        </div>
      </div>

      <AdminStudentListConfig />
      <AdminStudentProfileConfig />
      <AdminStudentRegistrationConfig />
      <AdminAdmissionNumberConfig />
      <AdminStudentIDConfig />
      <AdminAcademicDetailsConfig />
      <AdminParentGuardianDetailsConfig />
      <AdminContactDetailsConfig />
      <AdminAddressConfig />
      <AdminDocumentsConfig />
      <AdminPreviousSchoolDetailsConfig />
      <AdminMedicalInformationConfig />
      <AdminCategoryReservationDetailsConfig />
      <AdminSiblingInformationConfig />
      <AdminHouseConfig />
      <AdminStudentStatusConfig />
      <AdminClassSectionTransferConfig />
      <AdminStudentPromotionConfig />
      <AdminStudentTCConfig />
      <AdminStudentWithdrawalConfig />
      <AdminStudentReadmissionConfig />
      <AdminStudentArchiveConfig />
      <AdminStudentSearchFiltersConfig />
      <AdminBulkImportExportConfig />
    </div>
  );
}
