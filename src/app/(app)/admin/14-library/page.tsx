import React from "react";
import AdminBooksConfig from "./library_components/AdminBooksConfig";
import AdminCategoriesConfig from "./library_components/AdminCategoriesConfig";
import AdminAuthorsConfig from "./library_components/AdminAuthorsConfig";
import AdminPublishersConfig from "./library_components/AdminPublishersConfig";
import AdminBookCopiesConfig from "./library_components/AdminBookCopiesConfig";
import AdminBarcodeQRConfig from "./library_components/AdminBarcodeQRConfig";
import AdminIssueConfig from "./library_components/AdminIssueConfig";
import AdminReturnConfig from "./library_components/AdminReturnConfig";
import AdminRenewalConfig from "./library_components/AdminRenewalConfig";
import AdminReservationConfig from "./library_components/AdminReservationConfig";
import AdminFineConfig from "./library_components/AdminFineConfig";
import AdminLostDamagedBooksConfig from "./library_components/AdminLostDamagedBooksConfig";
import AdminLibraryMembersConfig from "./library_components/AdminLibraryMembersConfig";
import AdminReportsConfig from "./library_components/AdminReportsConfig";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Library Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Manage all features related to Library</p>
        </div>
      </div>

      <AdminBooksConfig />
      <AdminCategoriesConfig />
      <AdminAuthorsConfig />
      <AdminPublishersConfig />
      <AdminBookCopiesConfig />
      <AdminBarcodeQRConfig />
      <AdminIssueConfig />
      <AdminReturnConfig />
      <AdminRenewalConfig />
      <AdminReservationConfig />
      <AdminFineConfig />
      <AdminLostDamagedBooksConfig />
      <AdminLibraryMembersConfig />
      <AdminReportsConfig />
    </div>
  );
}
