import { HRMeetingRecord } from '../hr_meetings_types/HRMeetingsTypes';

export const MOCK_HR_MEETINGS: HRMeetingRecord[] = [
  {
    id: "MTG-001",
    title: "Monthly Staff Briefing",
    date: "2026-10-01",
    time: "14:00 - 15:00",
    location: "Main Auditorium",
    organizer: "Principal",
    type: "General",
    status: "Scheduled",
    attendeesCount: 120
  },
  {
    id: "MTG-002",
    title: "New ERP System Training",
    date: "2026-09-25",
    time: "10:00 - 12:00",
    location: "Computer Lab 1",
    organizer: "IT Dept",
    type: "Training",
    status: "Completed",
    attendeesCount: 45
  },
  {
    id: "MTG-003",
    title: "Math Department Review",
    date: "2026-09-28",
    time: "15:30 - 16:30",
    location: "Staff Room A",
    organizer: "HOD Math",
    type: "Departmental",
    status: "Scheduled",
    attendeesCount: 12
  }
];
