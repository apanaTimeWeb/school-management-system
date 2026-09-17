import type { DisciplinaryRecord } from '../disciplinary_types/disciplinary.types';

export const MOCK_DISCIPLINARY: DisciplinaryRecord[] = [
  {
    id: 'DISC-2023-001',
    studentName: 'Rahul Singh',
    studentId: 'STU-0998',
    roomNumber: '101',
    incidentDate: '2023-11-15T23:30:00Z',
    category: 'Late Entry',
    description: 'Found entering the hostel premise 2 hours past the curfew without prior permission or valid gate pass.',
    actionTaken: 'Warning',
    wardenRemarks: 'First offense. Strict verbal warning issued. Next time will lead to a fine.',
    parentNotified: true,
    status: 'CLOSED'
  },
  {
    id: 'DISC-2023-002',
    studentName: 'Amit Kumar',
    studentId: 'STU-1024',
    roomNumber: '101',
    incidentDate: '2023-11-18T14:00:00Z',
    category: 'Property Damage',
    description: 'Broke the common room window while playing cricket indoors.',
    actionTaken: 'Fine',
    fineAmount: 1500,
    wardenRemarks: 'Fine added to account. Must pay within 7 days.',
    parentNotified: true,
    status: 'CLOSED'
  },
  {
    id: 'DISC-2023-003',
    studentName: 'Vikram Mehta',
    studentId: 'STU-1005',
    roomNumber: '205',
    incidentDate: '2023-11-20T01:15:00Z',
    category: 'Misbehavior',
    description: 'Loud altercation with roommate leading to disturbance on the entire floor.',
    actionTaken: 'Pending Decision',
    wardenRemarks: 'Summoned for meeting tomorrow morning with Chief Warden.',
    parentNotified: false,
    status: 'OPEN'
  }
];
