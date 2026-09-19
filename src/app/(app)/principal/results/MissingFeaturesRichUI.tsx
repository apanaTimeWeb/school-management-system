
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 space-y-6">
      {/* Top Performers & Low Performers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top Performers</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-4 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">1</div>
              <div className="flex-1"><p className="font-semibold text-sm">Aditi Sharma</p><p className="text-xs text-emerald-600">Class 10 A</p></div>
              <div className="text-right"><p className="font-bold text-emerald-700 dark:text-emerald-400">98.5%</p><p className="text-xs">Grade A+</p></div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
              <div className="w-8 h-8 rounded-full bg-emerald-400 text-white flex items-center justify-center font-bold">2</div>
              <div className="flex-1"><p className="font-semibold text-sm">Rohan Verma</p><p className="text-xs text-emerald-600">Class 10 B</p></div>
              <div className="text-right"><p className="font-bold text-emerald-700 dark:text-emerald-400">97.2%</p><p className="text-xs">Grade A+</p></div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Low Performers / At Risk</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-800">
              <div><p className="font-semibold text-sm text-red-900 dark:text-red-300">Sumit Kumar</p><p className="text-xs text-red-700 dark:text-red-400">Class 9 C</p></div>
              <div className="text-right"><p className="font-bold text-red-700 dark:text-red-400">32.4%</p><p className="text-xs text-red-600">Needs Attention</p></div>
            </div>
          </div>
        </div>
      </div>

      {/* GPA/CGPA */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4">GPA/CGPA Summary</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 border dark:border-gray-700 rounded-lg text-center"><p className="text-sm text-gray-500">School Avg CGPA</p><p className="text-2xl font-bold mt-1">8.4</p></div>
          <div className="p-4 border dark:border-gray-700 rounded-lg text-center"><p className="text-sm text-gray-500">Class 10 Avg</p><p className="text-2xl font-bold mt-1">8.9</p></div>
          <div className="p-4 border dark:border-gray-700 rounded-lg text-center"><p className="text-sm text-gray-500">Class 12 Avg</p><p className="text-2xl font-bold mt-1">9.1</p></div>
        </div>
      </div>
    </div>
  );
}