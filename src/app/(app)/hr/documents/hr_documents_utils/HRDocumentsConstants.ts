import { HRDocument } from '../hr_documents_types/HRDocumentsTypes';

export const MOCK_HR_DOCUMENTS: HRDocument[] = [
  {
    id: "DOC-001",
    employeeId: "T101",
    name: "Dr. Ananya Sharma",
    documentType: "KYC",
    documentName: "Aadhar_Card_Ananya.pdf",
    uploadedDate: "2015-06-05",
    status: "Verified",
    size: "1.2 MB"
  },
  {
    id: "DOC-002",
    employeeId: "E103",
    name: "Vijay Singh",
    documentType: "Certificate",
    documentName: "BSc_Degree_Vijay.pdf",
    uploadedDate: "2019-11-01",
    status: "Verified",
    size: "2.4 MB"
  },
  {
    id: "DOC-003",
    employeeId: "E105",
    name: "Aakash Gupta",
    documentType: "Resume",
    documentName: "Aakash_Resume_2026.pdf",
    uploadedDate: "2026-09-12",
    status: "Pending",
    size: "800 KB"
  },
  {
    id: "DOC-004",
    employeeId: "T102",
    name: "Mr. Rahul Verma",
    documentType: "Contract",
    documentName: "Employment_Agreement_2018.pdf",
    uploadedDate: "2018-04-10",
    status: "Verified",
    size: "3.1 MB"
  }
];
