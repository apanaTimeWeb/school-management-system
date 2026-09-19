
import React from 'react';
import { MapPin, Users } from 'lucide-react';

export default function RoomClassIntegration() {
  return (
    <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Timetable Details (Room & Class Allocation)</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-900/50 text-gray-500">
            <tr>
              <th className="px-4 py-3">Day / Period</th>
              <th className="px-4 py-3">Subject</th>
              <th className="px-4 py-3">Class/Section</th>
              <th className="px-4 py-3">Room Allocation</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-gray-700">
              <td className="px-4 py-3 font-medium">Monday - P1</td>
              <td className="px-4 py-3">Mathematics</td>
              <td className="px-4 py-3"><span className="flex items-center gap-1"><Users className="w-4 h-4 text-blue-500" /> Class 10 A</span></td>
              <td className="px-4 py-3"><span className="flex items-center gap-1 text-emerald-600 font-medium"><MapPin className="w-4 h-4" /> Room 102</span></td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="px-4 py-3 font-medium">Monday - P2</td>
              <td className="px-4 py-3">Physics</td>
              <td className="px-4 py-3"><span className="flex items-center gap-1"><Users className="w-4 h-4 text-blue-500" /> Class 11 Sci</span></td>
              <td className="px-4 py-3"><span className="flex items-center gap-1 text-emerald-600 font-medium"><MapPin className="w-4 h-4" /> Lab 3</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
