export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const MOCK_KPIS = {
  todaysCollection: 45000,
  monthlyCollection: 1250000,
  totalOutstanding: 450000,
  overdueFees: 125000,
  trends: {
    today: 12.5,
    monthly: 5.2,
    outstanding: -2.4,
    overdue: 8.1,
  }
};

export const MOCK_TRANSACTIONS = [
  { id: "TXN-1001", studentName: "Rohan Sharma", className: "10th A", amount: 5000, method: "UPI", status: "Paid", time: "10:30 AM" },
  { id: "TXN-1002", studentName: "Priya Singh", className: "8th B", amount: 12000, method: "Card", status: "Paid", time: "11:15 AM" },
  { id: "TXN-1003", studentName: "Amit Kumar", className: "12th Sci", amount: 3500, method: "Cash", status: "Paid", time: "12:05 PM" },
  { id: "TXN-1004", studentName: "Neha Verma", className: "9th C", amount: 8000, method: "Bank", status: "Pending", time: "01:20 PM" },
  { id: "TXN-1005", studentName: "Rahul Das", className: "7th A", amount: 4500, method: "UPI", status: "Failed", time: "02:45 PM" },
] as const;

export const MOCK_DEFAULTERS = [
  { id: "DEF-001", studentName: "Karan Johar", className: "11th Com", pendingAmount: 15000, dueDate: "2023-10-15", guardianPhone: "9876543210" },
  { id: "DEF-002", studentName: "Sneha Patil", className: "9th B", pendingAmount: 8500, dueDate: "2023-10-20", guardianPhone: "9988776655" },
  { id: "DEF-003", studentName: "Vikram Singh", className: "10th C", pendingAmount: 12000, dueDate: "2023-10-25", guardianPhone: "9123456780" },
];

export const MOCK_PENDING_REFUNDS = [
  { id: "REF-001", studentName: "Anjali Desai", type: "Refund", amount: 2500, reason: "Double Payment", requestedDate: "2023-11-01" },
  { id: "REF-002", studentName: "Mohit Rao", type: "Refund", amount: 5000, reason: "Cancellation", requestedDate: "2023-11-02" },
] as const;

export const MOCK_PENDING_CONCESSIONS = [
  { id: "CON-001", studentName: "Riya Sen", type: "Concession", amount: 3000, reason: "Sports Quota", requestedDate: "2023-11-03" },
  { id: "CON-002", studentName: "Arun Nair", type: "Concession", amount: 5000, reason: "Sibling Discount", requestedDate: "2023-11-04" },
] as const;
