
import React from 'react';
import { ClipboardList } from 'lucide-react';

export default function InternalAssessmentUI() {
  return (
    <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold flex items-center gap-2"><ClipboardList className="w-5 h-5 text-primary" /> Internal Assessment Marks Entry</h3>
        <div className="flex gap-2">
           <select className="p-1.5 text-sm border rounded"><option>Class 10 A - Science</option></select>
           <select className="p-1.5 text-sm border rounded"><option>Practical Exam</option><option>Project Work</option></select>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-900/50 text-gray-500">
            <tr><th className="px-4 py-3">Roll No</th><th className="px-4 py-3">Student Name</th><th className="px-4 py-3">Marks Obtained</th><th className="px-4 py-3">Max Marks</th><th className="px-4 py-3">Remarks</th></tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-gray-700">
              <td className="px-4 py-3">101</td><td className="px-4 py-3 font-medium">Rahul Sharma</td>
              <td className="px-4 py-3"><input type="number" className="w-20 p-1 border rounded text-center" defaultValue="18" /></td>
              <td className="px-4 py-3">20</td>
              <td className="px-4 py-3"><input type="text" className="w-full p-1 border rounded" placeholder="Good effort" /></td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="px-4 py-3">102</td><td className="px-4 py-3 font-medium">Priya Singh</td>
              <td className="px-4 py-3"><input type="number" className="w-20 p-1 border rounded text-center" defaultValue="19" /></td>
              <td className="px-4 py-3">20</td>
              <td className="px-4 py-3"><input type="text" className="w-full p-1 border rounded" placeholder="Excellent" /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end gap-3">
        <button className="px-4 py-2 border rounded text-sm font-medium">Save as Draft</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium">Submit Internal Marks</button>
      </div>
    </div>
  );
}
