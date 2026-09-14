import type { StaffMeeting } from "../hr_meetings_types/HrMeetingsTypes";

export const MOCK_MEETINGS: StaffMeeting[] = [
  { 
    id: "mtg-1", title: "Annual Sports Day Planning", date: "2024-10-25", time: "14:00", location: "Main Auditorium", status: "Upcoming",
    participants: ["Physical Education Dept", "Admin Staff", "Principal"], attendanceRecorded: false, presentCount: 0, totalCount: 15,
    agenda: "1. Finalize sports day events.\n2. Allocate budget for prizes.\n3. Discuss security arrangements.", minutes: "",
    actionItems: []
  },
  { 
    id: "mtg-2", title: "Mid-Term Exam Review", date: "2024-10-10", time: "10:00", location: "Conference Room B", status: "Completed",
    participants: ["All Class Teachers", "Exam Controller"], attendanceRecorded: true, presentCount: 22, totalCount: 25,
    agenda: "Review of mid-term examination processes and results.", 
    minutes: "Discussed the overall pass percentage. Found that mathematics scores were lower than expected. Decided to implement remedial classes.",
    actionItems: [
      { id: "ai-1", task: "Schedule remedial math classes for Grade 9 & 10", assignee: "HOD Mathematics", deadline: "2024-10-20", status: "Closed" },
      { id: "ai-2", task: "Send performance reports to parents", assignee: "All Class Teachers", deadline: "2024-10-28", status: "In Progress" }
    ]
  },
  { 
    id: "mtg-3", title: "Monthly Staff Sync", date: "2024-10-28", time: "09:00", location: "Staff Room", status: "Upcoming",
    participants: ["All Teaching Staff"], attendanceRecorded: false, presentCount: 0, totalCount: 45,
    agenda: "General monthly updates and HR announcements.", minutes: "",
    actionItems: []
  }
];

