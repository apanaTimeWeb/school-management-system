export type EmployeeRoleType = 'Teacher' | 'Staff' | 'Admin';

export interface IdCardEmployeeRecord {
  id: string;
  employeeId: string;
  employeeName: string;
  designation: string;
  department: string;
  role: EmployeeRoleType;
  
  photoUrl?: string;
  bloodGroup: string;
  emergencyContact: string;
  dateOfJoining: string;
  
  idCardPrinted: boolean;
}

export interface FetchIdCardParams {
  role?: string;
  search?: string;
}

export interface IdCardResponse<T> {
  success: boolean;
  data: T;
}
