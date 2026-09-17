import type { UserProfile, ActiveSession, LoginHistory } from '../my_profile_types/my_profile.types';

export const MOCK_USER_PROFILE: UserProfile = {
  id: 'USR-899',
  employeeId: 'EMP-2015-45',
  name: 'Rajesh Verma',
  designation: 'Transport Manager',
  email: 'rajesh.verma@schoolerp.com',
  phone: '+91 98765 43210',
  photoUrl: '', // Fallback to initial
  department: 'Administration - Transport',
  joiningDate: '2015-06-12'
};

export const MOCK_ACTIVE_SESSIONS: ActiveSession[] = [
  {
    id: 'SESS-001',
    deviceType: 'DESKTOP',
    browser: 'Chrome 118',
    os: 'Windows 11',
    ipAddress: '192.168.1.105',
    location: 'Mumbai, India',
    lastActive: new Date().toISOString(),
    isCurrentSession: true
  },
  {
    id: 'SESS-002',
    deviceType: 'MOBILE',
    browser: 'Safari Mobile',
    os: 'iOS 17.1',
    ipAddress: '114.143.120.45',
    location: 'Mumbai, India',
    lastActive: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
    isCurrentSession: false
  }
];

export const MOCK_LOGIN_HISTORY: LoginHistory[] = [
  {
    id: 'LOG-1001',
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    status: 'SUCCESS',
    ipAddress: '192.168.1.105',
    device: 'Chrome on Windows 11',
    location: 'Mumbai, India'
  },
  {
    id: 'LOG-1002',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    status: 'SUCCESS',
    ipAddress: '114.143.120.45',
    device: 'Safari on iPhone',
    location: 'Mumbai, India'
  },
  {
    id: 'LOG-1003',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    status: 'FAILED',
    ipAddress: '45.22.100.99',
    device: 'Firefox on Linux',
    location: 'Unknown IP (Suspicious)'
  }
];
