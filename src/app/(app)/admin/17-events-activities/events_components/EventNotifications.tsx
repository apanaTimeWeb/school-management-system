"use client";

import React, { useState } from 'react';
import { Bell, Send, Mail, Smartphone, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function EventNotifications() {
  const [showToast, setShowToast] = useState(false);

  const handleSend = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Notification Broadcasted Successfully!
        </div>
      )}

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <Bell size={20} className="text-primary"/> Event Broadcast Notifications
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="flex-1 bg-bg-page border border-border p-6 rounded-lg flex flex-col gap-4">
             <div className="flex flex-col gap-1.5">
               <label className="text-xs font-bold text-text-secondary uppercase">Select Event</label>
               <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-bold">
                 <option>Annual Sports Meet 2026</option>
                 <option>Diwali Cultural Fest</option>
               </select>
             </div>
             
             <div className="flex flex-col gap-1.5">
               <label className="text-xs font-bold text-text-secondary uppercase">Notification Type</label>
               <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary">
                 <option>General Announcement (All Students & Parents)</option>
                 <option>Reminder to Participants Only</option>
                 <option>Result Declaration</option>
               </select>
             </div>

             <div className="flex flex-col gap-1.5">
               <label className="text-xs font-bold text-text-secondary uppercase">Custom Message</label>
               <textarea rows={4} className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary resize-none" defaultValue={"Dear Students & Parents, this is a reminder for the upcoming Annual Sports Meet..."}></textarea>
             </div>
             
             <div className="flex gap-4 mt-2">
               <button onClick={handleSend} className="flex-1 bg-primary text-white py-2.5 rounded-lg font-bold shadow-sm hover:bg-primary-hover transition flex items-center justify-center gap-2">
                 <Send size={16}/> Send Broadcast
               </button>
             </div>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col gap-4">
             <h3 className="font-bold text-sm text-text-primary">Channels Used</h3>
             <div className="flex flex-col gap-3">
               <div className="bg-card border border-border p-4 rounded-lg flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-sm"><Smartphone size={16} className="text-success"/> SMS & App Push</div>
                  <span className="text-xs text-text-secondary font-semibold">Enabled</span>
               </div>
               <div className="bg-card border border-border p-4 rounded-lg flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-sm"><Mail size={16} className="text-info"/> Email</div>
                  <span className="text-xs text-text-secondary font-semibold">Enabled</span>
               </div>
             </div>
             
             <div className="mt-4 bg-info-bg/30 border border-info/30 p-4 rounded-lg">
                <p className="text-xs font-semibold text-info">
                  Notifications integrate tightly with Module 11 (Communication). History logs will be available there.
                </p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
