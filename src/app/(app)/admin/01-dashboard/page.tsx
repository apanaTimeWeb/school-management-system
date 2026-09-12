import React from "react";
import AdminTotalStudentsConfig from "./dashboard_components/AdminTotalStudentsConfig";
import AdminTotalStaffConfig from "./dashboard_components/AdminTotalStaffConfig";
import AdminTotalTeachersConfig from "./dashboard_components/AdminTotalTeachersConfig";
import AdminNewAdmissionsConfig from "./dashboard_components/AdminNewAdmissionsConfig";
import AdminPendingAdmissionsConfig from "./dashboard_components/AdminPendingAdmissionsConfig";
import AdminTodaysAttendanceConfig from "./dashboard_components/AdminTodaysAttendanceConfig";
import AdminAbsentStudentsConfig from "./dashboard_components/AdminAbsentStudentsConfig";
import AdminAbsentStaffConfig from "./dashboard_components/AdminAbsentStaffConfig";
import AdminFeeCollectionTodayConfig from "./dashboard_components/AdminFeeCollectionTodayConfig";
import AdminPendingFeesConfig from "./dashboard_components/AdminPendingFeesConfig";
import AdminUpcomingExamsConfig from "./dashboard_components/AdminUpcomingExamsConfig";
import AdminUpcomingEventsConfig from "./dashboard_components/AdminUpcomingEventsConfig";
import AdminLeaveRequestsConfig from "./dashboard_components/AdminLeaveRequestsConfig";
import AdminComplaintsGrievancesConfig from "./dashboard_components/AdminComplaintsGrievancesConfig";
import AdminNotificationsConfig from "./dashboard_components/AdminNotificationsConfig";
import AdminImportantAlertsConfig from "./dashboard_components/AdminImportantAlertsConfig";
import AdminQuickActionsConfig from "./dashboard_components/AdminQuickActionsConfig";
import AdminAdmissionFeeChartsConfig from "./dashboard_components/AdminAdmissionFeeChartsConfig";
import AdminAttendanceAnalyticsConfig from "./dashboard_components/AdminAttendanceAnalyticsConfig";
import AdminAcademicPerformanceSummaryConfig from "./dashboard_components/AdminAcademicPerformanceSummaryConfig";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Dashboard Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Manage all features related to Dashboard</p>
        </div>
      </div>

      <AdminTotalStudentsConfig />
      <AdminTotalStaffConfig />
      <AdminTotalTeachersConfig />
      <AdminNewAdmissionsConfig />
      <AdminPendingAdmissionsConfig />
      <AdminTodaysAttendanceConfig />
      <AdminAbsentStudentsConfig />
      <AdminAbsentStaffConfig />
      <AdminFeeCollectionTodayConfig />
      <AdminPendingFeesConfig />
      <AdminUpcomingExamsConfig />
      <AdminUpcomingEventsConfig />
      <AdminLeaveRequestsConfig />
      <AdminComplaintsGrievancesConfig />
      <AdminNotificationsConfig />
      <AdminImportantAlertsConfig />
      <AdminQuickActionsConfig />
      <AdminAdmissionFeeChartsConfig />
      <AdminAttendanceAnalyticsConfig />
      <AdminAcademicPerformanceSummaryConfig />
    </div>
  );
}
