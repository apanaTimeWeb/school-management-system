"use client";

import React, { useState } from 'react';
import { CalendarDays, Layers, Flag, Building2, Briefcase, Plus, Trash2 } from 'lucide-react';
import clsx from 'clsx';

export default function AcademicSetup() {
  const [activeTab, setActiveTab] = useState('session');

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in">
      {/* Sidebar navigation */}
      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('session')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'session' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <CalendarDays size={18} /> Academic Session
        </button>
        <button onClick={() => setActiveTab('classes')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'classes' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <Layers size={18} /> Classes & Sections
        </button>
        <button onClick={() => setActiveTab('streams')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'streams' ? 'bg-success/10 text-success' : 'text-text-secondary hover:bg-bg-page')}>
          <Briefcase size={18} /> Streams & Depts
        </button>
        <button onClick={() => setActiveTab('houses')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'houses' ? 'bg-warning/10 text-warning' : 'text-text-secondary hover:bg-bg-page')}>
          <Flag size={18} /> Houses
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'session' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Academic Session Setup</h2>
            
            <div className="bg-bg-page border border-border p-4 rounded-lg flex items-center justify-between">
              <div>
                <h4 className="font-bold text-text-primary text-sm">Current Session</h4>
                <p className="text-lg font-bold text-primary mt-1">2026 - 2027</p>
                <p className="text-xs text-success font-semibold mt-1">Active</p>
              </div>
              <button className="px-4 py-2 bg-card border border-border text-text-secondary rounded text-sm font-bold shadow-sm hover:text-primary hover:border-primary transition">End Session</button>
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <h3 className="text-md font-bold text-text-primary">Create New Session</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-text-secondary">Session Year</label>
                  <input type="text" placeholder="e.g. 2027-2028" className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm outline-none focus:border-primary" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-text-secondary">Start Date</label>
                  <input type="date" className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm outline-none focus:border-primary" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-text-secondary">End Date</label>
                  <input type="date" className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm outline-none focus:border-primary" />
                </div>
                <div className="flex items-end">
                  <button className="w-full h-[38px] bg-primary text-black rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover">Create Session</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'classes' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Classes & Sections Setup</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-sm text-text-secondary uppercase">Add New Class</h3>
                <div className="flex flex-col gap-3 bg-bg-page p-4 border border-border rounded-lg">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-text-secondary">Class Name</label>
                    <input type="text" placeholder="e.g. Class X" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-text-secondary">Numeric Value (For sorting)</label>
                    <input type="number" placeholder="e.g. 10" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                  </div>
                  <button className="bg-primary text-black rounded-md text-sm font-bold py-1.5 mt-1 shadow-sm">Save Class</button>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-sm text-text-secondary uppercase">Add Section to Class</h3>
                <div className="flex flex-col gap-3 bg-bg-page p-4 border border-border rounded-lg">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-text-secondary">Select Class</label>
                    <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                      <option>Class X</option>
                      <option>Class IX</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-text-secondary">Section Name</label>
                    <input type="text" placeholder="e.g. A" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                  </div>
                  <button className="bg-primary text-black rounded-md text-sm font-bold py-1.5 mt-1 shadow-sm">Add Section</button>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-bold text-sm text-text-secondary uppercase mb-3">Existing Classes & Sections</h3>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center bg-card border border-border p-3 rounded-lg shadow-sm">
                  <span className="font-bold text-sm">Class X</span>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-bg-page border border-border rounded text-xs font-bold text-text-secondary">Sec A</span>
                    <span className="px-2 py-1 bg-bg-page border border-border rounded text-xs font-bold text-text-secondary">Sec B</span>
                  </div>
                </div>
                <div className="flex justify-between items-center bg-card border border-border p-3 rounded-lg shadow-sm">
                  <span className="font-bold text-sm">Class IX</span>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-bg-page border border-border rounded text-xs font-bold text-text-secondary">Sec A</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'streams' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Streams & Departments</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-sm text-text-secondary uppercase">Academic Streams</h3>
                  <button className="text-xs text-primary font-bold flex items-center gap-1"><Plus size={14}/> Add Stream</button>
                </div>
                <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col gap-3">
                  <div className="flex justify-between items-center p-2 bg-card border border-border rounded shadow-sm">
                    <span className="font-bold text-sm">Science</span>
                    <button className="text-danger"><Trash2 size={14}/></button>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-card border border-border rounded shadow-sm">
                    <span className="font-bold text-sm">Commerce</span>
                    <button className="text-danger"><Trash2 size={14}/></button>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-card border border-border rounded shadow-sm">
                    <span className="font-bold text-sm">Arts / Humanities</span>
                    <button className="text-danger"><Trash2 size={14}/></button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-sm text-text-secondary uppercase">Departments</h3>
                  <button className="text-xs text-primary font-bold flex items-center gap-1"><Plus size={14}/> Add Dept</button>
                </div>
                <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col gap-3">
                  <div className="flex justify-between items-center p-2 bg-card border border-border rounded shadow-sm">
                    <span className="font-bold text-sm">Mathematics</span>
                    <button className="text-danger"><Trash2 size={14}/></button>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-card border border-border rounded shadow-sm">
                    <span className="font-bold text-sm">Languages</span>
                    <button className="text-danger"><Trash2 size={14}/></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'houses' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">School Houses Setup</h2>
            
            <div className="flex flex-col gap-4 bg-bg-page border border-border p-5 rounded-lg max-w-lg">
              <h3 className="font-bold text-sm text-text-secondary uppercase">Create New House</h3>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">House Name</label>
                  <input type="text" placeholder="e.g. Red House" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">House Color Code</label>
                  <div className="flex gap-2 items-center">
                    <input type="color" className="w-10 h-10 p-1 bg-bg-input border border-border rounded-md cursor-pointer" />
                    <input type="text" placeholder="#ff0000" className="flex-1 bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                  </div>
                </div>
                <button className="bg-primary text-black rounded-md text-sm font-bold py-2 mt-2 shadow-sm">Add House</button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
              <div className="bg-card border border-border p-4 rounded-lg shadow-sm flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-danger"></div>
                <span className="font-bold text-sm">Red House</span>
              </div>
              <div className="bg-card border border-border p-4 rounded-lg shadow-sm flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-info"></div>
                <span className="font-bold text-sm">Blue House</span>
              </div>
              <div className="bg-card border border-border p-4 rounded-lg shadow-sm flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-success"></div>
                <span className="font-bold text-sm">Green House</span>
              </div>
              <div className="bg-card border border-border p-4 rounded-lg shadow-sm flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-warning"></div>
                <span className="font-bold text-sm">Yellow House</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
