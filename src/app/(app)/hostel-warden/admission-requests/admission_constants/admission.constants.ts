import type { AdmissionRequest } from '../admission_types/admission.types';

export const MOCK_REQUESTS: AdmissionRequest[] = [
  {
    id: 'REQ-2023-001',
    studentName: 'Sanjay Dutt',
    studentId: 'STU-1055',
    class: '11th Commerce',
    preferredHostel: 'Main Boys Hostel',
    roomPreference: 'Non-AC',
    reason: 'Home is too far from school, need to save commute time.',
    documentsAttached: true,
    requestDate: '2023-11-10T10:30:00Z',
    status: 'SUBMITTED',
    guardianName: 'Sunil Dutt',
    guardianContact: '+91 9988776655'
  },
  {
    id: 'REQ-2023-002',
    studentName: 'Priya Sharma',
    studentId: 'STU-1056',
    class: '11th Science',
    preferredHostel: 'Girls Hostel',
    roomPreference: 'AC',
    reason: 'Requires a quiet environment for competitive exam preparation.',
    documentsAttached: true,
    requestDate: '2023-11-08T14:15:00Z',
    status: 'UNDER_REVIEW',
    guardianName: 'Ramesh Sharma',
    guardianContact: '+91 9988776656'
  },
  {
    id: 'REQ-2023-003',
    studentName: 'Karan Johar',
    studentId: 'STU-1057',
    class: '10th Arts',
    preferredHostel: 'Main Boys Hostel',
    roomPreference: 'Standard',
    reason: 'Parents relocated to another city.',
    documentsAttached: false,
    requestDate: '2023-11-05T09:00:00Z',
    status: 'REJECTED',
    guardianName: 'Yash Johar',
    guardianContact: '+91 9988776657'
  },
  {
    id: 'REQ-2023-004',
    studentName: 'Alia Bhatt',
    studentId: 'STU-1058',
    class: '9th Science',
    preferredHostel: 'Girls Hostel',
    roomPreference: 'Premium',
    reason: 'New admission to the school.',
    documentsAttached: true,
    requestDate: '2023-10-25T11:45:00Z',
    status: 'APPROVED',
    guardianName: 'Mahesh Bhatt',
    guardianContact: '+91 9988776658'
  },
  {
    id: 'REQ-2023-005',
    studentName: 'Varun Dhawan',
    studentId: 'STU-1059',
    class: '12th Commerce',
    preferredHostel: 'Senior Boys Hostel',
    roomPreference: 'AC',
    reason: 'Need accommodation for final year.',
    documentsAttached: true,
    requestDate: '2023-10-15T16:20:00Z',
    status: 'ACTIVE',
    guardianName: 'David Dhawan',
    guardianContact: '+91 9988776659'
  }
];
