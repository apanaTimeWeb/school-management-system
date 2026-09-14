import { AccountantProfileDetails, LoginHistoryRecord, ActiveSessionRecord } from "../accountant_profile_types/AccountantProfileTypes";

export const MOCK_PROFILE: AccountantProfileDetails = {
  id: "ACC-01",
  name: "Rahul Sharma",
  email: "rahul.accountant@schoolerp.com",
  phone: "+91 98765 43210",
  role: "Senior Accountant",
  joiningDate: "2021-08-15",
  avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul"
};

export const MOCK_LOGIN_HISTORY: LoginHistoryRecord[] = [
  { id: "LOG-1", ip: "192.168.1.45", device: "Windows 11", location: "New Delhi, India", time: "2024-04-18 09:00:12", status: "Success" },
  { id: "LOG-2", ip: "192.168.1.45", device: "Windows 11", location: "New Delhi, India", time: "2024-04-17 08:55:00", status: "Success" },
  { id: "LOG-3", ip: "114.143.12.99", device: "iPhone 13", location: "Mumbai, India", time: "2024-04-16 22:15:30", status: "Failed" },
  { id: "LOG-4", ip: "192.168.1.45", device: "Windows 11", location: "New Delhi, India", time: "2024-04-16 09:10:05", status: "Success" }
];

export const MOCK_ACTIVE_SESSIONS: ActiveSessionRecord[] = [
  { id: "SESS-1", device: "Windows PC", browser: "Chrome 122.0", ip: "192.168.1.45", lastActive: "Just now", isCurrent: true },
  { id: "SESS-2", device: "MacBook Pro", browser: "Safari 17.1", ip: "10.0.0.5", lastActive: "2 hours ago", isCurrent: false },
  { id: "SESS-3", device: "iPhone 13", browser: "Safari iOS", ip: "114.143.12.99", lastActive: "3 days ago", isCurrent: false }
];
