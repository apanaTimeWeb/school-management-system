import type { TransportFeeRecord } from '../transport_fee_types/transport_fee.types';

export const MOCK_FEE_RECORDS: TransportFeeRecord[] = [
  {
    id: 'FEE-1001',
    studentId: 'STU-2023-001',
    studentName: 'Aarav Sharma',
    classSection: 'Class 5 - A',
    routeId: 'R-01',
    routeName: 'City Center Route',
    pickupPoint: 'Main Road Stop',
    totalFee: 15000, // Yearly Route Fee
    concession: 0,
    fine: 0,
    netPayable: 15000,
    paidAmount: 15000,
    outstandingAmount: 0,
    status: 'PAID',
    dueDate: null,
    paymentHistory: [
      { receiptNo: 'RCPT-T-501', date: '2023-04-10', amountPaid: 15000, paymentMethod: 'ONLINE', remarks: 'Full year paid in advance.' }
    ]
  },
  {
    id: 'FEE-1002',
    studentId: 'STU-2023-045',
    studentName: 'Priya Verma',
    classSection: 'Class 8 - B',
    routeId: 'R-03',
    routeName: 'Highway Route',
    pickupPoint: 'Sector 4 Society',
    totalFee: 18000,
    concession: 2000, // Sibling concession
    fine: 0,
    netPayable: 16000,
    paidAmount: 8000,
    outstandingAmount: 8000,
    status: 'PARTIAL',
    dueDate: '2023-11-01', // Next installment due date
    paymentHistory: [
      { receiptNo: 'RCPT-T-612', date: '2023-04-15', amountPaid: 8000, paymentMethod: 'CHEQUE', remarks: 'Term 1 Installment.' }
    ]
  },
  {
    id: 'FEE-1003',
    studentId: 'STU-2023-112',
    studentName: 'Rohan Gupta',
    classSection: 'Class 3 - C',
    routeId: 'R-02',
    routeName: 'Railway Colony Route',
    pickupPoint: 'Station Road',
    totalFee: 12000,
    concession: 0,
    fine: 500, // Late fee penalty
    netPayable: 12500,
    paidAmount: 0,
    outstandingAmount: 12500,
    status: 'OVERDUE',
    dueDate: '2023-09-01', // Missed
    paymentHistory: []
  },
  {
    id: 'FEE-1004',
    studentId: 'STU-2023-089',
    studentName: 'Kavita Singh',
    classSection: 'Class 10 - A',
    routeId: 'R-01',
    routeName: 'City Center Route',
    pickupPoint: 'Market Square',
    totalFee: 15000,
    concession: 15000, // 100% Scholarship / Staff child
    fine: 0,
    netPayable: 0,
    paidAmount: 0,
    outstandingAmount: 0,
    status: 'PAID',
    dueDate: null,
    paymentHistory: [
       { receiptNo: 'RCPT-T-CONC', date: '2023-04-01', amountPaid: 0, paymentMethod: 'CASH', remarks: '100% Fee Waiver applied by Admin.' }
    ]
  }
];

export const FEE_STATUS_COLORS: Record<string, { bg: string, text: string, label: string }> = {
  PAID: { bg: 'rgba(16,185,129,0.1)', text: '#10B981', label: 'Paid in Full' }, // Emerald
  PARTIAL: { bg: 'rgba(59,130,246,0.1)', text: '#3B82F6', label: 'Partial / Installment' }, // Blue
  UPCOMING: { bg: 'rgba(245,158,11,0.1)', text: '#F59E0B', label: 'Due Soon' }, // Amber
  OVERDUE: { bg: 'rgba(239,68,68,0.1)', text: '#EF4444', label: 'Overdue' }, // Red
};
