import type { OnboardingCandidate } from "../hr_onboarding_types/HrOnboardingTypes";

export const MOCK_ONBOARDING_CANDIDATES: OnboardingCandidate[] = [
  {
    id: "onb-1",
    tempId: "TEMP-2024-001",
    finalEmployeeId: null,
    firstName: "Ramesh",
    lastName: "Gupta",
    email: "ramesh.g@email.com",
    phone: "9876543210",
    departmentAssignment: "Science",
    designation: "Physics Teacher",
    joiningDate: "2024-07-01",
    status: "Initiated",
    systemAccessGranted: false,
    documents: [
      { id: "doc-1", name: "Aadhar Card", isUploaded: true, isVerified: false, fileUrl: "#" },
      { id: "doc-2", name: "PAN Card", isUploaded: false, isVerified: false },
      { id: "doc-3", name: "Degree Certificate", isUploaded: true, isVerified: false, fileUrl: "#" },
    ],
    checklist: [
      { id: "chk-1", task: "Welcome Email Sent", isCompleted: true },
      { id: "chk-2", task: "Bank Details Collected", isCompleted: false },
      { id: "chk-3", task: "ID Card Photo Submitted", isCompleted: false },
      { id: "chk-4", task: "Workspace Allocation", isCompleted: false },
    ]
  },
  {
    id: "onb-2",
    tempId: "TEMP-2024-002",
    finalEmployeeId: "EMP-2024-88",
    firstName: "Sneha",
    lastName: "Pillai",
    email: "sneha.p@email.com",
    phone: "9988776655",
    departmentAssignment: "Administration",
    designation: "HR Executive",
    joiningDate: "2024-06-15",
    status: "System Setup",
    systemAccessGranted: false,
    documents: [
      { id: "doc-1", name: "Aadhar Card", isUploaded: true, isVerified: true, fileUrl: "#" },
      { id: "doc-2", name: "PAN Card", isUploaded: true, isVerified: true, fileUrl: "#" },
      { id: "doc-3", name: "Degree Certificate", isUploaded: true, isVerified: true, fileUrl: "#" },
    ],
    checklist: [
      { id: "chk-1", task: "Welcome Email Sent", isCompleted: true },
      { id: "chk-2", task: "Bank Details Collected", isCompleted: true },
      { id: "chk-3", task: "ID Card Photo Submitted", isCompleted: true },
      { id: "chk-4", task: "Workspace Allocation", isCompleted: true },
    ]
  }
];

