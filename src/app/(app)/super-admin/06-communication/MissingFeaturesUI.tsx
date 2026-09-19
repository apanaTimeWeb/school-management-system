import React from 'react';

export default function MissingFeaturesUI() {
  return (
    <div className="mt-8 flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h2 className="text-xl font-bold text-text-primary">Additional Configuration</h2>
          <p className="text-sm text-text-secondary mt-1">Advanced settings and features for 06 communication</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">In-App</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure in-app settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure In-App
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Delivery Logs</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure delivery logs settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Delivery Logs
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Sender Name</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure sender name settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Sender Name
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Sender Email</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure sender email settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Sender Email
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Test Email Button</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure test email button settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Test Email Button
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email Logs</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure email logs settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Email Logs
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">API Config</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure api config settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure API Config
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Business Account</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure business account settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Business Account
          </button>
        </div>
      </div>
    </div>
  );
}
