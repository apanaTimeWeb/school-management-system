import { ExpenseRecord } from "../accountant_expenses_types/AccountantExpensesTypes";

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const MOCK_EXPENSES: ExpenseRecord[] = [
  { id: "EXP-2024-001", category: "Electricity", vendor: "State Electricity Board", amount: 45000, expenseDate: "2024-03-01", paymentMethod: "Bank Transfer", billInvoiceRef: "INV-ELC-8899", hasAttachment: true, status: "Paid", requestedBy: "Accountant", approvalDate: "2024-03-02", approvedBy: "Principal" },
  { id: "EXP-2024-002", category: "Stationery", vendor: "Office Supplies Co.", amount: 12500, expenseDate: "2024-03-10", paymentMethod: "Card", billInvoiceRef: "BILL-OSC-445", hasAttachment: true, status: "Approved", requestedBy: "Accountant", approvalDate: "2024-03-11", approvedBy: "Admin" },
  { id: "EXP-2024-003", category: "Maintenance", vendor: "Plumbing Pros", amount: 5000, expenseDate: "2024-03-12", paymentMethod: "Cash", billInvoiceRef: "PL-005", hasAttachment: false, status: "Pending Approval", requestedBy: "Facilities Manager" },
  { id: "EXP-2024-004", category: "Events", vendor: "Decorators Inc", amount: 30000, expenseDate: "2024-03-15", paymentMethod: "Bank Transfer", billInvoiceRef: "DEC-2024", hasAttachment: true, status: "Rejected", requestedBy: "Event Coordinator", approvalDate: "2024-03-16", approvedBy: "Principal", remarks: "Budget exceeded for this month's events." },
  { id: "EXP-2024-005", category: "Internet", vendor: "FastNet ISP", amount: 4000, expenseDate: "2024-03-18", paymentMethod: "UPI", billInvoiceRef: "FN-77665", hasAttachment: true, status: "Pending Approval", requestedBy: "Accountant" },
];

export const EXPENSE_CATEGORIES = [
  "Electricity", "Stationery", "Maintenance", "Events", "Internet", "Water", "Fuel", "Salaries", "Marketing", "Others"
];
