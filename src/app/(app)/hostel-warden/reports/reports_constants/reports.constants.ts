import type { ReportSummary } from '../reports_types/reports.types';

export const MOCK_REPORTS: ReportSummary[] = [
  {
    id: 'RPT-ATT-2023-11-21',
    type: 'Daily Attendance',
    generatedDate: '2023-11-21T08:00:00Z',
    period: '21 Nov 2023',
    summaryStats: [
      { label: 'Total Strength', value: 450 },
      { label: 'Present', value: 430 },
      { label: 'On Leave/Outing', value: 15 },
      { label: 'Absent/Missing', value: 5 }
    ],
    isDownloadable: true
  },
  {
    id: 'RPT-MESS-2023-10',
    type: 'Monthly Mess Bill',
    generatedDate: '2023-11-01T10:00:00Z',
    period: 'October 2023',
    summaryStats: [
      { label: 'Total Meals Served', value: 38500 },
      { label: 'Guest Meals', value: 120 },
      { label: 'Total Cost', value: '₹ 15,40,000' }
    ],
    isDownloadable: true
  },
  {
    id: 'RPT-FINE-2023-11',
    type: 'Damage & Fine',
    generatedDate: '2023-11-21T09:00:00Z',
    period: 'Nov 2023 (MTD)',
    summaryStats: [
      { label: 'Incidents Logged', value: 12 },
      { label: 'Fines Imposed', value: 5 },
      { label: 'Total Fine Value', value: '₹ 4,500' }
    ],
    isDownloadable: true
  },
  {
    id: 'RPT-MNT-2023-11',
    type: 'Maintenance Summary',
    generatedDate: '2023-11-21T09:15:00Z',
    period: 'Nov 2023 (MTD)',
    summaryStats: [
      { label: 'Total Complaints', value: 45 },
      { label: 'Resolved', value: 38 },
      { label: 'Pending', value: 5 },
      { label: 'In Progress', value: 2 }
    ],
    isDownloadable: true
  },
  {
    id: 'RPT-VIS-2023-11-20',
    type: 'Visitor Log',
    generatedDate: '2023-11-21T06:00:00Z',
    period: '20 Nov 2023',
    summaryStats: [
      { label: 'Total Visitors', value: 24 },
      { label: 'Overnight Stays', value: 0 },
      { label: 'Avg Visit Duration', value: '1.5 hrs' }
    ],
    isDownloadable: true
  }
];
