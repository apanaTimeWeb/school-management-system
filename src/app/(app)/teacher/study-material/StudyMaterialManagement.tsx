
import React from 'react';
import { BookOpen, Folder, Upload, Globe, Lock } from 'lucide-react';

export default function StudyMaterialManagement() {
  return (
    <div className="mt-8 space-y-6">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4">Class-wise & Subject-wise Material Directory</h3>
        <div className="flex gap-4 mb-6">
           <select className="p-2 border rounded text-sm w-1/4"><option>Select Class - Section</option><option>Class 10 - A</option></select>
           <select className="p-2 border rounded text-sm w-1/4"><option>Select Subject</option><option>Science (Physics)</option></select>
           <button className="px-4 py-2 bg-primary text-white rounded text-sm font-medium flex items-center gap-2 ml-auto"><Upload className="w-4 h-4"/> Upload New Material</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {/* Subject Material Card */}
           <div className="p-4 border rounded-lg hover:shadow-md transition-shadow bg-gray-50 dark:bg-gray-900/50">
             <div className="flex justify-between items-start mb-3">
               <div className="flex items-center gap-3">
                 <div className="p-2 bg-blue-100 text-blue-600 rounded"><Folder className="w-5 h-5" /></div>
                 <div><h4 className="font-semibold text-sm">Chapter 1: Kinematics Notes</h4><p className="text-xs text-gray-500">PDF Document • 2.4 MB</p></div>
               </div>
               {/* Publish/Unpublish Status */}
               <span className="flex items-center gap-1 text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full"><Globe className="w-3 h-3"/> Published</span>
             </div>
             <div className="flex gap-2 justify-end mt-2">
                <button className="text-xs text-gray-600 hover:text-gray-900 px-3 py-1 border rounded">Edit</button>
                <button className="text-xs text-amber-600 hover:bg-amber-50 px-3 py-1 border border-amber-200 rounded">Unpublish</button>
             </div>
           </div>

           <div className="p-4 border rounded-lg hover:shadow-md transition-shadow bg-gray-50 dark:bg-gray-900/50">
             <div className="flex justify-between items-start mb-3">
               <div className="flex items-center gap-3">
                 <div className="p-2 bg-purple-100 text-purple-600 rounded"><BookOpen className="w-5 h-5" /></div>
                 <div><h4 className="font-semibold text-sm">Previous Year Question Bank</h4><p className="text-xs text-gray-500">Video Link • Youtube</p></div>
               </div>
               <span className="flex items-center gap-1 text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded-full"><Lock className="w-3 h-3"/> Draft</span>
             </div>
             <div className="flex gap-2 justify-end mt-2">
                <button className="text-xs text-gray-600 hover:text-gray-900 px-3 py-1 border rounded">Edit</button>
                <button className="text-xs text-emerald-600 hover:bg-emerald-50 px-3 py-1 border border-emerald-200 rounded">Publish Material</button>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
