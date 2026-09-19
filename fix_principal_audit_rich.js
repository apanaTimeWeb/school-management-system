const fs = require('fs');
const path = require('path');

const principalPath = path.join(__dirname, 'src', 'app', '(app)', 'principal');

const moduleRichUI = {
  "dashboard": `
import React from 'react';
import { Users, UserCheck } from 'lucide-react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Total Teachers/Staff */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Teachers/Staff</p>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">145</h3>
            <div className="flex gap-4 mt-4">
              <div className="flex items-center gap-1.5 text-sm">
                <Users className="w-4 h-4 text-blue-500" />
                <span className="text-gray-600 dark:text-gray-300">120 Teachers</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <UserCheck className="w-4 h-4 text-emerald-500" />
                <span className="text-gray-600 dark:text-gray-300">25 Staff</span>
              </div>
            </div>
          </div>
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
      </div>
    </div>
  );
}`,
  "students": `
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 space-y-6">
      {/* Class/Section Details */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Class/Section Details</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Class</p>
            <p className="font-medium text-gray-900 dark:text-white">10th</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Section</p>
            <p className="font-medium text-gray-900 dark:text-white">A</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Academic Session</p>
            <p className="font-medium text-gray-900 dark:text-white">2026-2027</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Class Teacher</p>
            <p className="font-medium text-gray-900 dark:text-white">Mr. Rahul Sharma</p>
          </div>
        </div>
      </div>
    </div>
  );
}`,
  "admissions": `
import React from 'react';
import { CheckCircle2, FileText, Users, XCircle, Clock } from 'lucide-react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 space-y-8">
      {/* Selection UI */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Admission Selection Status</h3>
        <div className="flex items-center justify-between p-4 border border-emerald-200 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-800 rounded-lg">
          <div className="flex items-center gap-4">
            <CheckCircle2 className="w-8 h-8 text-emerald-500" />
            <div>
              <p className="font-semibold text-emerald-900 dark:text-emerald-300">Selected for Admission</p>
              <p className="text-sm text-emerald-700 dark:text-emerald-400">Selection Date: 15 Sep 2026 | Score: 92%</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-md text-sm font-medium">Proceed to Fee</button>
        </div>
      </div>

      {/* Admission Reports */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Admission Reports & Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg text-center">
            <Users className="w-5 h-5 mx-auto mb-2 text-blue-500" />
            <p className="text-2xl font-bold">1,250</p>
            <p className="text-xs text-gray-500 uppercase">Total Applications</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg text-center">
            <CheckCircle2 className="w-5 h-5 mx-auto mb-2 text-emerald-500" />
            <p className="text-2xl font-bold">450</p>
            <p className="text-xs text-gray-500 uppercase">Selected</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg text-center">
            <Clock className="w-5 h-5 mx-auto mb-2 text-amber-500" />
            <p className="text-2xl font-bold">120</p>
            <p className="text-xs text-gray-500 uppercase">Waitlisted</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg text-center">
            <XCircle className="w-5 h-5 mx-auto mb-2 text-red-500" />
            <p className="text-2xl font-bold">680</p>
            <p className="text-xs text-gray-500 uppercase">Rejected</p>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th className="px-4 py-3">Class</th>
                <th className="px-4 py-3">Applications</th>
                <th className="px-4 py-3">Selected</th>
                <th className="px-4 py-3">Pending</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-medium">Class 1</td>
                <td className="px-4 py-3">300</td>
                <td className="px-4 py-3">100</td>
                <td className="px-4 py-3">20</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Class 2</td>
                <td className="px-4 py-3">250</td>
                <td className="px-4 py-3">80</td>
                <td className="px-4 py-3">15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}`,
  "academics": `
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 space-y-8">
      {/* HOD Assignment */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">HOD Assignment</h3>
        <div className="flex gap-4 items-end mb-6">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Department</label>
            <select className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm">
              <option>Science</option>
              <option>Mathematics</option>
              <option>English</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Head of Department</label>
            <select className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm">
              <option>Dr. A. K. Singh</option>
              <option>Mrs. Sunita Verma</option>
            </select>
          </div>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium">Assign HOD</button>
        </div>
        <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg text-sm text-gray-600 dark:text-gray-400">
          <span className="font-semibold text-gray-900 dark:text-white">Current HOD (Science):</span> Dr. A. K. Singh
        </div>
      </div>

      {/* Academic Monitoring */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Academic Monitoring Dashboard</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h4 className="font-medium mb-3">Syllabus Completion</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1"><span>10th Science</span><span>75%</span></div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1"><span>9th Math</span><span>60%</span></div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h4 className="font-medium mb-3">Academic Status & Progress</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between p-2 bg-gray-50 dark:bg-gray-900/50 rounded">
                <span>Class 10 Progress</span><span className="text-emerald-500 font-medium">On Track</span>
              </li>
              <li className="flex justify-between p-2 bg-gray-50 dark:bg-gray-900/50 rounded">
                <span>Subject: Physics</span><span className="text-amber-500 font-medium">Slightly Delayed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}`,
  "attendance": `
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 space-y-8">
      {/* Section-wise Attendance */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Section-wise Attendance</h3>
          <select className="p-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700">
            <option>Class 10 - Sec A</option>
            <option>Class 10 - Sec B</option>
          </select>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg"><p className="text-xs text-blue-600">Total Students</p><p className="text-xl font-bold">45</p></div>
          <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg"><p className="text-xs text-emerald-600">Present</p><p className="text-xl font-bold">42</p></div>
          <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg"><p className="text-xs text-red-600">Absent</p><p className="text-xl font-bold">3</p></div>
        </div>
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 dark:bg-gray-900/50"><tr><th className="p-2">Roll No</th><th className="p-2">Name</th><th className="p-2">Status</th></tr></thead>
          <tbody>
            <tr className="border-b dark:border-gray-700"><td className="p-2">101</td><td className="p-2">Rahul Kumar</td><td className="p-2"><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">Present</span></td></tr>
            <tr className="border-b dark:border-gray-700"><td className="p-2">102</td><td className="p-2">Amit Singh</td><td className="p-2"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Absent</span></td></tr>
          </tbody>
        </table>
        <div className="mt-4 flex justify-end"><button className="text-sm text-primary hover:underline">Export Data</button></div>
      </div>

      {/* Teacher-wise Attendance & Late/Absent */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Teacher-wise Attendance</h3>
          <div className="space-y-3">
            <div className="flex justify-between p-3 border dark:border-gray-700 rounded-lg">
              <div><p className="font-medium text-sm">Mr. Rakesh (Maths)</p></div>
              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs h-fit">Present</span>
            </div>
            <div className="flex justify-between p-3 border dark:border-gray-700 rounded-lg">
              <div><p className="font-medium text-sm">Mrs. Sunita (Science)</p></div>
              <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs h-fit">Late</span>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
             <h3 className="text-lg font-semibold">Late/Absent Overview</h3>
             <input type="date" className="p-1 text-sm border rounded bg-transparent" />
          </div>
          <div className="flex gap-4">
            <div className="flex-1 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
              <h4 className="text-amber-800 dark:text-amber-400 font-medium">Late Today</h4>
              <p className="text-2xl font-bold mt-2">12 Students</p>
              <p className="text-sm mt-1">2 Staff</p>
            </div>
            <div className="flex-1 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-800">
              <h4 className="text-red-800 dark:text-red-400 font-medium">Absent Today</h4>
              <p className="text-2xl font-bold mt-2">25 Students</p>
              <p className="text-sm mt-1">3 Staff</p>
            </div>
          </div>
        </div>
      </div>

      {/* Attendance Reports */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4">Attendance Reports</h3>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 border dark:border-gray-600 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-700">Daily Report</button>
          <button className="px-4 py-2 border dark:border-gray-600 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-700">Monthly Report</button>
          <button className="px-4 py-2 border dark:border-gray-600 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-700">Class Report</button>
          <button className="px-4 py-2 border dark:border-gray-600 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-700">Teacher/Staff Report</button>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm ml-auto">Export PDF/Excel</button>
        </div>
      </div>
    </div>
  );
}`,
  "examinations": `
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Subject-wise Exams */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Subject-wise Exams</h3>
            <select className="p-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700">
              <option>Mathematics</option>
              <option>Science</option>
            </select>
          </div>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
              <div><p className="font-medium">Mid-Term Exam</p><p className="text-xs text-gray-500">Date: 12 Oct 2026</p></div>
              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs h-fit">Completed</span>
            </li>
            <li className="flex justify-between p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
              <div><p className="font-medium">Final Exam</p><p className="text-xs text-gray-500">Date: 15 Mar 2027</p></div>
              <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs h-fit">Scheduled</span>
            </li>
          </ul>
        </div>

        {/* Marks Entry Status */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Marks Entry Status</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1"><span>Class 10 - Math</span><span className="text-blue-600">Pending (35/40)</span></div>
              <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700"><div className="bg-blue-600 h-2 rounded-full" style={{width: '87%'}}></div></div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1"><span>Class 10 - Science</span><span className="text-emerald-600">Completed (40/40)</span></div>
              <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700"><div className="bg-emerald-500 h-2 rounded-full" style={{width: '100%'}}></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`,
  "results": `
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 space-y-6">
      {/* Top Performers & Low Performers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top Performers</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-4 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">1</div>
              <div className="flex-1"><p className="font-semibold text-sm">Aditi Sharma</p><p className="text-xs text-emerald-600">Class 10 A</p></div>
              <div className="text-right"><p className="font-bold text-emerald-700 dark:text-emerald-400">98.5%</p><p className="text-xs">Grade A+</p></div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
              <div className="w-8 h-8 rounded-full bg-emerald-400 text-white flex items-center justify-center font-bold">2</div>
              <div className="flex-1"><p className="font-semibold text-sm">Rohan Verma</p><p className="text-xs text-emerald-600">Class 10 B</p></div>
              <div className="text-right"><p className="font-bold text-emerald-700 dark:text-emerald-400">97.2%</p><p className="text-xs">Grade A+</p></div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Low Performers / At Risk</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-800">
              <div><p className="font-semibold text-sm text-red-900 dark:text-red-300">Sumit Kumar</p><p className="text-xs text-red-700 dark:text-red-400">Class 9 C</p></div>
              <div className="text-right"><p className="font-bold text-red-700 dark:text-red-400">32.4%</p><p className="text-xs text-red-600">Needs Attention</p></div>
            </div>
          </div>
        </div>
      </div>

      {/* GPA/CGPA */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4">GPA/CGPA Summary</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 border dark:border-gray-700 rounded-lg text-center"><p className="text-sm text-gray-500">School Avg CGPA</p><p className="text-2xl font-bold mt-1">8.4</p></div>
          <div className="p-4 border dark:border-gray-700 rounded-lg text-center"><p className="text-sm text-gray-500">Class 10 Avg</p><p className="text-2xl font-bold mt-1">8.9</p></div>
          <div className="p-4 border dark:border-gray-700 rounded-lg text-center"><p className="text-sm text-gray-500">Class 12 Avg</p><p className="text-2xl font-bold mt-1">9.1</p></div>
        </div>
      </div>
    </div>
  );
}`,
  "staff": `
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Staff Reports & Workload</h3>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm">Export Staff Report</button>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg"><p className="text-sm text-gray-500">Total Staff</p><p className="text-xl font-bold">145</p></div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg"><p className="text-sm text-gray-500">On Leave</p><p className="text-xl font-bold text-amber-500">5</p></div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg"><p className="text-sm text-gray-500">Avg Workload</p><p className="text-xl font-bold">24 Periods/Wk</p></div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg"><p className="text-sm text-gray-500">Depts</p><p className="text-xl font-bold">12</p></div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs bg-gray-50 dark:bg-gray-900/50"><tr><th className="p-3">Department</th><th className="p-3">Staff Count</th><th className="p-3">Attendance %</th><th className="p-3">Avg Workload</th></tr></thead>
            <tbody>
              <tr className="border-b dark:border-gray-700"><td className="p-3">Science</td><td className="p-3">15</td><td className="p-3">96%</td><td className="p-3">26 Periods</td></tr>
              <tr className="border-b dark:border-gray-700"><td className="p-3">Mathematics</td><td className="p-3">12</td><td className="p-3">98%</td><td className="p-3">28 Periods</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}`,
  "leaves": `
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 space-y-6">
      {/* Leave Rejection UI */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4">Pending Leave Requests</h3>
        <div className="p-4 border dark:border-gray-700 rounded-lg flex justify-between items-center">
          <div><p className="font-semibold">Amit Kumar (Teacher)</p><p className="text-sm text-gray-500">Medical Leave: 20 Oct - 22 Oct</p></div>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded text-sm hover:bg-emerald-200">Approve</button>
            <button className="px-3 py-1.5 bg-red-100 text-red-700 rounded text-sm hover:bg-red-200" onClick={() => alert('Reject Dialog Opened: Please enter rejection reason in textarea.')}>Reject</button>
          </div>
        </div>
      </div>

      {/* Leave Reports */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Leave Reports Overview</h3>
          <div className="flex gap-2 text-sm">
            <input type="date" className="p-1.5 border rounded" />
            <select className="p-1.5 border rounded"><option>All Leave Types</option></select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-lg text-emerald-900"><p className="font-semibold">Approved</p><p className="text-2xl mt-1">45</p></div>
          <div className="p-4 bg-red-50 border border-red-100 rounded-lg text-red-900"><p className="font-semibold">Rejected</p><p className="text-2xl mt-1">12</p></div>
          <div className="p-4 bg-amber-50 border border-amber-100 rounded-lg text-amber-900"><p className="font-semibold">Pending</p><p className="text-2xl mt-1">8</p></div>
        </div>
      </div>
    </div>
  );
}`,
  "discipline": `
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 space-y-6">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4">Incident History & Reports</h3>
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded"><p className="text-sm">Total Incidents</p><p className="text-xl font-bold">24</p></div>
          <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded"><p className="text-sm">Warnings Issued</p><p className="text-xl font-bold text-amber-500">18</p></div>
          <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded"><p className="text-sm">Counselling</p><p className="text-xl font-bold text-blue-500">10</p></div>
          <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded"><p className="text-sm">Severe Actions</p><p className="text-xl font-bold text-red-500">2</p></div>
        </div>
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 dark:bg-gray-900/50"><tr><th className="p-2">Date</th><th className="p-2">Student/Staff</th><th className="p-2">Incident Type</th><th className="p-2">Action/Status</th></tr></thead>
          <tbody>
            <tr className="border-b dark:border-gray-700"><td className="p-2">18 Sep 2026</td><td className="p-2">Ravi Kumar (Std)</td><td className="p-2">Bullying</td><td className="p-2"><span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs">Warning Given</span></td></tr>
            <tr className="border-b dark:border-gray-700"><td className="p-2">15 Sep 2026</td><td className="p-2">Ajay Singh (Std)</td><td className="p-2">Property Damage</td><td className="p-2"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Parent Meeting</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}`,
  "parents": `
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 space-y-6">
      {/* Student-Parent Mapping */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4">Student-Parent Mapping & Multiple Children</h3>
        <div className="flex gap-4 mb-4">
          <select className="p-2 border rounded text-sm w-1/3"><option>Select Parent...</option></select>
          <select className="p-2 border rounded text-sm w-1/3"><option>Select Student...</option></select>
          <select className="p-2 border rounded text-sm w-1/4"><option>Relationship (Father/Mother/Guardian)</option></select>
          <button className="px-4 py-2 bg-primary text-white rounded text-sm">Map</button>
        </div>
        <div className="p-4 border dark:border-gray-700 rounded-lg">
          <p className="font-semibold mb-2">Example Profile: Mr. Rakesh Sharma</p>
          <div className="flex gap-4">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-100 dark:border-blue-800 flex-1">
              <p className="font-medium text-blue-900 dark:text-blue-300">Rahul Sharma (Son)</p><p className="text-sm">Class 10 A</p>
            </div>
            <div className="p-3 bg-pink-50 dark:bg-pink-900/20 rounded border border-pink-100 dark:border-pink-800 flex-1">
              <p className="font-medium text-pink-900 dark:text-pink-300">Priya Sharma (Daughter)</p><p className="text-sm">Class 8 B</p>
            </div>
          </div>
        </div>
      </div>

      {/* Meeting History */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4">Parent Meeting History</h3>
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 dark:bg-gray-900/50"><tr><th className="p-2">Date</th><th className="p-2">Parent</th><th className="p-2">Student</th><th className="p-2">Subject/Notes</th><th className="p-2">Follow-up</th></tr></thead>
          <tbody>
            <tr className="border-b dark:border-gray-700"><td className="p-2">10 Sep 2026</td><td className="p-2">Mr. Rakesh Sharma</td><td className="p-2">Rahul Sharma</td><td className="p-2">Academic Performance</td><td className="p-2"><span className="text-emerald-600">Completed</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}`,
  "communication": `
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Send Section Notification</h3>
          <div className="space-y-4 text-sm">
            <select className="w-full p-2 border rounded"><option>Select Class - Section</option><option>Class 10 - A</option></select>
            <textarea className="w-full p-2 border rounded" rows="3" placeholder="Type notification message..."></textarea>
            <button className="px-4 py-2 bg-primary text-white rounded w-full">Broadcast to Section</button>
          </div>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Send Staff Notification</h3>
          <div className="space-y-4 text-sm">
            <div className="flex gap-2">
               <select className="flex-1 p-2 border rounded"><option>All Departments</option><option>Science</option></select>
               <select className="flex-1 p-2 border rounded"><option>Select Specific Staff</option></select>
            </div>
            <textarea className="w-full p-2 border rounded" rows="3" placeholder="Type staff announcement..."></textarea>
            <button className="px-4 py-2 bg-blue-600 text-white rounded w-full">Broadcast to Staff</button>
          </div>
        </div>
      </div>
    </div>
  );
}`,
  "timetable": `
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4">Subject & Teacher Allocation UI</h3>
        <div className="grid grid-cols-4 gap-4 items-end mb-6 text-sm">
          <div><label className="block mb-1 text-gray-500">Class - Section</label><select className="w-full p-2 border rounded"><option>10 - A</option></select></div>
          <div><label className="block mb-1 text-gray-500">Subject</label><select className="w-full p-2 border rounded"><option>Mathematics</option></select></div>
          <div><label className="block mb-1 text-gray-500">Teacher</label><select className="w-full p-2 border rounded"><option>Mr. Rahul Sharma</option></select></div>
          <div><label className="block mb-1 text-gray-500">Period/Time</label><select className="w-full p-2 border rounded"><option>Period 1 (8:00 AM)</option></select></div>
        </div>
        <button className="px-4 py-2 bg-primary text-white rounded-md text-sm">Save Allocation</button>
      </div>
    </div>
  );
}`,
  "transport": `
import React from 'react';
import { Navigation } from 'lucide-react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4">GPS Status Overview</h3>
          <div className="flex items-center gap-4 p-4 border border-emerald-200 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
            <div className="p-3 bg-emerald-100 rounded-full text-emerald-600"><Navigation className="w-6 h-6" /></div>
            <div>
              <p className="font-bold text-emerald-900 dark:text-emerald-300">Bus 01 (Route A)</p>
              <p className="text-sm text-emerald-700 dark:text-emerald-400">Status: Moving | Last Sync: Just now</p>
            </div>
            <span className="ml-auto px-2 py-1 bg-emerald-500 text-white rounded text-xs animate-pulse">Live</span>
          </div>
        </div>
        
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h3 className="text-lg font-semibold mb-4">Transport Reports</h3>
          <div className="space-y-2 text-sm">
            <button className="w-full text-left p-2 border rounded hover:bg-gray-50 dark:hover:bg-gray-700">Vehicle & Route Summary</button>
            <button className="w-full text-left p-2 border rounded hover:bg-gray-50 dark:hover:bg-gray-700">Student Allocation Report</button>
            <button className="w-full text-left p-2 border rounded hover:bg-gray-50 dark:hover:bg-gray-700">Transport Complaints & Incidents</button>
          </div>
        </div>
      </div>
    </div>
  );
}`,
  "library": `
import React from 'react';
import { QrCode } from 'lucide-react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Barcode / QR Generation</h3>
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 border-2 border-dashed border-gray-300 flex items-center justify-center rounded">
              <QrCode className="w-10 h-10 text-gray-400" />
            </div>
            <div className="space-y-2 flex-1 text-sm">
              <input type="text" placeholder="Enter Book ID" className="w-full p-2 border rounded" />
              <button className="w-full p-2 bg-primary text-white rounded">Generate & Print</button>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Book Renewal</h3>
          <div className="p-3 border rounded-lg bg-gray-50 dark:bg-gray-900/50 mb-3 text-sm">
            <p className="font-semibold">Book: The Alchemist (ID: B104)</p>
            <p className="text-gray-500">Student: Ravi Kumar</p>
            <p className="text-red-500 mt-1">Due Date: 15 Sep 2026 (Fine: $2)</p>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 py-2 bg-blue-600 text-white rounded text-sm">Renew Book (+7 Days)</button>
            <button className="flex-1 py-2 bg-emerald-600 text-white rounded text-sm">Return & Pay Fine</button>
          </div>
        </div>
      </div>
    </div>
  );
}`,
  "reports": `
import React from 'react';
import { FileDown } from 'lucide-react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4">Export PDF Controls</h3>
        <div className="flex gap-4 items-center bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
          <select className="p-2 border rounded text-sm flex-1"><option>Select Report to Export...</option><option>Student Admission Report</option></select>
          <input type="date" className="p-2 border rounded text-sm" />
          <button className="px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium flex items-center gap-2" onClick={() => alert('PDF Download Dialog')}>
            <FileDown className="w-4 h-4" /> Export as PDF
          </button>
        </div>
      </div>
    </div>
  );
}`,
  "search-filters": `
import React from 'react';
import { Search } from 'lucide-react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4">Fee Search & Advanced Filters</h3>
        <div className="flex flex-wrap gap-3 mb-4 text-sm">
          <input type="text" placeholder="Receipt Number..." className="p-2 border rounded flex-1 min-w-[150px]" />
          <input type="text" placeholder="Student Name..." className="p-2 border rounded flex-1 min-w-[150px]" />
          <select className="p-2 border rounded"><option>All Fee Status</option><option>Paid</option><option>Defaulter</option></select>
          <input type="date" className="p-2 border rounded" />
          <button className="px-4 py-2 bg-primary text-white rounded flex items-center gap-2"><Search className="w-4 h-4" /> Search</button>
        </div>
      </div>
    </div>
  );
}`,
  "security": `
import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> 2FA Settings (Principal Profile)</h3>
        <div className="space-y-4 text-sm max-w-md">
          <div className="flex justify-between items-center p-3 border rounded-lg bg-gray-50 dark:bg-gray-900/50">
            <div><p className="font-semibold">Authenticator App</p><p className="text-xs text-gray-500">Google Auth, Authy</p></div>
            <button className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded">Enable</button>
          </div>
          <div className="flex justify-between items-center p-3 border rounded-lg bg-gray-50 dark:bg-gray-900/50">
            <div><p className="font-semibold">Email OTP</p><p className="text-xs text-gray-500">Send code to email</p></div>
            <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded">Disable</button>
          </div>
          <button className="w-full py-2 text-primary font-medium border border-primary/20 rounded">View Backup Recovery Codes</button>
        </div>
      </div>
    </div>
  );
}`,
  "audit": `
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4">Fee Changes Log</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs bg-gray-50 dark:bg-gray-900/50 uppercase"><tr><th className="p-3">Date/Time</th><th className="p-3">Student</th><th className="p-3">Receipt No</th><th className="p-3">Old Fee</th><th className="p-3">New Fee</th><th className="p-3">Changed By</th><th className="p-3">IP/Device</th></tr></thead>
            <tbody>
              <tr className="border-b dark:border-gray-700">
                <td className="p-3">18 Sep, 10:30 AM</td><td className="p-3">Rahul K.</td><td className="p-3">RCP-1029</td><td className="p-3">$500</td><td className="p-3 font-semibold text-emerald-600">$450 (Concession)</td><td className="p-3">Admin_User</td><td className="p-3 text-xs">192.168.1.5<br/>Chrome/Win</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}`,
  "events": `
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Cultural Activities</h3>
          <div className="p-4 border rounded-lg bg-pink-50 dark:bg-pink-900/20 border-pink-100">
            <div className="flex justify-between items-start mb-2">
               <h4 className="font-bold text-pink-900 dark:text-pink-300">Annual Art Exhibition</h4>
               <span className="px-2 py-1 bg-pink-200 text-pink-800 rounded text-xs">Upcoming</span>
            </div>
            <p className="text-sm text-pink-800 dark:text-pink-400 mb-2">Date: 25 Oct 2026</p>
            <p className="text-sm">Participants Registered: 45</p>
          </div>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Event Reports & Statistics</h3>
          <div className="space-y-3 text-sm">
             <div className="flex justify-between p-2 border-b"><span className="text-gray-600">Total Events This Year</span><span className="font-bold">12</span></div>
             <div className="flex justify-between p-2 border-b"><span className="text-gray-600">Total Participants</span><span className="font-bold">450</span></div>
             <div className="flex justify-between p-2 border-b"><span className="text-gray-600">Certificates Issued</span><span className="font-bold">120</span></div>
             <button className="w-full mt-2 py-2 border rounded hover:bg-gray-50">Generate Event Report PDF</button>
          </div>
        </div>
      </div>
    </div>
  );
}`,
  "meetings": `
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">HOD Meetings & Minutes</h3>
          <button className="px-3 py-1.5 bg-primary text-white rounded text-sm">Schedule Meeting</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs bg-gray-50 dark:bg-gray-900/50"><tr><th className="p-3">Date/Time</th><th className="p-3">Agenda</th><th className="p-3">Attendees</th><th className="p-3">Action Items</th><th className="p-3">Status</th></tr></thead>
            <tbody>
              <tr className="border-b dark:border-gray-700">
                <td className="p-3">15 Sep, 2:00 PM</td><td className="p-3">Syllabus Review Q3</td><td className="p-3">All HODs (5/5)</td><td className="p-3">Update Science Lab Manual</td><td className="p-3"><span className="text-emerald-600 font-medium">Completed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}`,
  "complaints": `
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4">Complaint Assignment</h3>
        <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-900/50 mb-4">
          <p className="font-semibold text-sm mb-1">Ticket #1042: Infrastructure Issue in Lab</p>
          <p className="text-xs text-gray-500 mb-3">Logged by: Ravi (Student)</p>
          <div className="flex gap-4 text-sm">
            <select className="flex-1 p-2 border rounded"><option>Assign Department</option><option>Maintenance</option></select>
            <select className="flex-1 p-2 border rounded"><option>Assign Person</option><option>Mr. Ashok (Head)</option></select>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Assign Ticket</button>
          </div>
        </div>
      </div>
    </div>
  );
}`,
  "documents": `
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4">TC (Transfer Certificate) Approval</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs bg-gray-50 dark:bg-gray-900/50"><tr><th className="p-3">Student</th><th className="p-3">Request Date</th><th className="p-3">Reason</th><th className="p-3">Status</th><th className="p-3">Actions</th></tr></thead>
            <tbody>
              <tr className="border-b dark:border-gray-700">
                <td className="p-3 font-medium">Sumit Singh (Class 10)</td><td className="p-3">18 Sep 2026</td><td className="p-3">Relocating</td><td className="p-3"><span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs">Pending</span></td>
                <td className="p-3 flex gap-2">
                  <button className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded text-xs hover:bg-emerald-200">Approve</button>
                  <button className="px-3 py-1 bg-red-100 text-red-700 rounded text-xs hover:bg-red-200">Reject</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}`,
  "fees": `
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 space-y-6">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4">Payment Trends & Monitoring</h3>
        <div className="grid grid-cols-3 gap-4 mb-4">
           <div className="p-4 border rounded-lg"><p className="text-sm text-gray-500">Daily Payments</p><p className="text-xl font-bold">$1,250</p></div>
           <div className="p-4 border rounded-lg"><p className="text-sm text-gray-500">Monthly Collection</p><p className="text-xl font-bold">$45,000</p></div>
           <div className="p-4 border rounded-lg"><p className="text-sm text-gray-500">Trend</p><p className="text-xl font-bold text-emerald-500">+12% vs Last Mo.</p></div>
        </div>
        <div className="h-32 bg-gray-50 dark:bg-gray-900/50 rounded-lg flex items-end justify-between p-4 px-10 gap-2 border">
           {/* Mock Bar Chart */}
           <div className="w-10 bg-blue-200 rounded-t h-1/2"></div>
           <div className="w-10 bg-blue-300 rounded-t h-3/4"></div>
           <div className="w-10 bg-blue-400 rounded-t h-2/3"></div>
           <div className="w-10 bg-blue-500 rounded-t h-full"></div>
           <div className="w-10 bg-blue-600 rounded-t h-4/5"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Scholarship Overview</h3>
          <div className="flex gap-4">
             <div className="flex-1 p-4 bg-purple-50 dark:bg-purple-900/20 text-purple-900 dark:text-purple-300 rounded-lg border border-purple-100">
                <p className="text-sm mb-1">Active Scholarships</p><p className="text-2xl font-bold">45 Students</p>
             </div>
             <div className="flex-1 p-4 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-900 dark:text-emerald-300 rounded-lg border border-emerald-100">
                <p className="text-sm mb-1">Total Amount</p><p className="text-2xl font-bold">$12,500</p>
             </div>
          </div>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Finance Reports Overview</h3>
          <ul className="space-y-2 text-sm">
             <li><button className="w-full text-left p-2 border rounded hover:bg-gray-50">Collection Report</button></li>
             <li><button className="w-full text-left p-2 border rounded hover:bg-gray-50">Outstanding Fees & Defaulters</button></li>
             <li><button className="w-full text-left p-2 border rounded hover:bg-gray-50">Concession & Refund Summary</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
}`,
  "hostel": `
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Room/Bed Status</h3>
          <div className="grid grid-cols-2 gap-4">
             <div className="p-4 border rounded-lg text-center"><p className="text-gray-500 text-sm">Occupied Beds</p><p className="text-2xl font-bold text-blue-600">120</p></div>
             <div className="p-4 border rounded-lg text-center"><p className="text-gray-500 text-sm">Vacant Beds</p><p className="text-2xl font-bold text-emerald-600">30</p></div>
             <div className="p-4 border rounded-lg text-center"><p className="text-gray-500 text-sm">Reserved</p><p className="text-2xl font-bold text-amber-500">5</p></div>
             <div className="p-4 border rounded-lg text-center"><p className="text-gray-500 text-sm">Maintenance</p><p className="text-2xl font-bold text-red-500">2</p></div>
          </div>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Hostel Reports Summary</h3>
          <div className="space-y-3 text-sm">
             <button className="w-full text-left p-3 border rounded hover:bg-gray-50">Occupancy & Allocation Report</button>
             <button className="w-full text-left p-3 border rounded hover:bg-gray-50">Hostel Attendance & Leave Report</button>
             <button className="w-full text-left p-3 border rounded hover:bg-gray-50">Incidents & Maintenance Logs</button>
          </div>
        </div>
      </div>
    </div>
  );
}`,
  "health": `
import React from 'react';

export default function MissingFeaturesRichUI() {
  return (
    <div className="mt-8">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4">Health Reports & Medical Alerts</h3>
        <div className="grid grid-cols-3 gap-4 mb-6">
           <div className="p-4 bg-emerald-50 text-emerald-900 border border-emerald-100 rounded-lg"><p className="text-sm">Health Checkups Done</p><p className="text-xl font-bold">450</p></div>
           <div className="p-4 bg-red-50 text-red-900 border border-red-100 rounded-lg"><p className="text-sm">Emergency Cases (YTD)</p><p className="text-xl font-bold">3</p></div>
           <div className="p-4 bg-amber-50 text-amber-900 border border-amber-100 rounded-lg"><p className="text-sm">Active Medical Alerts</p><p className="text-xl font-bold">12</p></div>
        </div>
        <div className="flex gap-2">
           <button className="px-4 py-2 bg-primary text-white rounded text-sm">Generate Full Health Report</button>
           <button className="px-4 py-2 border rounded text-sm">View Medical Incidents Log</button>
        </div>
      </div>
    </div>
  );
}`
};

