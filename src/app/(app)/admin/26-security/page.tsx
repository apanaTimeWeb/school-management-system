import React from "react";
import AdminLoginHistoryConfig from "./security_components/AdminLoginHistoryConfig";
import AdminActiveSessionsConfig from "./security_components/AdminActiveSessionsConfig";
import AdminLogoutOtherDevicesConfig from "./security_components/AdminLogoutOtherDevicesConfig";
import AdminPasswordChangeConfig from "./security_components/AdminPasswordChangeConfig";
import Admin2FAenabledConfig from "./security_components/Admin2FAenabledConfig";
import AdminPermissionbasedaccessConfig from "./security_components/AdminPermissionbasedaccessConfig";
import AdminSensitivedatamaskingConfig from "./security_components/AdminSensitivedatamaskingConfig";
import AdminActivityHistoryConfig from "./security_components/AdminActivityHistoryConfig";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Security Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Manage all features related to Security</p>
        </div>
      </div>

      <AdminLoginHistoryConfig />
      <AdminActiveSessionsConfig />
      <AdminLogoutOtherDevicesConfig />
      <AdminPasswordChangeConfig />
      <Admin2FAenabledConfig />
      <AdminPermissionbasedaccessConfig />
      <AdminSensitivedatamaskingConfig />
      <AdminActivityHistoryConfig />
    </div>
  );
}
