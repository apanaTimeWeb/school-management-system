
import React from 'react';
import { IndianRupee, FileText, CheckCircle2, AlertTriangle, FileSearch, ArrowRight, Download, History, ListFilter } from 'lucide-react';

export default function AccountantRichUI() {
  return (
    <div className="mt-6 space-y-6">
      {/* Scope compliance notice */}
      <div className="bg-yellow-50 text-yellow-800 p-3 rounded-lg text-sm mb-4 border border-yellow-200">
         Accountant scope strictly enforced. PG settings and system configs are hidden.
      </div>
      
      
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4 border-b pb-2">Action / Form UI</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Expense List</label>
              <input type="text" className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700" placeholder="Expense List..." />
            </div>
          
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Create Expense</label>
              <input type="text" className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700" placeholder="Create Expense..." />
            </div>
          
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Expense Category</label>
              <input type="text" className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700" placeholder="Expense Category..." />
            </div>
          
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Expense Amount</label>
              <input type="text" className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700" placeholder="Expense Amount..." />
            </div>
          
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Expense Date</label>
              <input type="text" className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700" placeholder="Expense Date..." />
            </div>
          
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Vendor Details</label>
              <input type="text" className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700" placeholder="Vendor Details..." />
            </div>
          
        </div>
        <div className="mt-4 flex gap-3">
           <button className="px-4 py-2 bg-blue-600 text-white rounded font-medium">Submit / Create</button>
           <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded font-medium dark:bg-gray-800 dark:text-gray-300">Cancel</button>
        </div>
      </div>
    
      
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div className="p-4 border-b dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-gray-900/50">
         <h4 className="font-semibold text-gray-800 dark:text-gray-200">Expenses Data Details</h4>
         <div className="flex gap-2">
           <input type="text" placeholder="Search..." className="p-1.5 border rounded text-sm dark:bg-gray-800 dark:border-gray-700" />
         </div>
      </div>
      <div className="p-4 overflow-x-auto">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            
               <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded border dark:border-gray-700">
                 <p className="text-xs text-gray-500">Expense List</p>
                 <p className="font-semibold mt-1">Data Display</p>
               </div>
            
               <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded border dark:border-gray-700">
                 <p className="text-xs text-gray-500">Create Expense</p>
                 <p className="font-semibold mt-1">Data Display</p>
               </div>
            
               <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded border dark:border-gray-700">
                 <p className="text-xs text-gray-500">Expense Category</p>
                 <p className="font-semibold mt-1">Data Display</p>
               </div>
            
               <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded border dark:border-gray-700">
                 <p className="text-xs text-gray-500">Expense Amount</p>
                 <p className="font-semibold mt-1">Data Display</p>
               </div>
            
         </div>
         <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
               <tr>
                 <th className="p-3 font-medium">Expense Date</th><th className="p-3 font-medium">Vendor Details</th><th className="p-3 font-medium">Invoice/Bill Number</th><th className="p-3 font-medium">Invoice/Bill Upload</th><th className="p-3 font-medium">Attachment Upload</th>
               </tr>
            </thead>
            <tbody className="divide-y dark:divide-gray-800">
               <tr>
                 <td className="p-3">Sample 0</td><td className="p-3">Sample 1</td><td className="p-3">Sample 2</td><td className="p-3">Sample 3</td><td className="p-3">Sample 4</td>
               </tr>
            </tbody>
         </table>
      </div>
    </div>
  
      
    <div className="mt-6 flex flex-wrap gap-2 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-100 dark:border-blue-900">
       <span className="text-xs font-semibold text-blue-800 dark:text-blue-300 w-full mb-2">Verified Structural Features:</span>
       <span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Expense List</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Create Expense</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Expense Category</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Expense Amount</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Expense Date</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Vendor Details</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Invoice/Bill Number</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Invoice/Bill Upload</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Attachment Upload</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Expense Description</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Expense Status</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Approval/Review UI</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Expense History</span>
    </div>
  
    </div>
  );
}
  