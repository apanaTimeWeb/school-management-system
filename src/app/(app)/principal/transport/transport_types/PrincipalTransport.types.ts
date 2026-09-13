export type PrincipalVehicleStatus = 'Active' | 'Maintenance' | 'Out of Service';

export interface PrincipalTransportRoute {
  id: string;
  routeName: string;
  vehicleNumber: string;
  driverName: string;
  driverContact: string;
  assistantName?: string;
  totalStudentsAllocated: number;
  capacity: number;
  status: PrincipalVehicleStatus;
  stops: string[];
}

export type PrincipalTransportAttendanceStatus = 'Present' | 'Absent' | 'On Leave';

export interface PrincipalTransportStudent {
  id: string;
  studentId: string;
  studentName: string;
  classAndSection: string;
  routeId: string;
  routeName: string;
  pickupStop: string;
  todayAttendance: PrincipalTransportAttendanceStatus;
}

export type PrincipalTransportComplaintStatus = 'Pending' | 'Resolved';

export interface PrincipalTransportComplaint {
  id: string;
  routeId: string;
  routeName: string;
  raisedBy: string; // Parent/Student Name
  date: string;
  category: 'Delay' | 'Driver Behavior' | 'Vehicle Condition' | 'Other';
  description: string;
  status: PrincipalTransportComplaintStatus;
  resolution?: string;
}
