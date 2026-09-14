export interface HrAlert {
  id: string;
  type: 'warning' | 'danger' | 'info';
  message: string;
}

export interface PendingItem {
  id: string;
  staffName: string;
  description: string;
  date: string;
  status: 'pending' | 'expiring';
}

export interface UpcomingEvent {
  id: string;
  staffName: string;
  eventType: 'birthday' | 'anniversary';
  date: string;
  years?: number;
}

export interface HrDashboardStats {
  totalEmployees: number;
  activeStaff: number;
  teachers: number;
  nonTeachingStaff: number;
  attendanceTodayPercent: number;
  absentStaff: number;
  onLeave: number;
  newJoinings: number;
  alerts: HrAlert[];
  pendingDocuments: PendingItem[];
  expiringDocuments: PendingItem[];
  pendingLeaveRequests: PendingItem[];
  upcomingBirthdays: UpcomingEvent[];
  upcomingAnniversaries: UpcomingEvent[];
}

export interface HrDashboardApiResponse {
  success: boolean;
  message: string;
  data: HrDashboardStats | null;
}
