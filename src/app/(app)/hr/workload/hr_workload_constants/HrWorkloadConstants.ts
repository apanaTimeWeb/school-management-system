import type { TeacherWorkloadRecord } from "../hr_workload_types/HrWorkloadTypes";

export const MOCK_WORKLOAD_RECORDS: TeacherWorkloadRecord[] = [
  {
    id: "wl-1", employeeId: "EMP-045", employeeName: "Priya Sharma", department: "Science",
    maxPeriodsAllowed: 30,
    assignments: [
      { id: "a-1", subject: "Physics", classAssigned: "XI-A", periodsPerWeek: 6 },
      { id: "a-2", subject: "Physics", classAssigned: "XI-B", periodsPerWeek: 6 },
      { id: "a-3", subject: "Science", classAssigned: "X-C", periodsPerWeek: 5 },
    ],
    responsibilities: [
      { id: "r-1", role: "Class Teacher (XI-A)" },
      { id: "r-2", role: "Science Lab Coordinator" }
    ]
  },
  {
    id: "wl-2", employeeId: "EMP-012", employeeName: "Sunita Rao", department: "Mathematics",
    maxPeriodsAllowed: 25, // Senior teacher
    assignments: [
      { id: "a-4", subject: "Mathematics", classAssigned: "XII-A", periodsPerWeek: 8 },
      { id: "a-5", subject: "Mathematics", classAssigned: "XII-B", periodsPerWeek: 8 },
      { id: "a-6", subject: "Mathematics", classAssigned: "XI-A", periodsPerWeek: 8 },
    ],
    responsibilities: [
      { id: "r-3", role: "HOD Mathematics" }
    ]
  },
  {
    id: "wl-3", employeeId: "EMP-067", employeeName: "Amit Kumar", department: "Physical Education",
    maxPeriodsAllowed: 35,
    assignments: [
      { id: "a-7", subject: "Physical Education", classAssigned: "IX-A", periodsPerWeek: 3 },
      { id: "a-8", subject: "Physical Education", classAssigned: "IX-B", periodsPerWeek: 3 },
      { id: "a-9", subject: "Physical Education", classAssigned: "X-A", periodsPerWeek: 3 },
    ],
    responsibilities: [
      { id: "r-4", role: "Sports Coordinator" },
      { id: "r-5", role: "Discipline Committee Head" }
    ]
  }
];

