import type { StudentNotificationsData } from '../student_notifications_types/student_notifications_types';

export const MOCK_NOTIFICATIONS_DATA: StudentNotificationsData = {
  notifications: [
    {
      id: "notif_1",
      category: "Fee",
      title: "Fee Reminder: Term 2",
      message: "Your Term 2 tuition fee is due in 3 days. Please complete the payment to avoid late fines.",
      timestamp: "10 mins ago",
      isRead: false,
      link: "/student/fees"
    },
    {
      id: "notif_2",
      category: "Homework",
      title: "New Mathematics Homework",
      message: "Mr. Sharma has assigned 'Algebra Chapter 4 Exercise'. Due tomorrow.",
      timestamp: "2 hours ago",
      isRead: false,
      link: "/student/homework"
    },
    {
      id: "notif_3",
      category: "Exam",
      title: "Mid-Term Date Sheet Published",
      message: "The date sheet for the upcoming mid-term examinations is now available.",
      timestamp: "Yesterday",
      isRead: true,
      link: "/student/examinations"
    },
    {
      id: "notif_4",
      category: "Result",
      title: "Science Quiz Results Declared",
      message: "Check your scores for the Unit 2 Science Quiz.",
      timestamp: "Oct 12, 2024",
      isRead: true,
      link: "/student/results"
    },
    {
      id: "notif_5",
      category: "Attendance",
      title: "Absent Yesterday",
      message: "You were marked absent yesterday. Please submit a leave request if not done already.",
      timestamp: "Oct 10, 2024",
      isRead: true,
      link: "/student/attendance"
    }
  ]
};
