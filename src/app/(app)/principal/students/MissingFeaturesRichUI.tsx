
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 space-y-6">
      {/* Class/Section Details */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Class/Section Details</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Class</p>
            <p className="font-medium text-gray-900 dark:text-white">10th</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Section</p>
            <p className="font-medium text-gray-900 dark:text-white">A</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Academic Session</p>
            <p className="font-medium text-gray-900 dark:text-white">2026-2027</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Class Teacher</p>
            <p className="font-medium text-gray-900 dark:text-white">Mr. Rahul Sharma</p>
          </div>
        </div>
      </div>
    </div>
  );
}