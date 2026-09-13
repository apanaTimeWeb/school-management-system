import { PrincipalCertificateRequest, PrincipalStudentDocument } from '../documents_types/PrincipalDocuments.types';

export const PRINCIPAL_MOCK_CERT_REQUESTS: PrincipalCertificateRequest[] = [
  {
    id: 'REQ-TC-001',
    studentId: 'STU-1122',
    studentName: 'Aarav Sharma',
    classAndSection: '10-A',
    type: 'Transfer Certificate (TC)',
    requestDate: '2023-11-20',
    reason: 'Father transferred to another city.',
    status: 'Pending',
    urgency: 'Urgent'
  },
  {
    id: 'REQ-BF-045',
    studentId: 'STU-1300',
    studentName: 'Neha Gupta',
    classAndSection: '12-B',
    type: 'Bonafide Certificate',
    requestDate: '2023-11-21',
    reason: 'For applying for passport.',
    status: 'Pending',
    urgency: 'Normal'
  },
  {
    id: 'REQ-CH-012',
    studentId: 'STU-0988',
    studentName: 'Rohan Verma',
    classAndSection: '12-C',
    type: 'Character Certificate',
    requestDate: '2023-11-15',
    reason: 'College admission requirement.',
    status: 'Approved',
    urgency: 'Urgent',
    actionDate: '2023-11-16',
    actionRemarks: 'Character verified by Class Teacher.'
  },
  {
    id: 'REQ-ST-099',
    studentId: 'STU-0877',
    studentName: 'Sneha Patil',
    classAndSection: '8-A',
    type: 'Study Certificate',
    requestDate: '2023-11-10',
    reason: 'Bank loan processing.',
    status: 'Issued',
    urgency: 'Normal',
    actionDate: '2023-11-11'
  }
];

export const PRINCIPAL_MOCK_DOCUMENTS: PrincipalStudentDocument[] = [
  {
    id: 'DOC-5001',
    studentId: 'STU-1401',
    studentName: 'Rahul Desai',
    classAndSection: '1-A',
    documentName: 'Birth Certificate',
    uploadDate: '2023-11-22',
    status: 'Pending Verification',
    fileUrl: '#'
  },
  {
    id: 'DOC-5002',
    studentId: 'STU-1405',
    studentName: 'Aditi Jain',
    classAndSection: '11-B',
    documentName: 'Previous School TC',
    uploadDate: '2023-11-21',
    status: 'Pending Verification',
    fileUrl: '#'
  },
  {
    id: 'DOC-5003',
    studentId: 'STU-1290',
    studentName: 'Vikram Singh',
    classAndSection: '11-Science',
    documentName: 'Class 10 Marksheet',
    uploadDate: '2023-11-18',
    status: 'Verified',
    fileUrl: '#'
  }
];
