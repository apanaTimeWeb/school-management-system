"use client";

import React, { useState } from 'react';
import { Megaphone, Plus, Trash2, Calendar, AlertCircle } from 'lucide-react';
import clsx from 'clsx';

export default function NoticeBoard() {
  const [activeTab, setActiveTab] = useState('board');
  const [notices, setNotices] = useState([
    { id: 1, title: 'Annual Sports Day 2026', type: 'Event', date: '2026-11-20', audience: 'All Students', status: 'Active' },
    { id: 2, title: 'Fee Submission Deadline', type: 'Alert', date: '2026-10-31', audience: 'Parents', status: 'Active' },
    { id: 3, title: 'Staff Meeting', type: 'Internal', date: '2026-10-15', audience: 'Staff', status: 'Expired' },
  ]);
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const deleteNotice = (id: number) => {
    setNotices(notices.filter(n => n.id !== id));
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          Notice Published Successfully
        </div>
      )}

      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('board')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'board' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Megaphone size={18} /> Notice Board
        </button>
        <button onClick={() => setActiveTab('create')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'create' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <Plus size={18} /> New Announcement
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'board' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Digital Notice Board</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {notices.map(n => (
                <div key={n.id} className={clsx("border rounded-lg p-5 shadow-sm relative overflow-hidden transition-all", n.status === 'Active' ? 'bg-bg-page border-primary/30' : 'bg-card border-border opacity-70')}>
                  {n.status === 'Active' && (
                     <div className="absolute top-0 right-0 w-2 h-full bg-primary"></div>
                  )}
                  
                  <div className="flex justify-between items-start mb-3">
                    <span className={clsx("text-[10px] font-bold px-2 py-0.5 rounded uppercase", n.type === 'Alert' ? 'bg-danger-bg text-danger' : n.type === 'Event' ? 'bg-success-bg text-success' : 'bg-info-bg text-info')}>
                      {n.type}
                    </span>
                    <button onClick={() => deleteNotice(n.id)} className="text-text-secondary hover:text-danger transition"><Trash2 size={14}/></button>
                  </div>
                  
                  <h3 className="font-bold text-text-primary text-base leading-tight mb-2">{n.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-text-secondary mb-1">
                    <Calendar size={12} /> {new Date(n.date).toLocaleDateString('en-GB')}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-secondary">
                    <AlertCircle size={12} /> Audience: <span className="font-bold text-text-primary">{n.audience}</span>
                  </div>
                  
                  {n.status === 'Expired' && (
                    <div className="mt-3 text-xs font-bold text-danger text-center uppercase bg-danger-bg rounded py-1">Expired</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'create' && (
          <div className="flex flex-col gap-6 fade-in max-w-2xl">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Publish New Announcement</h2>
            
            <div className="bg-bg-page border border-border p-5 rounded-lg flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-text-secondary">Notice Title *</label>
                <input type="text" placeholder="e.g. Winter Vacation Dates" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Notice Type</label>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary">
                    <option>General Event</option>
                    <option>Critical Alert</option>
                    <option>Internal Circular</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Valid Until (Date)</label>
                  <input type="date" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-text-secondary">Target Audience</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-sm font-semibold"><input type="checkbox" className="accent-primary"/> All Students</label>
                  <label className="flex items-center gap-2 text-sm font-semibold"><input type="checkbox" className="accent-primary"/> Parents</label>
                  <label className="flex items-center gap-2 text-sm font-semibold"><input type="checkbox" className="accent-primary"/> Staff</label>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-text-secondary">Detailed Message</label>
                <textarea rows={4} className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary resize-none" placeholder="Enter notice content here..."></textarea>
              </div>

              <button onClick={() => { handleSave(); setActiveTab('board'); }} className="bg-primary text-white px-6 py-2 mt-2 rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition self-start flex items-center gap-2">
                <Megaphone size={16}/> Publish Notice
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
