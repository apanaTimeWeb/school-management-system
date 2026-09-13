export interface PrincipalStaffDirectoryMember {
  id: string;
  name: string;
  employeeId: string;
  department: string;
  designation: string;
  status: 'Active' | 'On Leave' | 'Inactive';
  joiningDate: string;
  contact: string;
}

export interface PrincipalStaffProfile {
  id: string;
  name: string;
  employeeId: string;
  department: string;
  designation: string;
  qualifications: string[];
  experienceYears: number;
  assignedSubjects: string[];
  assignedClasses: string[];
  email: string;
  contact: string;
  address: string;
}

export interface PrincipalStaffPerformance {
  id: string;
  name: string;
  employeeId: string;
  designation: string;
  workload: {
    totalClassesPerWeek: number;
    freePeriods: number;
    substitutionCount: number;
  };
  attendanceSummary: {
    totalWorkingDays: number;
    daysPresent: number;
    daysAbsent: number;
    leavesTaken: number;
  };
  performanceRating: number;
  recentActivity: string;
}
