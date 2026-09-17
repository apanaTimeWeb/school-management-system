export interface TransportKPIs {
  totalVehicles: number;
  activeVehicles: number;
  inactiveVehicles: number;
  maintenanceVehicles: number;
  totalRoutes: number;
  activeRoutes: number;
  totalStops: number;
  assignedStudents: number;
}

export interface TransportTrip {
  id: string;
  routeName: string;
  vehicleNumber: string;
  driverName: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'DELAYED' | 'CANCELLED';
  startTime: string;
  endTime: string | null;
  totalStudents: number;
  presentStudents: number;
}

export interface TransportMaintenanceAlert {
  id: string;
  vehicleNumber: string;
  alertType: 'MAINTENANCE_DUE' | 'INSURANCE_EXPIRY' | 'PERMIT_EXPIRY' | 'EMISSION_EXPIRY';
  dueDate: string;
  severity: 'HIGH' | 'MEDIUM' | 'LOW';
  description: string;
}

export interface TransportDriverStatus {
  id: string;
  name: string;
  status: 'ON_DUTY' | 'OFF_DUTY' | 'ON_LEAVE' | 'ABSENT';
  vehicleNumber: string | null;
  phone: string;
}

export interface TransportFeeSummary {
  month: string;
  collected: number;
  pending: number;
  total: number;
}

export interface TransportEmergencyAlert {
  id: string;
  vehicleNumber: string;
  driverName: string;
  route: string;
  message: string;
  time: string;
  status: 'RESOLVED' | 'UNRESOLVED';
}

export interface TransportActivity {
  id: string;
  title: string;
  description: string;
  time: string;
  type: 'INFO' | 'SUCCESS' | 'WARNING' | 'DANGER';
}
