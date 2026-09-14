"use client";

import React, { useState } from 'react';
import { Badge, RefreshCw, LogOut, BookOpen, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function StaffOperations() {
  const [activeTab, setActiveTab] = useState('idcard');
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerate = () => {
    setIsGenerated(true);
    setTimeout(() => setIsGenerated(false), 3000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      {isGenerated && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Operation Successful
        </div>
      )}

      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('idcard')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'idcard' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Badge size={18} /> ID Cards Generation
        </button>
        <button onClick={() => setActiveTab('assign')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'assign' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <BookOpen size={18} /> Teacher Assignment
        </button>
        <button onClick={() => setActiveTab('transfer')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'transfer' ? 'bg-warning/10 text-warning' : 'text-text-secondary hover:bg-bg-page')}>
          <RefreshCw size={18} /> Staff Transfer
        </button>
        <button onClick={() => setActiveTab('exit')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'exit' ? 'bg-danger/10 text-danger' : 'text-text-secondary hover:bg-bg-page')}>
          <LogOut size={18} /> Staff Exit & Resignation
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'idcard' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Digital ID Card Generator</h2>
            
            <div className="flex gap-4 items-end bg-bg-page border border-border p-4 rounded-lg max-w-xl">
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-xs font-semibold text-text-secondary">Search Employee</label>
                <input type="text" placeholder="Emp ID..." className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
              </div>
              <button onClick={handleGenerate} className="bg-primary text-black px-6 py-1.5 h-[34px] rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition">Preview & Print PDF</button>
            </div>
            
            <div className="w-[300px] h-[450px] border border-border bg-white shadow-lg mx-auto rounded-lg overflow-hidden flex flex-col relative text-black">
               <div className="h-20 bg-primary w-full absolute top-0 left-0"></div>
               <div className="relative mt-8 flex flex-col items-center">
                  <div className="w-24 h-24 bg-gray-200 border-4 border-white rounded-full overflow-hidden shadow-sm z-10 flex items-center justify-center font-bold text-gray-400 text-sm">
                    PHOTO
                  </div>
                  <h3 className="font-black text-xl mt-3 uppercase text-center">John Doe</h3>
                  <p className="text-primary font-bold text-sm">Senior Teacher</p>
                  
                  <div className="w-full px-6 mt-6 flex flex-col gap-2 text-sm font-semibold">
                    <div className="flex justify-between border-b border-gray-200 pb-1">
                      <span className="text-gray-500">EMP ID:</span>
                      <span>EMP001</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-1">
                      <span className="text-gray-500">DOB:</span>
                      <span>15 Aug 1985</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-1">
                      <span className="text-gray-500">Blood Grp:</span>
                      <span className="text-red-600">O+</span>
                    </div>
                  </div>
                  <div className="mt-8 text-xs font-bold text-gray-400 uppercase text-center w-full bg-gray-100 py-3 absolute bottom-0">
                    Authorized Signatory
                  </div>
               </div>
            </div>
          </div>
        )}

        {activeTab === 'assign' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Teacher Class & Subject Assignment</h2>
            <p className="text-sm text-text-secondary">Map teachers to their respective classes and subjects. (Links to Academic Timetable module)</p>

            <div className="bg-bg-page border border-border p-5 rounded-lg max-w-xl flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-text-secondary">Teacher</label>
                <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                  <option>Mr. John Doe (EMP001)</option>
                </select>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-xs font-semibold text-text-secondary">Class & Section</label>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                    <option>Class X - A</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-xs font-semibold text-text-secondary">Subject</label>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                    <option>Mathematics</option>
                  </select>
                </div>
              </div>
              <button onClick={handleGenerate} className="bg-primary text-black px-4 py-2 rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition mt-2 self-start">Assign Subject</button>
            </div>
          </div>
        )}

        {activeTab === 'transfer' && (
          <div className="flex flex-col gap-6 fade-in h-full justify-center items-center opacity-50">
            <RefreshCw size={64} className="text-text-secondary" />
            <h2 className="text-xl font-bold text-text-primary text-center">Inter-branch Transfer</h2>
            <p className="text-sm text-text-secondary max-w-md text-center">
              This feature is only available for Multi-Branch Organization licenses. 
            </p>
          </div>
        )}

        {activeTab === 'exit' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2 text-danger">Staff Exit & Resignation Process</h2>
            
            <div className="bg-danger-bg/20 border border-danger/30 p-5 rounded-lg max-w-xl flex flex-col gap-3">
               <h3 className="font-bold text-sm text-danger uppercase mb-2">Initiate Full & Final Settlement (F&F)</h3>
               <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Search Employee</label>
                  <input type="text" placeholder="Emp ID..." className="bg-white border border-danger/30 rounded-md px-3 py-1.5 text-sm outline-none focus:border-danger" />
               </div>
               <div className="flex flex-col gap-1.5 mt-2">
                  <label className="text-xs font-semibold text-text-secondary">Exit Reason</label>
                  <select className="bg-white border border-danger/30 rounded-md px-3 py-1.5 text-sm outline-none focus:border-danger">
                    <option>Resignation</option>
                    <option>Retirement</option>
                    <option>Termination</option>
                  </select>
               </div>
               <button onClick={handleGenerate} className="bg-danger text-white px-4 py-2 rounded-md text-sm font-bold shadow-sm hover:bg-danger/90 active:scale-95 transition mt-2 self-start">Mark as Inactive / Exited</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
