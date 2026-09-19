import React from 'react';

export default function MissingFeaturesUI() {
  return (
    <div className="mt-8 flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h2 className="text-xl font-bold text-text-primary">Additional Configuration</h2>
          <p className="text-sm text-text-secondary mt-1">Advanced settings and features for 19 system health</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Server Status</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure server status settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Server Status
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Queue Status</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure queue status settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Queue Status
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">API Status</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure api status settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure API Status
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Notification Service</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure notification service settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Notification Service
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Payment Service</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure payment service settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Payment Service
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Application Version</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure application version settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Application Version
          </button>
        </div>
      </div>
    </div>
  );
}
