import type { EmployeeVault, DocumentAlert } from "../hr_documents_types/HrDocumentsTypes";

export const MOCK_VAULT_LIST: EmployeeVault[] = [
  {
    employeeId: "EMP-001", firstName: "Amit", lastName: "Kumar", department: "Mathematics", designation: "Senior Teacher",
    documents: [
      { id: "d-1", name: "Aadhar Card", category: "ID Proof", isUploaded: true, status: "Verified", uploadedAt: "2023-01-10", fileUrl: "#" },
      { id: "d-2", name: "Utility Bill", category: "Address Proof", isUploaded: true, status: "Verified", uploadedAt: "2023-01-10", fileUrl: "#" },
      { id: "d-3", name: "B.Ed Certificate", category: "Qualification", isUploaded: true, status: "Pending", uploadedAt: "2024-05-12", fileUrl: "#" },
      { id: "d-4", name: "Employment Contract", category: "Contract", isUploaded: true, status: "Verified", uploadedAt: "2023-01-10", expiryDate: "2024-12-31", fileUrl: "#" },
      { id: "d-5", name: "First Aid Training", category: "Certificates", isUploaded: false, status: "Pending" },
    ]
  },
  {
    employeeId: "EMP-002", firstName: "Priya", lastName: "Sharma", department: "Science", designation: "Teacher",
    documents: [
      { id: "d-6", name: "Passport", category: "ID Proof", isUploaded: true, status: "Verified", uploadedAt: "2022-06-15", fileUrl: "#" },
      { id: "d-7", name: "Rental Agreement", category: "Address Proof", isUploaded: true, status: "Verified", uploadedAt: "2022-06-15", expiryDate: "2024-06-01", fileUrl: "#" },
      { id: "d-8", name: "M.Sc Certificate", category: "Qualification", isUploaded: false, status: "Pending" },
      { id: "d-9", name: "Previous Experience Letter", category: "Experience", isUploaded: true, status: "Rejected", uploadedAt: "2024-01-20", fileUrl: "#" },
    ]
  },
  {
    employeeId: "EMP-005", firstName: "Suresh", lastName: "Patel", department: "Support", designation: "Janitor",
    documents: [
      { id: "d-10", name: "Aadhar Card", category: "ID Proof", isUploaded: true, status: "Verified", uploadedAt: "2021-03-10", fileUrl: "#" },
      { id: "d-11", name: "Voter ID", category: "Address Proof", isUploaded: false, status: "Pending" },
      { id: "d-12", name: "Police Clearance", category: "Other Documents", isUploaded: true, status: "Verified", uploadedAt: "2021-03-10", expiryDate: "2024-03-10", fileUrl: "#" },
    ]
  }
];

export const MOCK_DOCUMENT_ALERTS: DocumentAlert[] = [
  { id: "al-1", employeeId: "EMP-005", employeeName: "Suresh Patel", documentName: "Police Clearance", category: "Other Documents", alertType: "Expired", dueDate: "2024-03-10" },
  { id: "al-2", employeeId: "EMP-002", employeeName: "Priya Sharma", documentName: "Rental Agreement", category: "Address Proof", alertType: "Expired", dueDate: "2024-06-01" },
  { id: "al-3", employeeId: "EMP-001", employeeName: "Amit Kumar", documentName: "Employment Contract", category: "Contract", alertType: "Expiring Soon", dueDate: "2024-12-31" },
  { id: "al-4", employeeId: "EMP-002", employeeName: "Priya Sharma", documentName: "M.Sc Certificate", category: "Qualification", alertType: "Missing Critical", dueDate: "Immediate" },
];

