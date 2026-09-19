
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Subject-wise Exams */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Subject-wise Exams</h3>
            <select className="p-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700">
              <option>Mathematics</option>
              <option>Science</option>
            </select>
          </div>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
              <div><p className="font-medium">Mid-Term Exam</p><p className="text-xs text-gray-500">Date: 12 Oct 2026</p></div>
              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs h-fit">Completed</span>
            </li>
            <li className="flex justify-between p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
              <div><p className="font-medium">Final Exam</p><p className="text-xs text-gray-500">Date: 15 Mar 2027</p></div>
              <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs h-fit">Scheduled</span>
            </li>
          </ul>
        </div>

        {/* Marks Entry Status */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Marks Entry Status</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1"><span>Class 10 - Math</span><span className="text-blue-600">Pending (35/40)</span></div>
              <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700"><div className="bg-blue-600 h-2 rounded-full" style={{width: '87%'}}></div></div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1"><span>Class 10 - Science</span><span className="text-emerald-600">Completed (40/40)</span></div>
              <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700"><div className="bg-emerald-500 h-2 rounded-full" style={{width: '100%'}}></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}