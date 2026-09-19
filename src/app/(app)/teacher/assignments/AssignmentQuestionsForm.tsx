
import React from 'react';
import { Plus, Trash2, List } from 'lucide-react';

export default function AssignmentQuestionsForm() {
  return (
    <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2"><List className="w-5 h-5 text-primary" /> Assignment Questions / Instructions</h3>
        <button className="text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded hover:bg-gray-200 font-medium">Add Instruction Block</button>
      </div>
      
      <div className="space-y-4">
        <div className="p-4 border dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900/20 relative">
          <button className="absolute top-3 right-3 text-red-500 hover:text-red-700"><Trash2 className="w-4 h-4" /></button>
          <div className="grid grid-cols-4 gap-4 mb-3">
             <div className="col-span-1"><label className="block text-xs text-gray-500 mb-1">Question Type</label><select className="w-full p-2 text-sm border rounded"><option>Long Answer</option><option>Short Answer</option></select></div>
             <div className="col-span-3"><label className="block text-xs text-gray-500 mb-1">Question Marks</label><input type="number" className="w-full p-2 text-sm border rounded" placeholder="10" /></div>
          </div>
          <label className="block text-xs text-gray-500 mb-1">Question Text / Instructions</label>
          <textarea className="w-full p-3 border rounded text-sm min-h-[100px]" placeholder="Type your detailed question or assignment instruction here..."></textarea>
        </div>
        
        <button className="w-full py-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-500 flex justify-center items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
          <Plus className="w-5 h-5" /> Add New Question
        </button>
      </div>
    </div>
  );
}
