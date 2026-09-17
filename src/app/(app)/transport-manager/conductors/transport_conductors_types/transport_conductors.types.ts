export type TransportConductorStatus = 'ACTIVE' | 'ON_LEAVE' | 'SUSPENDED' | 'INACTIVE';
export type TransportShift = 'MORNING' | 'EVENING' | 'SPLIT' | 'NIGHT';
export type TransportAttendanceStatus = 'PRESENT' | 'ABSENT' | 'HALF_DAY' | 'LATE';

export interface TransportConductor {
  id: string;
  employeeId: string;
  name: string;
  contact: string;
  emergencyContact: string;
  shift: TransportShift;
  status: TransportConductorStatus;
  assignedVehicleId: string | null;
  assignedVehicleNumber: string | null;
  assignedRouteId: string | null;
  assignedRouteName: string | null;
  documentsComplete: boolean;
  todaysAttendance: TransportAttendanceStatus | null;
  avatarUrl: string | null;
}

export interface TransportConductorFormData {
  employeeId: string;
  name: string;
  contact: string;
  emergencyContact: string;
  shift: TransportShift;
  status: TransportConductorStatus;
  assignedVehicleId: string;
}
