import { create } from 'zustand';
import { TEACHER_NOTIFICATIONS_MOCK } from '../notifications_constants/TeacherNotificationsMockData';

export type NotificationCategory = 'System' | 'Class' | 'Homework' | 'Assignment' | 'Exam' | 'Result' | 'Attendance';

export interface NotificationData {
  id: string;
  category: NotificationCategory;
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}

interface TeacherNotificationsState {
  notificationsList: NotificationData[];
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
}

export const useTeacherNotificationsStore = create<TeacherNotificationsState>((set) => ({
  notificationsList: TEACHER_NOTIFICATIONS_MOCK,
  markAsRead: (id) => set((state) => ({
    notificationsList: state.notificationsList.map(n => n.id === id ? { ...n, isRead: true } : n)
  })),
  markAllAsRead: () => set((state) => ({
    notificationsList: state.notificationsList.map(n => ({ ...n, isRead: true }))
  }))
}));
