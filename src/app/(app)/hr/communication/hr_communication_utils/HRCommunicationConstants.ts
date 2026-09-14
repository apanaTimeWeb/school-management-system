import { HRCommunicationRecord } from '../hr_communication_types/HRCommunicationTypes';

export const MOCK_HR_COMMUNICATION: HRCommunicationRecord[] = [
  {
    id: "MSG-001",
    title: "Diwali Bonus Announcement",
    type: "Announcement",
    audience: "All Staff",
    sentBy: "HR Head",
    date: "2026-10-15",
    status: "Sent"
  },
  {
    id: "MSG-002",
    title: "IT Policy Update",
    type: "Email",
    audience: "Teaching & Non-Teaching",
    sentBy: "IT Admin",
    date: "2026-09-20",
    status: "Scheduled"
  },
  {
    id: "MSG-003",
    title: "Urgent Meeting at 3 PM",
    type: "SMS",
    audience: "Heads of Departments",
    sentBy: "Principal",
    date: "2026-09-15",
    status: "Sent"
  },
  {
    id: "MSG-004",
    title: "New Leave Policy Draft",
    type: "Notice",
    audience: "All Staff",
    sentBy: "HR Manager",
    date: "2026-09-18",
    status: "Draft"
  }
];
