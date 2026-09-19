
import React from 'react';
import { CheckCircle2, FileText, Users, XCircle, Clock } from 'lucide-react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 space-y-8">
      {/* Selection UI */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Admission Selection Status</h3>
        <div className="flex items-center justify-between p-4 border border-emerald-200 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-800 rounded-lg">
          <div className="flex items-center gap-4">
            <CheckCircle2 className="w-8 h-8 text-emerald-500" />
            <div>
              <p className="font-semibold text-emerald-900 dark:text-emerald-300">Selected for Admission</p>
              <p className="text-sm text-emerald-700 dark:text-emerald-400">Selection Date: 15 Sep 2026 | Score: 92%</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-md text-sm font-medium">Proceed to Fee</button>
        </div>
      </div>

      {/* Admission Reports */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Admission Reports & Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg text-center">
            <Users className="w-5 h-5 mx-auto mb-2 text-blue-500" />
            <p className="text-2xl font-bold">1,250</p>
            <p className="text-xs text-gray-500 uppercase">Total Applications</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg text-center">
            <CheckCircle2 className="w-5 h-5 mx-auto mb-2 text-emerald-500" />
            <p className="text-2xl font-bold">450</p>
            <p className="text-xs text-gray-500 uppercase">Selected</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg text-center">
            <Clock className="w-5 h-5 mx-auto mb-2 text-amber-500" />
            <p className="text-2xl font-bold">120</p>
            <p className="text-xs text-gray-500 uppercase">Waitlisted</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg text-center">
            <XCircle className="w-5 h-5 mx-auto mb-2 text-red-500" />
            <p className="text-2xl font-bold">680</p>
            <p className="text-xs text-gray-500 uppercase">Rejected</p>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th className="px-4 py-3">Class</th>
                <th className="px-4 py-3">Applications</th>
                <th className="px-4 py-3">Selected</th>
                <th className="px-4 py-3">Pending</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-medium">Class 1</td>
                <td className="px-4 py-3">300</td>
                <td className="px-4 py-3">100</td>
                <td className="px-4 py-3">20</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Class 2</td>
                <td className="px-4 py-3">250</td>
                <td className="px-4 py-3">80</td>
                <td className="px-4 py-3">15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}