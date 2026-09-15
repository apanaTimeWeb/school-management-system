import type { StudentSecurityData } from '../student_security_types/student_security_types';

export const MOCK_SECURITY_DATA: StudentSecurityData = {
  is2FAEnabled: false,
  activeSessions: [
    {
      id: "sess_1",
      device: "Windows 11 PC",
      browser: "Chrome",
      ipAddress: "192.168.1.45",
      location: "New Delhi, India",
      lastActive: "Active Now",
      isCurrentDevice: true
    },
    {
      id: "sess_2",
      device: "iPhone 13 Pro",
      browser: "Safari",
      ipAddress: "117.234.90.12",
      location: "New Delhi, India",
      lastActive: "2 hours ago",
      isCurrentDevice: false
    }
  ],
  loginHistory: [
    {
      id: "log_1",
      timestamp: "Oct 15, 2024, 10:30 AM",
      device: "Windows 11 PC",
      browser: "Chrome",
      ipAddress: "192.168.1.45",
      location: "New Delhi, India",
      status: "Success"
    },
    {
      id: "log_2",
      timestamp: "Oct 14, 2024, 08:15 PM",
      device: "Unknown Device",
      browser: "Firefox",
      ipAddress: "104.28.10.12",
      location: "Mumbai, India",
      status: "Failed"
    },
    {
      id: "log_3",
      timestamp: "Oct 12, 2024, 02:00 PM",
      device: "iPhone 13 Pro",
      browser: "Safari",
      ipAddress: "117.234.90.12",
      location: "New Delhi, India",
      status: "Success"
    }
  ]
};
