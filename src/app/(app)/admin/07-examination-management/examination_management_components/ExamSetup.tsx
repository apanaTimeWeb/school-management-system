"use client";

import React, { useState } from 'react';
import { Calendar, Settings, List, PlusCircle, CheckCircle, Trash2 } from 'lucide-react';
import clsx from 'clsx';

export default function ExamSetup() {
  const [activeTab, setActiveTab] = useState('types');
  const [examTypes, setExamTypes] = useState([
    { id: 1, name: 'Term 1 Exam', group: 'Half Yearly' },
    { id: 2, name: 'Unit Test 1', group: 'Formative Assessment' },
  ]);
  const [schedule, setSchedule] = useState([
    { id: 1, class: 'Class X', subject: 'Mathematics', date: '2026-11-15', startTime: '09:00', endTime: '12:00' }
  ]);
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const deleteExamType = (id: number) => {
    setExamTypes(examTypes.filter(e => e.id !== id));
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in">
      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('types')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'types' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Settings size={18} /> Exam Types & Groups
        </button>
        <button onClick={() => setActiveTab('schedule')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'schedule' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <Calendar size={18} /> Exam Schedule
        </button>
        <button onClick={() => setActiveTab('grades')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'grades' ? 'bg-success/10 text-success' : 'text-text-secondary hover:bg-bg-page')}>
          <List size={18} /> Grade Configuration
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto relative">
        {showToast && (
          <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
            <CheckCircle size={16} /> Saved Successfully
          </div>
        )}

        {activeTab === 'types' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Exam Types & Groups Setup</h2>
            
            <div className="flex flex-col gap-4 bg-bg-page border border-border p-5 rounded-lg max-w-xl">
              <h3 className="font-bold text-sm text-text-secondary uppercase">Create Exam Type</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Exam Group</label>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                    <option>Formative Assessment</option>
                    <option>Summative Assessment</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Exam Name (Type)</label>
                  <input type="text" placeholder="e.g. Unit Test 2" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                </div>
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <button onClick={handleSave} className="bg-primary text-white px-4 py-2 rounded-md text-sm font-bold shadow-sm flex items-center justify-center gap-2 hover:bg-primary-hover active:scale-95 transition"><PlusCircle size={16}/> Create Exam Type</button>
                </div>
              </div>
            </div>

            <div className="mt-2">
              <h3 className="font-bold text-sm text-text-secondary uppercase mb-3">Configured Exams</h3>
              <div className="flex flex-col gap-2 max-w-xl">
                {examTypes.map(exam => (
                  <div key={exam.id} className="bg-card border border-border p-3 rounded-lg shadow-sm flex justify-between items-center transition-all hover:border-primary/50">
                    <div className="flex flex-col">
                      <span className="font-bold text-sm text-text-primary">{exam.name}</span>
                      <span className="text-xs text-text-secondary">{exam.group}</span>
                    </div>
                    <button onClick={() => deleteExamType(exam.id)} className="text-danger p-1.5 rounded-full hover:bg-danger-bg transition" title="Delete"><Trash2 size={16}/></button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Exam Schedule & Subject Map</h2>
            
            <div className="flex flex-wrap gap-4 items-end bg-bg-page border border-border p-4 rounded-lg">
              <div className="flex flex-col gap-1.5 flex-1 min-w-[150px]">
                <label className="text-xs font-semibold text-text-secondary">Select Exam</label>
                <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                  <option>Term 1 Exam</option>
                  <option>Unit Test 1</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5 flex-1 min-w-[150px]">
                <label className="text-xs font-semibold text-text-secondary">Select Class</label>
                <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                  <option>Class X</option>
                  <option>Class IX</option>
                </select>
              </div>
            </div>

            <div className="bg-card border border-border p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-sm text-text-primary mb-4">Subject-wise Exam Dates</h3>
              
              <table className="w-full text-left border-collapse border border-border rounded-lg overflow-hidden">
                <thead className="bg-bg-page">
                  <tr>
                    <th className="p-3 text-xs font-bold text-text-secondary uppercase">Subject</th>
                    <th className="p-3 text-xs font-bold text-text-secondary uppercase">Date</th>
                    <th className="p-3 text-xs font-bold text-text-secondary uppercase">Start Time</th>
                    <th className="p-3 text-xs font-bold text-text-secondary uppercase">End Time</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((sch) => (
                    <tr key={sch.id} className="border-t border-border bg-card">
                      <td className="p-3 font-semibold text-sm">{sch.subject}</td>
                      <td className="p-3"><input type="date" defaultValue={sch.date} className="bg-bg-input border border-border rounded px-2 py-1 text-sm outline-none w-32" /></td>
                      <td className="p-3"><input type="time" defaultValue={sch.startTime} className="bg-bg-input border border-border rounded px-2 py-1 text-sm outline-none w-24" /></td>
                      <td className="p-3"><input type="time" defaultValue={sch.endTime} className="bg-bg-input border border-border rounded px-2 py-1 text-sm outline-none w-24" /></td>
                    </tr>
                  ))}
                  <tr className="border-t border-border bg-card">
                    <td className="p-3 font-semibold text-sm">Physics</td>
                    <td className="p-3"><input type="date" className="bg-bg-input border border-border rounded px-2 py-1 text-sm outline-none w-32" /></td>
                    <td className="p-3"><input type="time" className="bg-bg-input border border-border rounded px-2 py-1 text-sm outline-none w-24" /></td>
                    <td className="p-3"><input type="time" className="bg-bg-input border border-border rounded px-2 py-1 text-sm outline-none w-24" /></td>
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-end mt-4">
                <button onClick={handleSave} className="bg-primary text-white px-6 py-2 rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition">Save Schedule</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'grades' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Grade Configuration Master</h2>
            
            <table className="w-full text-left border-collapse border border-border rounded-lg overflow-hidden mt-2 max-w-2xl">
              <thead className="bg-bg-page">
                <tr>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Grade Name</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Min Percentage (%)</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Max Percentage (%)</th>
                  <th className="p-3 text-xs font-bold text-text-secondary uppercase">Grade Point (GPA)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border bg-card">
                  <td className="p-3 font-bold text-success text-sm">A+</td>
                  <td className="p-3"><input type="number" defaultValue="91" className="bg-bg-input border border-border rounded px-2 py-1 text-sm outline-none w-20" /></td>
                  <td className="p-3"><input type="number" defaultValue="100" className="bg-bg-input border border-border rounded px-2 py-1 text-sm outline-none w-20" /></td>
                  <td className="p-3"><input type="number" defaultValue="10" className="bg-bg-input border border-border rounded px-2 py-1 text-sm outline-none w-20" /></td>
                </tr>
                <tr className="border-t border-border bg-card">
                  <td className="p-3 font-bold text-success text-sm">A</td>
                  <td className="p-3"><input type="number" defaultValue="81" className="bg-bg-input border border-border rounded px-2 py-1 text-sm outline-none w-20" /></td>
                  <td className="p-3"><input type="number" defaultValue="90" className="bg-bg-input border border-border rounded px-2 py-1 text-sm outline-none w-20" /></td>
                  <td className="p-3"><input type="number" defaultValue="9" className="bg-bg-input border border-border rounded px-2 py-1 text-sm outline-none w-20" /></td>
                </tr>
                <tr className="border-t border-border bg-card">
                  <td className="p-3 font-bold text-danger text-sm">F</td>
                  <td className="p-3"><input type="number" defaultValue="0" className="bg-bg-input border border-border rounded px-2 py-1 text-sm outline-none w-20" /></td>
                  <td className="p-3"><input type="number" defaultValue="32" className="bg-bg-input border border-border rounded px-2 py-1 text-sm outline-none w-20" /></td>
                  <td className="p-3"><input type="number" defaultValue="0" className="bg-bg-input border border-border rounded px-2 py-1 text-sm outline-none w-20" /></td>
                </tr>
              </tbody>
            </table>
            <div className="flex">
              <button onClick={handleSave} className="bg-primary text-white px-6 py-2 rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition">Update Grading Rules</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
