import { PaymentMethodRecord } from "../accountant_methods_types/AccountantMethodsTypes";

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const MOCK_PAYMENT_METHODS: PaymentMethodRecord[] = [
  { 
    id: "PM-CASH", name: "Cash", type: "Offline", status: "Active", 
    description: "In-person cash collections at the counter.", 
    totalCollectedYTD: 150000, lastUsedDate: "Today"
  },
  { 
    id: "PM-UPI", name: "UPI", type: "Online", status: "Active", 
    description: "Unified Payments Interface (GPay, PhonePe, Paytm).", 
    totalCollectedYTD: 500000, configDetails: "schoolerp@ybl", lastUsedDate: "Today"
  },
  { 
    id: "PM-CARD", name: "Card (POS)", type: "Offline", status: "Active", 
    description: "Credit/Debit Card swipe at the fee counter.", 
    totalCollectedYTD: 75000, lastUsedDate: "Yesterday"
  },
  { 
    id: "PM-BANK", name: "Bank Transfer", type: "Offline", status: "Active", 
    description: "Direct NEFT, RTGS, or IMPS into the school account.", 
    totalCollectedYTD: 850000, configDetails: "A/C: 1234567890 | IFSC: HDFC000123", lastUsedDate: "Today"
  },
  { 
    id: "PM-CHEQUE", name: "Cheque", type: "Offline", status: "Active", 
    description: "Physical cheques submitted by parents.", 
    totalCollectedYTD: 120000, lastUsedDate: "2 Days Ago"
  },
  { 
    id: "PM-PG", name: "Online Gateway", type: "Online", status: "Under Maintenance", 
    description: "Razorpay / Stripe integration for Parent App.", 
    totalCollectedYTD: 350000, configDetails: "Razorpay (API Key Configured)", lastUsedDate: "Last Week"
  },
  { 
    id: "PM-CUSTOM", name: "Demand Draft", type: "Offline", status: "Inactive", 
    description: "Other configured manual methods.", 
    totalCollectedYTD: 0, lastUsedDate: "Never"
  },
];
