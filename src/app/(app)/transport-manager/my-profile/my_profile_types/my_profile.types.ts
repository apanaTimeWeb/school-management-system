export interface UserProfile {
  id: string;
  employeeId: string;
  name: string;
  designation: string;
  email: string;
  phone: string;
  photoUrl: string;
  department: string;
  joiningDate: string;
}

export interface ActiveSession {
  id: string;
  deviceType: 'DESKTOP' | 'MOBILE' | 'TABLET';
  browser: string;
  os: string;
  ipAddress: string;
  location: string;
  lastActive: string;
  isCurrentSession: boolean;
}

export interface LoginHistory {
  id: string;
  timestamp: string;
  status: 'SUCCESS' | 'FAILED';
  ipAddress: string;
  device: string;
  location: string;
}
