"use client";

import React, { useState } from 'react';
import { CalendarDays, Users, DoorOpen, Search } from 'lucide-react';
import clsx from 'clsx';

const MOCK_SCHEDULE = {
  'Monday': ['Maths (John)', 'Science (Sarah)', 'English (Mike)', 'Break', 'History (Anna)', 'Sports', 'Computer', 'Art'],
  'Tuesday': ['Science (Sarah)', 'Maths (John)', 'Computer', 'Break', 'English (Mike)', 'History (Anna)', 'Sports', 'Library'],
  'Wednesday': ['English (Mike)', 'Science (Sarah)', 'Maths (John)', 'Break', 'Sports', 'Art', 'Computer', 'History (Anna)'],
  'Thursday': ['History (Anna)', 'Maths (John)', 'Science (Sarah)', 'Break', 'English (Mike)', 'Computer', 'Library', 'Sports'],
  'Friday': ['Computer', 'History (Anna)', 'Maths (John)', 'Break', 'Science (Sarah)', 'English (Mike)', 'Art', 'Sports'],
  'Saturday': ['Maths (John)', 'Science (Sarah)', 'English (Mike)', 'Break', '-', '-', '-', '-'],
};

export default function TimetableViewer() {
  const [viewType, setViewType] = useState('class');
  const [selectedValue, setSelectedValue] = useState('10-A');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <div className="flex flex-col gap-6 h-full min-h-[500px] fade-in relative">
      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6">Interactive Timetable Viewer</h2>
        
        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 bg-bg-page border border-border p-4 rounded-lg">
          <div className="flex flex-1 gap-2">
            {[
              { id: 'class', label: 'Class-wise', icon: CalendarDays },
              { id: 'teacher', label: 'Teacher-wise', icon: Users },
              { id: 'room', label: 'Room-wise', icon: DoorOpen }
            ].map(v => (
              <button 
                key={v.id} 
                onClick={() => { setViewType(v.id); setSelectedValue(''); }}
                className={clsx("flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all", viewType === v.id ? "bg-primary text-black" : "bg-card border border-border text-text-secondary hover:text-primary")}
              >
                <v.icon size={16}/> {v.label}
              </button>
            ))}
          </div>
          
          <div className="flex gap-2 w-full md:w-auto">
            <select 
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm outline-none focus:border-primary font-semibold min-w-[200px]"
            >
              <option value="" disabled>Select {viewType}...</option>
              {viewType === 'class' && <><option>10-A</option><option>9-B</option></>}
              {viewType === 'teacher' && <><option>John Doe (Maths)</option><option>Sarah Smith (Science)</option></>}
              {viewType === 'room' && <><option>Room 101</option><option>Lab 3</option></>}
            </select>
            <button onClick={handleSearch} disabled={!selectedValue} className="bg-primary text-black px-4 py-2 rounded-md font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition disabled:opacity-50">
              <Search size={18}/>
            </button>
          </div>
        </div>

        {/* Timetable Grid */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 text-text-secondary">
            <span className="animate-spin border-4 border-text-secondary/30 border-t-text-secondary rounded-full w-10 h-10 mb-4"></span>
            <p className="font-bold">Loading schedule...</p>
          </div>
        ) : selectedValue ? (
          <div className="overflow-x-auto fade-in">
            <table className="w-full text-center border-collapse border border-border rounded-lg overflow-hidden">
              <thead className="bg-bg-page">
                <tr>
                  <th className="p-3 border border-border text-xs font-bold text-text-secondary uppercase">Day / Period</th>
                  {[1, 2, 3, 'Break', 4, 5, 6, 7].map((p, i) => (
                    <th key={i} className="p-3 border border-border text-xs font-bold text-text-secondary uppercase w-[11%]">
                      {p === 'Break' ? 'Break' : `Period ${p}`}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(MOCK_SCHEDULE).map(([day, periods]) => (
                  <tr key={day} className="bg-card hover:bg-bg-page/50 transition">
                    <td className="p-3 border border-border font-bold text-sm text-primary uppercase">{day}</td>
                    {periods.map((subject, idx) => (
                      <td key={idx} className={clsx("p-2 border border-border text-sm font-semibold h-16", subject === 'Break' ? 'bg-bg-page text-text-secondary italic' : subject === '-' ? 'text-border' : 'text-text-primary')}>
                         {subject !== '-' && subject !== 'Break' ? (
                           <div className="flex flex-col items-center justify-center bg-info/10 text-info h-full rounded border border-info/20 px-1 py-1">
                             <span className="text-xs font-black">{subject.split(' ')[0]}</span>
                             {viewType === 'class' && <span className="text-[10px] text-text-secondary">{subject.split(' ')[1]}</span>}
                           </div>
                         ) : subject}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-text-secondary opacity-50">
            <CalendarDays size={64} className="mb-4"/>
            <p className="font-bold">Select a {viewType} to view the timetable.</p>
          </div>
        )}
      </div>
    </div>
  );
}
