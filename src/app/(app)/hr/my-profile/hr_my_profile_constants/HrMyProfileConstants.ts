import type { UserProfileData, ActiveSession, LoginHistory } from "../hr_my_profile_types/HrMyProfileTypes";

export const MOCK_USER_PROFILE: UserProfileData = {
  id: "USR-999",
  fullName: "Super Admin",
  email: "admin@school-erp-360.com",
  phone: "+91 9876543210",
  designation: "System Administrator",
  department: "Management",
  bio: "Managing the entire School ERP System operations and security.",
  avatarUrl: "",
  is2FAEnabled: false
};

export const MOCK_ACTIVE_SESSIONS: ActiveSession[] = [
  {
    id: "sess-1", deviceInfo: "Windows 11 PC", browser: "Chrome 120.0",
    ipAddress: "192.168.1.100", location: "Mumbai, India", lastActive: "Just now",
    isCurrentSession: true
  },
  {
    id: "sess-2", deviceInfo: "iPhone 15 Pro", browser: "Safari Mobile",
    ipAddress: "49.36.12.55", location: "Pune, India", lastActive: "2 hours ago",
    isCurrentSession: false
  },
  {
    id: "sess-3", deviceInfo: "MacBook Air", browser: "Safari",
    ipAddress: "115.112.5.40", location: "Delhi, India", lastActive: "3 days ago",
    isCurrentSession: false
  }
];

export const MOCK_LOGIN_HISTORY: LoginHistory[] = [
  { id: "log-1", timestamp: "2024-10-22 09:00 AM", ipAddress: "192.168.1.100", browser: "Chrome", status: "Success" },
  { id: "log-2", timestamp: "2024-10-21 08:45 AM", ipAddress: "192.168.1.100", browser: "Chrome", status: "Success" },
  { id: "log-3", timestamp: "2024-10-20 11:30 PM", ipAddress: "49.36.12.55", browser: "Safari Mobile", status: "Success" },
  { id: "log-4", timestamp: "2024-10-20 11:28 PM", ipAddress: "49.36.12.55", browser: "Safari Mobile", status: "Failed" },
  { id: "log-5", timestamp: "2024-10-18 10:15 AM", ipAddress: "115.112.5.40", browser: "Safari", status: "Success" },
];

