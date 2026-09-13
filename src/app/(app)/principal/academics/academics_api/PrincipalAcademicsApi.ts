import { 
  PrincipalAcademicClass, 
  PrincipalAcademicSubject, 
  PrincipalSyllabusProgress, 
  PrincipalAcademicCalendarEvent 
} from '../academics_types/PrincipalAcademics.types';
import { 
  PRINCIPAL_MOCK_CLASSES, 
  PRINCIPAL_MOCK_SUBJECTS, 
  PRINCIPAL_MOCK_PROGRESS, 
  PRINCIPAL_MOCK_CALENDAR 
} from '../academics_constants/PrincipalAcademicsConstants';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const MOCK_DELAY = 500;

export const fetchPrincipalClasses = async (): Promise<PrincipalAcademicClass[]> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_MOCK_CLASSES;
};

export const fetchPrincipalSubjects = async (): Promise<PrincipalAcademicSubject[]> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_MOCK_SUBJECTS;
};

export const fetchPrincipalSyllabusProgress = async (): Promise<PrincipalSyllabusProgress[]> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_MOCK_PROGRESS;
};

export const fetchPrincipalCalendar = async (): Promise<PrincipalAcademicCalendarEvent[]> => {
  await delay(MOCK_DELAY);
  return PRINCIPAL_MOCK_CALENDAR;
};
