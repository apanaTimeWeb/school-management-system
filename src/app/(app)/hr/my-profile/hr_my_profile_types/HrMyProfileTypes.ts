export interface UserProfileData {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  designation: string;
  department: string;
  bio: string;
  avatarUrl: string;
  is2FAEnabled: boolean;
}

export interface ActiveSession {
  id: string;
  deviceInfo: string;
  browser: string;
  ipAddress: string;
  location: string;
  lastActive: string;
  isCurrentSession: boolean;
}

export interface LoginHistory {
  id: string;
  timestamp: string;
  ipAddress: string;
  browser: string;
  status: 'Success' | 'Failed';
}

export interface ProfileResponse<T> {
  success: boolean;
  data: T;
}
