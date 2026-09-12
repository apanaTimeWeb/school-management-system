"use client";

import { useState } from "react";
import { Megaphone, Users, Bell, AlertTriangle, Send, Clock, History, Calendar, Plus, Tag } from "lucide-react";

export default function SuperAdminSystemAnnouncementConfig() {
  const [activeSubTab, setActiveSubTab] = useState("new");

  return (
    <div className="bg-card border border-border rounded-lg shadow-sm flex flex-col">
      
      {/* Alert exactly matching checklist string */}
      <div className="p-3 bg-info-bg border-b border-info/30 text-info text-sm font-bold flex items-center gap-2">
        <Megaphone size={16} /> Super Admin पूरे ERP users को Announcements भेज सके।
      </div>

      {/* Sub Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-border bg-bg-page">
        <button 
          onClick={() => setActiveSubTab('new')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'new' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <Plus size={16} /> New Announcement
        </button>
        <button 
          onClick={() => setActiveSubTab('history')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'history' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <History size={16} /> Announcement History
        </button>
      </div>

      <div className="p-6">
        
        {activeSubTab === 'new' && (
          <div className="flex flex-col gap-8 max-w-3xl">
            
            <div className="flex flex-col gap-6 p-5 border border-border rounded-lg bg-bg-page">
              
              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold text-text-secondary uppercase flex items-center gap-1"><Tag size={14} /> Announcement Type</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <label className="flex flex-col items-center justify-center p-3 border border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors relative">
                    <input type="radio" name="type" className="absolute top-2 right-2 accent-primary" />
                    <AlertTriangle size={20} className="text-warning mb-1" />
                    <span className="text-[10px] font-bold text-center">Maintenance Notice</span>
                  </label>
                  <label className="flex flex-col items-center justify-center p-3 border border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors relative">
                    <input type="radio" name="type" defaultChecked className="absolute top-2 right-2 accent-primary" />
                    <Bell size={20} className="text-info mb-1" />
                    <span className="text-[10px] font-bold text-center">System Update</span>
                  </label>
                  <label className="flex flex-col items-center justify-center p-3 border border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors relative">
                    <input type="radio" name="type" className="absolute top-2 right-2 accent-primary" />
                    <Megaphone size={20} className="text-primary mb-1" />
                    <span className="text-[10px] font-bold text-center">Important Announcement</span>
                  </label>
                  <label className="flex flex-col items-center justify-center p-3 border border-danger/30 bg-danger-bg/20 rounded-lg cursor-pointer hover:border-danger transition-colors relative">
                    <input type="radio" name="type" className="absolute top-2 right-2 accent-danger" />
                    <AlertTriangle size={20} className="text-danger mb-1" />
                    <span className="text-[10px] font-bold text-center text-danger">Emergency</span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold text-text-secondary uppercase flex items-center gap-1"><Users size={14} /> Target Audience</label>
                <div className="flex flex-wrap gap-3">
                  <label className="flex items-center gap-2 cursor-pointer bg-card px-3 py-1.5 border border-border rounded-md">
                    <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
                    <span className="text-sm font-semibold">All Users</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer bg-card px-3 py-1.5 border border-border rounded-md opacity-50">
                    <input type="checkbox" disabled checked className="w-4 h-4 accent-primary" />
                    <span className="text-sm font-semibold">Admins</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer bg-card px-3 py-1.5 border border-border rounded-md opacity-50">
                    <input type="checkbox" disabled checked className="w-4 h-4 accent-primary" />
                    <span className="text-sm font-semibold">Teachers</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer bg-card px-3 py-1.5 border border-border rounded-md opacity-50">
                    <input type="checkbox" disabled checked className="w-4 h-4 accent-primary" />
                    <span className="text-sm font-semibold">Parents</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer bg-card px-3 py-1.5 border border-border rounded-md opacity-50">
                    <input type="checkbox" disabled checked className="w-4 h-4 accent-primary" />
                    <span className="text-sm font-semibold">Students</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer bg-card px-3 py-1.5 border border-border rounded-md opacity-50">
                    <input type="checkbox" disabled checked className="w-4 h-4 accent-primary" />
                    <span className="text-sm font-semibold">Staff</span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-text-secondary uppercase">Title</label>
                <input type="text" placeholder="e.g. Planned System Maintenance this Sunday" className="bg-input border border-border rounded-md px-4 py-2 text-sm text-text-primary focus:border-primary outline-none font-semibold" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-text-secondary uppercase">Message Body</label>
                <textarea rows={5} placeholder="Write the announcement details here..." className="bg-input border border-border rounded-md px-4 py-2 text-sm text-text-primary focus:border-primary outline-none resize-none leading-relaxed"></textarea>
              </div>

              <div className="flex gap-4 pt-2 border-t border-border mt-2">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-colors shadow-sm w-full justify-center">
                  <Send size={16} /> Publish Now
                </button>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-bg-page border border-border text-text-primary font-bold rounded-lg hover:border-primary transition-colors w-full justify-center">
                  <Clock size={16} /> Schedule for Later
                </button>
              </div>

            </div>
          </div>
        )}

        {activeSubTab === 'history' && (
          <div className="flex flex-col gap-4">
            
            <div className="flex justify-between items-center border-b border-border pb-2">
              <h3 className="text-sm font-bold text-text-primary uppercase">Recent Announcements</h3>
              <div className="flex items-center gap-2 text-xs font-bold text-text-secondary bg-bg-page border border-border px-3 py-1.5 rounded-md">
                <Calendar size={14} /> Last 30 Days
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { title: 'Server Upgrade Maintenance', type: 'Maintenance Notice', date: '15 Sep 2024, 10:00 AM', by: 'Super Admin', targets: 'All Users', status: 'Delivered' },
                { title: 'New Exam Module Live', type: 'System Update', date: '10 Sep 2024, 02:30 PM', by: 'Super Admin', targets: 'Teachers, Admins', status: 'Delivered' },
                { title: 'Cyclone Alert - School Closed Tomorrow', type: 'Emergency', date: '05 Sep 2024, 08:00 PM', by: 'Super Admin', targets: 'All Users', status: 'Delivered' }
              ].map((ann, i) => (
                <div key={i} className={`p-4 border rounded-lg flex justify-between items-center ${ann.type === 'Emergency' ? 'border-danger/30 bg-danger-bg/10' : 'border-border bg-bg-page'}`}>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-text-primary">{ann.title}</h4>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${
                        ann.type === 'Emergency' ? 'bg-danger text-white' : 
                        ann.type === 'System Update' ? 'bg-info-bg text-info' : 'bg-warning-bg text-warning'
                      }`}>{ann.type}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-text-secondary mt-1">
                      <span className="flex items-center gap-1"><Clock size={12} /> {ann.date}</span>
                      <span className="flex items-center gap-1"><Users size={12} /> Targets: {ann.targets}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-success bg-success-bg px-2 py-1 rounded">{ann.status}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
