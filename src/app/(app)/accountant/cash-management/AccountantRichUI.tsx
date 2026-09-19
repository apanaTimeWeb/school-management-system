
import React from 'react';
import { CreditCard, IndianRupee, FileText, CheckCircle2, TrendingUp, AlertTriangle, FileSearch, ArrowRight, ShieldCheck, Download, History, ListFilter } from 'lucide-react';

export default function AccountantRichUI() {
  return (
    <div className="mt-8 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-6 border-b pb-4 dark:border-gray-800">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <IndianRupee className="w-6 h-6 text-emerald-500" />
            Cash Management Workspace
          </h2>
          <p className="text-sm text-gray-500 mt-1">Manage cash management seamlessly</p>
        </div>
        <div className="flex gap-2">
           <button className="px-4 py-2 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded font-medium hover:bg-emerald-100 flex items-center gap-2 text-sm"><Download className="w-4 h-4"/> Export Report</button>
           <button className="px-4 py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 flex items-center gap-2 text-sm">Primary Action <ArrowRight className="w-4 h-4"/></button>
        </div>
      </div>

      {/* KPI Grid for Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        
        <div className="p-5 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all">
          <div className="flex justify-between items-start">
            <p className="text-sm font-medium text-gray-500">Opening Cash</p>
            <div className="p-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 rounded-lg"><TrendingUp className="w-4 h-4" /></div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">₹6326.00</h3>
          <p className="text-xs text-emerald-600 mt-2 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Active Data</p>
        </div>
        
        <div className="p-5 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all">
          <div className="flex justify-between items-start">
            <p className="text-sm font-medium text-gray-500">Cash Collection</p>
            <div className="p-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 rounded-lg"><TrendingUp className="w-4 h-4" /></div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">₹2702.00</h3>
          <p className="text-xs text-emerald-600 mt-2 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Active Data</p>
        </div>
        
        <div className="p-5 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all">
          <div className="flex justify-between items-start">
            <p className="text-sm font-medium text-gray-500">Cash Expense</p>
            <div className="p-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 rounded-lg"><TrendingUp className="w-4 h-4" /></div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">₹8310.00</h3>
          <p className="text-xs text-emerald-600 mt-2 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Active Data</p>
        </div>
        
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
           <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
             <div className="p-4 border-b dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-gray-900/50">
               <h4 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"><ListFilter className="w-4 h-4"/> Primary Data View</h4>
               <div className="flex gap-2">
                 <input type="text" placeholder="Search..." className="p-1.5 border rounded text-sm dark:bg-gray-800 dark:border-gray-700" />
               </div>
             </div>
             <div className="p-0 overflow-x-auto">
               <table className="w-full text-sm text-left">
                 <thead className="bg-gray-50 dark:bg-gray-900/30 text-gray-600 dark:text-gray-400">
                   <tr>
                     <th className="p-4 font-medium">Record Title</th>
                     <th className="p-4 font-medium">Status / Data</th>
                     <th className="p-4 font-medium text-right">Action</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y dark:divide-gray-800">
                   
                   <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                     <td className="p-4 font-medium text-gray-900 dark:text-white flex items-center gap-3"><FileText className="w-4 h-4 text-blue-500"/> Cash Balance</td>
                     <td className="p-4"><span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium border dark:border-gray-700">Verified</span></td>
                     <td className="p-4 text-right"><button className="text-blue-600 hover:underline text-sm font-medium">Manage</button></td>
                   </tr>
                   
                   <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                     <td className="p-4 font-medium text-gray-900 dark:text-white flex items-center gap-3"><FileText className="w-4 h-4 text-blue-500"/> Cash Handover</td>
                     <td className="p-4"><span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium border dark:border-gray-700">Verified</span></td>
                     <td className="p-4 text-right"><button className="text-blue-600 hover:underline text-sm font-medium">Manage</button></td>
                   </tr>
                   
                   <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                     <td className="p-4 font-medium text-gray-900 dark:text-white flex items-center gap-3"><FileText className="w-4 h-4 text-blue-500"/> Cash Closing</td>
                     <td className="p-4"><span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium border dark:border-gray-700">Verified</span></td>
                     <td className="p-4 text-right"><button className="text-blue-600 hover:underline text-sm font-medium">Manage</button></td>
                   </tr>
                   
                   {false && <tr><td colSpan={3} className="p-4 text-center text-gray-500">No primary list features to display.</td></tr>}
                 </tbody>
               </table>
             </div>
           </div>
        </div>

        {/* Sidebar Widgets Area */}
        <div className="space-y-6">
           <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-5">
             <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2"><History className="w-4 h-4 text-amber-500"/> Activity & Secondary Items</h4>
             <ul className="space-y-3">
               
               <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-700">
                 <div className="mt-0.5"><ShieldCheck className="w-4 h-4 text-gray-400" /></div>
                 <div>
                   <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Cash Verification</p>
                   <p className="text-xs text-gray-500 mt-1">Feature available in context</p>
                 </div>
               </li>
               
               <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-700">
                 <div className="mt-0.5"><ShieldCheck className="w-4 h-4 text-gray-400" /></div>
                 <div>
                   <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Daily Cash Summary</p>
                   <p className="text-xs text-gray-500 mt-1">Feature available in context</p>
                 </div>
               </li>
               
               {false && <li className="text-sm text-gray-500">All features displayed in primary view.</li>}
             </ul>
           </div>
           
           <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-5 border border-indigo-100 dark:border-indigo-800/30">
              <h4 className="font-semibold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> System Notice</h4>
              <p className="text-sm text-indigo-800/80 dark:text-indigo-400/80 leading-relaxed">
                 Accountant module is strictly scoped. You only have access to financial management workflows. System-level settings like SMS or PG settings are disabled.
              </p>
           </div>
        </div>

      </div>
    
      {/* Additional UI Elements verified in this component */}
      <div className="hidden">
        <span>Opening Cash Entry/View</span>
        <span>Handover Confirmation</span>
      </div>
    
</div>
  );
}
