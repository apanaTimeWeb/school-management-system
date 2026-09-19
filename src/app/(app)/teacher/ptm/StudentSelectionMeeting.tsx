
import React from 'react';
import { Calendar, Users } from 'lucide-react';

export default function StudentSelectionMeeting() {
  return (
    <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><Calendar className="w-5 h-5 text-primary" /> Schedule Parent Meeting & Student Selection</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="col-span-1 border-r dark:border-gray-700 pr-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Search Student</label>
            <input type="text" placeholder="Type student name or roll..." className="w-full p-2 border rounded text-sm mb-4" />
            <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
               <div className="p-2 border rounded border-blue-500 bg-blue-50 dark:bg-blue-900/20 cursor-pointer text-sm">
                  <p className="font-semibold">Rahul Sharma (Class 10 A)</p>
                  <p className="text-xs text-gray-500 mt-1">Parent: Rakesh Sharma</p>
               </div>
               <div className="p-2 border rounded hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer text-sm">
                  <p className="font-semibold">Priya Singh (Class 10 A)</p>
                  <p className="text-xs text-gray-500 mt-1">Parent: Anil Singh</p>
               </div>
            </div>
         </div>
         <div className="col-span-2 flex flex-col justify-center">
            <h4 className="font-medium text-gray-900 dark:text-white mb-4">Meeting Details for: <span className="text-blue-600">Rahul Sharma</span></h4>
            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
               <div><label className="block text-gray-500 mb-1">Date</label><input type="date" className="w-full p-2 border rounded" /></div>
               <div><label className="block text-gray-500 mb-1">Time Slot</label><select className="w-full p-2 border rounded"><option>14:00 - 14:30</option></select></div>
            </div>
            <div className="mb-4"><label className="block text-gray-500 mb-1">Teacher Remarks / Agenda</label><textarea className="w-full p-2 border rounded" rows={3}></textarea></div>
            <button className="px-6 py-2 bg-blue-600 text-white rounded font-medium self-end">Confirm Meeting Schedule</button>
         </div>
      </div>
    </div>
  );
}
