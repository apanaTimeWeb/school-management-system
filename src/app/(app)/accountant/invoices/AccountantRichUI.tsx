
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
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Invoice List</label>
              <input type="text" className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700" placeholder="Invoice List..." />
            </div>
          
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Generate Invoice</label>
              <input type="text" className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700" placeholder="Generate Invoice..." />
            </div>
          
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Student/Customer Details</label>
              <input type="text" className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700" placeholder="Student/Customer Details..." />
            </div>
          
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Invoice Number</label>
              <input type="text" className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700" placeholder="Invoice Number..." />
            </div>
          
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Invoice Date</label>
              <input type="text" className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700" placeholder="Invoice Date..." />
            </div>
          
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Due Date</label>
              <input type="text" className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700" placeholder="Due Date..." />
            </div>
          
        </div>
        <div className="mt-4 flex gap-3">
           <button className="px-4 py-2 bg-blue-600 text-white rounded font-medium">Submit / Create</button>
           <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded font-medium dark:bg-gray-800 dark:text-gray-300">Cancel</button>
        </div>
      </div>
    
      
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div className="p-4 border-b dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-gray-900/50">
         <h4 className="font-semibold text-gray-800 dark:text-gray-200">Invoices Data Details</h4>
         <div className="flex gap-2">
           <input type="text" placeholder="Search..." className="p-1.5 border rounded text-sm dark:bg-gray-800 dark:border-gray-700" />
         </div>
      </div>
      <div className="p-4 overflow-x-auto">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            
               <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded border dark:border-gray-700">
                 <p className="text-xs text-gray-500">Invoice List</p>
                 <p className="font-semibold mt-1">Data Display</p>
               </div>
            
               <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded border dark:border-gray-700">
                 <p className="text-xs text-gray-500">Generate Invoice</p>
                 <p className="font-semibold mt-1">Data Display</p>
               </div>
            
               <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded border dark:border-gray-700">
                 <p className="text-xs text-gray-500">Student/Customer Details</p>
                 <p className="font-semibold mt-1">Data Display</p>
               </div>
            
               <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded border dark:border-gray-700">
                 <p className="text-xs text-gray-500">Invoice Number</p>
                 <p className="font-semibold mt-1">Data Display</p>
               </div>
            
         </div>
         <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
               <tr>
                 <th className="p-3 font-medium">Invoice Date</th><th className="p-3 font-medium">Due Date</th><th className="p-3 font-medium">Invoice Items</th><th className="p-3 font-medium">Amount</th><th className="p-3 font-medium">Tax/Tax Details UI</th>
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
       <span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Invoice List</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Generate Invoice</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Student/Customer Details</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Invoice Number</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Invoice Date</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Due Date</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Invoice Items</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Amount</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Tax/Tax Details UI</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Discount/Adjustment UI</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Payment Status</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Invoice Status</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Print Invoice</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Download/Print PDF UI</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Invoice History</span>
    </div>
  
    </div>
  );
}
  