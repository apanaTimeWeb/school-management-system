import { PrincipalEvent, PrincipalEventParticipant, PrincipalEventCertificate } from '../events_types/PrincipalEvents.types';

export const PRINCIPAL_MOCK_EVENTS: PrincipalEvent[] = [
  {
    id: 'EVT-001',
    title: 'Annual Sports Meet 2024',
    type: 'Sports',
    startDate: '2024-02-10',
    endDate: '2024-02-12',
    organizer: 'Sports Department',
    budget: 50000,
    description: 'Inter-house athletic meet including track and field events, basketball finals, and march past.',
    status: 'Approved',
    participantsCount: 120
  },
  {
    id: 'EVT-002',
    title: 'Inter-School Science Exhibition',
    type: 'Competition',
    startDate: '2024-01-20',
    endDate: '2024-01-20',
    organizer: 'Science Club',
    budget: 15000,
    description: 'Students will present working models and research papers. Schools from across the city are invited.',
    status: 'Pending Approval',
    participantsCount: 45
  },
  {
    id: 'EVT-003',
    title: 'Cultural Fest - Diwali Utsav',
    type: 'Cultural',
    startDate: '2023-11-05',
    endDate: '2023-11-05',
    organizer: 'Cultural Committee',
    budget: 25000,
    description: 'Celebration of Diwali with dance performances, rangoli competitions, and a food fest.',
    status: 'Completed',
    participantsCount: 300
  },
  {
    id: 'EVT-004',
    title: 'Annual Day Function',
    type: 'Annual Function',
    startDate: '2024-03-15',
    endDate: '2024-03-15',
    organizer: 'Main Admin',
    budget: 120000,
    description: 'End of academic year celebration with prize distribution and cultural showcases.',
    status: 'Approved',
    participantsCount: 450
  }
];

export const PRINCIPAL_MOCK_PARTICIPANTS: PrincipalEventParticipant[] = [
  {
    id: 'PART-101',
    eventId: 'EVT-003',
    eventTitle: 'Cultural Fest - Diwali Utsav',
    studentId: 'STU-1122',
    studentName: 'Aarav Sharma',
    classAndSection: '10-A',
    role: 'Lead Dancer',
    result: '1st Prize'
  },
  {
    id: 'PART-102',
    eventId: 'EVT-001',
    eventTitle: 'Annual Sports Meet 2024',
    studentId: 'STU-1145',
    studentName: 'Neha Gupta',
    classAndSection: '11-B',
    role: 'Athlete - 100m Sprint'
  },
  {
    id: 'PART-103',
    eventId: 'EVT-003',
    eventTitle: 'Cultural Fest - Diwali Utsav',
    studentId: 'STU-0099',
    studentName: 'Rohan Verma',
    classAndSection: '9-C',
    role: 'Rangoli Artist',
    result: 'Runner Up'
  }
];

export const PRINCIPAL_MOCK_CERTIFICATES: PrincipalEventCertificate[] = [
  {
    id: 'CERT-001',
    participantId: 'PART-101',
    studentName: 'Aarav Sharma',
    eventTitle: 'Cultural Fest - Diwali Utsav',
    certificateType: 'Winner',
    issueDate: '2023-11-08',
    status: 'Issued'
  },
  {
    id: 'CERT-002',
    participantId: 'PART-103',
    studentName: 'Rohan Verma',
    eventTitle: 'Cultural Fest - Diwali Utsav',
    certificateType: 'Runner Up',
    issueDate: '2023-11-08',
    status: 'Issued'
  }
];
