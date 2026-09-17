import type { TransportDocument } from '../transport_documents_types/transport_documents.types';

export const MOCK_TRANSPORT_DOCUMENTS: TransportDocument[] = [
  {
    id: 'DOC-001',
    vehicleId: 'VEH-001',
    vehicleNumber: 'MH-12-AB-1234',
    documentType: 'INSURANCE',
    documentNumber: 'INS-2023-998877',
    issueDate: '2023-05-15',
    expiryDate: '2024-05-15',
    attachmentUrl: 'https://example.com/doc.pdf',
    verificationStatus: 'VERIFIED',
    alertStatus: '7_DAYS',
    remindersEnabled: true,
  },
  {
    id: 'DOC-002',
    vehicleId: 'VEH-002',
    vehicleNumber: 'MH-12-CD-5678',
    documentType: 'PERMIT',
    documentNumber: 'PRM-MH-2021',
    issueDate: '2021-02-10',
    expiryDate: '2026-02-10',
    attachmentUrl: null,
    verificationStatus: 'PENDING',
    alertStatus: 'OK',
    remindersEnabled: true,
  },
  {
    id: 'DOC-003',
    vehicleId: 'VEH-003',
    vehicleNumber: 'MH-12-EF-9012',
    documentType: 'POLLUTION',
    documentNumber: 'PUC-990011',
    issueDate: '2023-11-20',
    expiryDate: '2024-05-20',
    attachmentUrl: 'https://example.com/puc.pdf',
    verificationStatus: 'VERIFIED',
    alertStatus: '30_DAYS',
    remindersEnabled: true,
  },
  {
    id: 'DOC-004',
    vehicleId: 'VEH-001',
    vehicleNumber: 'MH-12-AB-1234',
    documentType: 'FITNESS',
    documentNumber: 'FIT-2023-555',
    issueDate: '2023-01-01',
    expiryDate: '2024-01-01',
    attachmentUrl: null,
    verificationStatus: 'EXPIRED',
    alertStatus: 'EXPIRED',
    remindersEnabled: false,
  }
];

export const DOCUMENT_TYPES = [
  { value: 'REGISTRATION', label: 'Registration Certificate' },
  { value: 'INSURANCE', label: 'Insurance' },
  { value: 'FITNESS', label: 'Fitness Certificate' },
  { value: 'PERMIT', label: 'Permit' },
  { value: 'POLLUTION', label: 'Pollution Certificate' },
  { value: 'TAX', label: 'Tax' },
  { value: 'ROADWORTHINESS', label: 'Roadworthiness Documents' },
  { value: 'OTHER', label: 'Other Documents' },
];

export const ALERT_STATUS_COLORS: Record<string, { bg: string, text: string, label: string }> = {
  'OK': { bg: '#064E3B', text: '#22C55E', label: 'Valid' },
  '90_DAYS': { bg: '#1E3A5F', text: '#3B82F6', label: 'Exp in 90 Days' },
  '60_DAYS': { bg: '#451A03', text: '#F59E0B', label: 'Exp in 60 Days' },
  '30_DAYS': { bg: '#451A03', text: '#F59E0B', label: 'Exp in 30 Days' },
  '7_DAYS': { bg: '#450A0A', text: '#EF4444', label: 'Exp in 7 Days' },
  'EXPIRED': { bg: '#450A0A', text: '#EF4444', label: 'Expired' },
};

export const VERIFICATION_STATUS_COLORS: Record<string, { bg: string, text: string, label: string }> = {
  'VERIFIED': { bg: '#064E3B', text: '#22C55E', label: 'Verified' },
  'PENDING': { bg: '#451A03', text: '#F59E0B', label: 'Pending' },
  'REJECTED': { bg: '#450A0A', text: '#EF4444', label: 'Rejected' },
  'EXPIRED': { bg: '#1E1E2E', text: 'var(--text-secondary)', label: 'Expired' },
};
