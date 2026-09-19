import React from 'react';

export default function MissingFeaturesUI() {
  return (
    <div className="mt-8 flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h2 className="text-xl font-bold text-text-primary">Additional Configuration</h2>
          <p className="text-sm text-text-secondary mt-1">Advanced settings and features for 04 users access</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Reset Password</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure reset password settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Reset Password
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Force Password Change</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure force password change settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Force Password Change
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Force Logout</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure force logout settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Force Logout
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Lock Account</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure lock account settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Lock Account
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Unlock Account</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure unlock account settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Unlock Account
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Search</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure search settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Search
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Filters</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure filters settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Filters
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Create Role</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure create role settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Create Role
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Edit Role</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure edit role settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Edit Role
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Branch Scope</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure branch scope settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Branch Scope
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Class Scope</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure class scope settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Class Scope
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Section Scope</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure section scope settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Section Scope
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Subject Scope</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure subject scope settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Subject Scope
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Logout All</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage and configure logout all settings.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Configure Logout All
          </button>
        </div>
      </div>
    </div>
  );
}
