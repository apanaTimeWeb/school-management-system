import type { StudentFeesData } from '../student_fees_types/student_fees_types';

export const MOCK_FEES_DATA: StudentFeesData = {
  totalFee: 120000,
  totalPaid: 60000,
  totalPending: 60000,
  nextDueDate: "Oct 15, 2024",
  installments: [
    {
      id: "inst_1",
      title: "Quarter 1 (Apr - Jun)",
      dueDate: "Apr 15, 2024",
      amount: 30000,
      fine: 0,
      concession: 0,
      scholarship: 0,
      netAmount: 30000,
      status: "Paid",
      paidOn: "Apr 10, 2024",
      receiptNumber: "RCPT-2024-001"
    },
    {
      id: "inst_2",
      title: "Quarter 2 (Jul - Sep)",
      dueDate: "Jul 15, 2024",
      amount: 30000,
      fine: 500, // Late fee applied
      concession: 0,
      scholarship: 0,
      netAmount: 30500,
      status: "Paid",
      paidOn: "Jul 25, 2024",
      receiptNumber: "RCPT-2024-543"
    },
    {
      id: "inst_3",
      title: "Quarter 3 (Oct - Dec)",
      dueDate: "Oct 15, 2024",
      amount: 30000,
      fine: 0,
      concession: 0,
      scholarship: 5000, // 5k scholarship applied
      netAmount: 25000,
      status: "Unpaid"
    },
    {
      id: "inst_4",
      title: "Quarter 4 (Jan - Mar)",
      dueDate: "Jan 15, 2025",
      amount: 30000,
      fine: 0,
      concession: 0,
      scholarship: 0,
      netAmount: 30000,
      status: "Unpaid"
    }
  ],
  history: [
    {
      id: "txn_1",
      date: "Jul 25, 2024",
      installmentTitle: "Quarter 2 (Jul - Sep)",
      amountPaid: 30500,
      paymentMethod: "Online",
      transactionId: "TXN-987654321",
      receiptNumber: "RCPT-2024-543",
      status: "Success"
    },
    {
      id: "txn_2",
      date: "Apr 10, 2024",
      installmentTitle: "Quarter 1 (Apr - Jun)",
      amountPaid: 30000,
      paymentMethod: "Bank Transfer",
      transactionId: "NEFT-123456789",
      receiptNumber: "RCPT-2024-001",
      status: "Success"
    }
  ]
};
