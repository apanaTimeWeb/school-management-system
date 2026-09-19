
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Staff Reports & Workload</h3>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm">Export Staff Report</button>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg"><p className="text-sm text-gray-500">Total Staff</p><p className="text-xl font-bold">145</p></div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg"><p className="text-sm text-gray-500">On Leave</p><p className="text-xl font-bold text-amber-500">5</p></div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg"><p className="text-sm text-gray-500">Avg Workload</p><p className="text-xl font-bold">24 Periods/Wk</p></div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg"><p className="text-sm text-gray-500">Depts</p><p className="text-xl font-bold">12</p></div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs bg-gray-50 dark:bg-gray-900/50"><tr><th className="p-3">Department</th><th className="p-3">Staff Count</th><th className="p-3">Attendance %</th><th className="p-3">Avg Workload</th></tr></thead>
            <tbody>
              <tr className="border-b dark:border-gray-700"><td className="p-3">Science</td><td className="p-3">15</td><td className="p-3">96%</td><td className="p-3">26 Periods</td></tr>
              <tr className="border-b dark:border-gray-700"><td className="p-3">Mathematics</td><td className="p-3">12</td><td className="p-3">98%</td><td className="p-3">28 Periods</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}