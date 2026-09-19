
import React from 'react';
import { Users, UserCheck } from 'lucide-react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Total Teachers/Staff */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Teachers/Staff</p>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">145</h3>
            <div className="flex gap-4 mt-4">
              <div className="flex items-center gap-1.5 text-sm">
                <Users className="w-4 h-4 text-blue-500" />
                <span className="text-gray-600 dark:text-gray-300">120 Teachers</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <UserCheck className="w-4 h-4 text-emerald-500" />
                <span className="text-gray-600 dark:text-gray-300">25 Staff</span>
              </div>
            </div>
          </div>
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
      </div>
    </div>
  );
}