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
import AdminStudentReAdmissionConfig from "./student_management_components/AdminStudentReAdmissionConfig";
import AdminStudentArchiveConfig from "./student_management_components/AdminStudentArchiveConfig";
import AdminStudentSearchFiltersConfig from "./student_management_components/AdminStudentSearchFiltersConfig";
import AdminBulkImportExporConfig from "./student_management_components/AdminBulkImportExporConfig";

export default function AdminStudentManagementPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Student Management</h1>
          <p className="text-sm text-text-secondary mt-1">Manage complete student lifecycle, profiles, and administration.</p>
        </div>
      </div>
      
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Student List</h2>
        <AdminStudentListConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Student Profile</h2>
        <AdminStudentProfileConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Student Registration</h2>
        <AdminStudentRegistrationConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Admission Number</h2>
        <AdminAdmissionNumberConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Student ID</h2>
        <AdminStudentIDConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Academic Details</h2>
        <AdminAcademicDetailsConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Parent/Guardian Details</h2>
        <AdminParentGuardianDetailsConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Contact Details</h2>
        <AdminContactDetailsConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Address</h2>
        <AdminAddressConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Documents</h2>
        <AdminDocumentsConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Previous School Details</h2>
        <AdminPreviousSchoolDetailsConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Medical Information</h2>
        <AdminMedicalInformationConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Category/Reservation Details</h2>
        <AdminCategoryReservationDetailsConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Sibling Information</h2>
        <AdminSiblingInformationConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">House</h2>
        <AdminHouseConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Student Status</h2>
        <AdminStudentStatusConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Class/Section Transfer</h2>
        <AdminClassSectionTransferConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Student Promotion</h2>
        <AdminStudentPromotionConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Student TC</h2>
        <AdminStudentTCConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Student Withdrawal</h2>
        <AdminStudentWithdrawalConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Student Re-admission</h2>
        <AdminStudentReAdmissionConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Student Archive</h2>
        <AdminStudentArchiveConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Student Search/Filters</h2>
        <AdminStudentSearchFiltersConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">Bulk Import/Expor</h2>
        <AdminBulkImportExporConfig />
      </section>
    </div>
  );
}
