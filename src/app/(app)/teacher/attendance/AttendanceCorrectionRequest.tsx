
import React from 'react';
import { Edit3, CheckCircle, Clock } from 'lucide-react';

export default function AttendanceCorrectionRequest() {
  return (
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><Edit3 className="w-5 h-5 text-amber-500" /> Attendance Edit/Correction Request</h3>
        <form className="space-y-4 text-sm">
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-gray-500 mb-1">Date</label><input type="date" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" /></div>
            <div><label className="block text-gray-500 mb-1">Class/Section</label><select className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"><option>Class 10 A</option></select></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-gray-500 mb-1">Student</label><select className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"><option>Rahul Sharma (Roll 15)</option></select></div>
            <div><label className="block text-gray-500 mb-1">Requested Status</label><select className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"><option>Present</option><option>Leave</option></select></div>
          </div>
          <div><label className="block text-gray-500 mb-1">Correction Reason</label><textarea className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" rows={2} placeholder="Entered by mistake..."></textarea></div>
          <button type="button" className="w-full py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700">Submit Request to Admin</button>
        </form>
      </div>
      
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4">Recent Correction Requests</h3>
        <div className="space-y-3">
           <div className="p-3 border rounded-lg flex justify-between items-center bg-gray-50 dark:bg-gray-900/50">
             <div>
               <p className="font-semibold text-sm">Rahul Sharma <span className="font-normal text-gray-500">| 15 Sep</span></p>
               <p className="text-xs text-gray-500">Requested: Absent → Present</p>
             </div>
             <span className="flex items-center gap-1 text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded-full"><Clock className="w-3 h-3"/> Pending</span>
           </div>
           <div className="p-3 border rounded-lg flex justify-between items-center bg-gray-50 dark:bg-gray-900/50">
             <div>
               <p className="font-semibold text-sm">Priya Singh <span className="font-normal text-gray-500">| 12 Sep</span></p>
               <p className="text-xs text-gray-500">Requested: Present → Leave</p>
             </div>
             <span className="flex items-center gap-1 text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full"><CheckCircle className="w-3 h-3"/> Approved</span>
           </div>
        </div>
      </div>
    </div>
  );
}
