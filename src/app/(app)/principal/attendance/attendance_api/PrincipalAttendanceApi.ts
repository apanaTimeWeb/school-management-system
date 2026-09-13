import {
  PrincipalAttendanceOverview,
  PrincipalStudentAttendanceClass,
  PrincipalStaffAttendanceRecord,
  PrincipalAttendanceCorrectionReq
} from '../attendance_types/PrincipalAttendance.types';

import {
  PRINCIPAL_MOCK_ATTENDANCE_OVERVIEW,
  PRINCIPAL_MOCK_STUDENT_ATTENDANCE,
  PRINCIPAL_MOCK_STAFF_ATTENDANCE,
  PRINCIPAL_MOCK_CORRECTION_REQS
} from '../attendance_constants/PrincipalAttendanceConstants';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const MOCK_DELAY = 600;

export const fetchPrincipalAttendanceOverview = async (): Promise<PrincipalAttendanceOverview> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_MOCK_ATTENDANCE_OVERVIEW;
};

export const fetchPrincipalStudentAttendance = async (): Promise<PrincipalStudentAttendanceClass[]> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_MOCK_STUDENT_ATTENDANCE;
};

export const fetchPrincipalStaffAttendance = async (): Promise<PrincipalStaffAttendanceRecord[]> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_MOCK_STAFF_ATTENDANCE;
};

export const fetchPrincipalCorrectionReqs = async (): Promise<PrincipalAttendanceCorrectionReq[]> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_MOCK_CORRECTION_REQS;
};
