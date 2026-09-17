// Accountant Authorization & Access Rules (As per requirements)

export const checkPaymentGatewayConfigAccess = (role: string) => {
  // IMPORTANT RULE: Payment Gateway configuration Accountant ka normal responsibility nahi; 
  // ye Super Admin side par rahega.
  if (role === 'ACCOUNTANT') {
    return false; // Strictly restricted
  }
  return role === 'SUPER_ADMIN';
};

export const checkGeneralFinanceAccess = (role: string) => {
  // Accountant has full access to Fee Collection, Receipts, Defaulters, etc.
  return role === 'ACCOUNTANT' || role === 'SUPER_ADMIN' || role === 'ADMIN';
};
