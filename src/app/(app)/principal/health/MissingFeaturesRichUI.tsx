
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4">Health Reports & Medical Alerts</h3>
        <div className="grid grid-cols-3 gap-4 mb-6">
           <div className="p-4 bg-emerald-50 text-emerald-900 border border-emerald-100 rounded-lg"><p className="text-sm">Health Checkups Done</p><p className="text-xl font-bold">450</p></div>
           <div className="p-4 bg-red-50 text-red-900 border border-red-100 rounded-lg"><p className="text-sm">Emergency Cases (YTD)</p><p className="text-xl font-bold">3</p></div>
           <div className="p-4 bg-amber-50 text-amber-900 border border-amber-100 rounded-lg"><p className="text-sm">Active Medical Alerts</p><p className="text-xl font-bold">12</p></div>
        </div>
        <div className="flex gap-2">
           <button className="px-4 py-2 bg-primary text-white rounded text-sm">Generate Full Health Report</button>
           <button className="px-4 py-2 border rounded text-sm">View Medical Incidents Log</button>
        </div>
      </div>
    </div>
  );
}