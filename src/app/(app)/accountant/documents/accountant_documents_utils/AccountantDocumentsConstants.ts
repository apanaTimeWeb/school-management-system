import { FinancialDocument, DocumentCategory } from "../accountant_documents_types/AccountantDocumentsTypes";

export const DOCUMENT_CATEGORIES: DocumentCategory[] = [
  'Bills', 'Invoices', 'Payment Proof', 'Cheque Images', 
  'Expense Documents', 'Refund Documents', 'Other Attachments'
];

export const MOCK_DOCUMENTS: FinancialDocument[] = [
  {
    id: "DOC-001",
    name: "Electricity_Bill_Mar2024.pdf",
    category: "Bills",
    uploadDate: "2024-04-10",
    uploadedBy: "Accountant (You)",
    size: "1.2 MB",
    format: "PDF",
    referenceId: "EXP-101",
    tags: ["Utility", "March", "Paid"]
  },
  {
    id: "DOC-002",
    name: "Cheque_Rahul_HDFC.jpg",
    category: "Cheque Images",
    uploadDate: "2024-04-18",
    uploadedBy: "Accountant (You)",
    size: "450 KB",
    format: "Image",
    referenceId: "REC-992",
    tags: ["Pending Clearance", "Tuition Fee"]
  },
  {
    id: "DOC-003",
    name: "Vendor_Invoice_Stationery.pdf",
    category: "Invoices",
    uploadDate: "2024-04-15",
    uploadedBy: "Admin",
    size: "890 KB",
    format: "PDF",
    referenceId: "EXP-105",
    tags: ["Stationery", "Vendor"]
  },
  {
    id: "DOC-004",
    name: "Refund_Approval_Sneha.pdf",
    category: "Refund Documents",
    uploadDate: "2024-04-12",
    uploadedBy: "Principal",
    size: "2.1 MB",
    format: "PDF",
    referenceId: "REF-04",
    tags: ["Approved", "Security Deposit"]
  },
  {
    id: "DOC-005",
    name: "Fee_Collection_Summary_Q1.xlsx",
    category: "Other Attachments",
    uploadDate: "2024-04-01",
    uploadedBy: "Accountant (You)",
    size: "15 KB",
    format: "Excel",
    tags: ["Quarterly", "Summary"]
  }
];
