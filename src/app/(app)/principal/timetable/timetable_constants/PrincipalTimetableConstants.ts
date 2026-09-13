import {
  PrincipalClassTimetable,
  PrincipalTeacherTimetable,
  PrincipalTimetableConflict,
  PrincipalTimetableDraft
} from '../timetable_types/PrincipalTimetable.types';

const defaultPeriods = [
  { id: 'P1', periodNumber: 1, startTime: '08:00 AM', endTime: '08:45 AM', subject: 'Math', teacher: 'Mr. Arvind', room: '101' },
  { id: 'P2', periodNumber: 2, startTime: '08:45 AM', endTime: '09:30 AM', subject: 'Science', teacher: 'Dr. Sharma', room: '101' },
  { id: 'B1', periodNumber: 3, startTime: '09:30 AM', endTime: '09:45 AM', subject: 'Break', teacher: '-', room: '-', isBreak: true },
  { id: 'P3', periodNumber: 4, startTime: '09:45 AM', endTime: '10:30 AM', subject: 'English', teacher: 'Ms. Anita', room: '101' },
  { id: 'P4', periodNumber: 5, startTime: '10:30 AM', endTime: '11:15 AM', subject: 'History', teacher: 'Mr. John', room: '101' },
];

export const PRINCIPAL_MOCK_CLASS_TIMETABLE: PrincipalClassTimetable[] = [
  {
    id: 'CT-10A',
    className: 'Class 10',
    section: 'A',
    schedule: {
      "Monday": defaultPeriods,
      "Tuesday": defaultPeriods,
      "Wednesday": defaultPeriods,
      "Thursday": defaultPeriods,
      "Friday": defaultPeriods,
    }
  },
  {
    id: 'CT-10B',
    className: 'Class 10',
    section: 'B',
    schedule: {
      "Monday": defaultPeriods.map(p => ({ ...p, room: '102' })),
      "Tuesday": defaultPeriods.map(p => ({ ...p, room: '102' })),
    }
  }
];

export const PRINCIPAL_MOCK_TEACHER_TIMETABLE: PrincipalTeacherTimetable[] = [
  {
    id: 'T-ARV',
    teacherName: 'Mr. Arvind Kumar',
    department: 'Mathematics',
    schedule: {
      "Monday": [
        { id: 'P1', periodNumber: 1, startTime: '08:00 AM', endTime: '08:45 AM', subject: 'Math', teacher: 'Mr. Arvind', room: '101' },
        { id: 'P3', periodNumber: 4, startTime: '09:45 AM', endTime: '10:30 AM', subject: 'Math', teacher: 'Mr. Arvind', room: '102' }
      ]
    }
  }
];

export const PRINCIPAL_MOCK_CONFLICTS: PrincipalTimetableConflict[] = [
  { id: 'CF-1', type: 'Double Booking', description: 'Mr. Arvind Kumar is assigned to Class 10-A and 9-B at 08:00 AM on Monday.', teacherName: 'Mr. Arvind Kumar', severity: 'high' },
  { id: 'CF-2', type: 'Room Unavailable', description: 'Room 201 is double booked for Science and Art at 10:30 AM on Tuesday.', room: '201', severity: 'high' },
  { id: 'CF-3', type: 'Overload', description: 'Ms. Sunita Rao has 6 continuous periods without a break on Wednesday.', teacherName: 'Ms. Sunita Rao', severity: 'medium' }
];

export const PRINCIPAL_MOCK_DRAFTS: PrincipalTimetableDraft[] = [
  { id: 'DR-1', title: 'Term 2 Final Timetable', term: 'Term 2 (2024)', status: 'Pending Approval', createdAt: '2024-10-10', submittedBy: 'Admin Staff', conflictsCount: 3 },
  { id: 'DR-2', title: 'Term 1 Timetable', term: 'Term 1 (2024)', status: 'Published', createdAt: '2024-04-01', submittedBy: 'Admin Staff', conflictsCount: 0 }
];
