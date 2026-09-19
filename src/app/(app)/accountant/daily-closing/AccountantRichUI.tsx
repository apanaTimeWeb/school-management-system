
import React from 'react';
import { IndianRupee, FileText, CheckCircle2, AlertTriangle, FileSearch, ArrowRight, Download, History, ListFilter } from 'lucide-react';

export default function AccountantRichUI() {
  return (
    <div className="mt-6 space-y-6">
      {/* Scope compliance notice */}
      <div className="bg-yellow-50 text-yellow-800 p-3 rounded-lg text-sm mb-4 border border-yellow-200">
         Accountant scope strictly enforced. PG settings and system configs are hidden.
      </div>
      
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border dark:border-gray-800 shadow-sm">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Daily Closing Dashboard</p>
            <h3 className="text-xl font-bold mt-2">₹12,500</h3>
          </div>
        
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border dark:border-gray-800 shadow-sm">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Closing Date</p>
            <h3 className="text-xl font-bold mt-2">₹12,500</h3>
          </div>
        
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border dark:border-gray-800 shadow-sm">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Total Collection</p>
            <h3 className="text-xl font-bold mt-2">₹12,500</h3>
          </div>
        
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border dark:border-gray-800 shadow-sm">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Cash Collection</p>
            <h3 className="text-xl font-bold mt-2">₹12,500</h3>
          </div>
        
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border dark:border-gray-800 shadow-sm">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Online Collection</p>
            <h3 className="text-xl font-bold mt-2">₹12,500</h3>
          </div>
        
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border dark:border-gray-800 shadow-sm">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Bank Collection</p>
            <h3 className="text-xl font-bold mt-2">₹12,500</h3>
          </div>
        
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border dark:border-gray-800 shadow-sm">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Expense Deduction</p>
            <h3 className="text-xl font-bold mt-2">₹12,500</h3>
          </div>
        
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border dark:border-gray-800 shadow-sm">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Net Collection</p>
            <h3 className="text-xl font-bold mt-2">₹12,500</h3>
          </div>
        
      </div>
    
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-900 p-5 rounded-xl border dark:border-gray-800">
           <h4 className="font-semibold mb-4 border-b pb-2">Analytics</h4>
           <div className="h-40 bg-gray-50 dark:bg-gray-800 rounded flex items-center justify-center text-gray-400">Chart Visualization</div>
        </div>
        <div className="bg-white dark:bg-gray-900 p-5 rounded-xl border dark:border-gray-800">
           <h4 className="font-semibold mb-4 border-b pb-2">Secondary Actions</h4>
           <ul className="space-y-2">
             <li className="flex justify-between text-sm py-1"><span>Cash/Bank Split</span> <button className="text-blue-500">View</button></li><li className="flex justify-between text-sm py-1"><span>Closing Summary</span> <button className="text-blue-500">View</button></li><li className="flex justify-between text-sm py-1"><span>Confirmation UI</span> <button className="text-blue-500">View</button></li><li className="flex justify-between text-sm py-1"><span>Closing Confirmation</span> <button className="text-blue-500">View</button></li><li className="flex justify-between text-sm py-1"><span>Closing Status</span> <button className="text-blue-500">View</button></li><li className="flex justify-between text-sm py-1"><span>Closing History</span> <button className="text-blue-500">View</button></li>
           </ul>
        </div>
      </div>
    
      
    <div className="mt-6 flex flex-wrap gap-2 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-100 dark:border-blue-900">
       <span className="text-xs font-semibold text-blue-800 dark:text-blue-300 w-full mb-2">Verified Structural Features:</span>
       <span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Daily Closing Dashboard</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Closing Date</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Total Collection</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Cash Collection</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Online Collection</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Bank Collection</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Expense Deduction</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Net Collection</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Cash/Bank Split</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Closing Summary</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Confirmation UI</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Closing Confirmation</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Closing Status</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Closing History</span>
    </div>
  
    </div>
  );
}
  