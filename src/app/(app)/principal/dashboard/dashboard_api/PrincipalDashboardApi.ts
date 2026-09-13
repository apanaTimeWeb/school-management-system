// RESPONSIBILITY: Provides API fetching wrappers for the Principal Dashboard, returning mock data until the backend is integrated.
import {
  PrincipalDashboardKPIs,
  AbsenteeRecord,
  FeeCollectionData,
  AcademicPerformanceData,
  UpcomingExam,
  UpcomingEvent,
  LeaveRequest,
  DisciplineAlert,
  ImportantNotice,
  RecentActivity
} from '../dashboard_types/PrincipalDashboard.types';

import {
  PRINCIPAL_DASHBOARD_MOCK_KPIS,
  PRINCIPAL_DASHBOARD_MOCK_ABSENTEES,
  PRINCIPAL_DASHBOARD_MOCK_FEE_COLLECTION,
  PRINCIPAL_DASHBOARD_MOCK_ACADEMICS,
  PRINCIPAL_DASHBOARD_MOCK_EXAMS,
  PRINCIPAL_DASHBOARD_MOCK_EVENTS,
  PRINCIPAL_DASHBOARD_MOCK_LEAVES,
  PRINCIPAL_DASHBOARD_MOCK_ALERTS,
  PRINCIPAL_DASHBOARD_MOCK_NOTICES,
  PRINCIPAL_DASHBOARD_MOCK_ACTIVITIES
} from '../dashboard_constants/PrincipalDashboardConstants';

const MOCK_DELAY = 800; // Simulate network latency

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchPrincipalDashboardKPIs = async (): Promise<PrincipalDashboardKPIs> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_DASHBOARD_MOCK_KPIS;
};

export const fetchPrincipalDashboardAbsentees = async (): Promise<AbsenteeRecord[]> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_DASHBOARD_MOCK_ABSENTEES;
};

export const fetchPrincipalDashboardFinancials = async (): Promise<FeeCollectionData[]> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_DASHBOARD_MOCK_FEE_COLLECTION;
};

export const fetchPrincipalDashboardAcademics = async (): Promise<AcademicPerformanceData[]> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_DASHBOARD_MOCK_ACADEMICS;
};

export const fetchPrincipalDashboardExams = async (): Promise<UpcomingExam[]> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_DASHBOARD_MOCK_EXAMS;
};

export const fetchPrincipalDashboardEvents = async (): Promise<UpcomingEvent[]> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_DASHBOARD_MOCK_EVENTS;
};

export const fetchPrincipalDashboardLeaves = async (): Promise<LeaveRequest[]> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_DASHBOARD_MOCK_LEAVES;
};

export const fetchPrincipalDashboardAlerts = async (): Promise<DisciplineAlert[]> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_DASHBOARD_MOCK_ALERTS;
};

export const fetchPrincipalDashboardNotices = async (): Promise<ImportantNotice[]> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_DASHBOARD_MOCK_NOTICES;
};

export const fetchPrincipalDashboardActivities = async (): Promise<RecentActivity[]> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_DASHBOARD_MOCK_ACTIVITIES;
};
