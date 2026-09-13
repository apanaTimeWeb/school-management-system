import { PrincipalIncidentRecord, PrincipalCounsellingRecord } from '../discipline_types/PrincipalDiscipline.types';

export const PRINCIPAL_MOCK_INCIDENTS: PrincipalIncidentRecord[] = [
  {
    id: 'INC-101',
    offenderName: 'Rahul Verma',
    offenderId: 'STU-4521',
    offenderType: 'Student',
    departmentOrClass: '9-B',
    incidentType: 'Misbehavior',
    severity: 'Medium',
    dateReported: '2023-11-15',
    reportedBy: 'Mr. Vivek Singh',
    description: 'Disrupting the class and arguing with the teacher during the math period.',
    status: 'Action Taken',
    actionTaken: 'First Warning issued and parents informed.'
  },
  {
    id: 'INC-102',
    offenderName: 'Sneha Patel',
    offenderId: 'STU-3329',
    offenderType: 'Student',
    departmentOrClass: '11-A',
    incidentType: 'Academic Dishonesty',
    severity: 'High',
    dateReported: '2023-11-12',
    reportedBy: 'Mrs. Anjali Gupta',
    description: 'Found copying from a hidden cheat sheet during the Physics unit test.',
    status: 'Open'
  },
  {
    id: 'INC-103',
    offenderName: 'Ramesh Kumar',
    offenderId: 'STF-022',
    offenderType: 'Staff',
    departmentOrClass: 'Transport',
    incidentType: 'Rule Violation',
    severity: 'High',
    dateReported: '2023-11-10',
    reportedBy: 'Transport Manager',
    description: 'Over-speeding the school bus near the residential zone.',
    status: 'Under Investigation'
  }
];

export const PRINCIPAL_MOCK_COUNSELLING: PrincipalCounsellingRecord[] = [
  {
    id: 'CNS-001',
    subjectName: 'Rahul Verma',
    subjectId: 'STU-4521',
    type: 'Student',
    counsellor: 'Dr. Neha Sharma (School Counsellor)',
    sessionDate: '2023-11-16',
    issue: 'Anger management and class disruption.',
    parentMeetingRequired: true,
    parentMeetingStatus: 'Scheduled',
    followUpDate: '2023-11-23',
    notes: 'Student agreed to apologize. Parent meeting scheduled for next week.'
  },
  {
    id: 'CNS-002',
    subjectName: 'Arjun Das',
    subjectId: 'STU-1123',
    type: 'Student',
    counsellor: 'Mr. Vivek Singh (Class Teacher)',
    sessionDate: '2023-11-10',
    issue: 'Continuous drop in grades and lack of focus.',
    parentMeetingRequired: false,
    parentMeetingStatus: 'Not Required',
    followUpDate: '2023-11-30',
    notes: 'Student needs extra mentoring in Science and Maths.'
  }
];
