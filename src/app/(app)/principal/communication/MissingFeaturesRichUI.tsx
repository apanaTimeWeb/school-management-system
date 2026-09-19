
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Send Section Notification</h3>
          <div className="space-y-4 text-sm">
            <select className="w-full p-2 border rounded"><option>Select Class - Section</option><option>Class 10 - A</option></select>
            <textarea className="w-full p-2 border rounded" rows="3" placeholder="Type notification message..."></textarea>
            <button className="px-4 py-2 bg-primary text-white rounded w-full">Broadcast to Section</button>
          </div>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Send Staff Notification</h3>
          <div className="space-y-4 text-sm">
            <div className="flex gap-2">
               <select className="flex-1 p-2 border rounded"><option>All Departments</option><option>Science</option></select>
               <select className="flex-1 p-2 border rounded"><option>Select Specific Staff</option></select>
            </div>
            <textarea className="w-full p-2 border rounded" rows="3" placeholder="Type staff announcement..."></textarea>
            <button className="px-4 py-2 bg-blue-600 text-white rounded w-full">Broadcast to Staff</button>
          </div>
        </div>
      </div>
    </div>
  );
}