export type ProfileTab = 'Profile' | 'Security' | 'History';

export interface AccountantProfileDetails {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  joiningDate: string;
  avatarUrl: string;
}

export interface LoginHistoryRecord {
  id: string;
  ip: string;
  device: string;
  location: string;
  time: string;
  status: 'Success' | 'Failed';
}

export interface ActiveSessionRecord {
  id: string;
  device: string;
  browser: string;
  ip: string;
  lastActive: string;
  isCurrent: boolean;
}
