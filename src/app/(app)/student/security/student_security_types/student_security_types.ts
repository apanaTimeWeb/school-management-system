export interface ActiveSession {
  id: string;
  device: string; // e.g. "iPhone 13 Pro"
  browser: string; // e.g. "Safari"
  ipAddress: string;
  location: string;
  lastActive: string;
  isCurrentDevice: boolean;
}

export interface LoginHistoryEntry {
  id: string;
  timestamp: string;
  device: string;
  browser: string;
  ipAddress: string;
  location: string;
  status: 'Success' | 'Failed';
}

export interface StudentSecurityData {
  is2FAEnabled: boolean;
  activeSessions: ActiveSession[];
  loginHistory: LoginHistoryEntry[];
}
