
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Room/Bed Status</h3>
          <div className="grid grid-cols-2 gap-4">
             <div className="p-4 border rounded-lg text-center"><p className="text-gray-500 text-sm">Occupied Beds</p><p className="text-2xl font-bold text-blue-600">120</p></div>
             <div className="p-4 border rounded-lg text-center"><p className="text-gray-500 text-sm">Vacant Beds</p><p className="text-2xl font-bold text-emerald-600">30</p></div>
             <div className="p-4 border rounded-lg text-center"><p className="text-gray-500 text-sm">Reserved</p><p className="text-2xl font-bold text-amber-500">5</p></div>
             <div className="p-4 border rounded-lg text-center"><p className="text-gray-500 text-sm">Maintenance</p><p className="text-2xl font-bold text-red-500">2</p></div>
          </div>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Hostel Reports Summary</h3>
          <div className="space-y-3 text-sm">
             <button className="w-full text-left p-3 border rounded hover:bg-gray-50">Occupancy & Allocation Report</button>
             <button className="w-full text-left p-3 border rounded hover:bg-gray-50">Hostel Attendance & Leave Report</button>
             <button className="w-full text-left p-3 border rounded hover:bg-gray-50">Incidents & Maintenance Logs</button>
          </div>
        </div>
      </div>
    </div>
  );
}