export type AttendanceStatus = 'PRESENT' | 'ABSENT' | 'MISSED_BUS' | 'NOT_BOARDED';

export interface TransportAttendance {
  id: string;
  tripId: string;
  date: string;
  
  studentId: string;
  studentName: string;
  classSection: string;
  
  routeId: string;
  routeName: string;
  stopName: string;
  
  status: AttendanceStatus;
  
  // Timing
  boardTime: string | null;
  dropTime: string | null;
  
  // Handover
  authorizedPickupBy: string | null; // e.g. Mother, Father, Uncle
  remarks: string | null;
  
  notificationSent: boolean;
}

export interface TransportAttendanceFormData {
  tripId: string;
  studentId: string;
  studentName: string;
  status: AttendanceStatus;
  boardTime: string;
  dropTime: string;
  authorizedPickupBy: string;
  remarks: string;
}
