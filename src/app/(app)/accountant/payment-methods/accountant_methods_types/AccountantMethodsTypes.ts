export type PaymentMethodStatus = 'Active' | 'Inactive' | 'Under Maintenance';
export type PaymentMethodType = 'Offline' | 'Online';

export interface PaymentMethodRecord {
  id: string; // e.g., PM-CASH
  name: string; // Cash, UPI, Bank Transfer
  type: PaymentMethodType;
  status: PaymentMethodStatus;
  description: string;
  totalCollectedYTD: number;
  configDetails?: string; // e.g., Bank Account Number or UPI ID
  lastUsedDate?: string;
}
