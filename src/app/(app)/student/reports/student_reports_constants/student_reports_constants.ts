import type { StudentReportsData } from '../student_reports_types/student_reports_types';

export const MOCK_REPORTS_DATA: StudentReportsData = {
  reports: [
    {
      id: "rep_1",
      type: "Attendance Report",
      description: "Detailed month-wise breakdown of your attendance, leaves, and absences.",
      lastUpdated: "Today, 08:00 AM",
      isAvailable: true
    },
    {
      id: "rep_2",
      type: "Result Report",
      description: "Comprehensive transcript of all your examination results for the current academic year.",
      lastUpdated: "Oct 12, 2024",
      isAvailable: true
    },
    {
      id: "rep_3",
      type: "Fee Statement",
      description: "Complete ledger of paid fees, pending dues, and late fines.",
      lastUpdated: "Oct 01, 2024",
      isAvailable: true
    },
    {
      id: "rep_4",
      type: "Assignment Report",
      description: "Status of all assignments, marks obtained, and pending submissions.",
      lastUpdated: "Yesterday, 04:00 PM",
      isAvailable: true
    },
    {
      id: "rep_5",
      type: "Homework Status",
      description: "Daily homework completion tracking and teacher remarks.",
      lastUpdated: "Today, 02:00 PM",
      isAvailable: true
    },
    {
      id: "rep_6",
      type: "Academic Report",
      description: "Overall academic progress, GPA trends, and teacher evaluations.",
      lastUpdated: "Sep 30, 2024",
      isAvailable: true
    },
    {
      id: "rep_7",
      type: "Library Statement",
      description: "Log of books issued, returned, pending dues, and library fines.",
      lastUpdated: "Oct 05, 2024",
      isAvailable: true
    },
    {
      id: "rep_8",
      type: "Certificate Status",
      description: "Status tracking for all requested and generated certificates.",
      lastUpdated: "Aug 15, 2024",
      isAvailable: false // Example of an unavailable report
    }
  ]
};
