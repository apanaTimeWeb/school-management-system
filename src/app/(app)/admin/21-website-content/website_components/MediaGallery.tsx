"use client";

import React, { useState } from 'react';
import { Image as ImageIcon, Film, Upload, Trash2, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function MediaGallery() {
  const [activeTab, setActiveTab] = useState('gallery');
  const [showToast, setShowToast] = useState(false);

  const handleUpload = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Media Uploaded Successfully!
        </div>
      )}

      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('gallery')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'gallery' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <ImageIcon size={18} /> Photo Gallery
        </button>
        <button onClick={() => setActiveTab('videos')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'videos' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <Film size={18} /> Video Links
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'gallery' && (
          <div className="flex flex-col gap-6 fade-in">
             <div className="flex justify-between items-center border-b border-border pb-2">
               <h2 className="text-xl font-bold text-text-primary flex items-center gap-2">
                 <ImageIcon size={20} className="text-primary"/> Manage Public Photo Gallery
               </h2>
               <label className="bg-primary text-black px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-primary-hover transition cursor-pointer flex items-center gap-2">
                 <Upload size={16}/> Upload Photos
                 <input type="file" multiple className="hidden" onChange={handleUpload}/>
               </label>
             </div>
             
             <div className="flex flex-col gap-1.5 w-64 mb-4">
               <label className="text-xs font-bold text-text-secondary uppercase">Select Album</label>
               <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-bold">
                 <option>Annual Sports Meet 2025</option>
                 <option>Independence Day 2025</option>
                 <option>+ Create New Album</option>
               </select>
             </div>

             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Simulated images using colored div placeholders */}
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="group relative aspect-square bg-bg-page border border-border rounded-lg overflow-hidden flex items-center justify-center">
                     <ImageIcon size={32} className="text-border opacity-50"/>
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                        <button className="text-white hover:text-danger transition"><Trash2 size={20}/></button>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="flex flex-col gap-6 fade-in max-w-2xl mx-auto">
             <h2 className="text-xl font-bold text-info border-b border-info/30 pb-2 text-center flex items-center justify-center gap-2">
               <Film size={20}/> Embedded Video Links
             </h2>
             <div className="bg-info-bg/20 border border-info/30 p-6 rounded-lg flex flex-col gap-4">
                <p className="text-sm font-semibold text-text-secondary text-center mb-2">Embed YouTube or Vimeo links to display on the school's video gallery.</p>
                <input type="text" placeholder="Video Title (e.g. Principal's Address 2025)" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-info font-bold" />
                <input type="text" placeholder="YouTube Video URL..." className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-info" />
                <button onClick={handleUpload} className="bg-info text-white py-2 rounded-lg font-bold shadow-sm hover:bg-info/90 transition mt-2">
                  Add Video to Gallery
                </button>
             </div>

             <div className="flex flex-col gap-3 mt-4">
               <div className="bg-card border border-border p-4 rounded-lg flex justify-between items-center shadow-sm">
                 <div className="flex items-center gap-3">
                   <div className="w-12 h-8 bg-black/10 rounded flex items-center justify-center"><Film size={14}/></div>
                   <div>
                     <h4 className="font-bold text-sm">Annual function Highlights</h4>
                     <p className="text-[10px] text-text-secondary">youtube.com/watch?v=abcd</p>
                   </div>
                 </div>
                 <button className="text-danger hover:bg-danger/10 p-2 rounded transition"><Trash2 size={16}/></button>
               </div>
             </div>
          </div>
        )}

      </div>
    </div>
  );
}
