
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 space-y-6">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4">Incident History & Discipline Reports</h3>
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded"><p className="text-sm">Total Incidents</p><p className="text-xl font-bold">24</p></div>
          <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded"><p className="text-sm">Warnings Issued</p><p className="text-xl font-bold text-amber-500">18</p></div>
          <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded"><p className="text-sm">Counselling</p><p className="text-xl font-bold text-blue-500">10</p></div>
          <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded"><p className="text-sm">Severe Actions</p><p className="text-xl font-bold text-red-500">2</p></div>
        </div>
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 dark:bg-gray-900/50"><tr><th className="p-2">Date</th><th className="p-2">Student/Staff</th><th className="p-2">Incident Type</th><th className="p-2">Action/Status</th></tr></thead>
          <tbody>
            <tr className="border-b dark:border-gray-700"><td className="p-2">18 Sep 2026</td><td className="p-2">Ravi Kumar (Std)</td><td className="p-2">Bullying</td><td className="p-2"><span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs">Warning Given</span></td></tr>
            <tr className="border-b dark:border-gray-700"><td className="p-2">15 Sep 2026</td><td className="p-2">Ajay Singh (Std)</td><td className="p-2">Property Damage</td><td className="p-2"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Parent Meeting</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}