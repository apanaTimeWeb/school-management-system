import React from "react";
import AdminParentListConfig from "./parent_management_components/AdminParentListConfig";
import AdminParentProfileConfig from "./parent_management_components/AdminParentProfileConfig";
import AdminMultipleChildrenConfig from "./parent_management_components/AdminMultipleChildrenConfig";
import AdminGuardianMappingConfig from "./parent_management_components/AdminGuardianMappingConfig";
import AdminContactDetailsConfig from "./parent_management_components/AdminContactDetailsConfig";
import AdminLoginManagementConfig from "./parent_management_components/AdminLoginManagementConfig";
import AdminParentDocumentsConfig from "./parent_management_components/AdminParentDocumentsConfig";
import AdminCommunicationHistoryConfig from "./parent_management_components/AdminCommunicationHistoryConfig";
import AdminParentNotificationsConfig from "./parent_management_components/AdminParentNotificationsConfig";
import AdminParentComplaintsConfig from "./parent_management_components/AdminParentComplaintsConfig";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">parent_management Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Manage all features related to parent_management</p>
        </div>
      </div>

      <AdminParentListConfig />
      <AdminParentProfileConfig />
      <AdminMultipleChildrenConfig />
      <AdminGuardianMappingConfig />
      <AdminContactDetailsConfig />
      <AdminLoginManagementConfig />
      <AdminParentDocumentsConfig />
      <AdminCommunicationHistoryConfig />
      <AdminParentNotificationsConfig />
      <AdminParentComplaintsConfig />
    </div>
  );
}
