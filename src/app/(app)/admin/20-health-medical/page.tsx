import React from "react";
import AdminStudentMedicalProfileConfig from "./health_medical_components/AdminStudentMedicalProfileConfig";
import AdminBloodGroupConfig from "./health_medical_components/AdminBloodGroupConfig";
import AdminAllergiesConfig from "./health_medical_components/AdminAllergiesConfig";
import AdminEmergencyContactConfig from "./health_medical_components/AdminEmergencyContactConfig";
import AdminMedicalRecordsConfig from "./health_medical_components/AdminMedicalRecordsConfig";
import AdminHealthCheckupConfig from "./health_medical_components/AdminHealthCheckupConfig";
import AdminMedicalIncidentsConfig from "./health_medical_components/AdminMedicalIncidentsConfig";
import AdminFirstAidRecordsConfig from "./health_medical_components/AdminFirstAidRecordsConfig";
import AdminHealthReportsConfig from "./health_medical_components/AdminHealthReportsConfig";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Health & Medical Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Manage all features related to Health & Medical</p>
        </div>
      </div>

      <AdminStudentMedicalProfileConfig />
      <AdminBloodGroupConfig />
      <AdminAllergiesConfig />
      <AdminEmergencyContactConfig />
      <AdminMedicalRecordsConfig />
      <AdminHealthCheckupConfig />
      <AdminMedicalIncidentsConfig />
      <AdminFirstAidRecordsConfig />
      <AdminHealthReportsConfig />
    </div>
  );
}
