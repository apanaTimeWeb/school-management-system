import { PrincipalStudent, PrincipalStudentProfileData } from '../students_types/PrincipalStudents.types';

export const PRINCIPAL_STUDENTS_MOCK_LIST: PrincipalStudent[] = [
  {
    id: 'STU-001',
    admissionNo: 'ADM-2021-001',
    rollNo: '101',
    firstName: 'Aarav',
    lastName: 'Sharma',
    class: '10',
    section: 'A',
    gender: 'Male',
    dob: '2007-05-14',
    status: 'Active',
    bloodGroup: 'O+',
    contactNo: '9876543210',
    email: 'aarav.sharma@example.com',
    address: '123, Rose Villa, MG Road, Mumbai',
    joiningDate: '2021-04-01'
  },
  {
    id: 'STU-002',
    admissionNo: 'ADM-2021-045',
    rollNo: '102',
    firstName: 'Riya',
    lastName: 'Gupta',
    class: '10',
    section: 'A',
    gender: 'Female',
    dob: '2007-08-22',
    status: 'Active',
    bloodGroup: 'A+',
    contactNo: '9876543211',
    email: 'riya.g@example.com',
    address: '45, Palm Groves, Andheri East, Mumbai',
    joiningDate: '2021-04-01'
  },
  {
    id: 'STU-003',
    admissionNo: 'ADM-2022-112',
    rollNo: '205',
    firstName: 'Vikram',
    lastName: 'Singh',
    class: '11',
    section: 'B',
    gender: 'Male',
    dob: '2006-11-10',
    status: 'Suspended',
    bloodGroup: 'B+',
    contactNo: '9876543212',
    email: 'vikram.s@example.com',
    address: 'Sector 4, Vashi, Navi Mumbai',
    joiningDate: '2022-04-05'
  },
  {
    id: 'STU-004',
    admissionNo: 'ADM-2020-008',
    rollNo: '301',
    firstName: 'Sneha',
    lastName: 'Patel',
    class: '12',
    section: 'C',
    gender: 'Female',
    dob: '2005-02-18',
    status: 'Transferred',
    bloodGroup: 'AB+',
    contactNo: '9876543213',
    email: 'sneha.p@example.com',
    address: 'Ghatkopar West, Mumbai',
    joiningDate: '2020-04-10'
  }
];

export const PRINCIPAL_STUDENT_MOCK_PROFILE: PrincipalStudentProfileData = {
  profile: PRINCIPAL_STUDENTS_MOCK_LIST[0],
  guardian: {
    id: 'G-001',
    studentId: 'STU-001',
    fatherName: 'Rajesh Sharma',
    fatherContact: '9876543210',
    fatherOccupation: 'Software Engineer',
    motherName: 'Anita Sharma',
    motherContact: '9876543219',
    motherOccupation: 'Teacher'
  },
  academics: [
    { id: 'AC-1', studentId: 'STU-001', academicYear: '2023-24', term: 'Term 1', subject: 'Mathematics', score: 85, maxScore: 100, grade: 'A', remarks: 'Excellent' },
    { id: 'AC-2', studentId: 'STU-001', academicYear: '2023-24', term: 'Term 1', subject: 'Science', score: 78, maxScore: 100, grade: 'B+', remarks: 'Good' },
    { id: 'AC-3', studentId: 'STU-001', academicYear: '2023-24', term: 'Term 1', subject: 'English', score: 92, maxScore: 100, grade: 'A+', remarks: 'Outstanding' },
  ],
  attendance: [
    { id: 'AT-1', studentId: 'STU-001', month: 'August 2023', totalDays: 22, presentDays: 20, absentDays: 2, lateDays: 1, percentage: 90.9 },
    { id: 'AT-2', studentId: 'STU-001', month: 'September 2023', totalDays: 21, presentDays: 21, absentDays: 0, lateDays: 0, percentage: 100 },
  ],
  discipline: [
    { id: 'D-1', studentId: 'STU-001', date: '2023-07-15', incidentType: 'Late Arrival', description: 'Arrived 30 mins late without prior notice.', actionTaken: 'Warning issued', severity: 'low', reportedBy: 'Class Teacher' },
  ],
  documents: [
    { id: 'DOC-1', studentId: 'STU-001', documentName: 'Birth_Certificate.pdf', documentType: 'Birth Certificate', uploadDate: '2021-04-02', status: 'Verified', fileUrl: '#' },
    { id: 'DOC-2', studentId: 'STU-001', documentName: 'Aadhar_Card.pdf', documentType: 'Aadhar Card', uploadDate: '2021-04-02', status: 'Verified', fileUrl: '#' },
  ],
  lifecycle: {
    id: 'LC-1',
    studentId: 'STU-001',
    transferStatus: 'Not Requested',
    promotionStatus: 'Eligible',
    withdrawalStatus: 'Active',
    remarks: 'Consistent performer, eligible for promotion to Class 11.'
  }
};
