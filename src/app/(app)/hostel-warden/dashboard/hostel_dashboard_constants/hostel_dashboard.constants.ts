import type { HostelStats, StudentStats, PendingActions, ActivityLog } from '../hostel_dashboard_types/hostel_dashboard.types';

export const MOCK_HOSTEL_STATS: HostelStats = {
  totalHostels: 4,
  totalRooms: 120,
  vacantRooms: 5,
  totalBeds: 480,
  occupiedBeds: 450,
  availableBeds: 30
};

export const MOCK_STUDENT_STATS: StudentStats = {
  totalStudents: 450,
  boys: 280,
  girls: 170,
  presentToday: 435,
  onLeave: 12,
  visitorsToday: 8
};

export const MOCK_PENDING_ACTIONS: PendingActions = {
  admissionRequests: 15,
  outingRequests: 24,
  leaveRequests: 7,
  complaints: 12,
  maintenanceIssues: 8
};

export const MOCK_RECENT_ACTIVITIES: ActivityLog[] = [
  {
    id: 'ACT-1',
    title: 'Emergency Medical Alert',
    description: 'Student Amit Kumar (Room 102) reported fever. Taken to infirmary.',
    timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    type: 'ERROR'
  },
  {
    id: 'ACT-2',
    title: 'Outing Approved',
    description: '14 Outing requests approved for weekend.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    type: 'SUCCESS'
  },
  {
    id: 'ACT-3',
    title: 'Maintenance Logged',
    description: 'Water leakage reported in Girls Hostel Block B, Floor 2.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    type: 'WARNING'
  },
  {
    id: 'ACT-4',
    title: 'Mess Menu Updated',
    description: 'Sunday special dinner menu updated by Mess Manager.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    type: 'INFO'
  }
];
