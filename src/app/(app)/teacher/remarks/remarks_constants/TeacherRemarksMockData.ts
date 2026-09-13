import { RemarkData } from '../remarks_store/useTeacherRemarksStore';

export const TEACHER_REMARKS_MOCK: RemarkData[] = [
  {
    id: 'REM-001',
    studentName: 'Aarav Sharma',
    rollNo: '01',
    class: 'Class 10 A',
    category: 'Academic',
    sentiment: 'Positive',
    description: 'Excellent performance in recent unit tests. Keep up the hard work!',
    date: '2023-11-24',
    sharedWithParents: true
  },
  {
    id: 'REM-002',
    studentName: 'Neha Gupta',
    rollNo: '15',
    class: 'Class 9 B',
    category: 'Homework',
    sentiment: 'Needs Improvement',
    description: 'Frequently misses submitting homework on time. Requires better time management.',
    date: '2023-11-22',
    sharedWithParents: true
  },
  {
    id: 'REM-003',
    studentName: 'Rahul Singh',
    rollNo: '23',
    class: 'Class 10 A',
    category: 'Behaviour',
    sentiment: 'Neutral',
    description: 'Very talkative during lectures. Needs to focus more on the blackboard.',
    date: '2023-11-20',
    sharedWithParents: false
  },
  {
    id: 'REM-004',
    studentName: 'Priya Verma',
    rollNo: '31',
    class: 'Class 11 Sci',
    category: 'Progress',
    sentiment: 'Positive',
    description: 'Has shown massive improvement in Physics compared to the previous semester.',
    date: '2023-11-18',
    sharedWithParents: true
  }
];
