
import React from 'react';
import { Navigation } from 'lucide-react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4">GPS Status Overview</h3>
          <div className="flex items-center gap-4 p-4 border border-emerald-200 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
            <div className="p-3 bg-emerald-100 rounded-full text-emerald-600"><Navigation className="w-6 h-6" /></div>
            <div>
              <p className="font-bold text-emerald-900 dark:text-emerald-300">Bus 01 (Route A)</p>
              <p className="text-sm text-emerald-700 dark:text-emerald-400">Status: Moving | Last Sync: Just now</p>
            </div>
            <span className="ml-auto px-2 py-1 bg-emerald-500 text-white rounded text-xs animate-pulse">Live</span>
          </div>
        </div>
        
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h3 className="text-lg font-semibold mb-4">Transport Reports</h3>
          <div className="space-y-2 text-sm">
            <button className="w-full text-left p-2 border rounded hover:bg-gray-50 dark:hover:bg-gray-700">Vehicle & Route Summary</button>
            <button className="w-full text-left p-2 border rounded hover:bg-gray-50 dark:hover:bg-gray-700">Student Allocation Report</button>
            <button className="w-full text-left p-2 border rounded hover:bg-gray-50 dark:hover:bg-gray-700">Transport Complaints & Incidents</button>
          </div>
        </div>
      </div>
    </div>
  );
}