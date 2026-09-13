import { PrincipalProfileDetails, PrincipalSecuritySettings } from '../profile_types/PrincipalProfile.types';

export const PRINCIPAL_MOCK_PROFILE: PrincipalProfileDetails = {
  id: 'PRN-001',
  name: 'Dr. Anand Sharma',
  email: 'principal@schoolerp.com',
  phone: '+91 98765 43210',
  role: 'Principal / Administrator',
  joiningDate: '15th April 2018',
  qualification: 'Ph.D. in Education, M.Sc. Physics',
  address: 'A-102, Green Valley Apartments, New Delhi',
};

export const PRINCIPAL_MOCK_SECURITY: PrincipalSecuritySettings = {
  is2FAEnabled: true,
  lastPasswordChange: '2023-09-15',
  activeSessions: [
    { id: 'sess-1', device: 'MacBook Pro', browser: 'Chrome', ipAddress: '192.168.1.45', location: 'New Delhi, India', lastActive: 'Just now', isCurrentDevice: true },
    { id: 'sess-2', device: 'iPhone 13', browser: 'Safari', ipAddress: '103.11.12.3', location: 'New Delhi, India', lastActive: '2 hours ago', isCurrentDevice: false },
    { id: 'sess-3', device: 'Windows Desktop', browser: 'Edge', ipAddress: '45.112.5.66', location: 'Mumbai, India', lastActive: '3 days ago', isCurrentDevice: false },
  ],
  loginHistory: [
    { id: 'log-1', date: '2023-11-20', time: '08:15 AM', device: 'MacBook Pro', ipAddress: '192.168.1.45', status: 'Success' },
    { id: 'log-2', date: '2023-11-19', time: '06:30 PM', device: 'iPhone 13', ipAddress: '103.11.12.3', status: 'Success' },
    { id: 'log-3', date: '2023-11-18', time: '11:45 PM', device: 'Unknown Device', ipAddress: '185.12.34.55', status: 'Failed' },
    { id: 'log-4', date: '2023-11-18', time: '08:10 AM', device: 'MacBook Pro', ipAddress: '192.168.1.45', status: 'Success' },
  ]
};
