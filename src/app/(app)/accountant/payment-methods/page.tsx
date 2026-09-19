
import React from 'react';
import AccountantRichUI from './AccountantRichUI';

export default function paymentmethodsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Payment Methods Tracking</h1>
      <p className="text-gray-600 dark:text-gray-400 mt-1">Manage payment methods tracking and related operations.</p>
      
      <AccountantRichUI />
    </div>
  );
}
