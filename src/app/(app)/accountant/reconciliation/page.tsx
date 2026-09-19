
import React from 'react';
import AccountantRichUI from './AccountantRichUI';

export default function reconciliationPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Reconciliation</h1>
      <p className="text-gray-600 dark:text-gray-400 mt-1">Manage reconciliation and related operations.</p>
      
      <AccountantRichUI />
    </div>
  );
}
