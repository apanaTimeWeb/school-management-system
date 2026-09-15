import type { StudentCommunicationData } from '../student_communication_types/student_communication_types';

export const MOCK_COMMUNICATION_DATA: StudentCommunicationData = {
  messages: [
    {
      id: "msg_1",
      category: "Important Update",
      title: "School Closure due to Heavy Rain",
      senderName: "Dr. A. Sharma",
      senderRole: "Principal",
      date: "Today",
      time: "06:30 AM",
      content: "Dear Students and Parents, due to continuous heavy rainfall and waterlogging in several areas, the school will remain closed today. Please stay indoors and stay safe. Online classes will resume tomorrow if the situation improves.",
      isUrgent: true,
      isRead: false
    },
    {
      id: "msg_2",
      category: "Exam Notification",
      title: "Mid-Term Examination Schedule Published",
      senderName: "Examination Cell",
      senderRole: "Admin",
      date: "Yesterday",
      time: "02:15 PM",
      content: "The detailed schedule for the upcoming Mid-Term Examinations (2024-25) is now available in the Examinations section. Please note that admit cards will be distributed next Monday.",
      isUrgent: false,
      isRead: false,
      hasAttachment: true
    },
    {
      id: "msg_3",
      category: "Class Notice",
      title: "Change in Section B Timetable",
      senderName: "Mr. R.K. Singh",
      senderRole: "Class Teacher",
      date: "Aug 12, 2024",
      time: "09:00 AM",
      content: "Please note that the Mathematics period has been shifted from the 1st period to the 3rd period on Wednesdays. Ensure you bring your geometry boxes accordingly.",
      isUrgent: false,
      isRead: true
    },
    {
      id: "msg_4",
      category: "Event Notification",
      title: "Annual Sports Day Registrations",
      senderName: "Sports Department",
      senderRole: "Admin",
      date: "Aug 10, 2024",
      time: "11:00 AM",
      content: "Registrations for the Annual Sports Day are now open. Interested students can register their names with their respective house captains by Friday.",
      isUrgent: false,
      isRead: true
    },
    {
      id: "msg_5",
      category: "Homework Notification",
      title: "Science Project Deadline Approaching",
      senderName: "Mrs. N. Patel",
      senderRole: "Subject Teacher",
      date: "Aug 08, 2024",
      time: "04:00 PM",
      content: "Reminder: The final submission for the Physics working model project is due this Thursday. Late submissions will result in a 10% grade deduction.",
      isUrgent: true,
      isRead: true
    }
  ]
};
