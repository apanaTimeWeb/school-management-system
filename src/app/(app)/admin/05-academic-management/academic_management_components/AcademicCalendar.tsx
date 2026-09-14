"use client";

import React, { useState } from 'react';
import { Calendar, Sun, Palmtree } from 'lucide-react';
import clsx from 'clsx';

export default function AcademicCalendar() {
  const [activeTab, setActiveTab] = useState('calendar');

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in">
      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('calendar')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'calendar' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Calendar size={18} /> Academic Calendar
        </button>
        <button onClick={() => setActiveTab('workingDays')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'workingDays' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <Sun size={18} /> Working Days
        </button>
        <button onClick={() => setActiveTab('holidays')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'holidays' ? 'bg-success/10 text-success' : 'text-text-secondary hover:bg-bg-page')}>
          <Palmtree size={18} /> Holidays
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'calendar' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Academic Calendar Events</h2>
            <div className="flex flex-col gap-4 bg-bg-page border border-border p-5 rounded-lg max-w-xl">
              <h3 className="font-bold text-sm text-text-secondary uppercase">Add Calendar Event</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-xs font-semibold text-text-secondary">Event Title</label>
                  <input type="text" placeholder="e.g. Annual Sports Day" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Start Date</label>
                  <input type="date" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">End Date</label>
                  <input type="date" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                </div>
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-bold shadow-sm">Save Event</button>
                </div>
              </div>
            </div>
            
            <div className="mt-2">
              <h3 className="font-bold text-sm text-text-secondary uppercase mb-3">Upcoming Events</h3>
              <div className="bg-card border border-border p-3 rounded-lg shadow-sm flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-primary">Annual Science Exhibition</span>
                  <span className="text-xs text-text-secondary">Nov 10 - Nov 12</span>
                </div>
                <button className="text-xs font-bold text-danger hover:underline">Delete</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'workingDays' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Working Days Configuration</h2>
            <div className="bg-bg-page border border-border p-5 rounded-lg">
              <p className="text-sm text-text-secondary mb-4">Select the standard working days for the school. This affects attendance and timetable generation.</p>
              <div className="flex flex-wrap gap-4">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                  <label key={day} className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-lg cursor-pointer hover:bg-bg-page transition">
                    <input type="checkbox" defaultChecked={day !== 'Sunday'} className="accent-primary w-4 h-4" />
                    <span className="text-sm font-bold">{day}</span>
                  </label>
                ))}
              </div>
              <button className="mt-6 bg-primary text-white px-6 py-2 rounded-md text-sm font-bold shadow-sm">Save Configuration</button>
            </div>
          </div>
        )}

        {activeTab === 'holidays' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Holidays Master</h2>
            
            <div className="flex flex-col gap-4 bg-bg-page border border-border p-5 rounded-lg max-w-xl">
              <h3 className="font-bold text-sm text-text-secondary uppercase">Declare Holiday</h3>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Holiday Name</label>
                  <input type="text" placeholder="e.g. Diwali Break" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-text-secondary">From Date</label>
                    <input type="date" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-text-secondary">To Date</label>
                    <input type="date" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                  </div>
                </div>
                <button className="bg-success text-white px-4 py-2 rounded-md text-sm font-bold shadow-sm mt-2">Declare Holiday</button>
              </div>
            </div>

            <div className="mt-2">
              <h3 className="font-bold text-sm text-text-secondary uppercase mb-3">Declared Holidays list</h3>
              <div className="bg-card border-l-4 border-l-success border-y border-r border-border p-3 rounded-r-lg shadow-sm flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-text-primary">Winter Break</span>
                  <span className="text-xs text-text-secondary">Dec 25 - Jan 02</span>
                </div>
                <button className="text-xs font-bold text-danger hover:underline">Remove</button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
