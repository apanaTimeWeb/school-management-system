const fs = require('fs');
const path = require('path');

const teacherPath = path.join(__dirname, 'src', 'app', '(app)', 'teacher');

const integrations = [
  {
    dir: 'dashboard',
    file: 'TodaysClassesSection.tsx',
    content: `
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
`
  },
  {
    dir: 'timetable',
    file: 'RoomClassIntegration.tsx',
    content: `
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
`
  },
  {
    dir: 'attendance',
    file: 'AttendanceCorrectionRequest.tsx',
    content: `
import React from 'react';
import { Edit3, CheckCircle, Clock } from 'lucide-react';

export default function AttendanceCorrectionRequest() {
  return (
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><Edit3 className="w-5 h-5 text-amber-500" /> Attendance Edit/Correction Request</h3>
        <form className="space-y-4 text-sm">
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-gray-500 mb-1">Date</label><input type="date" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" /></div>
            <div><label className="block text-gray-500 mb-1">Class/Section</label><select className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"><option>Class 10 A</option></select></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-gray-500 mb-1">Student</label><select className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"><option>Rahul Sharma (Roll 15)</option></select></div>
            <div><label className="block text-gray-500 mb-1">Requested Status</label><select className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"><option>Present</option><option>Leave</option></select></div>
          </div>
          <div><label className="block text-gray-500 mb-1">Correction Reason</label><textarea className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" rows={2} placeholder="Entered by mistake..."></textarea></div>
          <button type="button" className="w-full py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700">Submit Request to Admin</button>
        </form>
      </div>
      
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4">Recent Correction Requests</h3>
        <div className="space-y-3">
           <div className="p-3 border rounded-lg flex justify-between items-center bg-gray-50 dark:bg-gray-900/50">
             <div>
               <p className="font-semibold text-sm">Rahul Sharma <span className="font-normal text-gray-500">| 15 Sep</span></p>
               <p className="text-xs text-gray-500">Requested: Absent → Present</p>
             </div>
             <span className="flex items-center gap-1 text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded-full"><Clock className="w-3 h-3"/> Pending</span>
           </div>
           <div className="p-3 border rounded-lg flex justify-between items-center bg-gray-50 dark:bg-gray-900/50">
             <div>
               <p className="font-semibold text-sm">Priya Singh <span className="font-normal text-gray-500">| 12 Sep</span></p>
               <p className="text-xs text-gray-500">Requested: Present → Leave</p>
             </div>
             <span className="flex items-center gap-1 text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full"><CheckCircle className="w-3 h-3"/> Approved</span>
           </div>
        </div>
      </div>
    </div>
  );
}
`
  },
  {
    dir: 'assignments',
    file: 'AssignmentQuestionsForm.tsx',
    content: `
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
`
  },
  {
    dir: 'study-material',
    file: 'StudyMaterialManagement.tsx',
    content: `
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
`
  },
  {
    dir: 'examinations',
    file: 'InternalAssessmentUI.tsx',
    content: `
import React from 'react';
import { ClipboardList } from 'lucide-react';

export default function InternalAssessmentUI() {
  return (
    <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold flex items-center gap-2"><ClipboardList className="w-5 h-5 text-primary" /> Internal Assessment Marks Entry</h3>
        <div className="flex gap-2">
           <select className="p-1.5 text-sm border rounded"><option>Class 10 A - Science</option></select>
           <select className="p-1.5 text-sm border rounded"><option>Practical Exam</option><option>Project Work</option></select>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-900/50 text-gray-500">
            <tr><th className="px-4 py-3">Roll No</th><th className="px-4 py-3">Student Name</th><th className="px-4 py-3">Marks Obtained</th><th className="px-4 py-3">Max Marks</th><th className="px-4 py-3">Remarks</th></tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-gray-700">
              <td className="px-4 py-3">101</td><td className="px-4 py-3 font-medium">Rahul Sharma</td>
              <td className="px-4 py-3"><input type="number" className="w-20 p-1 border rounded text-center" defaultValue="18" /></td>
              <td className="px-4 py-3">20</td>
              <td className="px-4 py-3"><input type="text" className="w-full p-1 border rounded" placeholder="Good effort" /></td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="px-4 py-3">102</td><td className="px-4 py-3 font-medium">Priya Singh</td>
              <td className="px-4 py-3"><input type="number" className="w-20 p-1 border rounded text-center" defaultValue="19" /></td>
              <td className="px-4 py-3">20</td>
              <td className="px-4 py-3"><input type="text" className="w-full p-1 border rounded" placeholder="Excellent" /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end gap-3">
        <button className="px-4 py-2 border rounded text-sm font-medium">Save as Draft</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium">Submit Internal Marks</button>
      </div>
    </div>
  );
}
`
  },
  {
    dir: 'parent-communication',
    file: 'StudentSpecificCommunication.tsx',
    content: `
import React from 'react';
import { Send, User } from 'lucide-react';

export default function StudentSpecificCommunication() {
  return (
    <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Student-specific Parent Communication</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 border dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900/20">
           <label className="block text-xs font-medium text-gray-500 mb-1">Select Student (Assigned Classes)</label>
           <select className="w-full p-2 mb-4 text-sm border rounded dark:bg-gray-800">
             <option>Rahul Sharma (Class 10 A)</option>
             <option>Priya Singh (Class 10 A)</option>
           </select>
           <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 border rounded-lg shadow-sm">
             <div className="p-2 bg-blue-100 text-blue-600 rounded-full"><User className="w-5 h-5"/></div>
             <div><p className="text-sm font-semibold">Mr. Rakesh Sharma</p><p className="text-xs text-gray-500">Father | +91 9876543210</p></div>
           </div>
        </div>
        
        <div className="col-span-2 flex flex-col gap-3">
           <select className="w-48 p-2 text-sm border rounded dark:bg-gray-800"><option>Academic Feedback</option><option>Behaviour/Discipline</option><option>Homework Alert</option></select>
           <textarea className="w-full p-3 border rounded-lg dark:bg-gray-800 flex-1 min-h-[120px] text-sm" placeholder="Write message to parent..."></textarea>
           <div className="flex justify-between items-center">
             <button className="text-sm text-gray-500 hover:text-gray-900">📎 Attach Document (Optional)</button>
             <button className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium flex items-center gap-2"><Send className="w-4 h-4"/> Send Message</button>
           </div>
        </div>
      </div>
    </div>
  );
}
`
  },
  {
    dir: 'communication',
    file: 'ImportantUpdatesSection.tsx',
    content: `
import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function ImportantUpdatesSection() {
  return (
    <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2"><AlertCircle className="w-5 h-5 text-amber-500" /> Class Communication & Important Updates</h3>
        <button className="px-4 py-2 bg-primary text-white rounded text-sm">Post Update</button>
      </div>
      <div className="space-y-4">
         <div className="p-4 border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-900/20 rounded-r-lg shadow-sm">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-semibold text-amber-900 dark:text-amber-400">Science Lab Practical Postponed</h4>
              <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded">High Priority</span>
            </div>
            <p className="text-sm text-amber-800 dark:text-amber-500 mb-2">The scheduled practical for Class 10 A has been moved to next Friday due to equipment maintenance.</p>
            <p className="text-xs text-amber-700/70 font-medium">Published by You • Today, 09:30 AM • Target: Class 10 A</p>
         </div>
      </div>
    </div>
  );
}
`
  },
  {
    dir: 'substitutes',
    file: 'ReplacementNotification.tsx',
    content: `
import React from 'react';
import { Bell } from 'lucide-react';

export default function ReplacementNotification() {
  return (
    <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Replacement Teacher Notifications</h3>
      <div className="space-y-3">
         <div className="flex gap-4 p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800">
            <div className="pt-1 text-blue-500"><Bell className="w-5 h-5" /></div>
            <div>
               <h4 className="font-semibold text-blue-900 dark:text-blue-300">Substitute Assigned: Class 9 B (English)</h4>
               <p className="text-sm text-blue-800 dark:text-blue-400 mt-1">You have been assigned as a replacement teacher for Period 4 today.</p>
               <div className="mt-3 flex gap-4 text-xs font-medium text-blue-700 dark:text-blue-500 bg-blue-100/50 p-2 rounded">
                 <span>Date: {new Date().toLocaleDateString()}</span>
                 <span>Original Teacher: Mr. Ramesh</span>
                 <span>Room: 204</span>
               </div>
               <div className="mt-3 flex gap-2">
                 <button className="px-3 py-1.5 bg-blue-600 text-white rounded text-xs">Acknowledge</button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
`
  },
  {
    dir: 'discipline',
    file: 'DisciplineActionUI.tsx',
    content: `
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
`
  },
  {
    dir: 'ptm',
    file: 'StudentSelectionMeeting.tsx',
    content: `
import React from 'react';
import { Calendar, Users } from 'lucide-react';

export default function StudentSelectionMeeting() {
  return (
    <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><Calendar className="w-5 h-5 text-primary" /> Schedule Parent Meeting & Student Selection</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="col-span-1 border-r dark:border-gray-700 pr-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Search Student</label>
            <input type="text" placeholder="Type student name or roll..." className="w-full p-2 border rounded text-sm mb-4" />
            <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
               <div className="p-2 border rounded border-blue-500 bg-blue-50 dark:bg-blue-900/20 cursor-pointer text-sm">
                  <p className="font-semibold">Rahul Sharma (Class 10 A)</p>
                  <p className="text-xs text-gray-500 mt-1">Parent: Rakesh Sharma</p>
               </div>
               <div className="p-2 border rounded hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer text-sm">
                  <p className="font-semibold">Priya Singh (Class 10 A)</p>
                  <p className="text-xs text-gray-500 mt-1">Parent: Anil Singh</p>
               </div>
            </div>
         </div>
         <div className="col-span-2 flex flex-col justify-center">
            <h4 className="font-medium text-gray-900 dark:text-white mb-4">Meeting Details for: <span className="text-blue-600">Rahul Sharma</span></h4>
            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
               <div><label className="block text-gray-500 mb-1">Date</label><input type="date" className="w-full p-2 border rounded" /></div>
               <div><label className="block text-gray-500 mb-1">Time Slot</label><select className="w-full p-2 border rounded"><option>14:00 - 14:30</option></select></div>
            </div>
            <div className="mb-4"><label className="block text-gray-500 mb-1">Teacher Remarks / Agenda</label><textarea className="w-full p-2 border rounded" rows={3}></textarea></div>
            <button className="px-6 py-2 bg-blue-600 text-white rounded font-medium self-end">Confirm Meeting Schedule</button>
         </div>
      </div>
    </div>
  );
}
`
  },
  {
    dir: 'documents',
    file: 'TeachingDocuments.tsx',
    content: `
import React from 'react';
import { FileText, Download, UploadCloud } from 'lucide-react';

export default function TeachingDocuments() {
  return (
    <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2"><FileText className="w-5 h-5 text-blue-500" /> Teaching Documents (Lesson Plans, Notes)</h3>
        <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded text-sm font-medium flex items-center gap-2"><UploadCloud className="w-4 h-4"/> Upload Teaching Document</button>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-900/50 text-gray-500">
            <tr><th className="px-4 py-3">Document Title</th><th className="px-4 py-3">Type</th><th className="px-4 py-3">Class/Subject</th><th className="px-4 py-3">Status</th><th className="px-4 py-3">Action</th></tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-gray-700">
              <td className="px-4 py-3 font-medium">Kinematics Lesson Plan W1</td>
              <td className="px-4 py-3">Lesson Plan</td>
              <td className="px-4 py-3">Class 11 - Physics</td>
              <td className="px-4 py-3"><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">Approved</span></td>
              <td className="px-4 py-3"><button className="text-blue-600 hover:bg-blue-50 p-1 rounded"><Download className="w-4 h-4"/></button></td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="px-4 py-3 font-medium">Chemical Bonding Notes V2</td>
              <td className="px-4 py-3">Study Notes</td>
              <td className="px-4 py-3">Class 10 - Chemistry</td>
              <td className="px-4 py-3"><span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">Personal Draft</span></td>
              <td className="px-4 py-3"><button className="text-blue-600 hover:bg-blue-50 p-1 rounded"><Download className="w-4 h-4"/></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
`
  },
  {
    dir: 'reports',
    file: 'ReportsExportControls.tsx',
    content: `
import React from 'react';
import { DownloadCloud } from 'lucide-react';

export default function ReportsExportControls() {
  return (
    <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Export Teacher Reports</h3>
      <div className="flex flex-wrap items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg border dark:border-gray-700">
         <select className="p-2 border rounded text-sm min-w-[200px]"><option>Class Attendance Report</option><option>Student Performance Marks</option><option>Syllabus Progress Report</option></select>
         <select className="p-2 border rounded text-sm"><option>Class 10 A</option></select>
         <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-2"></div>
         <button className="px-4 py-2 bg-red-50 text-red-600 border border-red-200 rounded text-sm font-medium hover:bg-red-100 flex items-center gap-2"><DownloadCloud className="w-4 h-4"/> Export PDF</button>
         <button className="px-4 py-2 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded text-sm font-medium hover:bg-emerald-100 flex items-center gap-2"><DownloadCloud className="w-4 h-4"/> Export Excel</button>
      </div>
    </div>
  );
}
`
  }
];

