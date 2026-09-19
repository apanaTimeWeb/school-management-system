
import React from 'react';
import { Bell } from 'lucide-react';

export default function ReplacementNotification() {
  return (
    <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Replacement Teacher Notifications</h3>
      <div className="space-y-3">
         <div className="flex gap-4 p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800">
            <div className="pt-1 text-blue-500"><Bell className="w-5 h-5" /></div>
            <div>
               <h4 className="font-semibold text-blue-900 dark:text-blue-300">Substitute Assigned: Class 9 B (English)</h4>
               <p className="text-sm text-blue-800 dark:text-blue-400 mt-1">You have been assigned as a replacement teacher for Period 4 today.</p>
               <div className="mt-3 flex gap-4 text-xs font-medium text-blue-700 dark:text-blue-500 bg-blue-100/50 p-2 rounded">
                 <span>Date: {new Date().toLocaleDateString()}</span>
                 <span>Original Teacher: Mr. Ramesh</span>
                 <span>Room: 204</span>
               </div>
               <div className="mt-3 flex gap-2">
                 <button className="px-3 py-1.5 bg-blue-600 text-white rounded text-xs">Acknowledge</button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
