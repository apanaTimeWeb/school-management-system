import { DisciplineData } from '../discipline_store/useTeacherDisciplineStore';

export const TEACHER_DISCIPLINE_MOCK: DisciplineData[] = [
  {
    id: 'INC-001',
    studentName: 'Aman Verma',
    rollNo: '23',
    class: 'Class 10 A',
    incidentType: 'Disruptive Behaviour',
    description: 'Continuously interrupting the class during the physics lecture and distracting other students.',
    severity: 'Low',
    date: '2023-11-20',
    actionTaken: 'Verbal Warning',
    escalatedToPrincipal: false,
    parentNotified: false
  },
  {
    id: 'INC-002',
    studentName: 'Rohan Gupta',
    rollNo: '45',
    class: 'Class 9 B',
    incidentType: 'Cheating in Exam',
    description: 'Caught with a cheat sheet during the Mid-Term Mathematics Examination.',
    severity: 'High',
    date: '2023-11-15',
    actionTaken: 'Exam Cancelled for the subject',
    escalatedToPrincipal: true,
    parentNotified: true
  },
  {
    id: 'INC-003',
    studentName: 'Sanya Mirza',
    rollNo: '12',
    class: 'Class 11 Sci',
    incidentType: 'Late Arrival',
    description: 'Arriving late to the first period for the 3rd consecutive day.',
    severity: 'Medium',
    date: '2023-11-18',
    actionTaken: 'Written Remark in Diary',
    escalatedToPrincipal: false,
    parentNotified: true
  }
];