// In the previous audit, we mapped 25 modules to dirs. Some of these missing features are in dirs like 'dashboard', 'timetable', etc.
// Let's create the components and modify page.tsx for each.

integrations.forEach(integration => {
  const dirPathsToTry = [
    path.join(teacherPath, integration.dir),
    path.join(teacherPath, integration.dir === 'substitutes' ? 'substitute-classes' : ''),
    path.join(teacherPath, integration.dir === 'ptm' ? 'meetings' : ''),
    path.join(teacherPath, integration.dir === 'parent-communication' ? 'parent-communication' : '')
  ].filter(p => p !== path.join(teacherPath, ''));

  let foundPath = null;
  for (const dp of dirPathsToTry) {
    if (fs.existsSync(dp)) {
      foundPath = dp;
      break;
    }
  }

  if (foundPath) {
    const compPath = path.join(foundPath, integration.file);
    fs.writeFileSync(compPath, integration.content);
    console.log(`Created ${compPath}`);

    const pagePath = path.join(foundPath, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      let pageContent = fs.readFileSync(pagePath, 'utf8');
      
      const compName = integration.file.replace('.tsx', '');
      if (!pageContent.includes(compName)) {
        const importStatement = `import ${compName} from './${compName}';\n`;
        const lastImportIndex = pageContent.lastIndexOf('import ');
        if (lastImportIndex !== -1) {
          const nextLineIndex = pageContent.indexOf('\n', lastImportIndex);
          pageContent = pageContent.substring(0, nextLineIndex + 1) + importStatement + pageContent.substring(nextLineIndex + 1);
        } else {
          pageContent = importStatement + pageContent;
        }

        const replaceRegex = /(<\/div>\s*\)\s*;\s*\}\s*)$/m;
        if (replaceRegex.test(pageContent)) {
          pageContent = pageContent.replace(replaceRegex, `      <${compName} />\n    $1`);
        } else {
          const lastDivIndex = pageContent.lastIndexOf('</div>');
          if (lastDivIndex !== -1) {
            pageContent = pageContent.substring(0, lastDivIndex) + `      <${compName} />\n    ` + pageContent.substring(lastDivIndex);
          }
        }
        fs.writeFileSync(pagePath, pageContent);
        console.log(`Updated ${pagePath}`);
      }
    }
  } else {
    console.log(`Could not find a directory for integration: ${integration.dir}`);
  }
});
console.log("Implementation completed.");
