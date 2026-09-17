export interface HostelStats {
  totalHostels: number;
  totalRooms: number;
  vacantRooms: number;
  totalBeds: number;
  occupiedBeds: number;
  availableBeds: number;
}

export interface StudentStats {
  totalStudents: number;
  boys: number;
  girls: number;
  presentToday: number;
  onLeave: number;
  visitorsToday: number;
}

export interface PendingActions {
  admissionRequests: number;
  outingRequests: number;
  leaveRequests: number;
  complaints: number;
  maintenanceIssues: number;
}

export interface ActivityLog {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: 'INFO' | 'WARNING' | 'SUCCESS' | 'ERROR';
}
