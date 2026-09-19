
import React from 'react';
import { FileText, Download, UploadCloud } from 'lucide-react';

export default function TeachingDocuments() {
  return (
    <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2"><FileText className="w-5 h-5 text-blue-500" /> Teaching Documents (Lesson Plans, Notes)</h3>
        <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded text-sm font-medium flex items-center gap-2"><UploadCloud className="w-4 h-4"/> Upload Teaching Document</button>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-900/50 text-gray-500">
            <tr><th className="px-4 py-3">Document Title</th><th className="px-4 py-3">Type</th><th className="px-4 py-3">Class/Subject</th><th className="px-4 py-3">Status</th><th className="px-4 py-3">Action</th></tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-gray-700">
              <td className="px-4 py-3 font-medium">Kinematics Lesson Plan W1</td>
              <td className="px-4 py-3">Lesson Plan</td>
              <td className="px-4 py-3">Class 11 - Physics</td>
              <td className="px-4 py-3"><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">Approved</span></td>
              <td className="px-4 py-3"><button className="text-blue-600 hover:bg-blue-50 p-1 rounded"><Download className="w-4 h-4"/></button></td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="px-4 py-3 font-medium">Chemical Bonding Notes V2</td>
              <td className="px-4 py-3">Study Notes</td>
              <td className="px-4 py-3">Class 10 - Chemistry</td>
              <td className="px-4 py-3"><span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">Personal Draft</span></td>
              <td className="px-4 py-3"><button className="text-blue-600 hover:bg-blue-50 p-1 rounded"><Download className="w-4 h-4"/></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
