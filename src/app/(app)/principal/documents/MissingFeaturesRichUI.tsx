
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4">TC Approval</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs bg-gray-50 dark:bg-gray-900/50"><tr><th className="p-3">Student</th><th className="p-3">Request Date</th><th className="p-3">Reason</th><th className="p-3">Status</th><th className="p-3">Actions</th></tr></thead>
            <tbody>
              <tr className="border-b dark:border-gray-700">
                <td className="p-3 font-medium">Sumit Singh (Class 10)</td><td className="p-3">18 Sep 2026</td><td className="p-3">Relocating</td><td className="p-3"><span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs">Pending</span></td>
                <td className="p-3 flex gap-2">
                  <button className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded text-xs hover:bg-emerald-200">Approve</button>
                  <button className="px-3 py-1 bg-red-100 text-red-700 rounded text-xs hover:bg-red-200">Reject</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}