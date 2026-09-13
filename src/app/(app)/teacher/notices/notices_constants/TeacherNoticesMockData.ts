import { NoticeData } from '../notices_store/useTeacherNoticesStore';

export const TEACHER_NOTICES_MOCK: NoticeData[] = [
  {
    id: 'NOT-001',
    type: 'Class Notice',
    title: 'Change in Timetable',
    description: 'The Math period has been shifted from 2nd period to 4th period starting tomorrow.',
    targetClass: 'Class 10 A',
    dateSent: '2023-11-20',
    hasAttachment: false,
    status: 'Sent'
  },
  {
    id: 'NOT-002',
    type: 'Homework Reminder',
    title: 'Science Project Submission',
    description: 'Reminder to submit your Science models by Friday without fail.',
    targetClass: 'Class 9 B',
    dateSent: '2023-11-19',
    hasAttachment: true,
    status: 'Sent'
  },
  {
    id: 'NOT-003',
    type: 'Exam Reminder',
    title: 'Physics Unit Test Tomorrow',
    description: 'Syllabus: Thermodynamics. Bring your own geometry box and calculators.',
    targetClass: 'Class 11 Sci',
    dateSent: '2023-11-18',
    hasAttachment: false,
    status: 'Sent'
  },
  {
    id: 'NOT-004',
    type: 'Important Update',
    title: 'Winter Vacation Declaration',
    description: 'The school will remain closed from Dec 25 to Jan 5. Enjoy your holidays and study well.',
    targetClass: 'All Assigned Classes',
    dateSent: '2023-11-15',
    hasAttachment: true,
    status: 'Sent'
  },
  {
    id: 'NOT-005',
    type: 'Assignment Reminder',
    title: 'Math Worksheet Pending',
    description: 'Please submit the pending Math worksheet 4. It will be graded.',
    targetClass: 'Class 10 A',
    dateSent: '2023-11-21',
    hasAttachment: false,
    status: 'Draft'
  }
];
