import React from 'react';

export default function MissingFeaturesUI() {
  return (
    <div className="mt-8 flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h2 className="text-xl font-bold text-text-primary">Additional Configuration</h2>
          <p className="text-sm text-text-secondary mt-1">Advanced settings and features for 18 audit security</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Password Policy</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure password policy settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Password Policy
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Backup Codes</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure backup codes settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Backup Codes
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Audit Table</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure audit table settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Audit Table
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Password Change</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure password change settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Password Change
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Permission Change</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure permission change settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Permission Change
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Config Change</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure config change settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Config Change
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Secret Masking</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure secret masking settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Secret Masking
          </button>
        </div>
      </div>
    </div>
  );
}
