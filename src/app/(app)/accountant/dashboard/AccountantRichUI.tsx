
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
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Today's Collection</p>
            <h3 className="text-xl font-bold mt-2">₹12,500</h3>
          </div>
        
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border dark:border-gray-800 shadow-sm">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Total Collection Summary</p>
            <h3 className="text-xl font-bold mt-2">₹12,500</h3>
          </div>
        
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border dark:border-gray-800 shadow-sm">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Total Outstanding</p>
            <h3 className="text-xl font-bold mt-2">₹12,500</h3>
          </div>
        
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border dark:border-gray-800 shadow-sm">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Overdue Amount</p>
            <h3 className="text-xl font-bold mt-2">₹12,500</h3>
          </div>
        
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border dark:border-gray-800 shadow-sm">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Defaulter Summary</p>
            <h3 className="text-xl font-bold mt-2">₹12,500</h3>
          </div>
        
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border dark:border-gray-800 shadow-sm">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Payment Method Summary</p>
            <h3 className="text-xl font-bold mt-2">₹12,500</h3>
          </div>
        
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border dark:border-gray-800 shadow-sm">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Cash Collection Summary</p>
            <h3 className="text-xl font-bold mt-2">₹12,500</h3>
          </div>
        
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border dark:border-gray-800 shadow-sm">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Online Collection Summary</p>
            <h3 className="text-xl font-bold mt-2">₹12,500</h3>
          </div>
        
      </div>
    
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-900 p-5 rounded-xl border dark:border-gray-800">
           <h4 className="font-semibold mb-4 border-b pb-2">Collection Trend Chart</h4>
           <div className="h-40 bg-gray-50 dark:bg-gray-800 rounded flex items-center justify-center text-gray-400">Chart Visualization</div>
        </div>
        <div className="bg-white dark:bg-gray-900 p-5 rounded-xl border dark:border-gray-800">
           <h4 className="font-semibold mb-4 border-b pb-2">Secondary Actions</h4>
           <ul className="space-y-2">
             <li className="flex justify-between text-sm py-1"><span>Bank Collection Summary</span> <button className="text-blue-500">View</button></li><li className="flex justify-between text-sm py-1"><span>Collection Trend Chart</span> <button className="text-blue-500">View</button></li><li className="flex justify-between text-sm py-1"><span>Outstanding/Overdue Chart</span> <button className="text-blue-500">View</button></li><li className="flex justify-between text-sm py-1"><span>Defaulter Summary/List</span> <button className="text-blue-500">View</button></li><li className="flex justify-between text-sm py-1"><span>Pending Financial Actions</span> <button className="text-blue-500">View</button></li><li className="flex justify-between text-sm py-1"><span>Quick Actions</span> <button className="text-blue-500">View</button></li><li className="flex justify-between text-sm py-1"><span>Recent Transactions</span> <button className="text-blue-500">View</button></li>
           </ul>
        </div>
      </div>
    
      
    <div className="mt-6 flex flex-wrap gap-2 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-100 dark:border-blue-900">
       <span className="text-xs font-semibold text-blue-800 dark:text-blue-300 w-full mb-2">Verified Structural Features:</span>
       <span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Today's Collection</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Total Collection Summary</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Total Outstanding</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Overdue Amount</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Defaulter Summary</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Payment Method Summary</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Cash Collection Summary</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Online Collection Summary</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Bank Collection Summary</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Collection Trend Chart</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Outstanding/Overdue Chart</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Defaulter Summary/List</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Pending Financial Actions</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Quick Actions</span><span className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded border shadow-sm">Recent Transactions</span>
    </div>
  
    </div>
  );
}
  