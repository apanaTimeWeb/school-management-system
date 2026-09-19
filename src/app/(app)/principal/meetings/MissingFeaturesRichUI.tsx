
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">HOD Meetings & Minutes</h3>
          <button className="px-3 py-1.5 bg-primary text-white rounded text-sm">Schedule Meeting</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs bg-gray-50 dark:bg-gray-900/50"><tr><th className="p-3">Date/Time</th><th className="p-3">Agenda</th><th className="p-3">Attendees</th><th className="p-3">Action Items</th><th className="p-3">Status</th></tr></thead>
            <tbody>
              <tr className="border-b dark:border-gray-700">
                <td className="p-3">15 Sep, 2:00 PM</td><td className="p-3">Syllabus Review Q3</td><td className="p-3">All HODs (5/5)</td><td className="p-3">Update Science Lab Manual</td><td className="p-3"><span className="text-emerald-600 font-medium">Completed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}