import type { TransportDocumentRecord } from '../transport_documents_types/transport_documents.types';

export const MOCK_DOCUMENTS: TransportDocumentRecord[] = [
  {
    id: 'DOC-1001',
    category: 'VEHICLE_DOCUMENT',
    documentType: 'INSURANCE',
    title: 'Comprehensive Insurance Policy (Tata AIG)',
    referenceId: 'POL-9988776655',
    associatedEntity: 'VEH-001 (MH-12-AB-1234)',
    issueDate: '2023-01-15',
    expiryDate: '2024-01-14', // Depending on current date, could be Expiring Soon
    fileUrl: '/mock/insurance_veh001.pdf',
    uploadedBy: 'Admin',
    uploadDate: '2023-01-16T10:30:00Z'
  },
  {
    id: 'DOC-1002',
    category: 'VEHICLE_DOCUMENT',
    documentType: 'FITNESS_CERTIFICATE',
    title: 'RTO Fitness Certificate',
    referenceId: 'FIT-MH12-2023-456',
    associatedEntity: 'VEH-002 (MH-12-CD-5678)',
    issueDate: '2023-06-10',
    expiryDate: '2024-06-09',
    fileUrl: '/mock/fitness_veh002.pdf',
    uploadedBy: 'Transport Manager',
    uploadDate: '2023-06-11T14:15:00Z'
  },
  {
    id: 'DOC-1003',
    category: 'DRIVER_DOCUMENT',
    documentType: 'DRIVING_LICENSE',
    title: 'Heavy Motor Vehicle License',
    referenceId: 'DL-MH12-19990012345',
    associatedEntity: 'Amit Kumar (Driver)',
    issueDate: '2015-05-20',
    expiryDate: '2025-05-19',
    fileUrl: '/mock/dl_amit.pdf',
    uploadedBy: 'HR Dept',
    uploadDate: '2020-02-10T09:00:00Z'
  },
  {
    id: 'DOC-1004',
    category: 'MAINTENANCE_BILL',
    documentType: 'BILL',
    title: 'Engine Overhaul & Brake Pad Replacement',
    referenceId: 'INV-SharmaAuto-1045',
    associatedEntity: 'VEH-003',
    issueDate: '2023-10-05',
    expiryDate: null,
    fileUrl: '/mock/bill_1045.pdf',
    uploadedBy: 'Transport Manager',
    uploadDate: '2023-10-06T11:20:00Z'
  },
  {
    id: 'DOC-1005',
    category: 'VEHICLE_DOCUMENT',
    documentType: 'POLLUTION_PUC',
    title: 'PUC Certificate',
    referenceId: 'PUC-987654321',
    associatedEntity: 'VEH-005',
    issueDate: '2023-08-01',
    expiryDate: '2024-02-01', 
    fileUrl: '/mock/puc_veh005.pdf',
    uploadedBy: 'Transport Manager',
    uploadDate: '2023-08-02T16:45:00Z'
  },
  {
    id: 'DOC-1006',
    category: 'INSPECTION_REPORT',
    documentType: 'REPORT',
    title: 'Quarterly Safety Audit Report',
    referenceId: 'AUD-Q3-2023',
    associatedEntity: 'Fleet General',
    issueDate: '2023-09-30',
    expiryDate: null,
    fileUrl: '/mock/audit_q3.pdf',
    uploadedBy: 'Safety Officer',
    uploadDate: '2023-10-01T10:00:00Z'
  }
];

export const CATEGORY_CONFIGS: Record<string, { bg: string, text: string, label: string }> = {
  VEHICLE_DOCUMENT: { bg: 'rgba(59,130,246,0.1)', text: '#3B82F6', label: 'Vehicle Doc' }, // Blue
  DRIVER_DOCUMENT: { bg: 'rgba(168,85,247,0.1)', text: '#A855F7', label: 'Driver Doc' }, // Purple
  MAINTENANCE_BILL: { bg: 'rgba(245,158,11,0.1)', text: '#F59E0B', label: 'Bill / Invoice' }, // Amber
  INSPECTION_REPORT: { bg: 'rgba(16,185,129,0.1)', text: '#10B981', label: 'Inspection' }, // Emerald
  ACCIDENT_REPORT: { bg: 'rgba(239,68,68,0.1)', text: '#EF4444', label: 'Accident Record' }, // Red
  OTHER: { bg: 'rgba(107,114,128,0.1)', text: '#6B7280', label: 'Miscellaneous' } // Gray
};
