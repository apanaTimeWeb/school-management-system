import { NotificationData } from '../notifications_store/useTeacherNotificationsStore';

export const TEACHER_NOTIFICATIONS_MOCK: NotificationData[] = [
  {
    id: 'NOTIF-001',
    category: 'System',
    title: 'Server Maintenance Scheduled',
    message: 'The ERP system will be down for maintenance on Saturday from 12:00 AM to 02:00 AM.',
    timestamp: '10 mins ago',
    isRead: false
  },
  {
    id: 'NOTIF-002',
    category: 'Attendance',
    title: 'Low Attendance Alert',
    message: 'Aarav Sharma (Class 10 A) has fallen below the 75% attendance criteria.',
    timestamp: '2 hours ago',
    isRead: false
  },
  {
    id: 'NOTIF-003',
    category: 'Homework',
    title: 'Homework Pending Submissions',
    message: '12 students have not submitted the Science Homework assigned on Monday.',
    timestamp: 'Yesterday',
    isRead: true
  },
  {
    id: 'NOTIF-004',
    category: 'Exam',
    title: 'Exam Duty Assigned',
    message: 'You have been assigned invigilation duty for the Mid-Term Math exam on 25th Nov in Room 102.',
    timestamp: '2 days ago',
    isRead: true
  },
  {
    id: 'NOTIF-005',
    category: 'Result',
    title: 'Marks Approval Pending',
    message: 'The draft marks for Class 11 Sci (Physics) are pending your final submission.',
    timestamp: '3 days ago',
    isRead: true
  },
  {
    id: 'NOTIF-006',
    category: 'Class',
    title: 'Timetable Change',
    message: 'Your 3rd period for Class 9 B has been shifted to the 5th period for today.',
    timestamp: '3 days ago',
    isRead: true
  },
  {
    id: 'NOTIF-007',
    category: 'Assignment',
    title: 'New Submissions Received',
    message: 'You have 5 new assignment submissions for "English Essay" ready for review.',
    timestamp: '4 days ago',
    isRead: true
  }
];
