
import React from 'react';
import { AlertTriangle, ShieldAlert } from 'lucide-react';

export default function DisciplineActionUI() {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Warning/Remark UI */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-amber-500" /> Issue Warning / Remark</h3>
        <form className="space-y-4 text-sm">
          <div><label className="block text-gray-500 mb-1">Select Student (Assigned Classes)</label><select className="w-full p-2 border rounded"><option>Sumit Kumar (Class 10 A)</option></select></div>
          <div className="flex gap-4">
             <div className="flex-1"><label className="block text-gray-500 mb-1">Warning Type</label><select className="w-full p-2 border rounded"><option>Disruptive Behaviour</option><option>Late Coming</option></select></div>
             <div className="flex-1"><label className="block text-gray-500 mb-1">Date</label><input type="date" className="w-full p-2 border rounded" /></div>
          </div>
          <div><label className="block text-gray-500 mb-1">Teacher Remark / Description</label><textarea className="w-full p-2 border rounded" rows={3}></textarea></div>
          <button type="button" className="w-full py-2 bg-amber-500 text-white rounded font-medium">Record Warning</button>
        </form>
      </div>
      
      {/* Escalation UI */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-red-200 dark:border-gray-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-red-500" /> Escalate to Principal</h3>
        <form className="space-y-4 text-sm">
          <div><label className="block text-gray-500 mb-1">Select Student</label><select className="w-full p-2 border rounded"><option>Rohan Verma (Class 11 Sci)</option></select></div>
          <div><label className="block text-gray-500 mb-1">Severity / Priority</label><select className="w-full p-2 border rounded"><option>High (Immediate Action Required)</option></select></div>
          <div><label className="block text-gray-500 mb-1">Reason for Escalation</label><textarea className="w-full p-2 border rounded" rows={3} placeholder="Describe the severe incident in detail..."></textarea></div>
          <button type="button" className="w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded font-medium">Submit Escalation</button>
        </form>
      </div>
    </div>
  );
}
