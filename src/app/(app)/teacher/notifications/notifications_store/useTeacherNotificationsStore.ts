import { create } from 'zustand';

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
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
}

export const useTeacherNotificationsStore = create<TeacherNotificationsState>((set) => ({
  markAsRead: (id) => {
    // Intentionally left as stub for mock logic
    window.dispatchEvent(new CustomEvent('open-teacher-coming-soon', { detail: 'Notification marked as read.' }));
  },
  markAllAsRead: () => {
    // Intentionally left as stub for mock logic
    window.dispatchEvent(new CustomEvent('open-teacher-coming-soon', { detail: 'All notifications marked as read.' }));
  }
}));
