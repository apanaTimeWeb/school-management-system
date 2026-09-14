import { GlobalSearchResult, GlobalSearchEntityType } from "../accountant_search_types/AccountantSearchTypes";

export const SEARCH_ENTITY_TYPES: GlobalSearchEntityType[] = [
  'Student', 'Receipt', 'Invoice', 'Transaction'
];

export const MOCK_SEARCH_RESULTS: GlobalSearchResult[] = [
  {
    id: "ADM-2023-001",
    type: "Student",
    title: "Aarav Sharma (Class 10-A)",
    amount: 15000,
    date: "2024-04-18",
    status: "Due",
    reference: "N/A",
    details: "Outstanding Q1 Tuition Fee."
  },
  {
    id: "REC-90112",
    type: "Receipt",
    title: "Fee Collection - Sneha Reddy",
    amount: 8500,
    date: "2024-04-17",
    status: "Paid",
    reference: "Online (Razorpay)",
    details: "Transport and Library fees paid."
  },
  {
    id: "INV-2024-045",
    type: "Invoice",
    title: "Quarterly Fee Invoice - Rahul Verma",
    amount: 12000,
    date: "2024-04-01",
    status: "Pending",
    reference: "Generated via System",
    details: "Due date is 15th April."
  },
  {
    id: "TXN-88192304",
    type: "Transaction",
    title: "Bank Transfer - HDFC",
    amount: 50000,
    date: "2024-04-16",
    status: "Success",
    reference: "UTR: HDFC10029391",
    details: "Settlement for bulk online payments."
  },
  {
    id: "REC-90113",
    type: "Receipt",
    title: "Fee Collection - Vihaan",
    amount: 1000,
    date: "2024-04-18",
    status: "Cancelled",
    reference: "Cash",
    details: "Cancelled due to typing error."
  }
];
