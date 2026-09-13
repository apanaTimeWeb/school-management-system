import { MeetingData } from '../meetings_store/useTeacherMeetingsStore';

export const TEACHER_MEETINGS_MOCK: MeetingData[] = [
  {
    id: 'MTG-001',
    studentName: 'Aarav Sharma',
    parentName: 'Mr. Ramesh Sharma',
    class: 'Class 10 A',
    date: '2023-11-28',
    time: '10:00 AM',
    reason: 'Discussion on recent drop in Mathematics grades.',
    status: 'Scheduled'
  },
  {
    id: 'MTG-002',
    studentName: 'Priya Verma',
    parentName: 'Mrs. Sunita Verma',
    class: 'Class 9 B',
    date: '2023-11-20',
    time: '11:30 AM',
    reason: 'Routine Parent-Teacher Meeting (PTM).',
    status: 'Completed',
    notes: 'Discussed overall academic progress. Parents are happy with the improvement in Science.',
    parentFeedback: 'Requested extra study material for English.',
    teacherRemarks: 'Advised 1 hour of daily reading practice.',
    followUpDate: '2023-12-15'
  },
  {
    id: 'MTG-003',
    studentName: 'Rohan Gupta',
    parentName: 'Mr. Anil Gupta',
    class: 'Class 11 Sci',
    date: '2023-11-22',
    time: '09:15 AM',
    reason: 'Behavioural issue in the classroom.',
    status: 'Completed',
    notes: 'Father acknowledged the issue. Student apologized.',
    parentFeedback: 'Promised to monitor screen time at home.',
    teacherRemarks: 'Will keep a close watch for the next 2 weeks.',
    followUpDate: '2023-12-05'
  }
];
