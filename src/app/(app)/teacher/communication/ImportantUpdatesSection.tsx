
import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function ImportantUpdatesSection() {
  return (
    <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2"><AlertCircle className="w-5 h-5 text-amber-500" /> Class Communication & Important Updates</h3>
        <button className="px-4 py-2 bg-primary text-white rounded text-sm">Post Update</button>
      </div>
      <div className="space-y-4">
         <div className="p-4 border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-900/20 rounded-r-lg shadow-sm">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-semibold text-amber-900 dark:text-amber-400">Science Lab Practical Postponed</h4>
              <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded">High Priority</span>
            </div>
            <p className="text-sm text-amber-800 dark:text-amber-500 mb-2">The scheduled practical for Class 10 A has been moved to next Friday due to equipment maintenance.</p>
            <p className="text-xs text-amber-700/70 font-medium">Published by You • Today, 09:30 AM • Target: Class 10 A</p>
         </div>
      </div>
    </div>
  );
}
