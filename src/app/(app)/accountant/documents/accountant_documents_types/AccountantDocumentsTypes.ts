export type DocumentCategory = 'Bills' | 'Invoices' | 'Payment Proof' | 'Cheque Images' | 'Expense Documents' | 'Refund Documents' | 'Other Attachments';
export type DocumentFormat = 'PDF' | 'Image' | 'Excel' | 'Word';

export interface FinancialDocument {
  id: string;
  name: string;
  category: DocumentCategory;
  uploadDate: string;
  uploadedBy: string;
  size: string;
  format: DocumentFormat;
  referenceId?: string; // e.g. Expense ID or Receipt ID
  tags: string[];
}
