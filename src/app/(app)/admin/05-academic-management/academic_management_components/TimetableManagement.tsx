"use client";

import React, { useState } from 'react';
import { Clock, Table } from 'lucide-react';
import clsx from 'clsx';

export default function TimetableManagement() {
  const [activeTab, setActiveTab] = useState('periods');

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in">
      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('periods')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'periods' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Clock size={18} /> Periods Setup
        </button>
        <button onClick={() => setActiveTab('timetable')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'timetable' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <Table size={18} /> Class Timetable
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'periods' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">School Periods Configuration</h2>
            
            <div className="flex flex-col gap-4 bg-bg-page border border-border p-5 rounded-lg max-w-xl">
              <h3 className="font-bold text-sm text-text-secondary uppercase">Add New Period / Break</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-xs font-semibold text-text-secondary">Period Name / Type</label>
                  <input type="text" placeholder="e.g. Period 1, Lunch Break" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Start Time</label>
                  <input type="time" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">End Time</label>
                  <input type="time" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                </div>
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-bold shadow-sm">Save Period</button>
                </div>
              </div>
            </div>

            <div className="mt-2">
              <h3 className="font-bold text-sm text-text-secondary uppercase mb-3">Configured Periods</h3>
              <div className="flex flex-col gap-2">
                <div className="bg-card border border-border p-3 rounded-lg shadow-sm flex justify-between items-center">
                  <span className="font-bold text-sm text-text-primary">Period 1</span>
                  <span className="text-xs text-text-secondary font-semibold bg-bg-page px-2 py-1 rounded border border-border">08:00 AM - 08:45 AM</span>
                </div>
                <div className="bg-card border border-border p-3 rounded-lg shadow-sm flex justify-between items-center">
                  <span className="font-bold text-sm text-text-primary">Period 2</span>
                  <span className="text-xs text-text-secondary font-semibold bg-bg-page px-2 py-1 rounded border border-border">08:45 AM - 09:30 AM</span>
                </div>
                <div className="bg-warning-bg border border-warning/20 p-3 rounded-lg shadow-sm flex justify-between items-center">
                  <span className="font-bold text-sm text-warning">Lunch Break</span>
                  <span className="text-xs text-warning font-semibold bg-white/50 px-2 py-1 rounded border border-warning/30">12:30 PM - 01:00 PM</span>
                </div>
              </div>
            </div>

          </div>
        )}

        {activeTab === 'timetable' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Class Timetable Creator</h2>
            
            <div className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-xs font-semibold text-text-secondary">Select Class & Section</label>
                <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                  <option>Class X - A</option>
                  <option>Class IX - B</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-xs font-semibold text-text-secondary">Select Day</label>
                <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                  <option>Monday</option>
                  <option>Tuesday</option>
                </select>
              </div>
              <button className="bg-primary text-white px-6 py-1.5 h-[34px] rounded-md text-sm font-bold shadow-sm">Load / Create Schedule</button>
            </div>

            <div className="mt-4 bg-bg-page border border-border rounded-lg p-5">
              <h3 className="font-bold text-sm text-text-primary mb-4">Monday - Class X A</h3>
              
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center bg-card p-3 rounded border border-border shadow-sm">
                  <span className="font-bold text-sm">Period 1 <span className="text-xs text-text-secondary font-normal">(08:00 - 08:45)</span></span>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                    <option>Mathematics</option>
                    <option>Physics</option>
                  </select>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                    <option>Mr. John Doe</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center bg-card p-3 rounded border border-border shadow-sm">
                  <span className="font-bold text-sm">Period 2 <span className="text-xs text-text-secondary font-normal">(08:45 - 09:30)</span></span>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                    <option>Physics</option>
                    <option>Mathematics</option>
                  </select>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                    <option>Mrs. Smith</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end mt-4 pt-4 border-t border-border">
                <button className="bg-success text-white px-6 py-2 rounded-md text-sm font-bold shadow-sm">Save Timetable</button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
