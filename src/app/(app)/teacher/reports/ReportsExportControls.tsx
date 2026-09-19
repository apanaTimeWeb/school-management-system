
import React from 'react';
import { DownloadCloud } from 'lucide-react';

export default function ReportsExportControls() {
  return (
    <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Export UI for Teacher Reports</h3>
      <div className="flex flex-wrap items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg border dark:border-gray-700">
         <select className="p-2 border rounded text-sm min-w-[200px]"><option>Class Attendance Report</option><option>Student Performance Marks</option><option>Syllabus Progress Report</option></select>
         <select className="p-2 border rounded text-sm"><option>Class 10 A</option></select>
         <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-2"></div>
         <button className="px-4 py-2 bg-red-50 text-red-600 border border-red-200 rounded text-sm font-medium hover:bg-red-100 flex items-center gap-2"><DownloadCloud className="w-4 h-4"/> Export PDF</button>
         <button className="px-4 py-2 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded text-sm font-medium hover:bg-emerald-100 flex items-center gap-2"><DownloadCloud className="w-4 h-4"/> Export Excel</button>
      </div>
    </div>
  );
}