Object.keys(moduleRichUI).forEach(dir => {
  const modulePath = path.join(principalPath, dir);
  if (!fs.existsSync(modulePath)) {
    console.log(`Directory not found: ${modulePath}`);
    return;
  }

  // Write rich UI component
  const componentPath = path.join(modulePath, 'MissingFeaturesRichUI.tsx');
  fs.writeFileSync(componentPath, moduleRichUI[dir]);
  console.log(`Created ${componentPath}`);

  // Modify page.tsx
  const pagePath = path.join(modulePath, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let pageContent = fs.readFileSync(pagePath, 'utf8');

    if (!pageContent.includes('MissingFeaturesRichUI')) {
      const importStatement = `import MissingFeaturesRichUI from './MissingFeaturesRichUI';\n`;
      const lastImportIndex = pageContent.lastIndexOf('import ');
      if (lastImportIndex !== -1) {
        const nextLineIndex = pageContent.indexOf('\n', lastImportIndex);
        pageContent = pageContent.substring(0, nextLineIndex + 1) + importStatement + pageContent.substring(nextLineIndex + 1);
      } else {
        pageContent = importStatement + pageContent;
      }

      const replaceRegex = /(<\/div>\s*\)\s*;\s*\}\s*)$/m;
      if (replaceRegex.test(pageContent)) {
        pageContent = pageContent.replace(replaceRegex, `      <MissingFeaturesRichUI />\n    $1`);
      } else {
        const lastDivIndex = pageContent.lastIndexOf('</div>');
        if (lastDivIndex !== -1) {
          pageContent = pageContent.substring(0, lastDivIndex) + `      <MissingFeaturesRichUI />\n    ` + pageContent.substring(lastDivIndex);
        }
      }
      fs.writeFileSync(pagePath, pageContent);
      console.log(`Updated ${pagePath}`);
    }
  }
});
console.log("All rich UI features added.");
