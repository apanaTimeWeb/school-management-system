import type { EmployeeExitRecord } from "../hr_exit_types/HrExitTypes";

export const MOCK_EXIT_RECORDS: EmployeeExitRecord[] = [
  {
    id: "exit-1", employeeId: "EMP-045", employeeName: "Priya Sharma", designation: "Teacher", department: "Science",
    resignationDate: "2024-06-01", noticePeriodDays: 30, expectedRelievingDate: "2024-06-30",
    reason: "Relocating to another city.", status: "Notice Period",
    clearanceChecklist: [
      { id: "chk-1", task: "Asset Return (Laptop & Keys)", isCleared: false },
      { id: "chk-2", task: "Pending Dues Settled", isCleared: false },
      { id: "chk-3", task: "Exit Interview Completed", isCleared: false },
      { id: "chk-4", task: "Knowledge Transfer Signed-off", isCleared: true }
    ],
    relievingLetterGenerated: false,
    experienceCertificateGenerated: false
  },
  {
    id: "exit-2", employeeId: "EMP-088", employeeName: "Rakesh Singh", designation: "HR Exec", department: "Administration",
    resignationDate: "2024-06-15", noticePeriodDays: 15, expectedRelievingDate: "2024-06-30",
    reason: "Better career opportunity.", status: "Clearance Pending",
    clearanceChecklist: [
      { id: "chk-1", task: "Asset Return (Laptop & Keys)", isCleared: true },
      { id: "chk-2", task: "Pending Dues Settled", isCleared: true },
      { id: "chk-3", task: "Exit Interview Completed", isCleared: false },
      { id: "chk-4", task: "Knowledge Transfer Signed-off", isCleared: true }
    ],
    relievingLetterGenerated: false,
    experienceCertificateGenerated: false
  },
  {
    id: "exit-3", employeeId: "EMP-012", employeeName: "Sunita Rao", designation: "Senior Teacher", department: "Mathematics",
    resignationDate: "2024-04-01", noticePeriodDays: 30, expectedRelievingDate: "2024-04-30",
    reason: "Retirement.", status: "Relieved",
    clearanceChecklist: [
      { id: "chk-1", task: "Asset Return (Laptop & Keys)", isCleared: true },
      { id: "chk-2", task: "Pending Dues Settled", isCleared: true },
      { id: "chk-3", task: "Exit Interview Completed", isCleared: true },
      { id: "chk-4", task: "Knowledge Transfer Signed-off", isCleared: true }
    ],
    relievingLetterGenerated: true,
    experienceCertificateGenerated: true
  }
];

