import { SubstituteData } from '../substitutes_store/useTeacherSubstitutesStore';

export const TEACHER_SUBSTITUTES_MOCK: SubstituteData[] = [
  {
    id: 'SUB-001',
    originalTeacher: 'Mr. Rajesh Kumar',
    class: 'Class 8 A',
    subject: 'Science',
    date: '2023-11-25',
    period: '2nd Period (09:45 AM - 10:30 AM)',
    instructions: 'Please conduct a revision on Chapter 4 (Metals & Non-metals). The revision notes are on my desk.',
    status: 'Pending Acknowledgment',
    assignedBy: 'Admin Office',
    roomNo: 'Room 204'
  },
  {
    id: 'SUB-002',
    originalTeacher: 'Mrs. Anjali Sharma',
    class: 'Class 9 B',
    subject: 'English',
    date: '2023-11-26',
    period: '4th Period (11:15 AM - 12:00 PM)',
    instructions: 'Students are supposed to write an essay on Climate Change. Just invigilate.',
    status: 'Accepted',
    assignedBy: 'Principal',
    roomNo: 'Room 112'
  },
  {
    id: 'SUB-003',
    originalTeacher: 'Mr. Sunil Verma',
    class: 'Class 10 C',
    subject: 'Mathematics',
    date: '2023-11-10',
    period: '1st Period (09:00 AM - 09:45 AM)',
    instructions: 'Let them solve the exercises from page 142.',
    status: 'Completed',
    assignedBy: 'Admin Office',
    roomNo: 'Room 305'
  },
  {
    id: 'SUB-004',
    originalTeacher: 'Miss Priyanka',
    class: 'Class 7 A',
    subject: 'Social Studies',
    date: '2023-11-05',
    period: '6th Period (01:00 PM - 01:45 PM)',
    instructions: 'Free period / Library time.',
    status: 'Completed',
    assignedBy: 'Admin Office',
    roomNo: 'Library'
  }
];
