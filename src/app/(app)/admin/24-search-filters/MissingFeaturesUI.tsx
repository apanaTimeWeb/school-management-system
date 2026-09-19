import React from 'react';

export default function MissingFeaturesUI() {
  return (
    <div className="mt-8 flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col mb-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Additional Configuration</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Advanced settings and features for 24 search filters</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Fee Search</h3>
            <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">New</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">Configure and manage fee search settings seamlessly.</p>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm">
              Manage Fee
            </button>
            <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              View Logs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
