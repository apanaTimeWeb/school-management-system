"use client";

import React, { useState } from 'react';
import { UserPlus, Briefcase, GraduationCap, FileText, CheckCircle, Trash2 } from 'lucide-react';
import clsx from 'clsx';

export default function StaffOnboarding() {
  const [activeTab, setActiveTab] = useState('dept');
  const [depts, setDepts] = useState([
    { id: 1, name: 'Science', head: 'Mr. John Doe' },
    { id: 2, name: 'Administration', head: 'Mrs. Principal' },
  ]);
  const [designations, setDesignations] = useState([
    { id: 1, title: 'Senior Teacher', level: 'L3' },
    { id: 2, title: 'Accountant', level: 'L2' },
  ]);
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const deleteItem = (id: number, setter: any, state: any) => {
    setter(state.filter((item: any) => item.id !== id));
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Saved Successfully
        </div>
      )}

      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('dept')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'dept' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Briefcase size={18} /> Dept & Designation
        </button>
        <button onClick={() => setActiveTab('join')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'join' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <UserPlus size={18} /> Joining Details
        </button>
        <button onClick={() => setActiveTab('qual')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'qual' ? 'bg-warning/10 text-warning' : 'text-text-secondary hover:bg-bg-page')}>
          <GraduationCap size={18} /> Qual. & Experience
        </button>
        <button onClick={() => setActiveTab('docs')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'docs' ? 'bg-success/10 text-success' : 'text-text-secondary hover:bg-bg-page')}>
          <FileText size={18} /> Document Vault
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'dept' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Departments & Designations Master</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <div className="bg-bg-page border border-border p-4 rounded-lg">
                  <h3 className="font-bold text-sm text-text-primary mb-3">Add Department</h3>
                  <div className="flex flex-col gap-2">
                    <input type="text" placeholder="Department Name" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                    <input type="text" placeholder="HOD Name" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                    <button onClick={handleSave} className="bg-primary text-black px-4 py-1.5 rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition">Save Dept</button>
                  </div>
                </div>
                
                <table className="w-full text-left border-collapse border border-border rounded-lg overflow-hidden">
                  <thead className="bg-bg-page">
                    <tr>
                      <th className="p-2 text-xs font-bold text-text-secondary uppercase">Department</th>
                      <th className="p-2 text-xs font-bold text-text-secondary uppercase text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {depts.map(d => (
                      <tr key={d.id} className="border-t border-border bg-card">
                        <td className="p-2 font-semibold text-sm">{d.name}</td>
                        <td className="p-2 text-right"><button onClick={() => deleteItem(d.id, setDepts, depts)} className="text-danger p-1 rounded hover:bg-danger-bg transition"><Trash2 size={14}/></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-bg-page border border-border p-4 rounded-lg">
                  <h3 className="font-bold text-sm text-text-primary mb-3">Add Designation</h3>
                  <div className="flex flex-col gap-2">
                    <input type="text" placeholder="Designation Title" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                    <input type="text" placeholder="Level/Grade" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                    <button onClick={handleSave} className="bg-primary text-black px-4 py-1.5 rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition">Save Designation</button>
                  </div>
                </div>
                
                <table className="w-full text-left border-collapse border border-border rounded-lg overflow-hidden">
                  <thead className="bg-bg-page">
                    <tr>
                      <th className="p-2 text-xs font-bold text-text-secondary uppercase">Title</th>
                      <th className="p-2 text-xs font-bold text-text-secondary uppercase text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {designations.map(d => (
                      <tr key={d.id} className="border-t border-border bg-card">
                        <td className="p-2 font-semibold text-sm">{d.title}</td>
                        <td className="p-2 text-right"><button onClick={() => deleteItem(d.id, setDesignations, designations)} className="text-danger p-1 rounded hover:bg-danger-bg transition"><Trash2 size={14}/></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'join' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Staff Onboarding & Joining</h2>
            
            <div className="bg-bg-page border border-border p-5 rounded-lg max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">First Name *</label>
                  <input type="text" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Last Name *</label>
                  <input type="text" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Employee ID (Auto-generated)</label>
                  <input type="text" disabled defaultValue="EMP1045" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none disabled:opacity-70 font-bold" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Date of Joining</label>
                  <input type="date" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Assign Department</label>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                    <option>Science</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Assign Designation</label>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                    <option>Senior Teacher</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5 md:col-span-2 pt-4 border-t border-border mt-2">
                  <button onClick={handleSave} className="bg-primary text-black px-6 py-2 rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition self-start">Onboard Staff</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {(activeTab === 'qual' || activeTab === 'docs') && (
          <div className="flex flex-col gap-6 fade-in h-full justify-center items-center opacity-50">
            <GraduationCap size={64} className="text-text-secondary" />
            <h2 className="text-xl font-bold text-text-primary text-center">Section under maintenance</h2>
            <p className="text-sm text-text-secondary max-w-md text-center">
              Please use the core staff directory profile page to upload individual qualification degrees, experience certificates, and KYC documents.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
