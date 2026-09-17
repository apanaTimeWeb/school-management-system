export type BedStatus = 'Available' | 'Occupied' | 'Maintenance' | 'Blocked';
export type BedCondition = 'Good' | 'Needs Repair' | 'Damaged';

export interface Bed {
  id: string;
  bedNumber: string;
  roomId: string;
  roomNumber: string;
  building: string;
  studentId?: string;
  studentName?: string;
  bedStatus: BedStatus;
  assignmentDate?: string;
  vacatedDate?: string;
  bedCondition: BedCondition;
}

// Helper structure to group beds by room
export interface RoomBedGroup {
  roomId: string;
  roomNumber: string;
  building: string;
  beds: Bed[];
}
