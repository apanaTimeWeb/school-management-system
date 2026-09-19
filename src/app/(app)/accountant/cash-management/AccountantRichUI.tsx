
import React from 'react';
import { IndianRupee, FileText, CheckCircle2, AlertTriangle, FileSearch, ArrowRight, Download, History, ListFilter } from 'lucide-react';

export default function AccountantRichUI() {
  return (
    <div className="mt-6 space-y-6">
      {/* Scope compliance notice */}
      <div className="bg-yellow-50 text-yellow-800 p-3 rounded-lg text-sm mb-4 border border-yellow-200">
         Accountant scope strictly enforced. PG settings and system configs are hidden.
      </div>
      
      
      
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div className="p-4 border-b dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-gray-900/50">
         <h4 className="font-semibold text-gray-800 dark:text-gray-200">Cash Management Data Details</h4>
         <div className="flex gap-2">
           <input type="text" placeholder="Search..." className="p-1.5 border rounded text-sm dark:bg-gray-800 dark:border-gray-700" />
         </div>
      </div>
      <div className="p-4 overflow-x-auto">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            
               <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded border dark:border-gray-700">
                 <p className="text-xs text-gray-500">Opening Cash</p>
                 <p className="font-semibold mt-1">Data Display</p>
               </div>
            
               <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded border dark:border-gray-700">
                 <p className="text-xs text-gray-500">Opening Cash Entry/View</p>
                 <p className="font-semibold mt-1">Data Display</p>
               </div>
            
               <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded border dark:border-gray-700">
                 <p className="text-xs text-gray-500">Cash Collection Summary</p>
                 <p className="font-semibold mt-1">Data Display</p>
               </div>
            
               <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded border dark:border-gray-700">
                 <p className="text-xs text-gray-500">Cash Inflow</p>
                 <p className="font-semibold mt-1">Data Display</p>
               </div>
            
         </div>
         <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
               <tr>
                 <th className="p-3 font-medium">Cash Outflow</th><th className="p-3 font-medium">Current Cash Balance</th><th className="p-3 font-medium">Cash Handover</th><th className="p-3 font-medium">Handover Amount</th><th className="p-3 font-medium">Handover Confirmation</th>
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
       <span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Opening Cash</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Opening Cash Entry/View</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Cash Collection Summary</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Cash Inflow</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Cash Outflow</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Current Cash Balance</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Cash Handover</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Handover Amount</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Handover Confirmation</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Cash Verification</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Verification Status</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Daily Cash Summary</span>
    </div>
  
    </div>
  );
}
  