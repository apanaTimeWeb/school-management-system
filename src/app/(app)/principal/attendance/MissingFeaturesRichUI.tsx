
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 space-y-8">
      {/* Section-wise Attendance */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Section-wise Attendance</h3>
          <select className="p-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700">
            <option>Class 10 - Sec A</option>
            <option>Class 10 - Sec B</option>
          </select>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg"><p className="text-xs text-blue-600">Total Students</p><p className="text-xl font-bold">45</p></div>
          <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg"><p className="text-xs text-emerald-600">Present</p><p className="text-xl font-bold">42</p></div>
          <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg"><p className="text-xs text-red-600">Absent</p><p className="text-xl font-bold">3</p></div>
        </div>
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 dark:bg-gray-900/50"><tr><th className="p-2">Roll No</th><th className="p-2">Name</th><th className="p-2">Status</th></tr></thead>
          <tbody>
            <tr className="border-b dark:border-gray-700"><td className="p-2">101</td><td className="p-2">Rahul Kumar</td><td className="p-2"><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">Present</span></td></tr>
            <tr className="border-b dark:border-gray-700"><td className="p-2">102</td><td className="p-2">Amit Singh</td><td className="p-2"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Absent</span></td></tr>
          </tbody>
        </table>
        <div className="mt-4 flex justify-end"><button className="text-sm text-primary hover:underline">Export Data</button></div>
      </div>

      {/* Teacher-wise Attendance & Late/Absent */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Teacher-wise Attendance</h3>
          <div className="space-y-3">
            <div className="flex justify-between p-3 border dark:border-gray-700 rounded-lg">
              <div><p className="font-medium text-sm">Mr. Rakesh (Maths)</p></div>
              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs h-fit">Present</span>
            </div>
            <div className="flex justify-between p-3 border dark:border-gray-700 rounded-lg">
              <div><p className="font-medium text-sm">Mrs. Sunita (Science)</p></div>
              <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs h-fit">Late</span>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
             <h3 className="text-lg font-semibold">Late/Absent Overview</h3>
             <input type="date" className="p-1 text-sm border rounded bg-transparent" />
          </div>
          <div className="flex gap-4">
            <div className="flex-1 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
              <h4 className="text-amber-800 dark:text-amber-400 font-medium">Late Today</h4>
              <p className="text-2xl font-bold mt-2">12 Students</p>
              <p className="text-sm mt-1">2 Staff</p>
            </div>
            <div className="flex-1 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-800">
              <h4 className="text-red-800 dark:text-red-400 font-medium">Absent Today</h4>
              <p className="text-2xl font-bold mt-2">25 Students</p>
              <p className="text-sm mt-1">3 Staff</p>
            </div>
          </div>
        </div>
      </div>

      {/* Attendance Reports */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4">Attendance Reports</h3>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 border dark:border-gray-600 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-700">Daily Report</button>
          <button className="px-4 py-2 border dark:border-gray-600 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-700">Monthly Report</button>
          <button className="px-4 py-2 border dark:border-gray-600 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-700">Class Report</button>
          <button className="px-4 py-2 border dark:border-gray-600 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-700">Teacher/Staff Report</button>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm ml-auto">Export PDF/Excel</button>
        </div>
      </div>
    </div>
  );
}