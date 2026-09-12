"use client";

import React, { useState } from 'react';
import { Layout, Save, Info, MapPin, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function CMSDashboard() {
  const [activeTab, setActiveTab] = useState('home');
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Website Content Published!
        </div>
      )}

      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('home')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'home' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Layout size={18} /> Homepage Content
        </button>
        <button onClick={() => setActiveTab('info')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'info' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <Info size={18} /> School Information
        </button>
        <button onClick={() => setActiveTab('contact')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'contact' ? 'bg-success/10 text-success' : 'text-text-secondary hover:bg-bg-page')}>
          <MapPin size={18} /> Contact Information
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'home' && (
          <div className="flex flex-col gap-6 fade-in max-w-3xl">
             <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2 flex items-center gap-2">
               <Layout size={20} className="text-primary"/> Manage Homepage Content
             </h2>
             
             <div className="flex flex-col gap-4">
                <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col gap-3">
                   <h3 className="font-bold text-sm text-text-secondary">Hero Section</h3>
                   <div className="flex flex-col gap-1.5">
                     <label className="text-xs font-bold text-text-secondary uppercase">Hero Headline</label>
                     <input type="text" defaultValue="Empowering the Leaders of Tomorrow" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-bold" />
                   </div>
                   <div className="flex flex-col gap-1.5">
                     <label className="text-xs font-bold text-text-secondary uppercase">Hero Subtext</label>
                     <input type="text" defaultValue="Join our vibrant community of learners and educators." className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
                   </div>
                   <div className="flex flex-col gap-1.5 mt-2">
                     <label className="text-xs font-bold text-text-secondary uppercase">Hero Background Image</label>
                     <input type="file" className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 transition cursor-pointer" />
                   </div>
                </div>

                <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col gap-3">
                   <h3 className="font-bold text-sm text-text-secondary">Principal's Message</h3>
                   <textarea rows={4} className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary resize-none" defaultValue={"Welcome to our school. We strive for excellence in education and holistic development..."}></textarea>
                </div>
                
                <button onClick={handleSave} className="bg-primary text-white py-3 rounded-lg font-bold shadow-sm hover:bg-primary-hover transition flex items-center justify-center gap-2 mt-2 w-48">
                  <Save size={16}/> Publish to Website
                </button>
             </div>
          </div>
        )}

        {activeTab === 'info' && (
          <div className="flex flex-col gap-6 fade-in max-w-2xl">
             <h2 className="text-xl font-bold text-info border-b border-info/30 pb-2 flex items-center gap-2">
               <Info size={20}/> School Information (About Us)
             </h2>
             <div className="bg-bg-page border border-border p-5 rounded-lg flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Our Vision</label>
                  <textarea rows={3} className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-info resize-none" defaultValue={"To foster a nurturing environment that encourages academic excellence and moral values."}></textarea>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Our Mission</label>
                  <textarea rows={3} className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-info resize-none" defaultValue={"Providing state-of-the-art facilities and experienced educators to build a strong foundation for every child."}></textarea>
                </div>
                <button onClick={handleSave} className="bg-info text-white py-2 rounded-lg font-bold shadow-sm hover:bg-info/90 transition flex items-center justify-center gap-2 w-48 mt-2">
                  <Save size={16}/> Update About Us
                </button>
             </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="flex flex-col gap-6 fade-in max-w-2xl">
             <h2 className="text-xl font-bold text-success border-b border-success/30 pb-2 flex items-center gap-2">
               <MapPin size={20}/> Contact Information
             </h2>
             <div className="bg-bg-page border border-border p-5 rounded-lg flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">School Address</label>
                  <textarea rows={2} className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-success resize-none" defaultValue={"123 Education Lane, Knowledge Park, New Delhi, 110001"}></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-text-secondary uppercase">Phone Number</label>
                    <input type="text" defaultValue="+91 11-2345-6789" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-success font-bold" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-text-secondary uppercase">Email Address</label>
                    <input type="email" defaultValue="contact@schoolerp.com" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-success font-bold" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Google Maps Embed Link (Optional)</label>
                  <input type="text" placeholder="<iframe src='...'></iframe>" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-success font-mono text-xs" />
                </div>
                <button onClick={handleSave} className="bg-success text-white py-2 rounded-lg font-bold shadow-sm hover:bg-success/90 transition flex items-center justify-center gap-2 w-48 mt-2">
                  <Save size={16}/> Update Contact
                </button>
             </div>
          </div>
        )}

      </div>
    </div>
  );
}
