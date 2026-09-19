
import React from 'react';
import { QrCode } from 'lucide-react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Barcode / QR Generation</h3>
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 border-2 border-dashed border-gray-300 flex items-center justify-center rounded">
              <QrCode className="w-10 h-10 text-gray-400" />
            </div>
            <div className="space-y-2 flex-1 text-sm">
              <input type="text" placeholder="Enter Book ID" className="w-full p-2 border rounded" />
              <button className="w-full p-2 bg-primary text-white rounded">Generate & Print</button>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Book Renewal</h3>
          <div className="p-3 border rounded-lg bg-gray-50 dark:bg-gray-900/50 mb-3 text-sm">
            <p className="font-semibold">Book: The Alchemist (ID: B104)</p>
            <p className="text-gray-500">Student: Ravi Kumar</p>
            <p className="text-red-500 mt-1">Due Date: 15 Sep 2026 (Fine: $2)</p>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 py-2 bg-blue-600 text-white rounded text-sm">Renew Book (+7 Days)</button>
            <button className="flex-1 py-2 bg-emerald-600 text-white rounded text-sm">Return & Pay Fine</button>
          </div>
        </div>
      </div>
    </div>
  );
}