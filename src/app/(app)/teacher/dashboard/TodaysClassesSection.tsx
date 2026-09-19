
import React from 'react';
import { Clock, MapPin, Users } from 'lucide-react';

export default function TodaysClassesSection() {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Today's Classes Overview</h3>
        <span className="text-sm text-gray-500">Date: {new Date().toLocaleDateString()}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border-l-4 border-emerald-500 border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-start mb-2">
            <div>
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-100 px-2 py-1 rounded">Period 1</span>
              <h4 className="font-bold text-gray-900 dark:text-white mt-1">Mathematics</h4>
            </div>
            <span className="text-xs font-medium text-gray-500 flex items-center gap-1"><Clock className="w-3 h-3" /> 08:00 - 08:45 AM</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Class 10 - Section A</p>
          <div className="flex justify-between items-center pt-3 border-t dark:border-gray-700">
            <span className="text-xs flex items-center gap-1 text-gray-500"><MapPin className="w-3 h-3" /> Room 102</span>
            <button className="text-xs bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full font-medium hover:bg-emerald-100">Ongoing</button>
          </div>
        </div>
        
        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border-l-4 border-blue-500 border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-start mb-2">
            <div>
              <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">Period 3</span>
              <h4 className="font-bold text-gray-900 dark:text-white mt-1">Physics</h4>
            </div>
            <span className="text-xs font-medium text-gray-500 flex items-center gap-1"><Clock className="w-3 h-3" /> 10:00 - 10:45 AM</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Class 11 - Section Science</p>
          <div className="flex justify-between items-center pt-3 border-t dark:border-gray-700">
            <span className="text-xs flex items-center gap-1 text-gray-500"><MapPin className="w-3 h-3" /> Lab 3</span>
            <button className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium">Upcoming</button>
          </div>
        </div>
      </div>
    </div>
  );
}
