export type AllocationStatus = 'ACTIVE' | 'VACATED' | 'SUSPENDED';

export interface AllocationHistory {
  date: string;
  action: string;
  details: string;
}

export interface StudentAllocation {
  id: string;
  studentId: string;
  studentName: string;
  class: string;
  hostelName: string;
  building: string;
  floor: string;
  roomNumber: string;
  bedNumber: string;
  joiningDate: string;
  allocationDate: string;
  expectedExitDate?: string;
  guardianName: string;
  guardianContact: string;
  status: AllocationStatus;
  history: AllocationHistory[];
}
