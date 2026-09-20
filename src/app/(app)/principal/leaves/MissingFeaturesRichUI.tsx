"use client";

import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 space-y-6">
      {/* Leave Rejection UI */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4">Pending Leave Requests</h3>
        <div className="p-4 border dark:border-gray-700 rounded-lg flex justify-between items-center">
          <div><p className="font-semibold">Amit Kumar (Teacher)</p><p className="text-sm text-gray-500">Medical Leave: 20 Oct - 22 Oct</p></div>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded text-sm hover:bg-emerald-200">Approve</button>
            <button className="px-3 py-1.5 bg-red-100 text-red-700 rounded text-sm hover:bg-red-200" onClick={() => alert('Reject Dialog Opened: Please enter rejection reason in textarea.')}>Reject</button>
          </div>
        </div>
      </div>

      {/* Leave Reports */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Leave Reports Overview</h3>
          <div className="flex gap-2 text-sm">
            <input type="date" className="p-1.5 border rounded" />
            <select className="p-1.5 border rounded"><option>All Leave Types</option></select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-lg text-emerald-900"><p className="font-semibold">Approved</p><p className="text-2xl mt-1">45</p></div>
          <div className="p-4 bg-red-50 border border-red-100 rounded-lg text-red-900"><p className="font-semibold">Rejected</p><p className="text-2xl mt-1">12</p></div>
          <div className="p-4 bg-amber-50 border border-amber-100 rounded-lg text-amber-900"><p className="font-semibold">Pending</p><p className="text-2xl mt-1">8</p></div>
        </div>
      </div>
    </div>
  );
}
