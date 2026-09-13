import {
  PrincipalClassTimetable,
  PrincipalTeacherTimetable,
  PrincipalTimetableConflict,
  PrincipalTimetableDraft
} from '../timetable_types/PrincipalTimetable.types';

import {
  PRINCIPAL_MOCK_CLASS_TIMETABLE,
  PRINCIPAL_MOCK_TEACHER_TIMETABLE,
  PRINCIPAL_MOCK_CONFLICTS,
  PRINCIPAL_MOCK_DRAFTS
} from '../timetable_constants/PrincipalTimetableConstants';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const MOCK_DELAY = 600;

export const fetchPrincipalClassTimetable = async (): Promise<PrincipalClassTimetable[]> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_MOCK_CLASS_TIMETABLE;
};

export const fetchPrincipalTeacherTimetable = async (): Promise<PrincipalTeacherTimetable[]> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_MOCK_TEACHER_TIMETABLE;
};

export const fetchPrincipalTimetableConflicts = async (): Promise<PrincipalTimetableConflict[]> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_MOCK_CONFLICTS;
};

export const fetchPrincipalTimetableDrafts = async (): Promise<PrincipalTimetableDraft[]> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_MOCK_DRAFTS;
};
