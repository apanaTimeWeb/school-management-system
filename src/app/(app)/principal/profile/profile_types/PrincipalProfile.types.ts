export type PrincipalProfileTab = 'details' | 'security';

export interface PrincipalProfileDetails {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  joiningDate: string;
  qualification: string;
  address: string;
  avatarUrl?: string;
}

export interface PrincipalActiveSession {
  id: string;
  device: string;
  browser: string;
  ipAddress: string;
  location: string;
  lastActive: string;
  isCurrentDevice: boolean;
}

export interface PrincipalLoginHistory {
  id: string;
  date: string;
  time: string;
  device: string;
  ipAddress: string;
  status: 'Success' | 'Failed';
}

export interface PrincipalSecuritySettings {
  is2FAEnabled: boolean;
  lastPasswordChange: string;
  activeSessions: PrincipalActiveSession[];
  loginHistory: PrincipalLoginHistory[];
}
