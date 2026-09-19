
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Cultural Activities</h3>
          <div className="p-4 border rounded-lg bg-pink-50 dark:bg-pink-900/20 border-pink-100">
            <div className="flex justify-between items-start mb-2">
               <h4 className="font-bold text-pink-900 dark:text-pink-300">Annual Art Exhibition</h4>
               <span className="px-2 py-1 bg-pink-200 text-pink-800 rounded text-xs">Upcoming</span>
            </div>
            <p className="text-sm text-pink-800 dark:text-pink-400 mb-2">Date: 25 Oct 2026</p>
            <p className="text-sm">Participants Registered: 45</p>
          </div>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Event Reports & Statistics</h3>
          <div className="space-y-3 text-sm">
             <div className="flex justify-between p-2 border-b"><span className="text-gray-600">Total Events This Year</span><span className="font-bold">12</span></div>
             <div className="flex justify-between p-2 border-b"><span className="text-gray-600">Total Participants</span><span className="font-bold">450</span></div>
             <div className="flex justify-between p-2 border-b"><span className="text-gray-600">Certificates Issued</span><span className="font-bold">120</span></div>
             <button className="w-full mt-2 py-2 border rounded hover:bg-gray-50">Generate Event Report PDF</button>
          </div>
        </div>
      </div>
    </div>
  );
}