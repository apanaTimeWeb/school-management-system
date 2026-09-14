"use client";

import React, { useState } from 'react';
import { Users, CheckCircle, XCircle, Clock, Save, FileText } from 'lucide-react';
import clsx from 'clsx';

const initialStudents = [
  { id: '10452', name: 'Aarav Patel', roll: '1', status: 'present', remarks: '' },
  { id: '10453', name: 'Rohan Sharma', roll: '2', status: 'absent', remarks: 'Sick leave approved' },
  { id: '10454', name: 'Sneha Verma', roll: '3', status: 'late', remarks: 'Bus delayed' },
  { id: '10455', name: 'Vikram Singh', roll: '4', status: 'none', remarks: '' },
];

export default function StudentAttendance() {
  const [activeTab, setActiveTab] = useState('mark');
  const [students, setStudents] = useState(initialStudents);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateStatus = (id: string, status: string) => {
    setStudents(students.map(s => s.id === id ? { ...s, status } : s));
    setIsSubmitted(false);
  };

  const updateRemarks = (id: string, remarks: string) => {
    setStudents(students.map(s => s.id === id ? { ...s, remarks } : s));
  };

  const markAllPresent = () => {
    setStudents(students.map(s => ({ ...s, status: 'present' })));
    setIsSubmitted(false);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in">
      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('mark')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'mark' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Users size={18} /> Mark Attendance
        </button>
        <button onClick={() => setActiveTab('leaves')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'leaves' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <FileText size={18} /> Leave Adjusted Data
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'mark' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Student Attendance (Manual)</h2>
            
            <div className="flex flex-wrap gap-4 items-end bg-bg-page border border-border p-4 rounded-lg">
              <div className="flex flex-col gap-1.5 flex-1 min-w-[150px]">
                <label className="text-xs font-semibold text-text-secondary">Class - Section</label>
                <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                  <option>Class X - A</option>
                  <option>Class IX - B</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5 flex-1 min-w-[150px]">
                <label className="text-xs font-semibold text-text-secondary">Attendance Date</label>
                <input type="date" defaultValue="2026-10-15" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
              </div>
              <button className="bg-primary text-black px-6 py-1.5 h-[34px] rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition">Load Roster</button>
            </div>

            <div className="flex justify-between items-center mt-2">
              <h3 className="font-bold text-sm text-text-secondary uppercase">Class X - A | {students.length} Students</h3>
              <div className="flex gap-2">
                <button onClick={markAllPresent} className="text-xs font-bold text-success border border-success/30 bg-success-bg px-3 py-1 rounded hover:bg-success/20 active:scale-95 transition">Mark All Present</button>
              </div>
            </div>

            <table className="w-full text-left border-collapse border border-border rounded-lg overflow-hidden mt-2">
              <thead className="bg-bg-page border-b border-border">
                <tr>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Roll</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Student Name</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase text-center">Status</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Remarks / Tracking</th>
                </tr>
              </thead>
              <tbody>
                {students.map(student => (
                  <tr key={student.id} className="border-b border-border bg-card">
                    <td className="p-3 font-semibold text-sm">{student.roll}</td>
                    <td className="p-3 text-sm flex flex-col">
                      <span className="font-bold text-text-primary">{student.name}</span>
                      <span className="text-xs text-text-secondary">{student.id}</span>
                    </td>
                    <td className="p-3 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button onClick={() => updateStatus(student.id, 'present')} className={clsx("p-1.5 rounded-full transition", student.status === 'present' ? 'bg-success text-white' : 'bg-bg-page text-text-secondary hover:bg-success/20')} title="Present"><CheckCircle size={20}/></button>
                        <button onClick={() => updateStatus(student.id, 'absent')} className={clsx("p-1.5 rounded-full transition", student.status === 'absent' ? 'bg-danger text-white' : 'bg-bg-page text-text-secondary hover:bg-danger/20')} title="Absent"><XCircle size={20}/></button>
                        <button onClick={() => updateStatus(student.id, 'late')} className={clsx("p-1.5 rounded-full transition", student.status === 'late' ? 'bg-warning text-white' : 'bg-bg-page text-text-secondary hover:bg-warning/20')} title="Late"><Clock size={20}/></button>
                      </div>
                    </td>
                    <td className="p-3">
                      <input 
                        type="text" 
                        placeholder="Add note (optional)" 
                        value={student.remarks} 
                        onChange={(e) => updateRemarks(student.id, e.target.value)}
                        className="w-full bg-bg-input border border-border rounded px-2 py-1 text-xs outline-none focus:border-primary" 
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex items-center justify-end gap-4 mt-4">
              {isSubmitted && <span className="text-sm font-bold text-success fade-in">Attendance Saved Successfully!</span>}
              <button onClick={handleSubmit} className="bg-primary text-black px-6 py-2 rounded-md text-sm font-bold shadow-sm flex items-center gap-2 hover:bg-primary-hover active:scale-95 transition"><Save size={16}/> Submit Attendance</button>
            </div>
          </div>
        )}

        {activeTab === 'leaves' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Leave-Adjusted Attendance</h2>
            <p className="text-sm text-text-secondary">Students whose absence is justified by an approved leave application will be marked appropriately in the registry.</p>
            
            <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col gap-3">
              <div className="flex justify-between items-center bg-card border border-border p-3 rounded-lg">
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-text-primary">Rohan Sharma (10453)</span>
                  <span className="text-xs text-text-secondary">Oct 15 - Oct 16 | Medical Leave</span>
                </div>
                <span className="bg-success-bg text-success text-xs font-bold px-2 py-1 rounded">Adjusted in Register</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
