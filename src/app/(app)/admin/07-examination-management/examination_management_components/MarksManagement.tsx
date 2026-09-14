"use client";

import React, { useState } from 'react';
import { PenTool, CheckSquare, MessageSquare, Save, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function MarksManagement() {
  const [activeTab, setActiveTab] = useState('entry');
  const [students, setStudents] = useState([
    { id: 1, name: 'Aarav Patel', roll: '1', marks: 85, remark: 'Good' },
    { id: 2, name: 'Rohan Sharma', roll: '2', marks: 92, remark: 'Excellent' },
    { id: 3, name: 'Sneha Verma', roll: '3', marks: 45, remark: 'Needs Improvement' },
  ]);
  const [isVerified, setIsVerified] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleMarksChange = (id: number, marks: string) => {
    setStudents(students.map(s => s.id === id ? { ...s, marks: Number(marks) || 0 } : s));
  };

  const handleRemarkChange = (id: number, remark: string) => {
    setStudents(students.map(s => s.id === id ? { ...s, remark } : s));
  };

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const verifyMarks = () => {
    setIsVerified(true);
    handleSave();
  };

  const approveMarks = () => {
    setIsApproved(true);
    handleSave();
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in">
      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('entry')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'entry' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <PenTool size={18} /> Marks Entry & Remarks
        </button>
        <button onClick={() => setActiveTab('verify')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'verify' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <CheckSquare size={18} /> Marks Verification
        </button>
        <button onClick={() => setActiveTab('approve')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'approve' ? 'bg-success/10 text-success' : 'text-text-secondary hover:bg-bg-page')}>
          <MessageSquare size={18} /> Final Approval
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto relative">
        {showToast && (
          <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
            <CheckCircle size={16} /> Saved Successfully
          </div>
        )}

        {activeTab === 'entry' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Student Marks Entry</h2>
            
            <div className="flex flex-wrap gap-4 items-end bg-bg-page border border-border p-4 rounded-lg">
              <div className="flex flex-col gap-1.5 flex-1 min-w-[150px]">
                <label className="text-xs font-semibold text-text-secondary">Exam</label>
                <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                  <option>Term 1 Exam</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5 flex-1 min-w-[150px]">
                <label className="text-xs font-semibold text-text-secondary">Class - Section</label>
                <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                  <option>Class X - A</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5 flex-1 min-w-[150px]">
                <label className="text-xs font-semibold text-text-secondary">Subject</label>
                <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                  <option>Mathematics</option>
                </select>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg shadow-sm">
              <div className="p-3 border-b border-border bg-bg-page flex justify-between items-center rounded-t-lg">
                <span className="font-bold text-sm">Mathematics | Max Marks: 100</span>
                {isVerified && <span className="bg-success-bg text-success text-xs font-bold px-2 py-1 rounded">Verified - Locked</span>}
              </div>
              <table className="w-full text-left border-collapse">
                <thead className="bg-bg-page">
                  <tr>
                    <th className="p-3 text-xs font-bold text-text-secondary uppercase border-b border-border">Roll No</th>
                    <th className="p-3 text-xs font-bold text-text-secondary uppercase border-b border-border">Student Name</th>
                    <th className="p-3 text-xs font-bold text-text-secondary uppercase border-b border-border w-32">Marks Obtained</th>
                    <th className="p-3 text-xs font-bold text-text-secondary uppercase border-b border-border">Teacher Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map(student => (
                    <tr key={student.id} className="border-b border-border last:border-b-0 hover:bg-bg-page/50 transition">
                      <td className="p-3 font-semibold text-sm">{student.roll}</td>
                      <td className="p-3 text-sm font-bold text-text-primary">{student.name}</td>
                      <td className="p-3">
                        <input 
                          type="number" 
                          disabled={isVerified}
                          value={student.marks} 
                          onChange={(e) => handleMarksChange(student.id, e.target.value)}
                          className="bg-bg-input border border-border rounded px-3 py-1.5 text-sm outline-none focus:border-primary w-20 font-bold disabled:opacity-50" 
                        />
                      </td>
                      <td className="p-3">
                        <input 
                          type="text" 
                          disabled={isVerified}
                          value={student.remark} 
                          onChange={(e) => handleRemarkChange(student.id, e.target.value)}
                          className="bg-bg-input border border-border rounded px-3 py-1.5 text-sm outline-none focus:border-primary w-full disabled:opacity-50" 
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {!isVerified && (
                <div className="p-4 flex justify-end">
                  <button onClick={handleSave} className="bg-primary text-black px-6 py-2 rounded-md text-sm font-bold shadow-sm flex items-center gap-2 hover:bg-primary-hover active:scale-95 transition"><Save size={16}/> Save Draft</button>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'verify' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Marks Verification</h2>
            <p className="text-sm text-text-secondary">Class Teachers or HODs must verify the marks entered by subject teachers before they are sent for Principal approval.</p>
            
            <div className="bg-card border border-border p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center border-b border-border pb-3 mb-3">
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-text-primary">Term 1 Exam - Class X A (Mathematics)</span>
                  <span className="text-xs text-text-secondary">Submitted by: Mr. John Doe</span>
                </div>
                {isVerified ? (
                  <span className="bg-success text-white text-xs font-bold px-3 py-1.5 rounded">Verified Successfully</span>
                ) : (
                  <button onClick={verifyMarks} className="bg-info text-white px-4 py-2 rounded-md text-sm font-bold shadow-sm hover:bg-info/90 active:scale-95 transition">Verify & Lock Sheet</button>
                )}
              </div>
              <div className="text-sm text-text-primary grid grid-cols-2 gap-4">
                <span>Total Students: <strong>3</strong></span>
                <span>Average Score: <strong>74.0</strong></span>
                <span>Highest Score: <strong>92</strong> (Rohan Sharma)</span>
                <span>Fails: <strong>0</strong></span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'approve' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Final Principal Approval</h2>
            <p className="text-sm text-text-secondary">Once verified by HODs, the Principal must give final approval to generate Result Cards.</p>
            
            <div className="bg-card border border-border p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center border-b border-border pb-3 mb-3">
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-text-primary">Term 1 Exam - Entire Class X</span>
                  <span className="text-xs text-success font-bold mt-1">All Subjects Verified</span>
                </div>
                {isApproved ? (
                  <span className="bg-success text-white text-xs font-bold px-3 py-1.5 rounded">Approved for Publishing</span>
                ) : (
                  <button onClick={approveMarks} className="bg-success text-white px-4 py-2 rounded-md text-sm font-bold shadow-sm hover:bg-success/90 active:scale-95 transition flex items-center gap-2"><CheckCircle size={16}/> Approve Results</button>
                )}
              </div>
              <div className="text-sm text-text-primary">
                Approval generates Report Cards and makes them available in the next processing step.
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
