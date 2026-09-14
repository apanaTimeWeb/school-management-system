import { AuditLogRecord, AuditEventType } from "../accountant_audit_types/AccountantAuditTypes";

export const AUDIT_EVENT_TYPES: AuditEventType[] = [
  'Fee Edit', 'Payment Cancellation', 'Receipt Cancellation', 
  'Refund', 'Concession', 'Fine Waiver', 'Expense Edit'
];

export const MOCK_AUDIT_LOGS: AuditLogRecord[] = [
  {
    id: "AUD-1042",
    who: "Rahul Accountant (ACC-01)",
    what: "Waived late fine for STU-2041 (Aarav)",
    when: "2024-04-18 14:30:22",
    amount: 500,
    oldValue: "₹500.00",
    newValue: "₹0.00",
    transactionId: "TXN-FINE-881",
    ipDevice: "192.168.1.45 (Windows PC)",
    eventType: "Fine Waiver",
    reason: "Medical emergency as per Principal approval."
  },
  {
    id: "AUD-1041",
    who: "Super Admin (SYS-01)",
    what: "Cancelled Receipt REC-0992",
    when: "2024-04-18 10:15:00",
    amount: 15000,
    oldValue: "Valid",
    newValue: "Cancelled",
    transactionId: "REC-0992",
    ipDevice: "10.0.0.5 (MacBook Pro)",
    eventType: "Receipt Cancellation",
    reason: "Duplicate entry by mistake."
  },
  {
    id: "AUD-1040",
    who: "Rahul Accountant (ACC-01)",
    what: "Edited Vendor Expense - Stationery",
    when: "2024-04-17 16:45:12",
    amount: 4500,
    oldValue: "₹4,000.00",
    newValue: "₹4,500.00",
    transactionId: "EXP-105",
    ipDevice: "192.168.1.45 (Windows PC)",
    eventType: "Expense Edit",
    reason: "Tax calculation added post bill verification."
  },
  {
    id: "AUD-1039",
    who: "Principal (PRIN-01)",
    what: "Approved Concession for STU-3099",
    when: "2024-04-16 09:10:05",
    amount: 2000,
    oldValue: "₹10,000.00",
    newValue: "₹8,000.00",
    transactionId: "CON-443",
    ipDevice: "192.168.1.12 (iPad)",
    eventType: "Concession",
    reason: "Sports quota concession."
  },
  {
    id: "AUD-1038",
    who: "Rahul Accountant (ACC-01)",
    what: "Cancelled Online Payment",
    when: "2024-04-15 11:20:44",
    amount: 8500,
    oldValue: "Success",
    newValue: "Reverted",
    transactionId: "TXN-ONL-7712",
    ipDevice: "192.168.1.45 (Windows PC)",
    eventType: "Payment Cancellation",
    reason: "Bank settlement failure. Reverted to dues."
  }
];
