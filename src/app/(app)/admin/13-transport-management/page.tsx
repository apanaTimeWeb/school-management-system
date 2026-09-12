import React from "react";
import AdminVehiclesConfig from "./transport_components/AdminVehiclesConfig";
import AdminRoutesConfig from "./transport_components/AdminRoutesConfig";
import AdminStopsConfig from "./transport_components/AdminStopsConfig";
import AdminStudentsAllocationConfig from "./transport_components/AdminStudentsAllocationConfig";
import AdminDriverStaffAssignmentConfig from "./transport_components/AdminDriverStaffAssignmentConfig";
import AdminTransportFeeConfig from "./transport_components/AdminTransportFeeConfig";
import AdminVehicleDocumentsConfig from "./transport_components/AdminVehicleDocumentsConfig";
import AdminGPSStatusConfig from "./transport_components/AdminGPSStatusConfig";
import AdminRouteReportsConfig from "./transport_components/AdminRouteReportsConfig";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Transport Management Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Manage all features related to Transport Management</p>
        </div>
      </div>

      <AdminVehiclesConfig />
      <AdminRoutesConfig />
      <AdminStopsConfig />
      <AdminStudentsAllocationConfig />
      <AdminDriverStaffAssignmentConfig />
      <AdminTransportFeeConfig />
      <AdminVehicleDocumentsConfig />
      <AdminGPSStatusConfig />
      <AdminRouteReportsConfig />
    </div>
  );
}
