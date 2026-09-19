
import React from 'react';
import { Send, User } from 'lucide-react';

export default function StudentSpecificCommunication() {
  return (
    <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Student-specific Parent Communication</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 border dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900/20">
           <label className="block text-xs font-medium text-gray-500 mb-1">Select Student (Assigned Classes)</label>
           <select className="w-full p-2 mb-4 text-sm border rounded dark:bg-gray-800">
             <option>Rahul Sharma (Class 10 A)</option>
             <option>Priya Singh (Class 10 A)</option>
           </select>
           <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 border rounded-lg shadow-sm">
             <div className="p-2 bg-blue-100 text-blue-600 rounded-full"><User className="w-5 h-5"/></div>
             <div><p className="text-sm font-semibold">Mr. Rakesh Sharma</p><p className="text-xs text-gray-500">Father | +91 9876543210</p></div>
           </div>
        </div>
        
        <div className="col-span-2 flex flex-col gap-3">
           <select className="w-48 p-2 text-sm border rounded dark:bg-gray-800"><option>Academic Feedback</option><option>Behaviour/Discipline</option><option>Homework Alert</option></select>
           <textarea className="w-full p-3 border rounded-lg dark:bg-gray-800 flex-1 min-h-[120px] text-sm" placeholder="Write message to parent..."></textarea>
           <div className="flex justify-between items-center">
             <button className="text-sm text-gray-500 hover:text-gray-900">📎 Attach Document (Optional)</button>
             <button className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium flex items-center gap-2"><Send className="w-4 h-4"/> Send Message</button>
           </div>
        </div>
      </div>
    </div>
  );
}
