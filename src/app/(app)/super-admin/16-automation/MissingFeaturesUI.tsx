import React from 'react';

export default function MissingFeaturesUI() {
  return (
    <div className="mt-8 flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h2 className="text-xl font-bold text-text-primary">Additional Configuration</h2>
          <p className="text-sm text-text-secondary mt-1">Advanced settings and features for 16 automation</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Enable/Disable</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure enable/disable settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Enable/Disable
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Fee Reminder</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure fee reminder settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Fee Reminder
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Attendance Reminder</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure attendance reminder settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Attendance Reminder
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Result Reminder</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure result reminder settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Result Reminder
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Leave Reminder</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure leave reminder settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Leave Reminder
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Backup Automation</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure backup automation settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Backup Automation
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Daily Reports</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure daily reports settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Daily Reports
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Monthly Reports</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure monthly reports settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Monthly Reports
          </button>
        </div>
      </div>
    </div>
  );
}
