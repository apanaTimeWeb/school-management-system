import type { TransportRequest } from '../transport_requests_types/transport_requests.types';

export const MOCK_TRANSPORT_REQUESTS: TransportRequest[] = [
  {
    id: 'REQ-5001',
    requestDate: '2023-09-10',
    studentId: 'STU-2051',
    studentName: 'Rohan Sharma',
    classSection: 'Class 4 - B',
    guardianName: 'Ajay Sharma',
    guardianContact: '9876543210',
    requestType: 'ROUTE_CHANGE',
    currentDetails: 'Route R-01 (City Center)',
    requestedDetails: 'Route R-02 (North Campus)',
    reason: 'We shifted our residence to North Campus area last week.',
    hasAttachment: true,
    attachmentUrl: '/mock/proof-of-address.pdf',
    status: 'PENDING',
    adminRemarks: null
  },
  {
    id: 'REQ-5002',
    requestDate: '2023-09-12',
    studentId: 'STU-1092',
    studentName: 'Neha Gupta',
    classSection: 'Class 9 - A',
    guardianName: 'Sanjay Gupta',
    guardianContact: '9876543222',
    requestType: 'NEW_TRANSPORT',
    currentDetails: null,
    requestedDetails: 'Stop: Market Square (Route R-01)',
    reason: 'Cannot arrange personal drop off anymore due to office timing changes.',
    hasAttachment: false,
    attachmentUrl: null,
    status: 'UNDER_REVIEW',
    adminRemarks: 'Checking seat availability on Route R-01.'
  },
  {
    id: 'REQ-5003',
    requestDate: '2023-09-15',
    studentId: 'STU-3321',
    studentName: 'Aarav Patel',
    classSection: 'Class 2 - C',
    guardianName: 'Kiran Patel',
    guardianContact: '9876543333',
    requestType: 'TRANSPORT_STOP',
    currentDetails: 'Route R-02 (North Campus)',
    requestedDetails: 'Terminate Service',
    reason: 'Mother will be dropping/picking up starting next month.',
    hasAttachment: false,
    attachmentUrl: null,
    status: 'APPROVED',
    adminRemarks: 'Service will be terminated end of month. Finance notified.'
  },
  {
    id: 'REQ-5004',
    requestDate: '2023-09-16',
    studentId: 'STU-4410',
    studentName: 'Priya Desai',
    classSection: 'Class 11 - Sci',
    guardianName: 'Meera Desai',
    guardianContact: '9876543444',
    requestType: 'TEMPORARY_TRANSPORT',
    currentDetails: null,
    requestedDetails: 'Route R-03 (South) for 10 days',
    reason: 'Staying at grandparents house for 2 weeks.',
    hasAttachment: false,
    attachmentUrl: null,
    status: 'REJECTED',
    adminRemarks: 'Route R-03 is currently running at full capacity.'
  }
];

export const REQUEST_TYPE_LABELS: Record<string, string> = {
  NEW_TRANSPORT: 'New Transport',
  ROUTE_CHANGE: 'Route Change',
  STOP_CHANGE: 'Stop Change',
  VEHICLE_CHANGE: 'Vehicle Change',
  TRANSPORT_START: 'Start Transport',
  TRANSPORT_STOP: 'Stop Transport',
  TEMPORARY_TRANSPORT: 'Temporary Request',
};

export const REQUEST_STATUS_COLORS: Record<string, { bg: string, text: string, label: string }> = {
  PENDING: { bg: '#451A03', text: '#F59E0B', label: 'Pending' }, // Amber
  UNDER_REVIEW: { bg: '#1E3A5F', text: '#3B82F6', label: 'Under Review' }, // Blue
  APPROVED: { bg: '#064E3B', text: '#22C55E', label: 'Approved' }, // Emerald
  REJECTED: { bg: '#450A0A', text: '#EF4444', label: 'Rejected' }, // Red
  COMPLETED: { bg: '#1E1E2E', text: 'var(--text-secondary)', label: 'Completed' },
  CANCELLED: { bg: '#1E1E2E', text: 'var(--text-secondary)', label: 'Cancelled' },
};
