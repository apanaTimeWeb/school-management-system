"use client";

import React, { useState } from 'react';
import { BookOpen, Map, Users, Award, Link } from 'lucide-react';
import clsx from 'clsx';

export default function SubjectMapping() {
  const [activeTab, setActiveTab] = useState('subjects');

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in">
      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('subjects')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'subjects' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <BookOpen size={18} /> Master Subjects
        </button>
        <button onClick={() => setActiveTab('classSub')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'classSub' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <Map size={18} /> Class-Subject Map
        </button>
        <button onClick={() => setActiveTab('teacherSub')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'teacherSub' ? 'bg-success/10 text-success' : 'text-text-secondary hover:bg-bg-page')}>
          <Link size={18} /> Teacher-Subject Map
        </button>
        <button onClick={() => setActiveTab('classTeacher')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'classTeacher' ? 'bg-warning/10 text-warning' : 'text-text-secondary hover:bg-bg-page')}>
          <Users size={18} /> Class Teacher Assign
        </button>
        <button onClick={() => setActiveTab('hod')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'hod' ? 'bg-danger/10 text-danger' : 'text-text-secondary hover:bg-bg-page')}>
          <Award size={18} /> HOD Assignment
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'subjects' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Master Subjects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1 flex flex-col gap-4 bg-bg-page border border-border p-4 rounded-lg">
                <h3 className="font-bold text-sm text-text-secondary uppercase">Add New Subject</h3>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-text-secondary">Subject Code</label>
                    <input type="text" placeholder="e.g. MAT101" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-text-secondary">Subject Name</label>
                    <input type="text" placeholder="e.g. Mathematics" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-text-secondary">Subject Type</label>
                    <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                      <option>Theory</option>
                      <option>Practical</option>
                      <option>Both</option>
                    </select>
                  </div>
                  <button className="bg-primary text-black rounded-md text-sm font-bold py-2 mt-2 shadow-sm">Save Subject</button>
                </div>
              </div>
              <div className="lg:col-span-2">
                <table className="w-full text-left border-collapse border border-border rounded-lg overflow-hidden">
                  <thead className="bg-bg-page">
                    <tr>
                      <th className="p-3 text-xs font-bold text-text-secondary uppercase">Code</th>
                      <th className="p-3 text-xs font-bold text-text-secondary uppercase">Subject Name</th>
                      <th className="p-3 text-xs font-bold text-text-secondary uppercase">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border bg-card">
                      <td className="p-3 font-semibold text-sm">ENG101</td>
                      <td className="p-3 text-sm">English Literature</td>
                      <td className="p-3 text-sm">Theory</td>
                    </tr>
                    <tr className="border-t border-border bg-card">
                      <td className="p-3 font-semibold text-sm">PHY101</td>
                      <td className="p-3 text-sm">Physics</td>
                      <td className="p-3 text-sm">Both</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'classSub' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Class - Subject Mapping</h2>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-xs font-semibold text-text-secondary">Select Class</label>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                    <option>Class X</option>
                    <option>Class IX</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-xs font-semibold text-text-secondary">Select Subject to Map</label>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                    <option>Mathematics (MAT101)</option>
                    <option>Physics (PHY101)</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button className="bg-primary text-black px-6 py-1.5 h-[34px] rounded-md text-sm font-bold shadow-sm">Map Subject</button>
                </div>
              </div>
              <div className="mt-4 bg-bg-page border border-border p-4 rounded-lg">
                <h3 className="font-bold text-sm text-text-primary mb-3">Subjects mapped to Class X</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-card border border-border rounded-full text-xs font-bold shadow-sm flex items-center gap-2">English (ENG101) <button className="text-danger hover:text-danger/70">×</button></span>
                  <span className="px-3 py-1 bg-card border border-border rounded-full text-xs font-bold shadow-sm flex items-center gap-2">Physics (PHY101) <button className="text-danger hover:text-danger/70">×</button></span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'teacherSub' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Teacher - Subject Mapping</h2>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Select Teacher</label>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                    <option>Mr. John Doe</option>
                    <option>Mrs. Smith</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Select Class & Section</label>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                    <option>Class X - A</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Select Subject</label>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                    <option>Physics (PHY101)</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="bg-primary text-black px-6 py-2 rounded-md text-sm font-bold shadow-sm">Assign Teacher to Subject</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'classTeacher' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Class Teacher Assignment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-text-secondary">Select Class & Section</label>
                <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                  <option>Class X - A</option>
                  <option>Class IX - B</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-text-secondary">Assign Class Teacher</label>
                <div className="flex gap-2">
                  <select className="flex-1 bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                    <option>Mr. John Doe</option>
                  </select>
                  <button className="bg-primary text-black px-4 py-1.5 rounded-md text-sm font-bold shadow-sm">Assign</button>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-bold text-sm text-text-secondary uppercase mb-3">Current Assignments</h3>
              <table className="w-full text-left border-collapse border border-border rounded-lg overflow-hidden">
                <thead className="bg-bg-page">
                  <tr>
                    <th className="p-3 text-xs font-bold text-text-secondary uppercase">Class - Section</th>
                    <th className="p-3 text-xs font-bold text-text-secondary uppercase">Class Teacher</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border bg-card">
                    <td className="p-3 font-semibold text-sm">Class X - A</td>
                    <td className="p-3 text-sm text-primary font-bold">Mr. John Doe</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'hod' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">HOD (Head of Dept) Assignment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-text-secondary">Select Department</label>
                <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                  <option>Mathematics</option>
                  <option>Science</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-text-secondary">Assign HOD</label>
                <div className="flex gap-2">
                  <select className="flex-1 bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                    <option>Mrs. Smith</option>
                  </select>
                  <button className="bg-primary text-black px-4 py-1.5 rounded-md text-sm font-bold shadow-sm">Assign</button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
