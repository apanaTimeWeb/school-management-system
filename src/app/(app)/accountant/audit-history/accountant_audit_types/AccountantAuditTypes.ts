export type AuditEventType = 'Fee Edit' | 'Payment Cancellation' | 'Receipt Cancellation' | 'Refund' | 'Concession' | 'Fine Waiver' | 'Expense Edit';

export interface AuditLogRecord {
  id: string;
  who: string;
  what: string;
  when: string;
  amount: number | null;
  oldValue: string | null;
  newValue: string | null;
  transactionId: string;
  ipDevice: string;
  eventType: AuditEventType;
  reason?: string;
}
