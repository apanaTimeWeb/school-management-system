import React from "react";
import AdminExamTypesConfig from "./examination_management_components/AdminExamTypesConfig";
import AdminExamGroupsConfig from "./examination_management_components/AdminExamGroupsConfig";
import AdminExamScheduleConfig from "./examination_management_components/AdminExamScheduleConfig";
import AdminSubjectwiseExamConfig from "./examination_management_components/AdminSubjectwiseExamConfig";
import AdminMarksEntryConfig from "./examination_management_components/AdminMarksEntryConfig";
import AdminMarksVerificationConfig from "./examination_management_components/AdminMarksVerificationConfig";
import AdminMarksApprovalConfig from "./examination_management_components/AdminMarksApprovalConfig";
import AdminGradeConfigurationConfig from "./examination_management_components/AdminGradeConfigurationConfig";
import AdminResultGenerationConfig from "./examination_management_components/AdminResultGenerationConfig";
import AdminReportCardConfig from "./examination_management_components/AdminReportCardConfig";
import AdminRankConfig from "./examination_management_components/AdminRankConfig";
import AdminPercentageConfig from "./examination_management_components/AdminPercentageConfig";
import AdminGPACGPAConfig from "./examination_management_components/AdminGPACGPAConfig";
import AdminPassFailConfig from "./examination_management_components/AdminPassFailConfig";
import AdminRemarksConfig from "./examination_management_components/AdminRemarksConfig";
import AdminResultPublishUnpublishConfig from "./examination_management_components/AdminResultPublishUnpublishConfig";
import AdminResultReportsConfig from "./examination_management_components/AdminResultReportsConfig";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Examination Management Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Manage all features related to Examination Management</p>
        </div>
      </div>

      <AdminExamTypesConfig />
      <AdminExamGroupsConfig />
      <AdminExamScheduleConfig />
      <AdminSubjectwiseExamConfig />
      <AdminMarksEntryConfig />
      <AdminMarksVerificationConfig />
      <AdminMarksApprovalConfig />
      <AdminGradeConfigurationConfig />
      <AdminResultGenerationConfig />
      <AdminReportCardConfig />
      <AdminRankConfig />
      <AdminPercentageConfig />
      <AdminGPACGPAConfig />
      <AdminPassFailConfig />
      <AdminRemarksConfig />
      <AdminResultPublishUnpublishConfig />
      <AdminResultReportsConfig />
    </div>
  );
}
