import { InvoiceRecord } from "../accountant_invoices_types/AccountantInvoicesTypes";

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const MOCK_INVOICES: InvoiceRecord[] = [
  {
    id: "INV-001",
    invoiceNo: "INV-2024-001",
    studentId: "STU-1001",
    studentName: "Aarav Sharma",
    className: "Class 10 - A",
    issueDate: "2024-04-01",
    dueDate: "2024-04-15",
    feeDetails: [
      { id: "F1", description: "Tuition Fee (Q1)", amount: 15000 },
      { id: "F2", description: "Library Fee", amount: 1000 },
    ],
    subTotal: 16000,
    taxAmount: 0,
    totalAmount: 16000,
    status: "Paid",
  },
  {
    id: "INV-002",
    invoiceNo: "INV-2024-002",
    studentId: "STU-1002",
    studentName: "Meera Reddy",
    className: "Class 9 - B",
    issueDate: "2024-04-05",
    dueDate: "2024-04-20",
    feeDetails: [
      { id: "F1", description: "Tuition Fee (Q1)", amount: 14000 },
      { id: "F3", description: "Transport Fee", amount: 3000 },
    ],
    subTotal: 17000,
    taxAmount: 0,
    totalAmount: 17000,
    status: "Unpaid",
  },
  {
    id: "INV-003",
    invoiceNo: "INV-2024-003",
    studentId: "STU-1003",
    studentName: "Vikram Das",
    className: "Class 12 - Sci",
    issueDate: "2024-03-01",
    dueDate: "2024-03-15",
    feeDetails: [
      { id: "F4", description: "Laboratory Fee", amount: 5000 },
    ],
    subTotal: 5000,
    taxAmount: 0,
    totalAmount: 5000,
    status: "Overdue",
    notes: "Late payment fine will be applied next week.",
  },
  {
    id: "INV-004",
    invoiceNo: "INV-2024-004",
    studentId: "STU-1004",
    studentName: "Sneha Gupta",
    className: "Class 5 - A",
    issueDate: "2024-04-10",
    dueDate: "2024-04-25",
    feeDetails: [
      { id: "F1", description: "Tuition Fee", amount: 8000 },
      { id: "F5", description: "Annual Activity Fee", amount: 2000 },
    ],
    subTotal: 10000,
    taxAmount: 500, // example 5% GST on activity
    totalAmount: 10500,
    status: "Unpaid",
  }
];
