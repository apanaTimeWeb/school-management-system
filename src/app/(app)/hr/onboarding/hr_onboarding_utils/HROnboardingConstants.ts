import { HROnboardingRecord } from '../hr_onboarding_types/HROnboardingTypes';

export const MOCK_HR_ONBOARDING: HROnboardingRecord[] = [
  {
    id: "ONB-001",
    name: "Aakash Gupta",
    position: "System Admin",
    department: "IT",
    joiningDate: "2026-09-15",
    status: "In Progress",
    progress: 40,
    tasks: [
      { id: "t1", taskName: "Document Verification", status: "Completed" },
      { id: "t2", taskName: "Email ID Creation", status: "Completed" },
      { id: "t3", taskName: "ID Card Issuance", status: "Pending" },
      { id: "t4", taskName: "Workspace Setup", status: "Pending" },
      { id: "t5", taskName: "Bank Account Details", status: "Pending" },
    ]
  },
  {
    id: "ONB-002",
    name: "Sunil Das",
    position: "TGT Mathematics",
    department: "Teaching",
    joiningDate: "2026-09-18",
    status: "In Progress",
    progress: 20,
    tasks: [
      { id: "t1", taskName: "Document Verification", status: "Completed" },
      { id: "t2", taskName: "Email ID Creation", status: "Pending" },
      { id: "t3", taskName: "ID Card Issuance", status: "Pending" },
      { id: "t4", taskName: "Staff Room Allocation", status: "Pending" },
      { id: "t5", taskName: "Timetable Assignment", status: "Pending" },
    ]
  },
  {
    id: "ONB-003",
    name: "Meera Reddy",
    position: "Accounts Executive",
    department: "Finance",
    joiningDate: "2026-09-01",
    status: "Completed",
    progress: 100,
    tasks: [
      { id: "t1", taskName: "Document Verification", status: "Completed" },
      { id: "t2", taskName: "Email ID Creation", status: "Completed" },
      { id: "t3", taskName: "ID Card Issuance", status: "Completed" },
      { id: "t4", taskName: "ERP Access", status: "Completed" },
      { id: "t5", taskName: "Bank Account Details", status: "Completed" },
    ]
  }
];
