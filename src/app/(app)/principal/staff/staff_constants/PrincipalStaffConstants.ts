import {
  PrincipalStaffDirectoryMember,
  PrincipalStaffProfile,
  PrincipalStaffPerformance
} from '../staff_types/PrincipalStaff.types';

export const PRINCIPAL_MOCK_STAFF_DIRECTORY: PrincipalStaffDirectoryMember[] = [
  { id: 'STF-001', name: 'Dr. Ramesh Sharma', employeeId: 'EMP-1021', department: 'Science', designation: 'HOD Science', status: 'Active', joiningDate: '2015-04-10', contact: '+91-9876543210' },
  { id: 'STF-002', name: 'Mrs. Anjali Gupta', employeeId: 'EMP-1045', department: 'Mathematics', designation: 'Senior Teacher', status: 'On Leave', joiningDate: '2018-07-01', contact: '+91-8765432109' },
  { id: 'STF-003', name: 'Mr. Vivek Singh', employeeId: 'EMP-1102', department: 'English', designation: 'Teacher', status: 'Active', joiningDate: '2020-05-15', contact: '+91-7654321098' },
  { id: 'STF-004', name: 'Ms. Pooja Patel', employeeId: 'EMP-1205', department: 'Social Studies', designation: 'Teacher', status: 'Active', joiningDate: '2022-08-20', contact: '+91-6543210987' },
];

export const PRINCIPAL_MOCK_STAFF_PROFILES: PrincipalStaffProfile[] = [
  { 
    id: 'STF-001', 
    name: 'Dr. Ramesh Sharma', 
    employeeId: 'EMP-1021', 
    department: 'Science', 
    designation: 'HOD Science', 
    qualifications: ['M.Sc. Physics', 'B.Ed.', 'Ph.D.'],
    experienceYears: 15,
    assignedSubjects: ['Physics (Class 11)', 'Physics (Class 12)', 'Science (Class 10)'],
    assignedClasses: ['12-A', '11-B', '10-A'],
    email: 'ramesh.s@schoolerp.com',
    contact: '+91-9876543210',
    address: '123, Science City Rd, Ahmedabad'
  },
  { 
    id: 'STF-002', 
    name: 'Mrs. Anjali Gupta', 
    employeeId: 'EMP-1045', 
    department: 'Mathematics', 
    designation: 'Senior Teacher', 
    qualifications: ['M.Sc. Mathematics', 'B.Ed.'],
    experienceYears: 10,
    assignedSubjects: ['Maths (Class 9)', 'Maths (Class 10)'],
    assignedClasses: ['10-C', '9-A'],
    email: 'anjali.g@schoolerp.com',
    contact: '+91-8765432109',
    address: '45, Mathuradas Colony, Delhi'
  }
];

export const PRINCIPAL_MOCK_STAFF_PERFORMANCE: PrincipalStaffPerformance[] = [
  {
    id: 'STF-001',
    name: 'Dr. Ramesh Sharma',
    employeeId: 'EMP-1021',
    designation: 'HOD Science',
    workload: { totalClassesPerWeek: 24, freePeriods: 6, substitutionCount: 2 },
    attendanceSummary: { totalWorkingDays: 120, daysPresent: 118, daysAbsent: 0, leavesTaken: 2 },
    performanceRating: 4.8,
    recentActivity: 'Submitted final practical marks for Class 12-A.'
  },
  {
    id: 'STF-002',
    name: 'Mrs. Anjali Gupta',
    employeeId: 'EMP-1045',
    designation: 'Senior Teacher',
    workload: { totalClassesPerWeek: 30, freePeriods: 2, substitutionCount: 5 },
    attendanceSummary: { totalWorkingDays: 120, daysPresent: 110, daysAbsent: 2, leavesTaken: 8 },
    performanceRating: 4.2,
    recentActivity: 'Requested sick leave for 2 days.'
  }
];
