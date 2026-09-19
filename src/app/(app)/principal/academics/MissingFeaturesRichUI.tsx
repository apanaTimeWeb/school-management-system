
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 space-y-8">
      {/* HOD Assignment */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">HOD Assignment</h3>
        <div className="flex gap-4 items-end mb-6">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Department</label>
            <select className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm">
              <option>Science</option>
              <option>Mathematics</option>
              <option>English</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Head of Department</label>
            <select className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm">
              <option>Dr. A. K. Singh</option>
              <option>Mrs. Sunita Verma</option>
            </select>
          </div>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium">Assign HOD</button>
        </div>
        <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg text-sm text-gray-600 dark:text-gray-400">
          <span className="font-semibold text-gray-900 dark:text-white">Current HOD (Science):</span> Dr. A. K. Singh
        </div>
      </div>

      {/* Academic Monitoring */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Academic Monitoring Dashboard</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h4 className="font-medium mb-3">Syllabus Completion</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1"><span>10th Science</span><span>75%</span></div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1"><span>9th Math</span><span>60%</span></div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h4 className="font-medium mb-3">Academic Status & Progress</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between p-2 bg-gray-50 dark:bg-gray-900/50 rounded">
                <span>Class 10 Progress</span><span className="text-emerald-500 font-medium">On Track</span>
              </li>
              <li className="flex justify-between p-2 bg-gray-50 dark:bg-gray-900/50 rounded">
                <span>Subject: Physics</span><span className="text-amber-500 font-medium">Slightly Delayed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}